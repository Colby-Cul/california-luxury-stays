'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, logout } from '@/lib/admin-auth';
import { loadProperty, saveProperty, type AdminProperty, type HouseGuideItem, type LocalRecCategory, type LocalRecItem, type CheckoutTask } from '@/lib/admin-store';

// ─── Field primitives ────────────────────────────────────────────────────────

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-5">
      <label className="block text-xs text-[#c9a84c]/70 uppercase tracking-widest mb-2 font-medium">{label}</label>
      {children}
      {hint && <p className="text-white/25 text-xs mt-1.5 leading-relaxed">{hint}</p>}
    </div>
  );
}

const inputCls = "w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/15 focus:outline-none focus:border-[#c9a84c]/50 text-sm transition-colors";

function TextInput({ value, onChange, placeholder, mono }: { value: string; onChange: (v: string) => void; placeholder?: string; mono?: boolean }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${inputCls} ${mono ? 'font-mono' : ''}`}
    />
  );
}

function TextArea({ value, onChange, placeholder, rows = 3 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`${inputCls} resize-y`}
    />
  );
}

function NumberInput({ value, onChange, placeholder }: { value: number | undefined; onChange: (v: number) => void; placeholder?: string }) {
  return (
    <input
      type="number"
      value={value ?? ''}
      onChange={e => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className={inputCls}
    />
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${checked ? 'bg-[#c9a84c]' : 'bg-white/10'}`}
      >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </div>
      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{label}</span>
    </label>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/8 text-white/50 hover:text-white/80 text-sm rounded-xl transition-colors border border-white/8 border-dashed"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      {label}
    </button>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-1.5 text-red-400/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
      title="Remove"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

// ─── Section: Overview ────────────────────────────────────────────────────────

function OverviewSection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  return (
    <div className="space-y-1">
      <Field label="Property Name">
        <TextInput value={data.name} onChange={v => onChange({ name: v })} placeholder="e.g. Family Cabin in Graeagle" />
      </Field>
      <Field label="Address">
        <TextInput value={data.address ?? ''} onChange={v => onChange({ address: v })} placeholder="e.g. 47 Shasta Trail, Graeagle, CA 96103" />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Check-In Time">
          <TextInput value={data.checkInTime ?? ''} onChange={v => onChange({ checkInTime: v })} placeholder="e.g. 4:00 PM" />
        </Field>
        <Field label="Check-Out Time">
          <TextInput value={data.checkOutTime ?? ''} onChange={v => onChange({ checkOutTime: v })} placeholder="e.g. 10:00 AM" />
        </Field>
      </div>
      <Field label="Status">
        <Toggle checked={data.active} onChange={v => onChange({ active: v })} label={data.active ? 'Active — visible to guests' : 'Inactive — hidden from guests'} />
      </Field>
      <div className="mt-4 p-4 bg-[#0d0d0d] rounded-xl border border-white/5">
        <p className="text-white/25 text-xs">
          <span className="text-white/40 font-medium">Property ID:</span> <code className="text-[#c9a84c]/60 font-mono">{data.id}</code>
          <span className="mx-2">·</span>
          <span className="text-white/40 font-medium">Tenant:</span> <code className="text-[#c9a84c]/60 font-mono">{data.tenantId}</code>
        </p>
      </div>
    </div>
  );
}

// ─── Section: Access ─────────────────────────────────────────────────────────

