'use client';

import { useState, useEffect } from 'react';

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

/** Statuses we treat as live / upcoming reservations */
const ACTIVE_STATUSES = new Set(['Open', 'Booked']);

/** Map property slug → Lodgify property_id */
const PROPERTY_ID_MAP: Record<string, number> = {
  graeagle: 533203,
  northstar: 746614,
};

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getFirstName(fullName: string): string {
  if (!fullName) return '';
  // Handle "LastName, FirstName" format some OTAs send
  if (fullName.includes(',')) {
    const [, first] = fullName.split(',').map((s) => s.trim());
    return first ?? fullName;
  }
  return fullName.split(' ')[0];
}

/** How many nights between two YYYY-MM-DD strings */
function nightsBetween(arrival: string, departure: string): number {
  const a = new Date(arrival + 'T00:00:00');
  const d = new Date(departure + 'T00:00:00');
  return Math.round((d.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

export interface BookingInfo {
  guestName: string;
  guestFirstName: string;
  guestEmail: string | null;
  checkIn: string;
  checkOut: string;
  nights: number;
  people: number;
  bookingId: number;
  source: string;
  /** True if today falls within this booking's window */
  isCurrentStay: boolean;
  /** True if booking starts in the future */
  isUpcoming: boolean;
}

/**
 * Resolve bookings.json path for the current deployment.
 * GitHub Pages serves the app under /california-luxury-stays.
 */
function resolveBookingsPath(): string {
  if (typeof window === 'undefined') return '/bookings.json';
  return window.location.pathname.startsWith('/california-luxury-stays')
    ? '/california-luxury-stays/bookings.json'
    : '/bookings.json';
}

/**
 * useLodgifyBooking
 *
 * Reads bookings.json (refreshed daily by the sync script + CI) and finds
 * the best-match booking for the given property:
 *   1. If ?booking=ID is in the URL → use that specific booking
 *   2. If today falls within a booking window → current stay
 *   3. Otherwise → nearest upcoming booking
 */
export function useLodgifyBooking(
  propertySlug: string,
  bookingIdOverride?: number | null
) {
  const [booking, setBooking] = useState<BookingInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const propertyId = PROPERTY_ID_MAP[propertySlug];
    if (!propertyId) {
      setLoading(false);
      return;
    }

    const path = resolveBookingsPath();

    fetch(path)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<LodgifyBooking[]>;
      })
      .then((bookings) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter to this property, active statuses only
        const propertyBookings = bookings.filter(
          (b) => b.property_id === propertyId && ACTIVE_STATUSES.has(b.status)
        );

        let matched: LodgifyBooking | undefined;
        let isCurrentStay = false;
        let isUpcoming = false;

        // 1. Explicit booking ID override (e.g. QR code or link in comms)
        if (bookingIdOverride) {
          matched = propertyBookings.find((b) => b.id === bookingIdOverride)
            // Fall back to any booking with that ID regardless of status
            ?? bookings.find((b) => b.id === bookingIdOverride && b.property_id === propertyId);
        }

        // 2. Currently active stay
        if (!matched) {
          matched = propertyBookings.find((b) => {
            const arrival = new Date(b.arrival + 'T00:00:00');
            const departure = new Date(b.departure + 'T00:00:00');
            return today >= arrival && today < departure;
          });
          if (matched) isCurrentStay = true;
        }

        // 3. Next upcoming booking
        if (!matched) {
          const upcoming = propertyBookings
            .filter((b) => new Date(b.arrival + 'T00:00:00') > today)
            .sort(
              (a, b) =>
                new Date(a.arrival).getTime() - new Date(b.arrival).getTime()
            );
          matched = upcoming[0];
          if (matched) isUpcoming = true;
        }

        if (matched) {
          setBooking({
            guestName: matched.guest.name ?? '',
            guestFirstName: getFirstName(matched.guest.name ?? ''),
            guestEmail: matched.guest.email ?? null,
            checkIn: formatDate(matched.arrival),
            checkOut: formatDate(matched.departure),
            nights: nightsBetween(matched.arrival, matched.departure),
            people: matched.people,
            bookingId: matched.id,
            source: matched.source,
            isCurrentStay,
            isUpcoming,
          });
        }

        setLoading(false);
      })
      .catch((err) => {
        console.warn('[useLodgifyBooking] Failed to load bookings.json:', err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [propertySlug, bookingIdOverride]);

  return { booking, loading, error };
}
