'use client';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { properties } from '@/data/properties';
import NavigationBar from '@/components/NavigationBar';
import SectionProgress from '@/components/SectionProgress';
import ShareButton from '@/components/ShareButton';
import { useLodgifyBooking } from '@/hooks/useLodgifyBooking';

const sectionLabels = [
  'Welcome',
  'Details',
  'Access',
  'House Guide',
  'Kitchen',
  'Dining & Activities',
  'House Rules',
  'Emergency',
  'Thank You',
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function WelcomeBook({ propertyId }: { propertyId: string }) {
  const property = properties[propertyId];
  const searchParams = useSearchParams();
  const bookingIdOverride = searchParams ? Number(searchParams.get('booking')) || null : null;
  const { booking } = useLodgifyBooking(propertyId, bookingIdOverride);

  const [section, setSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const navigate = useCallback(
    (target: number) => {
      if (target < 0 || target >= sectionLabels.length) return;
      setDirection(target > section ? 1 : -1);
      setSection(target);
    },
    [section]
  );

  const next = useCallback(() => navigate(section + 1), [navigate, section]);
  const prev = useCallback(() => navigate(section - 1), [navigate, section]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-luxury-muted">Property not found.</p>
      </div>
    );
  }

  const handlePrint = () => window.print();

  const sections = [
    // 0: Welcome Hero
    <div key="hero" className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="aspect-[16/9] w-full max-w-2xl bg-luxury-gray rounded-2xl mb-8 flex items-center justify-center border border-white/5">
        <span className="text-luxury-muted">Property Hero Photo</span>
      </div>
      <h1 className="font-serif text-3xl md:text-5xl text-white mb-3">
        {booking?.guestFirstName ? `Welcome, ${booking.guestFirstName}!` : property.name}
      </h1>
      <p className="text-gold text-lg mb-2">{property.subtitle}</p>
      {booking ? (
        <div className="space-y-2">
          <p className="text-luxury-muted max-w-md">
            Your stay runs <span className="text-white">{booking.checkIn}</span> to <span className="text-white">{booking.checkOut}</span>.
          </p>
          {booking.people > 0 && (
            <p className="text-luxury-muted text-sm">{booking.people} {booking.people === 1 ? 'guest' : 'guests'} · {property.name}</p>
          )}
        </div>
      ) : (
        <p className="text-luxury-muted max-w-md">
          Welcome to your stay! We&apos;re thrilled to have you. This guide has everything you need for a wonderful visit.
        </p>
      )}
    </div>,

    // 1: Property Details
    <div key="details" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">Property Details</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {property.features.map((f) => (
          <div key={f} className="luxury-card p-4 text-center">
            <p className="text-gold text-sm font-medium">{f}</p>
          </div>
        ))}
      </div>
    </div>,

    // 2: Access & Check-In
    <div key="access" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">Access &amp; Check-In</h2>
      <div className="space-y-4">
        <div className="luxury-card p-5">
          <h3 className="text-gold text-sm uppercase tracking-wider mb-2">Door Code</h3>
          <p className="text-white text-xl font-mono">{property.doorCode}</p>
        </div>
        <div className="luxury-card p-5">
          <h3 className="text-gold text-sm uppercase tracking-wider mb-2">WiFi</h3>
          <p className="text-white">Network: <span className="font-mono">{property.wifi.name}</span></p>
          <p className="text-white">Password: <span className="font-mono">{property.wifi.password}</span></p>
        </div>
        <div className="luxury-card p-5">
          <h3 className="text-gold text-sm uppercase tracking-wider mb-2">Parking</h3>
          <p className="text-luxury-muted">{property.parking}</p>
        </div>
      </div>
    </div>,

    // 3: House Guide
    <div key="guide" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">House Guide</h2>
      <div className="space-y-4">
        {property.houseGuide.map((item) => (
          <div key={item.title} className="luxury-card p-5">
            <h3 className="text-gold font-medium mb-2">{item.title}</h3>
            <p className="text-luxury-muted text-sm">{item.instructions}</p>
            {item.videoUrl && (
              <div className="mt-3 aspect-video bg-luxury-gray rounded-lg flex items-center justify-center border border-white/5">
                <span className="text-luxury-muted text-xs">Video: {item.videoUrl}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,

    // 4: Kitchen
    <div key="kitchen" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">Kitchen &amp; Amenities</h2>
      <div className="luxury-card p-6">
        <ul className="space-y-3">
          {property.kitchen.map((item) => (
            <li key={item} className="flex items-center gap-3 text-luxury-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>,

    // 5: Dining & Activities
    <div key="dining" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">Dining &amp; Activities</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-gold text-sm uppercase tracking-wider mb-3">Nearby Dining</h3>
          <div className="space-y-3">
            {property.dining.map((d) => (
              <div key={d.name} className="luxury-card p-4 flex justify-between items-start">
                <div>
                  <p className="text-white font-medium">{d.name}</p>
                  <p className="text-luxury-muted text-sm">{d.type}</p>
                  {d.notes && <p className="text-gold/60 text-xs mt-1">{d.notes}</p>}
                </div>
                <span className="text-gold text-sm whitespace-nowrap">{d.distance}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-gold text-sm uppercase tracking-wider mb-3">Activities</h3>
          <div className="luxury-card p-5">
            <ul className="space-y-2">
              {property.activities.map((a) => (
                <li key={a} className="flex items-center gap-3 text-luxury-muted text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // 6: House Rules
    <div key="rules" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">House Rules</h2>
      <div className="luxury-card p-6 space-y-4">
        {[
          { label: 'Quiet Hours', value: property.houseRules.quietHours },
          { label: 'Max Occupancy', value: `${property.houseRules.maxOccupancy} guests` },
          { label: 'Pets', value: property.houseRules.pets },
          { label: 'Smoking', value: property.houseRules.smoking },
          { label: 'Parties', value: property.houseRules.parties },
          { label: 'Trash', value: property.houseRules.trash },
        ].map((rule) => (
          <div key={rule.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <span className="text-gold text-sm">{rule.label}</span>
            <span className="text-luxury-muted text-sm text-right">{rule.value}</span>
          </div>
        ))}
      </div>
    </div>,

    // 7: Emergency & Contact
    <div key="emergency" className="max-w-2xl mx-auto px-4">
      <h2 className="font-serif text-3xl text-white mb-6">Emergency &amp; Contact</h2>
      <div className="space-y-4">
        <div className="luxury-card p-5 border-red-900/30 border">
          <h3 className="text-red-400 text-sm uppercase tracking-wider mb-3">Emergency Numbers</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-luxury-muted">Fire / Medical</span>
              <span className="text-white font-mono">{property.emergency.fire}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-luxury-muted">Local Police</span>
              <span className="text-white font-mono">{property.emergency.localPolice}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-luxury-muted">Hospital</span>
              <span className="text-white text-sm text-right">{property.emergency.hospital}</span>
            </div>
          </div>
        </div>
        <div className="luxury-card p-5">
          <h3 className="text-gold text-sm uppercase tracking-wider mb-3">Property Manager</h3>
          <p className="text-white font-mono">{property.emergency.propertyManager}</p>
          <p className="text-luxury-muted text-sm mt-1">{property.emergency.propertyManagerEmail}</p>
        </div>
      </div>
    </div>,

    // 8: Thank You
    <div key="thankyou" className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Thank You!</h2>
      <p className="text-luxury-muted max-w-md mb-8">
        We hope you enjoy your stay. If you have a wonderful experience, we&apos;d love for you to leave a review!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={property.reviewUrls.airbnb}
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-button text-center"
        >
          Review on Airbnb
        </a>
        <a
          href={property.reviewUrls.google}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-colors text-center"
        >
          Review on Google
        </a>
      </div>
      <Link
        href={`/checkout/${propertyId}`}
        className="mt-8 text-luxury-muted hover:text-gold text-sm transition-colors"
      >
        View Checkout Guide &rarr;
      </Link>
    </div>,
  ];

  return (
    <>
      <NavigationBar currentProperty={propertyId} mode="welcome" />
      <SectionProgress
        current={section}
        total={sectionLabels.length}
        labels={sectionLabels}
        onNavigate={navigate}
      />

      <main
        className="pt-28 pb-32 min-h-screen"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const diff = touchStart - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 60) {
            diff > 0 ? next() : prev();
          }
          setTouchStart(null);
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={section}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {sections[section]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-luxury-black/90 backdrop-blur-md border-t border-white/5 no-print">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={section === 0}
            className="text-sm text-luxury-muted hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </button>
          <div className="flex items-center gap-4">
            <ShareButton />
            <button
              onClick={handlePrint}
              className="text-sm text-luxury-muted hover:text-gold transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>
          <button
            onClick={next}
            disabled={section === sectionLabels.length - 1}
            className="text-sm text-luxury-muted hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
