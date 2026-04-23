// Admin store — localStorage-backed, multi-tenant ready
// CMS content writes to cms-override-{id} (compatible with properties.ts mergeWithCMS)
// Property metadata (name, address, active, tenantId) stored in admin-meta-v2

import cmsDefaults from '@/data/cms-content.json';

// ─── Types ─────────────────────────────────────────────────────────────────

export interface HouseGuideItem {
  title: string;
  instructions: string;
  videoUrl: string | null;
}

export interface LocalRecItem {
  name: string;
  description: string;
  distance: string;
  tip: string;
}

export interface LocalRecCategory {
  category: string;
  emoji: string;
  items: LocalRecItem[];
}

export interface CheckoutTask {
  id: string;
  category: string;
  label: string;
}

export interface HouseRules {
  quietHours?: string;
  maxOccupancy?: number;
  pets?: string;
  smoking?: string;
  parties?: string;
  trash?: string;
}

export interface Emergency {
  localPolice?: string;
  fire?: string;
  hospital?: string;
  propertyManager?: string;
  propertyManagerEmail?: string;
}

export interface ReviewUrls {
  airbnb?: string;
  google?: string;
}

export interface Wifi {
  name: string;
  password: string;
}

// CMS content fields (written to cms-override-{propertyId})
export interface PropertyCMS {
  wifi: Wifi;
  doorCode: string;
  parking: string;
  houseGuide: HouseGuideItem[];
  localRecommendations: LocalRecCategory[];
  checkoutTasks: CheckoutTask[];
  checkoutInstructions: string;
  houseRules: HouseRules;
  emergency: Emergency;
  reviewUrls: ReviewUrls;
}

// Metadata fields (written to admin-meta-v2)
export interface PropertyMeta {
  id: string;
  tenantId: string;
  name: string;
  address?: string;
  checkInTime?: string;
  checkOutTime?: string;
  active: boolean;
  isCustom?: boolean; // true = added via admin (not in base properties.ts)
}

// Combined view used in admin UI
export interface AdminProperty extends PropertyMeta, PropertyCMS {}

export interface TenantMeta {
  id: string;
  name: string;
}

export interface AdminMeta {
  version: number;
  tenants: Record<string, TenantMeta>;
  properties: Record<string, PropertyMeta>;
}

// ─── Base defaults ──────────────────────────────────────────────────────────

const BASE_PROPERTY_NAMES: Record<string, string> = {
  graeagle: 'Family Cabin in Graeagle',
  northstar: 'Luxury Northstar Getaway',
};

const BASE_PROPERTY_ADDRESSES: Record<string, string> = {
  graeagle: '47 Shasta Trail, Graeagle, CA 96103',
  northstar: '210 Bitter Brush Way, Placer County, CA 96161',
};

const CMS_KEY = (id: string) => `cms-override-${id}`;
const META_KEY = 'cls-admin-meta-v2';

// ─── Default meta builder ────────────────────────────────────────────────────

function buildDefaultMeta(): AdminMeta {
  const cms = cmsDefaults as Record<string, any>;
  const properties: Record<string, PropertyMeta> = {};

  for (const id of Object.keys(cms)) {
    properties[id] = {
      id,
      tenantId: 'cls',
      name: BASE_PROPERTY_NAMES[id] ?? id,
      address: BASE_PROPERTY_ADDRESSES[id] ?? '',
      checkInTime: '4:00 PM',
      checkOutTime: '10:00 AM',
      active: true,
      isCustom: false,
    };
  }

  return {
    version: 2,
    tenants: {
      cls: { id: 'cls', name: 'California Luxury Stays' },
    },
    properties,
  };
}

// ─── Meta store ─────────────────────────────────────────────────────────────

export function loadMeta(): AdminMeta {
  if (typeof window === 'undefined') return buildDefaultMeta();
  try {
    const raw = localStorage.getItem(META_KEY);
    if (raw) {
      const parsed: AdminMeta = JSON.parse(raw);
      const defaults = buildDefaultMeta();
      // Ensure all default properties exist
      for (const [id, defaultProp] of Object.entries(defaults.properties)) {
        if (!parsed.properties[id]) {
          parsed.properties[id] = defaultProp;
        }
      }
      // Ensure default tenant exists
      if (!parsed.tenants?.cls) {
        parsed.tenants = parsed.tenants ?? {};
        parsed.tenants.cls = defaults.tenants.cls;
      }
      return parsed;
    }
  } catch {}
  return buildDefaultMeta();
}

export function saveMeta(meta: AdminMeta): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(META_KEY, JSON.stringify(meta));
  } catch {}
}

// ─── CMS content store ───────────────────────────────────────────────────────

