'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, login } from '@/lib/admin-auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isAuthenticated('cls')) {
      router.replace('/admin/cls/properties');
    } else {
      setChecking(false);
    }
  }, [router]);

  const handleLogin = () => {
    if (!password) return;
    setLoading(true);
    setTimeout(() => {
      const ok = login('cls', password);
      if (ok) {
        router.push('/admin/cls/properties');
      } else {
        setError(true);
        setLoading(false);
        setTimeout(() => setError(false), 2500);
      }
    }, 300);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/3 blur-3xl" />
      </div>

      <div className="relative w-full max-w-[360px]">
        {/* Logo mark */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 mb-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3L26 9V19L14 25L2 19V9L14 3Z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
              <path d="M14 3V25M2 9L26 9M2 19L26 19" stroke="#c9a84c" strokeWidth="0.75" opacity="0.4"/>
            </svg>
          </div>
          <h1 className="font-serif text-2xl text-white mb-1">Admin Portal</h1>
          <p className="text-white/35 text-sm">California Luxury Stays</p>
        </div>

        {/* Login card */}
        <div className="bg-[#111] border border-white/8 rounded-2xl p-7">
          <label className="block text-xs text-[#c9a84c]/80 uppercase tracking-widest mb-2 font-medium">
            Admin Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            autoFocus
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className={`w-full bg-[#0d0d0d] border rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none transition-all text-sm mb-4 ${
              error
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-white/10 focus:border-[#c9a84c]/50'
            }`}
          />

          {error && (
            <p className="text-red-400 text-xs mb-4 text-center flex items-center justify-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor"/>
                <path d="M6 4v2.5M6 8h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Incorrect password
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !password}
            className="w-full bg-[#c9a84c] hover:bg-[#d9b85c] disabled:opacity-40 disabled:cursor-not-allowed text-black text-sm font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin inline-block" />
            ) : (
              'Sign In'
            )}
          </button>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Multi-tenant property management platform
        </p>
      </div>
    </div>
  );
}