function AccessSection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  return (
    <div>
      <div className="mb-6 p-5 bg-[#0d0d0d] rounded-2xl border border-white/6">
        <h3 className="text-white/70 text-sm font-semibold mb-4 flex items-center gap-2">
          <span>📶</span> WiFi
        </h3>
        <Field label="Network Name (SSID)">
          <TextInput value={data.wifi.name} onChange={v => onChange({ wifi: { ...data.wifi, name: v } })} placeholder="Network name" mono />
        </Field>
        <Field label="Password">
          <TextInput value={data.wifi.password} onChange={v => onChange({ wifi: { ...data.wifi, password: v } })} placeholder="WiFi password" mono />
        </Field>
      </div>
      <div className="mb-6 p-5 bg-[#0d0d0d] rounded-2xl border border-white/6">
        <h3 className="text-white/70 text-sm font-semibold mb-4 flex items-center gap-2">
          <span>🔑</span> Entry
        </h3>
        <Field label="Door / Lock Code">
          <TextInput value={data.doorCode} onChange={v => onChange({ doorCode: v })} placeholder="e.g. 4729#" mono />
        </Field>
        <Field label="Parking Instructions">
          <TextArea value={data.parking} onChange={v => onChange({ parking: v })} placeholder="Parking details for guests" rows={3} />
        </Field>
      </div>
    </div>
  );
}

// ─── Section: House Guide ─────────────────────────────────────────────────────

function HouseGuideSection({ items, onChange }: { items: HouseGuideItem[]; onChange: (items: HouseGuideItem[]) => void }) {
  const update = (i: number, field: keyof HouseGuideItem, value: string) => {
    const next = [...items];
    next[i] = { ...next[i], [field]: value || (field === 'videoUrl' ? null : value) };
    onChange(next);
  };

  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  const add = () => onChange([...items, { title: '', instructions: '', videoUrl: null }]);

  return (
    <div>
      <p className="text-white/30 text-xs mb-5 leading-relaxed">
        Appliance guides, device instructions, and property-specific how-tos shown to guests.
      </p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="bg-[#0d0d0d] rounded-2xl border border-white/6 p-5">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[#c9a84c]/60 text-xs font-mono">#{i + 1}</span>
              <RemoveButton onClick={() => remove(i)} />
            </div>
            <Field label="Title">
              <TextInput value={item.title} onChange={v => update(i, 'title', v)} placeholder="e.g. Stone Fireplace" />
            </Field>
            <Field label="Instructions">
              <TextArea value={item.instructions} onChange={v => update(i, 'instructions', v)} placeholder="Step-by-step instructions for guests..." rows={4} />
            </Field>
            <Field label="Video URL (optional)">
              <TextInput value={item.videoUrl ?? ''} onChange={v => update(i, 'videoUrl', v)} placeholder="https://youtube.com/..." />
            </Field>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <AddButton onClick={add} label="Add guide item" />
      </div>
    </div>
  );
}

// ─── Section: House Rules ─────────────────────────────────────────────────────

function HouseRulesSection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  const r = data.houseRules;
  const set = (field: string, value: any) => onChange({ houseRules: { ...r, [field]: value } });

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Quiet Hours">
          <TextInput value={r.quietHours ?? ''} onChange={v => set('quietHours', v)} placeholder="e.g. 10 PM – 8 AM" />
        </Field>
        <Field label="Max Occupancy">
          <NumberInput value={r.maxOccupancy} onChange={v => set('maxOccupancy', v)} placeholder="e.g. 10" />
        </Field>
      </div>
      <Field label="Pet Policy">
        <TextInput value={r.pets ?? ''} onChange={v => set('pets', v)} placeholder="e.g. No pets allowed" />
      </Field>
      <Field label="Smoking Policy">
        <TextInput value={r.smoking ?? ''} onChange={v => set('smoking', v)} placeholder="e.g. No smoking indoors" />
      </Field>
      <Field label="Parties / Events Policy">
        <TextInput value={r.parties ?? ''} onChange={v => set('parties', v)} placeholder="e.g. No parties or events" />
      </Field>
      <Field label="Trash Instructions">
        <TextArea value={r.trash ?? ''} onChange={v => set('trash', v)} placeholder="Trash and recycling instructions..." rows={3} />
      </Field>
    </div>
  );
}

// ─── Section: Emergency ──────────────────────────────────────────────────────

