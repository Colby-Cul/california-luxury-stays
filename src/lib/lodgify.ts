/**
 * Lodgify API Client
 * Docs: https://docs.lodgify.com/reference
 * Auth: X-ApiKey header
 */

export const LODGIFY_BASE_URL = 'https://api.lodgify.com/v2';

// ─── Raw Lodgify API types ────────────────────────────────────────────────────

export interface LodgifyApiGuest {
  name: string;
  phone_number?: string | null;
  email?: string | null;
  country_phone_code?: string | null;
}

export interface LodgifyApiReservation {
  id: number;
  property_id: number;
  room_type_id?: number;
  arrival: string;     // ISO date YYYY-MM-DD
  departure: string;   // ISO date YYYY-MM-DD
  people: number;
  status: string;      // 'Open', 'Booked', 'Canceled', 'Inquiry', etc.
  source: string;      // 'AirbnbIntegration', 'Direct', etc.
  guest: LodgifyApiGuest;
  total?: number;
  currency?: string;
  created_at?: string;
  updated_at?: string;
  notes?: string | null;
}

// ─── Normalised shape used throughout the app ─────────────────────────────────

export interface LodgifyBooking {
  id: number;
  arrival: string;
  departure: string;
  property_id: number;
  guest: {
    name: string;
    phone: string | null;
    email?: string | null;
  };
  people: number;
  status: string;
  source: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Lodgify statuses we consider "active" (has a real guest staying) */
export const ACTIVE_STATUSES = new Set(['Open', 'Booked']);

/** Normalise a raw Lodgify reservation to our app shape */
export function normaliseReservation(raw: LodgifyApiReservation): LodgifyBooking {
  return {
    id: raw.id,
    arrival: raw.arrival.slice(0, 10),   // Trim any time component
    departure: raw.departure.slice(0, 10),
    property_id: raw.property_id,
    guest: {
      name: raw.guest?.name ?? '',
      phone: raw.guest?.phone_number ?? null,
      email: raw.guest?.email ?? null,
    },
    people: raw.people ?? 0,
    status: raw.status,
    source: raw.source,
  };
}

// ─── API fetcher (server-side / Node.js only) ─────────────────────────────────

export interface FetchReservationsOptions {
  apiKey: string;
  propertyId?: number;
  /** ISO date string, default: today */
  dateFrom?: string;
  /** ISO date string, default: 1 year from today */
  dateTo?: string;
  /** Include all statuses, default: false (active only) */
  includeAll?: boolean;
  /** Page size (max 50 per Lodgify docs) */
  pageSize?: number;
}

/**
 * Fetch reservations from the Lodgify API.
 * Automatically paginates through all results.
 * Safe to call from Node.js only (server-side / scripts).
 */
export async function fetchLodgifyReservations(
  opts: FetchReservationsOptions
): Promise<LodgifyBooking[]> {
  const {
    apiKey,
    propertyId,
    includeAll = false,
    pageSize = 50,
  } = opts;

  const today = new Date();
  const oneYearOut = new Date(today);
  oneYearOut.setFullYear(oneYearOut.getFullYear() + 1);

  const dateFrom = opts.dateFrom ?? today.toISOString().slice(0, 10);
  const dateTo = opts.dateTo ?? oneYearOut.toISOString().slice(0, 10);

  const results: LodgifyBooking[] = [];
  let page = 1;
  let totalFetched = 0;
  let totalExpected: number | null = null;

  do {
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
      headers: {
        'X-ApiKey': apiKey,
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Lodgify API error ${res.status}: ${body}`);
    }

    // Lodgify can return a plain array OR { items, total_count }
    const data = await res.json();
    const items: LodgifyApiReservation[] = Array.isArray(data)
      ? data
      : (data.items ?? data.reservations ?? []);

    if (totalExpected === null) {
      totalExpected = typeof data.total_count === 'number' ? data.total_count : null;
    }

    const filtered = includeAll
      ? items
      : items.filter((r) => ACTIVE_STATUSES.has(r.status));

    results.push(...filtered.map(normaliseReservation));
    totalFetched += items.length;

    // Stop if we got fewer items than page size (last page) or hit total
    if (
      items.length < pageSize ||
      (totalExpected !== null && totalFetched >= totalExpected)
    ) {
      break;
    }

    page++;
  } while (true);

  return results;
}

// ─── Property metadata (matches BRIEF.md IDs) ────────────────────────────────

export const LODGIFY_PROPERTIES: Record<string, number> = {
  graeagle: 533203,
  northstar: 746614,
};

export const LODGIFY_PROPERTY_SLUGS: Record<number, string> = Object.fromEntries(
  Object.entries(LODGIFY_PROPERTIES).map(([slug, id]) => [id, slug])
);
