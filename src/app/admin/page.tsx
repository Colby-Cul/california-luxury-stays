'use client';

import { useState, useEffect, useCallback } from 'react';
import cmsDefaults from '@/data/cms-content.json';

const PROPERTIES = ['graeagle', 'northstar'] as const;
type PropertyId = typeof PROPERTIES[number];

const PROPERTY_NAMES: Record<PropertyId, string> = {
  graeagle: 'Family Cabin in Graeagle',
  northstar: 'Luxury Northstar Getaway',
};

const ADMIN_PASSWORD = 'cls-admin-2024';

function loadOverride(propertyId: string): Record<string, any> {
  try {
    const stored = localStorage.getItem(`cms-override-${propertyId}`);
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

function saveOverride(propertyId: string, data: Record<string, any>): void {
  localStorage.setItem(`cms-override-${propertyId}`, JSON.stringify(data));
}

function getMerged(propertyId: PropertyId): Record<string, any> {
  const defaults = (cmsDefaults as Record<string, any>)[propertyId] ?? {};
  const overrides = loadOverride(propertyId);
  return deepMerge(defaults, overrides);
}

function deepMerge(base: any, override: any): any {
  if (typeof base !== 'object' || base === null) return override ?? base;
  if (typeof override !== 'object' || override === null) return base;
  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (Array.isArray(override[key])) {
      result[key] = override[key];
    } else if (typeof override[key] === 'object' && override[key] !== null) {
      result[key] = deepMerge(base[key] ?? {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

// ─── Field components ────────────────────────────────────────────────────────

function TextField({ label, value, onChange, mono = false, rows = 1 }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  mono?: boolean;
  rows?: number;
}) {
  const base = "w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 text-sm transition-colors";
  return (
    <div className="mb-4">
      <label className="block text-xs text-[#c9a84c] uppercase tracking-wider mb-1">{label}</label>
      {rows > 1 ? (
        <textarea
          className={`${base} ${mono ? 'font-mono' : ''} resize-y`}
          rows={rows}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <input
          type="text"
          className={`${base} ${mono ? 'font-mono' : ''}`}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

// ─── Section editors ──────────────────────────────────────────────────────────

function WifiEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  return (
    <div>
      <TextField label="Network Name" value={data.name ?? ''} onChange={v => onChange({ ...data, name: v })} mono />
      <TextField label="Password" value={data.password ?? ''} onChange={v => onChange({ ...data, password: v })} mono />
    </div>
  );
}

function HouseGuideEditor({ items, onChange }: { items: any[]; onChange: (items: any[]) => void }) {
  const update = (i: number, field: string, value: string) => {
    const next = [...items];
    next[i] = { ...next[i], [field]: value };
    onChange(next);
  };
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="border border-white/5 rounded-lg p-4">
          <p className="text-[#c9a84c] text-sm font-medium mb-3">{item.title}</p>
          <TextField
            label="Instructions"
            value={item.instructions ?? ''}
            onChange={v => update(i, 'instructions', v)}
            rows={4}
          />
          <TextField
            label="Video URL (optional)"
            value={item.videoUrl ?? ''}
            onChange={v => update(i, 'videoUrl', v || '')}
          />
        </div>
      ))}
    </div>
  );
}

function EmergencyEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  return (
    <div>
      <TextField label="Property Manager Phone" value={data.propertyManager ?? ''} onChange={v => onChange({ ...data, propertyManager: v })} mono />
      <TextField label="Property Manager Email" value={data.propertyManagerEmail ?? ''} onChange={v => onChange({ ...data, propertyManagerEmail: v })} mono />
    </div>
  );
}

// ─── Property Panel ───────────────────────────────────────────────────────────

function PropertyPanel({ propertyId }: { propertyId: PropertyId }) {
  const [data, setData] = useState<Record<string, any>>({});
  const [saved, setSaved] = useState(false);
  const [activeSection, setActiveSection] = useState('access');

  useEffect(() => {
    setData(getMerged(propertyId));
  }, [propertyId]);

  const save = useCallback(() => {
    saveOverride(propertyId, data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [propertyId, data]);

  const reset = () => {
    localStorage.removeItem(`cms-override-${propertyId}`);
    setData(getMerged(propertyId));
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cms-${propertyId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sections = [
    { id: 'access', label: 'Access & WiFi' },
    { id: 'guide', label: 'House Guide' },
    { id: 'rules', label: 'House Rules' },
    { id: 'emergency', label: 'Emergency & Contact' },
    { id: 'reviews', label: 'Review Links' },
    { id: 'checkout', label: 'Checkout' },
  ];

  return (
    <div>
      {/* Section tabs */}
      <div className="flex gap-1 mb-6 flex-wrap">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeSection === s.id
                ? 'bg-[#c9a84c] text-black'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Section content */}
      <div className="min-h-[400px]">
        {activeSection === 'access' && (
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">WiFi</h3>
            <WifiEditor data={data.wifi ?? {}} onChange={v => setData(d => ({ ...d, wifi: v }))} />
            <h3 className="text-white text-sm font-semibold mb-4 mt-6">Door Code</h3>
            <TextField label="Door / Lock Code" value={data.doorCode ?? ''} onChange={v => setData(d => ({ ...d, doorCode: v }))} mono />
            <h3 className="text-white text-sm font-semibold mb-4 mt-6">Parking</h3>
            <TextField label="Parking Instructions" value={data.parking ?? ''} onChange={v => setData(d => ({ ...d, parking: v }))} rows={2} />
          </div>
        )}
        {activeSection === 'guide' && (
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">House Guide Items</h3>
            <HouseGuideEditor items={data.houseGuide ?? []} onChange={v => setData(d => ({ ...d, houseGuide: v }))} />
          </div>
        )}
        {activeSection === 'rules' && (
          <div>
            <TextField label="Trash Instructions" value={data.houseRules?.trash ?? ''} onChange={v => setData(d => ({ ...d, houseRules: { ...(d.houseRules ?? {}), trash: v } }))} rows={2} />
          </div>
        )}
        {activeSection === 'emergency' && (
          <div>
            <EmergencyEditor data={data.emergency ?? {}} onChange={v => setData(d => ({ ...d, emergency: v }))} />
          </div>
        )}
        {activeSection === 'reviews' && (
          <div>
            <TextField label="Airbnb Review URL" value={data.reviewUrls?.airbnb ?? ''} onChange={v => setData(d => ({ ...d, reviewUrls: { ...(d.reviewUrls ?? {}), airbnb: v } }))} />
            <TextField label="Google Review URL" value={data.reviewUrls?.google ?? ''} onChange={v => setData(d => ({ ...d, reviewUrls: { ...(d.reviewUrls ?? {}), google: v } }))} />
          </div>
        )}
        {activeSection === 'checkout' && (
          <div>
            <TextField label="Checkout Instructions" value={data.checkoutInstructions ?? ''} onChange={v => setData(d => ({ ...d, checkoutInstructions: v }))} rows={4} />
          </div>
        )}
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/5">
        <button
          onClick={save}
          className="px-5 py-2 bg-[#c9a84c] hover:bg-[#e0c070] text-black text-sm font-semibold rounded-lg transition-colors"
        >
          {saved ? '✓ Saved' : 'Save to Browser'}
        </button>
        <button
          onClick={exportJSON}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/70 text-sm rounded-lg transition-colors border border-white/10"
        >
          Export JSON
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 text-red-400/70 hover:text-red-400 text-sm transition-colors"
        >
          Reset to Defaults
        </button>
      </div>

      <p className="text-white/30 text-xs mt-3">
        "Save to Browser" stores changes in localStorage — guests see them immediately. "Export JSON" downloads the file to commit to the repo for permanent changes.
      </p>
    </div>
  );
}

// ─── Main admin page ──────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);
  const [activeProperty, setActiveProperty] = useState<PropertyId>('graeagle');

  useEffect(() => {
    if (sessionStorage.getItem('cls-admin-auth') === '1') setAuthed(true);
  }, []);

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('cls-admin-auth', '1');
      setAuthed(true);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 2000);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-serif mb-2 text-center">CLS Admin</h1>
          <p className="text-white/40 text-sm text-center mb-8">Content Management</p>
          <input
            type="password"
            placeholder="Admin password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            className={`w-full bg-[#111] border ${pwError ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 mb-3 text-sm`}
          />
          {pwError && <p className="text-red-400 text-xs mb-3 text-center">Incorrect password</p>}
          <button
            onClick={login}
            className="w-full bg-[#c9a84c] hover:bg-[#e0c070] text-black text-sm font-semibold py-3 rounded-lg transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-serif">CLS Admin</h1>
            <p className="text-white/40 text-sm">Property Content Management</p>
          </div>
          <button
            onClick={() => { sessionStorage.removeItem('cls-admin-auth'); setAuthed(false); }}
            className="text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Property tabs */}
        <div className="flex gap-2 mb-8">
          {PROPERTIES.map(pid => (
            <button
              key={pid}
              onClick={() => setActiveProperty(pid)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                activeProperty === pid
                  ? 'bg-[#c9a84c]/10 border-[#c9a84c]/40 text-[#c9a84c]'
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
              }`}
            >
              {PROPERTY_NAMES[pid]}
            </button>
          ))}
        </div>

        {/* Content editor */}
        <div className="bg-[#111] rounded-xl p-6 border border-white/5">
          <PropertyPanel key={activeProperty} propertyId={activeProperty} />
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-[#c9a84c]/5 border border-[#c9a84c]/20 rounded-lg">
          <p className="text-[#c9a84c] text-xs font-medium mb-1">How it works</p>
          <ul className="text-white/40 text-xs space-y-1">
            <li>• Default content lives in <code className="text-white/60">src/data/cms-content.json</code></li>
            <li>• "Save to Browser" stores overrides in localStorage — instant, no deploy needed</li>
            <li>• "Export JSON" downloads your edits to commit back to the repo for permanent changes</li>
            <li>• Guest devices see the base JSON content; admin overrides are browser-local only</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