function EmergencySection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  const e = data.emergency;
  const set = (field: string, value: string) => onChange({ emergency: { ...e, [field]: value } });

  return (
    <div>
      <div className="mb-6 p-5 bg-[#0d0d0d] rounded-2xl border border-white/6">
        <h3 className="text-white/70 text-sm font-semibold mb-4">Property Manager</h3>
        <Field label="Phone">
          <TextInput value={e.propertyManager ?? ''} onChange={v => set('propertyManager', v)} placeholder="e.g. 916-705-4374" mono />
        </Field>
        <Field label="Email">
          <TextInput value={e.propertyManagerEmail ?? ''} onChange={v => set('propertyManagerEmail', v)} placeholder="host@californialuxurystays.com" mono />
        </Field>
      </div>
      <div className="p-5 bg-[#0d0d0d] rounded-2xl border border-white/6">
        <h3 className="text-white/70 text-sm font-semibold mb-4">Emergency Services</h3>
        <Field label="Local Police">
          <TextInput value={e.localPolice ?? ''} onChange={v => set('localPolice', v)} placeholder="e.g. 530-832-4950" mono />
        </Field>
        <Field label="Fire Department">
          <TextInput value={e.fire ?? ''} onChange={v => set('fire', v)} placeholder="e.g. 911" mono />
        </Field>
        <Field label="Nearest Hospital">
          <TextInput value={e.hospital ?? ''} onChange={v => set('hospital', v)} placeholder="Hospital name and phone" />
        </Field>
      </div>
    </div>
  );
}

// ─── Section: Local Recommendations ──────────────────────────────────────────

function LocalRecItem_({ item, onChange, onRemove }: { item: LocalRecItem; onChange: (i: LocalRecItem) => void; onRemove: () => void }) {
  const set = (field: keyof LocalRecItem, value: string) => onChange({ ...item, [field]: value });
  return (
    <div className="bg-[#111]/80 rounded-xl border border-white/5 p-4 space-y-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/30 text-xs">Listing</span>
        <RemoveButton onClick={onRemove} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Name</label>
          <input type="text" value={item.name} onChange={e => set('name', e.target.value)} className="w-full bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a84c]/40 placeholder-white/15" placeholder="Place name" />
        </div>
        <div>
          <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Distance</label>
          <input type="text" value={item.distance} onChange={e => set('distance', e.target.value)} className="w-full bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a84c]/40 placeholder-white/15" placeholder="e.g. 5 min" />
        </div>
      </div>
      <div>
        <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Description</label>
        <input type="text" value={item.description} onChange={e => set('description', e.target.value)} className="w-full bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a84c]/40 placeholder-white/15" placeholder="Brief description" />
      </div>
      <div>
        <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Tip (optional)</label>
        <input type="text" value={item.tip} onChange={e => set('tip', e.target.value)} className="w-full bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a84c]/40 placeholder-white/15" placeholder="Insider tip..." />
      </div>
    </div>
  );
}

function LocalRecCategoryBlock({
  category,
  onChange,
  onRemove,
}: {
  category: LocalRecCategory;
  onChange: (c: LocalRecCategory) => void;
  onRemove: () => void;
}) {
  const updateItem = (i: number, item: LocalRecItem) => {
    const next = [...category.items];
    next[i] = item;
    onChange({ ...category, items: next });
  };
  const removeItem = (i: number) => onChange({ ...category, items: category.items.filter((_, idx) => idx !== i) });
  const addItem = () => onChange({ ...category, items: [...category.items, { name: '', description: '', distance: '', tip: '' }] });

  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/6 p-5 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1 mr-3">
          <input
            type="text"
            value={category.emoji}
            onChange={e => onChange({ ...category, emoji: e.target.value })}
            className="w-14 bg-[#111] border border-white/10 rounded-lg px-2 py-2 text-lg text-center focus:outline-none focus:border-[#c9a84c]/40"
            placeholder="🍽️"
          />
          <input
            type="text"
            value={category.category}
            onChange={e => onChange({ ...category, category: e.target.value })}
            className="flex-1 bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-white text-sm font-medium focus:outline-none focus:border-[#c9a84c]/40"
            placeholder="Category name (e.g. Dining)"
          />
        </div>
        <RemoveButton onClick={onRemove} />
      </div>
      <div className="space-y-3">
        {category.items.map((item, i) => (
          <LocalRecItem_ key={i} item={item} onChange={it => updateItem(i, it)} onRemove={() => removeItem(i)} />
        ))}
      </div>
      <button onClick={addItem} className="mt-3 text-xs text-[#c9a84c]/50 hover:text-[#c9a84c]/80 transition-colors flex items-center gap-1.5">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Add listing
      </button>
    </div>
  );
}

