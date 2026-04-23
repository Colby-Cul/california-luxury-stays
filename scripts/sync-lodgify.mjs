#!/usr/bin/env node
/**
 * sync-lodgify.mjs
 * ----------------
 * Fetches live reservations from the Lodgify API for all CLS properties
 * and writes the result to:
 *   public/bookings.json  (served at runtime by Next.js / GitHub Pages)
 *   bookings.json         (root-level snapshot for reference / admin)
 *
 * Requires:
 *   LODGIFY_API_KEY env var — add as a GitHub Actions secret:
 *     Repository → Settings → Secrets → Actions → New repository secret
 *     Name: LODGIFY_API_KEY
 *
 * Falls back gracefully (non-zero exit NOT thrown) if:
 *   - API key is missing
 *   - Lodgify API is down or returns an error
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LODGIFY_BASE_URL = 'https://api.lodgify.com/v2';

// Property slug → Lodgify property ID
const PROPERTIES = {
  graeagle: 533203,
  northstar: 746614,
};

// Reservation statuses considered "active" (has a real guest)
const ACTIVE_STATUSES = new Set(['Open', 'Booked']);

/** Normalise a raw Lodgify reservation into the app's shape */
function normalise(raw) {
  return {
    id: raw.id,
    arrival: (raw.arrival || '').slice(0, 10),
    departure: (raw.departure || '').slice(0, 10),
    property_id: raw.property_id,
    guest: {
      name: raw.guest?.name ?? '',
      phone: raw.guest?.phone_number ?? null,
      email: raw.guest?.email ?? null,
    },
    people: raw.people ?? 0,
    status: raw.status,
    source: raw.source,
    // Notes field may contain host-entered access codes
    notes: raw.notes ?? null,
    // Lodgify may expose door/access codes on higher plan tiers
    accessCode: raw.access_code ?? raw.door_code ?? null,
  };
}

async function fetchPage(apiKey, propertyId, page, pageSize, dateFrom, dateTo) {
  const params = new URLSearchParams({
    includeOnRequest: 'true',
    page: String(page),
    size: String(pageSize),
    dateFrom,
    dateTo,
  });
  if (propertyId) params.set('propertyId', String(propertyId));

  const url = `${LODGIFY_BASE_URL}/reservations?${params}`;
  const res = await fetch(url, {
    headers: { 'X-ApiKey': apiKey, Accept: 'application/json' },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Lodgify API ${res.status}: ${body.slice(0, 200)}`);
  }

  const data = await res.json();
  const items = Array.isArray(data) ? data : (data.items ?? data.reservations ?? []);
  const total = typeof data.total_count === 'number' ? data.total_count : null;
  return { items, total };
}

async function fetchAllReservations(apiKey) {
  const today = new Date();
  const dateFrom = today.toISOString().slice(0, 10);
  const oneYearOut = new Date(today);
  oneYearOut.setFullYear(oneYearOut.getFullYear() + 1);
  const dateTo = oneYearOut.toISOString().slice(0, 10);

  const PAGE_SIZE = 50;
  const all = [];

  for (const [slug, propertyId] of Object.entries(PROPERTIES)) {
    console.log(`  📋 ${slug} (Lodgify ID ${propertyId})…`);
    let page = 1;
    let fetched = 0;
    let total = null;

    do {
      const { items, total: t } = await fetchPage(apiKey, propertyId, page, PAGE_SIZE, dateFrom, dateTo);
      if (total === null && t !== null) total = t;

      const active = items.filter((r) => ACTIVE_STATUSES.has(r.status));
      all.push(...active.map(normalise));
      fetched += items.length;

      const done = items.length < PAGE_SIZE || (total !== null && fetched >= total);
      if (done) break;
      page++;
    } while (true);

    const count = all.filter((b) => b.property_id === propertyId).length;
    console.log(`     → ${count} active reservation(s)`);
  }

  return all;
}

async function main() {
  const apiKey = process.env.LODGIFY_API_KEY;

  if (!apiKey) {
    console.warn('⚠️  LODGIFY_API_KEY not set — skipping sync, using existing bookings.json');
    process.exit(0);
  }

  console.log('🔄 Syncing Lodgify reservations…');

  try {
    const bookings = await fetchAllReservations(apiKey);
    const json = JSON.stringify(bookings, null, 2);

    // Write to public/ (served at runtime)
    const publicPath = path.join(__dirname, '..', 'public', 'bookings.json');
    fs.writeFileSync(publicPath, json, 'utf-8');

    // Also write to root (snapshot for admin/debug)
    const rootPath = path.join(__dirname, '..', 'bookings.json');
    fs.writeFileSync(rootPath, json, 'utf-8');

    console.log(`✅ Synced ${bookings.length} reservation(s) → public/bookings.json`);
  } catch (err) {
    console.error('❌ Lodgify sync failed:', err.message);
    console.warn('   Continuing with existing bookings.json — build will not be blocked.');
    // Graceful degradation — do NOT throw
    process.exit(0);
  }
}

main();
