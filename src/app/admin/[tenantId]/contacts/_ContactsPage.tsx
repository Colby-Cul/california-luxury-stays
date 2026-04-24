'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, logout } from '@/lib/admin-auth';
import { getGuestContacts, type GuestRecord } from '@/lib/supabase';

const PROPERTY_LABELS: Record<string, string> = {
  graeagle: 'Graeagle',
  northstar: 'Northstar',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function exportCSV(contacts: GuestRecord[]) {
  const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Property', 'Source', 'Captured At'];
  const rows = contacts.map(c => [
    c.first_name,
    c.last_name,
    c.email,
    c.phone ?? '',
    PROPERTY_LABELS[c.property_slug] ?? c.property_slug,
    c.booking_source,
    formatDate(c.created_at),
  ]);
  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cls-guest-contacts-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function ContactsPageClient({ tenantId }: { tenantId: string }) {
  const router = useRouter();
  const [contacts, setContacts] = useState<GuestRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!isAuthenticated(tenantId)) {
      router.replace('/admin');
      return;
    }
    loadContacts();
  }, [tenantId, router]);

  const loadContacts = useCallback(async () => {
    setLoading(true);
    setError('');
    const { data, error: err } = await getGuestContacts();
    if (err) setError(err);
    setContacts(data);
    setLoading(false);
  }, []);

  const filteredContacts = contacts.filter(c => {
    const matchProp = filter === 'all' || c.property_slug === filter;
    const term = search.toLowerCase();
    const matchSearch =
      !term ||
      c.first_name.toLowerCase().includes(term) ||
      c.last_name.toLowerCase().includes(term) ||
      c.email.toLowerCase().includes(term) ||
      (c.phone ?? '').includes(term);
    return matchProp && matchSearch;
  });

  const propertyOptions = ['all', ...Array.from(new Set(contacts.map(c => c.property_slug)))];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/6 bg-[#0a0a0a]/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5L14.5 5V11L8 14.5L1.5 11V5L8 1.5Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold leading-none">California Luxury Stays</h1>
              <p className="text-white/35 text-xs mt-0.5">Admin Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => exportCSV(filteredContacts)}
              disabled={filteredContacts.length === 0}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/8 disabled:opacity-40 disabled:cursor-not-allowed text-white/50 hover:text-white/70 text-xs rounded-lg transition-colors border border-white/8"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5v6M4 5l2.5 2.5L9 5M2 9.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Export CSV
            </button>
            <button
              onClick={() => { logout(tenantId); router.push('/admin'); }}
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Tab nav */}
        <div className="max-w-6xl mx-auto px-5 flex gap-1 pb-0">
          <Link
            href={`/admin/${tenantId}/properties`}
            className="px-4 py-2.5 text-sm text-white/40 hover:text-white/70 border-b-2 border-transparent transition-colors"
          >
            Properties
          </Link>
          <Link
            href={`/admin/${tenantId}/contacts`}
            className="px-4 py-2.5 text-sm text-[#c9a84c] border-b-2 border-[#c9a84c] transition-colors font-medium"
          >
            Contacts
            {contacts.length > 0 && (
              <span className="ml-2 bg-[#c9a84c]/15 text-[#c9a84c] text-xs px-1.5 py-0.5 rounded-full">
                {contacts.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">
        {/* Page header */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            <h2 className="text-white text-2xl font-serif mb-1">Guest Contacts</h2>
            <p className="text-white/35 text-sm">
              {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
              {filter !== 'all' && ` · ${PROPERTY_LABELS[filter] ?? filter}`}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, or phone…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#111] border border-white/8 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#c9a84c]/40 transition-colors"
            />
          </div>

          {/* Property filter */}
          <div className="flex gap-2 flex-wrap">
            {propertyOptions.map(slug => (
              <button
                key={slug}
                onClick={() => setFilter(slug)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors border ${
                  filter === slug
                    ? 'bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/30'
                    : 'bg-[#111] text-white/40 border-white/8 hover:text-white/60'
                }`}
              >
                {slug === 'all' ? 'All Properties' : (PROPERTY_LABELS[slug] ?? slug)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
            <p className="text-red-400 text-sm mb-2">Failed to load contacts</p>
            <p className="text-white/30 text-xs font-mono">{error}</p>
            <button
              onClick={loadContacts}
              className="mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/60 text-xs rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-24 bg-[#111] rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="8" r="4" stroke="#c9a84c" strokeWidth="1.5"/>
                <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-white/40 text-sm">
              {search || filter !== 'all' ? 'No contacts match your filters.' : 'No guest contacts captured yet.'}
            </p>
            {(search || filter !== 'all') && (
              <button
                onClick={() => { setSearch(''); setFilter('all'); }}
                className="mt-3 text-[#c9a84c]/60 hover:text-[#c9a84c] text-xs transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="bg-[#111] border border-white/8 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1.5fr_1fr_120px_140px] gap-4 px-6 py-3 border-b border-white/5 bg-white/2">
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Name</span>
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Email</span>
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Phone</span>
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Property</span>
              <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Captured</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/4">
              {filteredContacts.map((c) => (
                <div
                  key={c.id}
                  className="grid grid-cols-[1fr_1.5fr_1fr_120px_140px] gap-4 px-6 py-4 hover:bg-white/2 transition-colors items-center"
                >
                  <span className="text-sm text-white font-medium truncate">
                    {c.first_name} {c.last_name}
                  </span>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm text-[#c9a84c]/80 hover:text-[#c9a84c] truncate transition-colors"
                  >
                    {c.email}
                  </a>
                  <span className="text-sm text-white/45 truncate">
                    {c.phone ?? <span className="text-white/20 italic">—</span>}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/50 truncate text-center">
                    {PROPERTY_LABELS[c.property_slug] ?? c.property_slug}
                  </span>
                  <span className="text-xs text-white/30 truncate">
                    {formatDate(c.created_at)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
