#!/usr/bin/env node
/**
 * sync-lodgify.js
 * ---------------
 * Fetches live reservations from the Lodgify API for both CLS properties
 * and writes the result to public/bookings.json.
 *
 * Usage:
 *   LODGIFY_API_KEY=<your_key> node scripts/sync-lodgify.js
 *
 * The LODGIFY_API_KEY secret must be added to the GitHub repository:
 *   Settings → Secrets → Actions → New repository secret
 *   Name: LODGIFY_API_KEY
 *
 * This script runs before `npm run build` in the CI workflow.
 * If the API key is missing or the request fails, the script exits with
 * a warning but does NOT fail the build — it falls back to the existing
 * public/bookings.json committed to the repo.
 */

const fs = require('fs');
const path = require('path');

const LODGIFY_BASE_URL = 'https://api.lodgify.com/v2';
const PROPERTIES = { graeagle: 533203, northstar: 746614 };
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'bookings.json');

// Active statuses to include
const ACTIVE_STATUSES = new Set(['Open', 'Booked']);

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
    // Include notes — may contain access codes set by host in Lodgify
    notes: raw.notes ?? null,
    // Access code field (Lodgify may expose this in some plan tiers)
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
    throw new Error(`Lodgify API ${res.status}: ${body}`);
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
    console.log(`  Fetching ${slug} (id=${propertyId})...`);
    let page = 1;
    let fetched = 0;
    let total = null;

    do {
      const { items, total: t } = await fetchPage(apiKey, propertyId, page, PAGE_SIZE, dateFrom, dateTo);
      if (total === null) total = t;

      const filtered = items.filter((r) => ACTIVE_STATUSES.has(r.status));
      all.push(...filtered.map(normalise));
      fetched += items.length;

      if (items.length < PAGE_SIZE || (total !== null && fetched >= total)) break;
      page++;
    } while (true);

    console.log(`    → ${all.filter((b) => b.property_id === propertyId).length} active bookings`);
  }

  return all;
}

async function main() {
  const apiKey = process.env.LODGIFY_API_KEY;

  if (!apiKey) {
    console.warn('⚠️  LODGIFY_API_KEY not set — skipping Lodgify sync, using existing bookings.json');
    process.exit(0);
  }

  console.log('🔄 Syncing Lodgify reservations...');

  try {
    const bookings = await fetchAllReservations(apiKey);
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(bookings, null, 2), 'utf-8');
    console.log(`✅ Wrote ${bookings.length} reservations to public/bookings.json`);
  } catch (err) {
    console.error('❌ Lodgify sync failed:', err.message);
    console.warn('   Build will continue using existing bookings.json');
    // Don't fail the build — graceful fallback
    process.exit(0);
  }
}

main();