function LocalRecsSection({ items, onChange }: { items: LocalRecCategory[]; onChange: (items: LocalRecCategory[]) => void }) {
  const update = (i: number, cat: LocalRecCategory) => { const next = [...items]; next[i] = cat; onChange(next); };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, { category: '', emoji: '📍', items: [] }]);

  return (
    <div>
      <p className="text-white/30 text-xs mb-5 leading-relaxed">
        Organized by category — shown in the guest welcome book's area guide section.
      </p>
      {items.map((cat, i) => (
        <LocalRecCategoryBlock key={i} category={cat} onChange={c => update(i, c)} onRemove={() => remove(i)} />
      ))}
      <AddButton onClick={add} label="Add category" />
    </div>
  );
}

// ─── Section: Checkout ────────────────────────────────────────────────────────

function CheckoutTaskItem({ task, onChange, onRemove }: { task: CheckoutTask; onChange: (t: CheckoutTask) => void; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-3 group">
      <input
        type="text"
        value={task.category}
        onChange={e => onChange({ ...task, category: e.target.value })}
        className="w-28 bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white/50 text-xs focus:outline-none focus:border-[#c9a84c]/40 shrink-0"
        placeholder="Category"
      />
      <input
        type="text"
        value={task.label}
        onChange={e => onChange({ ...task, label: e.target.value })}
        className="flex-1 bg-[#0d0d0d] border border-white/8 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a84c]/40"
        placeholder="Task description"
      />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <RemoveButton onClick={onRemove} />
      </div>
    </div>
  );
}

function CheckoutSection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  const tasks = data.checkoutTasks ?? [];
  const updateTask = (i: number, task: CheckoutTask) => {
    const next = [...tasks]; next[i] = task; onChange({ checkoutTasks: next });
  };
  const removeTask = (i: number) => onChange({ checkoutTasks: tasks.filter((_, idx) => idx !== i) });
  const addTask = () => {
    const id = `task-${Date.now()}`;
    onChange({ checkoutTasks: [...tasks, { id, category: '', label: '' }] });
  };

  return (
    <div>
      <Field label="Checkout Instructions Summary" hint="Shown at the top of the checkout section in the welcome book">
        <TextArea
          value={data.checkoutInstructions}
          onChange={v => onChange({ checkoutInstructions: v })}
          placeholder="Summary of key checkout steps shown to guests..."
          rows={4}
        />
      </Field>
      <div className="mt-6">
        <label className="block text-xs text-[#c9a84c]/70 uppercase tracking-widest mb-3 font-medium">Checkout Checklist</label>
        <div className="flex items-center gap-2 mb-3 text-[10px] text-white/25 uppercase tracking-widest">
          <span className="w-28">Category</span>
          <span>Task</span>
        </div>
        <div className="space-y-2.5">
          {tasks.map((task, i) => (
            <CheckoutTaskItem key={task.id || i} task={task} onChange={t => updateTask(i, t)} onRemove={() => removeTask(i)} />
          ))}
        </div>
        <div className="mt-4">
          <AddButton onClick={addTask} label="Add task" />
        </div>
      </div>
    </div>
  );
}