function defaultCMS(propertyId: string): PropertyCMS {
  const cms = (cmsDefaults as Record<string, any>)[propertyId] ?? {};
  return {
    wifi: cms.wifi ?? { name: '', password: '' },
    doorCode: cms.doorCode ?? '',
    parking: cms.parking ?? '',
    houseGuide: cms.houseGuide ?? [],
    localRecommendations: cms.localRecommendations ?? [],
    checkoutTasks: cms.checkoutTasks ?? [],
    checkoutInstructions: cms.checkoutInstructions ?? '',
    houseRules: cms.houseRules ?? {},
    emergency: cms.emergency ?? {},
    reviewUrls: cms.reviewUrls ?? {},
  };
}

export function loadCMS(propertyId: string): PropertyCMS {
  const defaults = defaultCMS(propertyId);
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = localStorage.getItem(CMS_KEY(propertyId));
    if (raw) {
      const overrides = JSON.parse(raw);
      return {
        wifi: overrides.wifi ?? defaults.wifi,
        doorCode: overrides.doorCode ?? defaults.doorCode,
        parking: overrides.parking ?? defaults.parking,
        houseGuide: overrides.houseGuide ?? defaults.houseGuide,
        localRecommendations: overrides.localRecommendations ?? defaults.localRecommendations,
        checkoutTasks: overrides.checkoutTasks ?? defaults.checkoutTasks,
        checkoutInstructions: overrides.checkoutInstructions ?? defaults.checkoutInstructions,
        houseRules: { ...defaults.houseRules, ...(overrides.houseRules ?? {}) },
        emergency: { ...defaults.emergency, ...(overrides.emergency ?? {}) },
        reviewUrls: { ...defaults.reviewUrls, ...(overrides.reviewUrls ?? {}) },
      };
    }
  } catch {}
  return defaults;
}

export function saveCMS(propertyId: string, cms: PropertyCMS): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CMS_KEY(propertyId), JSON.stringify(cms));
  } catch {}
}

// ─── Combined property ───────────────────────────────────────────────────────

export function loadProperty(propertyId: string): AdminProperty | null {
  const meta = loadMeta();
  const propMeta = meta.properties[propertyId];
  if (!propMeta) return null;
  const cms = loadCMS(propertyId);
  return { ...propMeta, ...cms };
}

export function saveProperty(property: AdminProperty): void {
  const meta = loadMeta();
  const { wifi, doorCode, parking, houseGuide, localRecommendations, checkoutTasks,
    checkoutInstructions, houseRules, emergency, reviewUrls, ...propMeta } = property;

  meta.properties[property.id] = propMeta;
  saveMeta(meta);
  saveCMS(property.id, { wifi, doorCode, parking, houseGuide, localRecommendations,
    checkoutTasks, checkoutInstructions, houseRules, emergency, reviewUrls });
}

export function getPropertiesForTenant(tenantId: string): AdminProperty[] {
  const meta = loadMeta();
  return Object.values(meta.properties)
    .filter(p => p.tenantId === tenantId)
    .map(p => ({ ...p, ...loadCMS(p.id) }));
}

export function toggleActive(propertyId: string): boolean {
  const meta = loadMeta();
  if (!meta.properties[propertyId]) return false;
  meta.properties[propertyId].active = !meta.properties[propertyId].active;
  saveMeta(meta);
  return meta.properties[propertyId].active;
}

export function duplicateProperty(propertyId: string, tenantId: string): AdminProperty | null {
  const original = loadProperty(propertyId);
  if (!original) return null;
  const newId = `${propertyId}-copy-${Date.now()}`;
  const newProp: AdminProperty = {
    ...JSON.parse(JSON.stringify(original)),
    id: newId,
    name: `${original.name} (Copy)`,
    isCustom: true,
    tenantId,
  };
  saveProperty(newProp);
  return newProp;
}

export function createNewProperty(tenantId: string, name: string, address: string): AdminProperty {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const id = `${slug}-${Date.now()}`;
  const newProp: AdminProperty = {
    id,
    tenantId,
    name,
    address,
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
  };
  saveProperty(newProp);
  return newProp;
}

export function deleteProperty(propertyId: string): void {
  const meta = loadMeta();
  delete meta.properties[propertyId];
  saveMeta(meta);
  if (typeof window !== 'undefined') {
    try { localStorage.removeItem(CMS_KEY(propertyId)); } catch {}
  }
}

// ─── Export helpers ──────────────────────────────────────────────────────────

export function exportCMSJson(tenantId: string): string {
  const meta = loadMeta();
  const out: Record<string, any> = {};
  for (const [id, prop] of Object.entries(meta.properties)) {
    if (prop.tenantId !== tenantId) continue;
    const cms = loadCMS(id);
    out[id] = cms;
  }
  return JSON.stringify(out, null, 2);
}
