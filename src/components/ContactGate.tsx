'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { captureGuest } from '@/lib/supabase';

interface ContactGateProps {
  propertySlug: string;
  propertyName: string;
  children: React.ReactNode;
}

const STORAGE_KEY_PREFIX = 'cls_gate_passed_';

export default function ContactGate({ propertySlug, propertyName, children }: ContactGateProps) {
  const [gatePassed, setGatePassed] = useState<boolean | null>(null); // null = loading
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check localStorage to see if this guest already passed the gate
    try {
      const passed = localStorage.getItem(`${STORAGE_KEY_PREFIX}${propertySlug}`);
      setGatePassed(passed === 'true');
    } catch {
      setGatePassed(false);
    }
  }, [propertySlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    const result = await captureGuest({
      property_slug: propertySlug,
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim() || undefined,
      booking_source: 'welcome_book_capture',
    });

    setSubmitting(false);

    if (!result.success) {
      // Log error but don't block the guest — data capture is best-effort
      console.warn('Guest capture failed (non-blocking):', result.error);
    }

    // Always unlock after submission attempt — don't wall off a real guest
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${propertySlug}`, 'true');
    } catch {}

    setGatePassed(true);
  };

  // While checking localStorage — render nothing (avoids flash)
  if (gatePassed === null) {
    return <div className="min-h-screen bg-[#0a0a0a]" />;
  }

  // Gate already passed — show content directly
  if (gatePassed) {
    return <>{children}</>;
  }

  // Show the gate
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#0a0a0a' }}
        >
          {/* Background gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at top, rgba(180,130,60,0.12) 0%, transparent 60%), radial-gradient(ellipse at bottom, rgba(0,0,0,0.9) 60%, transparent 100%)',
            }}
          />

          {/* Subtle ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(ellipse, #c9975c 0%, transparent 70%)' }}
          />

          {/* Gate card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md mx-4"
          >
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: 'rgba(18, 18, 18, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Logo mark */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #c9975c 0%, #a07040 100%)',
                    boxShadow: '0 4px 16px rgba(201,151,92,0.3)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <div className="text-center mb-8">
                <h1 className="font-serif text-2xl sm:text-3xl text-white mb-2 leading-tight">
                  Welcome to {propertyName}
                </h1>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  To access your personalized welcome guide, please confirm your details below.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#c9975c', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      First Name <span style={{ color: '#c9975c' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                      placeholder="Jane"
                      required
                      autoComplete="given-name"
                      className="w-full px-3.5 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,151,92,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#c9975c', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Last Name <span style={{ color: '#c9975c' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                      placeholder="Smith"
                      required
                      autoComplete="family-name"
                      className="w-full px-3.5 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,151,92,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#c9975c', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Email Address <span style={{ color: '#c9975c' }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="jane@example.com"
                    required
                    autoComplete="email"
                    className="w-full px-3.5 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,151,92,0.6)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Phone <span className="normal-case" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                    className="w-full px-3.5 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,151,92,0.6)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: submitting
                      ? 'linear-gradient(135deg, #a07040 0%, #7a5530 100%)'
                      : 'linear-gradient(135deg, #c9975c 0%, #b07040 100%)',
                    boxShadow: submitting ? 'none' : '0 4px 20px rgba(201,151,92,0.3)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Unlocking...
                    </>
                  ) : (
                    <>
                      Access My Welcome Book
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Footer note */}
              <p className="text-center text-xs mt-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Your information is kept private and never shared.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