// ─── Section: Review Links ────────────────────────────────────────────────────

function ReviewLinksSection({ data, onChange }: { data: AdminProperty; onChange: (d: Partial<AdminProperty>) => void }) {
  const r = data.reviewUrls;
  return (
    <div>
      <Field label="Airbnb Review URL">
        <TextInput value={r.airbnb ?? ''} onChange={v => onChange({ reviewUrls: { ...r, airbnb: v } })} placeholder="https://www.airbnb.com/..." />
      </Field>
      <Field label="Google Review URL">
        <TextInput value={r.google ?? ''} onChange={v => onChange({ reviewUrls: { ...r, google: v } })} placeholder="https://g.page/r/..." />
      </Field>
    </div>
  );
}

// ─── Save bar ─────────────────────────────────────────────────────────────────

function SaveBar({ onSave, onExport, saveState }: { onSave: () => void; onExport: () => void; saveState: 'idle' | 'saved' | 'exporting' }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/6 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
        <p className="text-white/25 text-xs hidden sm:block">
          Changes save to browser localStorage — instant for guests
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={onExport}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/8 text-white/50 hover:text-white/80 text-sm rounded-xl transition-colors border border-white/8 flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5v7M4.5 6l2.5 2.5L9.5 6M2 10.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export JSON
          </button>
          <button
            onClick={onSave}
            className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 ${
              saveState === 'saved'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-[#c9a84c] hover:bg-[#d9b85c] text-black'
            }`}
          >
            {saveState === 'saved' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3.5 3.5L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Saved
              </>
            ) : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main editor ──────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'overview', label: 'Overview', icon: '🏡' },
  { id: 'access', label: 'Access & WiFi', icon: '🔑' },
  { id: 'guide', label: 'House Guide', icon: '📋' },
  { id: 'rules', label: 'House Rules', icon: '📜' },
  { id: 'emergency', label: 'Emergency', icon: '🆘' },
  { id: 'recommendations', label: 'Local Recs', icon: '📍' },
  { id: 'checkout', label: 'Checkout', icon: '🧹' },
  { id: 'reviews', label: 'Review Links', icon: '⭐' },
] as const;

type SectionId = typeof SECTIONS[number]['id'];

export default function PropertyEditorClient({
  tenantId,
  propertyId,
}: {
  tenantId: string;
  propertyId: string;
}) {
  const router = useRouter();
  const [data, setData] = useState<AdminProperty | null>(null);
  const [section, setSection] = useState<SectionId>('overview');
  const [saveState, setSaveState] = useState<'idle' | 'saved' | 'exporting'>('idle');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!isAuthenticated(tenantId)) {
      router.replace('/admin');
      return;
    }
    const prop = loadProperty(propertyId);
    if (prop) {
      setData(prop);
    } else {
      // New/dynamic property — init with blank slate
      setData({
        id: propertyId,
        tenantId,
        name: propertyId,
        address: '',
        checkInTime: '4:00 PM',
        checkOutTime: '10:00 AM',
        active: true,
        isCustom: true,
        wifi: { name: '', password: '' },
        doorCode: '',
        parking: '',
        houseGuide: [],
        localRecommendations: [],
        checkoutTasks: [],
        checkoutInstructions: '',
        houseRules: {},
        emergency: {},
        reviewUrls: {},
      });
    }
  }, [tenantId, propertyId, router]);

  const update = useCallback((partial: Partial<AdminProperty>) => {
    setData(prev => prev ? { ...prev, ...partial } : prev);
  }, []);

  const handleSave = useCallback(() => {
    if (!data) return;
    saveProperty(data);
    setSaveState('saved');
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSaveState('idle'), 2500);
  }, [data]);

  const handleExport = useCallback(() => {
    if (!data) return;
    // Export just this property's CMS data
    const { wifi, doorCode, parking, houseGuide, localRecommendations, checkoutTasks,
      checkoutInstructions, houseRules, emergency, reviewUrls } = data;
    const cmsData = { wifi, doorCode, parking, houseGuide, localRecommendations, checkoutTasks,
      checkoutInstructions, houseRules, emergency, reviewUrls };
    const json = JSON.stringify({ [data.id]: cmsData }, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      setSaveState('exporting');
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setSaveState('idle'), 2000);
    });
    // Also download
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cms-${data.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
      </div>
    );
  }

  const basePath = '/california-luxury-stays';

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Top header */}
      <header className="border-b border-white/6 bg-[#0a0a0a]/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm min-w-0">
            <Link href={`/admin/${tenantId}/properties`} className="text-white/30 hover:text-white/60 transition-colors shrink-0 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Properties
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-white/70 font-medium truncate">{data.name}</span>
            {!data.active && (
              <span className="text-[10px] px-2 py-0.5 bg-white/5 text-white/30 rounded-full border border-white/8 shrink-0">Inactive</span>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`${basePath}/welcome/${propertyId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/8 text-white/40 hover:text-white/70 text-xs rounded-lg transition-colors border border-white/8"
            >
              Preview ↗
            </a>
            <button
              onClick={() => { logout(tenantId); router.push('/admin'); }}
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex min-h-[calc(100vh-57px)]">
        {/* Sidebar — desktop */}
        <aside className="hidden md:block w-56 shrink-0 border-r border-white/6 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto">
          <nav className="p-4 space-y-1">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                  section === s.id
                    ? 'bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <span className="text-base">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile section selector */}
        <div className="md:hidden fixed top-[57px] left-0 right-0 z-20 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/6 px-4 py-2.5 overflow-x-auto">
          <div className="flex gap-2">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  section === s.id
                    ? 'bg-[#c9a84c]/15 text-[#c9a84c] border border-[#c9a84c]/25'
                    : 'bg-white/5 text-white/40 border border-transparent'
                }`}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 px-6 py-8 pb-28 md:pt-8 mt-12 md:mt-0 min-w-0">
          <div className="max-w-2xl">
            <h2 className="text-white text-xl font-serif mb-1">
              {SECTIONS.find(s => s.id === section)?.label}
            </h2>
            <p className="text-white/30 text-sm mb-8 leading-relaxed">
              {section === 'overview' && 'Basic property information and status.'}
              {section === 'access' && 'WiFi credentials, door codes, and parking info shown to guests.'}
              {section === 'guide' && 'Step-by-step guides for appliances and property features.'}
              {section === 'rules' && 'House rules displayed in the guest welcome book.'}
              {section === 'emergency' && 'Emergency contacts and services info for guests.'}
              {section === 'recommendations' && 'Curated local spots organized by category.'}
              {section === 'checkout' && 'Checkout checklist and instructions for departing guests.'}
              {section === 'reviews' && 'Links guests can use to leave reviews after their stay.'}
            </p>

            {section === 'overview' && <OverviewSection data={data} onChange={update} />}
            {section === 'access' && <AccessSection data={data} onChange={update} />}
            {section === 'guide' && <HouseGuideSection items={data.houseGuide} onChange={v => update({ houseGuide: v })} />}
            {section === 'rules' && <HouseRulesSection data={data} onChange={update} />}
            {section === 'emergency' && <EmergencySection data={data} onChange={update} />}
            {section === 'recommendations' && <LocalRecsSection items={data.localRecommendations} onChange={v => update({ localRecommendations: v })} />}
            {section === 'checkout' && <CheckoutSection data={data} onChange={update} />}
            {section === 'reviews' && <ReviewLinksSection data={data} onChange={update} />}
          </div>
        </main>
      </div>

      <SaveBar onSave={handleSave} onExport={handleExport} saveState={saveState} />
    </div>
  );
}
