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
  };
  people: number;
  status: string;
  source: string;
}

// Map slug → Lodgify property_id
const PROPERTY_ID_MAP: Record<string, number> = {
  graeagle: 533203,
  northstar: 746614,
};

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function getFirstName(fullName: string): string {
  if (!fullName) return '';
  return fullName.split(' ')[0];
}

export interface BookingInfo {
  guestName: string;
  guestFirstName: string;
  checkIn: string;
  checkOut: string;
  people: number;
  bookingId: number;
  isCurrentStay: boolean;
}

export function useLodgifyBooking(propertySlug: string, bookingIdOverride?: number | null) {
  const [booking, setBooking] = useState<BookingInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const basePath =
      typeof window !== 'undefined' && window.location.pathname.startsWith('/california-luxury-stays')
        ? '/california-luxury-stays'
        : '';

    fetch(`${basePath}/bookings.json`)
      .then((r) => r.json())
      .then((bookings: LodgifyBooking[]) => {
        const propertyId = PROPERTY_ID_MAP[propertySlug];
        if (!propertyId) {
          setLoading(false);
          return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter by property and active/open status
        const propertyBookings = bookings.filter(
          (b) => b.property_id === propertyId && b.status === 'Open'
        );

        let matched: LodgifyBooking | undefined;
        let isCurrentStay = false;

        if (bookingIdOverride) {
          // Specific booking lookup via ?booking=ID
          matched = propertyBookings.find((b) => b.id === bookingIdOverride);
        }

        if (!matched) {
          // Find booking where today is between arrival and departure
          matched = propertyBookings.find((b) => {
            const arrival = new Date(b.arrival + 'T00:00:00');
            const departure = new Date(b.departure + 'T00:00:00');
            return today >= arrival && today < departure;
          });
          if (matched) isCurrentStay = true;
        }

        if (!matched) {
          // Find the nearest upcoming booking
          const upcoming = propertyBookings
            .filter((b) => new Date(b.arrival + 'T00:00:00') > today)
            .sort((a, b) => new Date(a.arrival).getTime() - new Date(b.arrival).getTime());
          matched = upcoming[0];
        }

        if (matched) {
          setBooking({
            guestName: matched.guest.name || '',
            guestFirstName: getFirstName(matched.guest.name || ''),
            checkIn: formatDate(matched.arrival),
            checkOut: formatDate(matched.departure),
            people: matched.people,
            bookingId: matched.id,
            isCurrentStay,
          });
        }

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [propertySlug, bookingIdOverride]);

  return { booking, loading };
}
