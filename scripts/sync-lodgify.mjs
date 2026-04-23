#!/usr/bin/env node
/**
 * sync-lodgify.mjs
 * Pulls upcoming reservations from the Lodgify API and writes them to
 * bookings.json (served as a static asset alongside the Next.js export).
 *
 * Usage:
 *   LODGIFY_API_KEY=<key> node scripts/sync-lodgify.mjs
 *
 * Options (env vars):
 *   LODGIFY_API_KEY     — required
 *   LODGIFY_DATE_FROM   — ISO date, default: today
 *   LODGIFY_DATE_TO     — ISO date, default: 18 months from today
 *   LODGIFY_INCLUDE_ALL — 'true' to include all statuses (default: active only)
 *   DRY_RUN             — 'true' to print without writing
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUTPUT_PATH = resolve(ROOT, 'bookings.json');

// ─── Lodgify config ───────────────────────────────────────────────────────────
const API_KEY = process.env.LODGIFY_API_KEY;
if (!API_KEY) {
  console.error('❌  LODGIFY_API_KEY is not set. Export it before running this script.');
  process.exit(1);
}

const BASE_URL = 'https://api.lodgify.com/v2';
const ACTIVE_STATUSES = new Set(['Open', 'Booked']);

const today = new Date();
const eighteenMonthsOut = new Date(today);
eighteenMonthsOut.setMonth(eighteenMonthsOut.getMonth() + 18);

const DATE_FROM = process.env.LODGIFY_DATE_FROM ?? today.toISOString().slice(0, 10);
const DATE_TO = process.env.LODGIFY_DATE_TO ?? eighteenMonthsOut.toISOString().slice(0, 10);
const INCLUDE_ALL = process.env.LODGIFY_INCLUDE_ALL === 'true';
const DRY_RUN = process.env.DRY_RUN === 'true';

// Property map (slug → Lodgify ID)
const PROPERTIES = {
  graeagle: 533203,
  northstar: 746614,
};

// ─── API helpers ──────────────────────────────────────────────────────────────

async function fetchPage(propertyId, page, size = 50) {
  const params = new URLSearchParams({
    includeOnRequest: 'true',
    page: String(page),
    size: String(size),
    dateFrom: DATE_FROM,
    dateTo: DATE_TO,
    propertyId: String(propertyId),
  });

  const url = `${BASE_URL}/reservations?${params}`;
  const res = await fetch(url, {
    headers: { 'X-ApiKey': API_KEY, Accept: 'application/json' },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Lodgify ${res.status} for property ${propertyId}: ${body}`);
  }

  const data = await res.json();
  const items = Array.isArray(data) ? data : (data.items ?? data.reservations ?? []);
  const total = typeof data.total_count === 'number' ? data.total_count : null;
  return { items, total };
}

async function fetchAllReservations(propertyId) {
  const pageSize = 50;
  let page = 1;
  let fetched = 0;
  let total = null;
  const all = [];

  while (true) {
    const { items, total: t } = await fetchPage(propertyId, page, pageSize);
    if (total === null && t !== null) total = t;

    all.push(...items);
    fetched += items.length;

    if (items.length < pageSize || (total !== null && fetched >= total)) break;
    page++;
  }

  return all;
}

function normalise(raw, propertyId) {
  return {
    id: raw.id,
    arrival: (raw.arrival ?? '').slice(0, 10),
    departure: (raw.departure ?? '').slice(0, 10),
    property_id: propertyId,
    guest: {
      name: raw.guest?.name ?? '',
      phone: raw.guest?.phone_number ?? null,
      email: raw.guest?.email ?? null,
    },
    people: raw.people ?? 0,
    status: raw.status,
    source: raw.source ?? '',
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🏠  Lodgify Booking Sync');
  console.log(`   Date range : ${DATE_FROM} → ${DATE_TO}`);
  console.log(`   Include all: ${INCLUDE_ALL}`);
  console.log(`   Dry run    : ${DRY_RUN}`);
  console.log('');

  const bookings = [];
  let totalFetched = 0;
  let totalKept = 0;

  for (const [slug, propertyId] of Object.entries(PROPERTIES)) {
    console.log(`📋  Fetching ${slug} (ID: ${propertyId})...`);
    try {
      const raw = await fetchAllReservations(propertyId);
      totalFetched += raw.length;

      const filtered = INCLUDE_ALL
        ? raw
        : raw.filter((r) => ACTIVE_STATUSES.has(r.status));

      const normalised = filtered.map((r) => normalise(r, propertyId));
      bookings.push(...normalised);
      totalKept += normalised.length;

      console.log(`   ✓ ${raw.length} fetched, ${normalised.length} kept`);

      // Brief summary per booking
      for (const b of normalised) {
        console.log(`     [${b.status}] ${b.id} | ${b.guest.name} | ${b.arrival} → ${b.departure}`);
      }
    } catch (err) {
      console.error(`   ✗ Error for ${slug}: ${err.message}`);
    }
  }

  // Sort ascending by arrival
  bookings.sort((a, b) => a.arrival.localeCompare(b.arrival));

  console.log('');
  console.log(`📊  Summary: ${totalFetched} fetched, ${totalKept} written`);

  if (DRY_RUN) {
    console.log('\n--- DRY RUN (not writing) ---');
    console.log(JSON.stringify(bookings, null, 2));
    return;
  }

  // Preserve any local-only entries that came from non-Lodgify sources
  // (e.g., manual entries with property_id not in PROPERTIES)
  let existing = [];
  if (existsSync(OUTPUT_PATH)) {
    try {
      existing = JSON.parse(readFileSync(OUTPUT_PATH, 'utf8'));
    } catch {}
  }

  const lodgifyIds = new Set(bookings.map((b) => b.id));
  const preserved = existing.filter(
    (b) => !Object.values(PROPERTIES).includes(b.property_id) && !lodgifyIds.has(b.id)
  );

  if (preserved.length > 0) {
    console.log(`   Preserving ${preserved.length} non-Lodgify manual entries`);
  }

  const final = [...bookings, ...preserved].sort((a, b) =>
    a.arrival.localeCompare(b.arrival)
  );

  writeFileSync(OUTPUT_PATH, JSON.stringify(final, null, 2) + '\n');
  console.log(`✅  Written to ${OUTPUT_PATH}`);

  // Also write to public/ so the static export picks it up
  const publicPath = resolve(ROOT, 'public', 'bookings.json');
  writeFileSync(publicPath, JSON.stringify(final, null, 2) + '\n');
  console.log(`✅  Mirrored to ${publicPath}`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
