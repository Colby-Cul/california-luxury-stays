'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, logout } from '@/lib/admin-auth';
import {
  getPropertiesForTenant,
  toggleActive,
  duplicateProperty,
  createNewProperty,
  deleteProperty,
  loadMeta,
  exportCMSJson,
  type AdminProperty,
} from '@/lib/admin-store';

// ─── Add Property Modal ──────────────────────────────────────────────────────

function AddPropertyModal({
  tenantId,
  onAdd,
  onClose,
}: {
  tenantId: string;
  onAdd: (prop: AdminProperty) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleCreate = () => {
    if (!name.trim()) return;
    const newProp = createNewProperty(tenantId, name.trim(), address.trim());
    onAdd(newProp);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#141414] border border-white/10 rounded-2xl p-7 w-full max-w-md shadow-2xl">
        <h2 className="text-white text-xl font-serif mb-1">New Property</h2>
        <p className="text-white/40 text-sm mb-6">Add a new property to this portfolio</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-[#c9a84c]/80 uppercase tracking-widest mb-2">Property Name</label>
            <input
              type="text"
              autoFocus
              placeholder="e.g. Tahoe City Lakefront Villa"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCreate()}
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 text-sm transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-[#c9a84c]/80 uppercase tracking-widest mb-2">Address (optional)</label>
            <input
              type="text"
              placeholder="e.g. 123 Lake Tahoe Blvd, South Lake Tahoe, CA"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 text-sm transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-7">
          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="flex-1 bg-[#c9a84c] hover:bg-[#d9b85c] disabled:opacity-40 text-black text-sm font-semibold py-3 rounded-xl transition-colors"
          >
            Create Property
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white/60 text-sm rounded-xl transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Property Card ───────────────────────────────────────────────────────────

function PropertyCard({
  property,
  tenantId,
  onToggle,
  onDuplicate,
  onDelete,
}: {
  property: AdminProperty;
  tenantId: string;
  onToggle: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = '/california-luxury-stays';

  const initials = property.name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  const hue = property.id
    .split('')
    .reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;

  return (
    <div
      className={`bg-[#111] border rounded-2xl overflow-hidden transition-all duration-200 group ${
        property.active ? 'border-white/8 hover:border-[#c9a84c]/25' : 'border-white/4 opacity-60'
      }`}
    >
      {/* Property header / avatar area */}
      <div
        className="h-32 flex items-center justify-center relative"
        style={{ background: `hsl(${hue}, 20%, 12%)` }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-serif font-bold"
          style={{ background: `hsl(${hue}, 30%, 18%)`, color: `hsl(${hue}, 70%, 65%)` }}
        >
          {initials}
        </div>
        {/* Status badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${
          property.active
            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
            : 'bg-white/5 text-white/30 border border-white/10'
        }`}>
          {property.active ? 'Active' : 'Inactive'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-medium text-base leading-tight mb-1">{property.name}</h3>
        {property.address && (
          <p className="text-white/35 text-xs mb-3 leading-relaxed">{property.address}</p>
        )}
        <div className="flex gap-2 text-xs text-white/30">
          {property.checkInTime && (
            <span className="flex items-center gap-1">
              <span className="text-[#c9a84c]/50">In</span> {property.checkInTime}
            </span>
          )}
          {property.checkInTime && property.checkOutTime && <span>·</span>}
          {property.checkOutTime && (
            <span className="flex items-center gap-1">
              <span className="text-[#c9a84c]/50">Out</span> {property.checkOutTime}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 flex items-center gap-2">
        <Link
          href={`/admin/${tenantId}/properties/${property.id}`}
          className="flex-1 text-center py-2.5 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold rounded-xl transition-colors border border-[#c9a84c]/20"
        >
          Edit
        </Link>
        <a
          href={`${basePath}/welcome/${property.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 bg-white/5 hover:bg-white/10 text-white/60 text-xs font-medium rounded-xl transition-colors border border-white/8"
        >
          Preview ↗
        </a>

        {/* Overflow menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="4" r="1.2" fill="white" opacity="0.5"/>
              <circle cx="8" cy="8" r="1.2" fill="white" opacity="0.5"/>
              <circle cx="8" cy="12" r="1.2" fill="white" opacity="0.5"/>
            </svg>
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 bottom-full mb-2 z-20 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden w-44">
                <button
                  onClick={() => { onToggle(property.id); setMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2.5"
                >
                  <span>{property.active ? '⏸' : '▶'}</span>
                  {property.active ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => { onDuplicate(property.id); setMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2.5"
                >
                  <span>⎘</span> Duplicate
                </button>
                {property.isCustom && (
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${property.name}"? This cannot be undone.`)) {
                        onDelete(property.id);
                      }
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-red-400/70 hover:bg-red-500/5 hover:text-red-400 transition-colors flex items-center gap-2.5 border-t border-white/5"
                  >
                    <span>✕</span> Delete
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function PropertiesPageClient({ tenantId }: { tenantId: string }) {
  const router = useRouter();
  const [properties, setProperties] = useState<AdminProperty[]>([]);
  const [tenantName, setTenantName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [exportMsg, setExportMsg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated(tenantId)) {
      router.replace('/admin');
      return;
    }
    const meta = loadMeta();
    setTenantName(meta.tenants[tenantId]?.name ?? tenantId.toUpperCase());
    setProperties(getPropertiesForTenant(tenantId));
    setLoading(false);
  }, [tenantId, router]);

  const refresh = useCallback(() => {
    setProperties(getPropertiesForTenant(tenantId));
  }, [tenantId]);

  const handleToggle = (id: string) => {
    toggleActive(id);
    refresh();
  };

  const handleDuplicate = (id: string) => {
    const newProp = duplicateProperty(id, tenantId);
    if (newProp) refresh();
  };

  const handleDelete = (id: string) => {
    deleteProperty(id);
    refresh();
  };

  const handleAdd = (prop: AdminProperty) => {
    refresh();
    router.push(`/admin/${tenantId}/properties/${prop.id}`);
  };

  const handleExport = () => {
    const json = exportCMSJson(tenantId);
    navigator.clipboard.writeText(json).then(() => {
      setExportMsg('Copied to clipboard!');
      setTimeout(() => setExportMsg(''), 2500);
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
      </div>
    );
  }

  const activeCount = properties.filter(p => p.active).length;

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
              <h1 className="text-white text-sm font-semibold leading-none">{tenantName}</h1>
              <p className="text-white/35 text-xs mt-0.5">Admin Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/8 text-white/50 hover:text-white/70 text-xs rounded-lg transition-colors border border-white/8"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5v6M4 5l2.5 2.5L9 5M2 9.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Export JSON
            </button>
            {exportMsg && (
              <span className="text-emerald-400 text-xs">{exportMsg}</span>
            )}
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
            className="px-4 py-2.5 text-sm text-[#c9a84c] border-b-2 border-[#c9a84c] transition-colors font-medium"
          >
            Properties
          </Link>
          <Link
            href={`/admin/${tenantId}/contacts`}
            className="px-4 py-2.5 text-sm text-white/40 hover:text-white/70 border-b-2 border-transparent transition-colors"
          >
            Contacts
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8 gap-4">
          <div>
            <h2 className="text-white text-2xl font-serif mb-1">Properties</h2>
            <p className="text-white/35 text-sm">
              {properties.length} total · {activeCount} active
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#c9a84c] hover:bg-[#d9b85c] text-black text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-[#c9a84c]/10 shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add Property
          </button>
        </div>

        {/* Property grid */}
        {properties.length === 0 ? (
          <div className="text-center py-24 bg-[#111] rounded-2xl border border-white/5">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-white text-lg font-medium mb-2">No properties yet</h3>
            <p className="text-white/35 text-sm mb-6">Add your first property to get started</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-5 py-2.5 bg-[#c9a84c] hover:bg-[#d9b85c] text-black text-sm font-semibold rounded-xl transition-colors"
            >
              Add Property
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {properties.map(prop => (
              <PropertyCard
                key={prop.id}
                property={prop}
                tenantId={tenantId}
                onToggle={handleToggle}
                onDuplicate={handleDuplicate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Info banner */}
        <div className="mt-10 p-5 bg-[#c9a84c]/5 border border-[#c9a84c]/15 rounded-2xl">
          <p className="text-[#c9a84c]/80 text-xs font-semibold uppercase tracking-widest mb-2">How it works</p>
          <ul className="text-white/35 text-xs space-y-1.5 leading-relaxed">
            <li>• Edits are saved instantly to browser localStorage — guests see them immediately</li>
            <li>• Click <strong className="text-white/50">Export JSON</strong> to copy <code className="text-white/40">cms-content.json</code> for permanent repo commits</li>
            <li>• <strong className="text-white/50">Preview</strong> opens the guest-facing welcome book in a new tab</li>
            <li>• Deactivated properties are still accessible by direct URL</li>
          </ul>
        </div>
      </main>

      {showAddModal && (
        <AddPropertyModal
          tenantId={tenantId}
          onAdd={handleAdd}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}
