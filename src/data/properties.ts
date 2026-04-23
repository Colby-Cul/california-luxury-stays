import cmsContent from './cms-content.json';

export interface LocalRecommendationItem {
  name: string;
  description: string;
  distance?: string;
  tip?: string;
}

export interface LocalRecommendationCategory {
  category: string;
  emoji: string;
  items: LocalRecommendationItem[];
}

export interface CheckoutTask {
  id: string;
  category: string;
  label: string;
}

export interface DiningSpot {
  name: string;
  type: string;
  distance: string;
  notes: string;
}

export interface HouseGuideItem {
  title: string;
  instructions: string;
  videoUrl: string | null;
}

export interface Property {
  id: string;
  name: string;
  subtitle: string;
  heroImageUrl?: string;
  lodgifyId: number;
  features: string[];
  wifi: { name: string; password: string };
  doorCode: string;
  parking: string;
  houseGuide: HouseGuideItem[];
  kitchen: string[];
  dining: DiningSpot[];
  activities: string[];
  houseRules: {
    quietHours: string;
    maxOccupancy: number;
    pets: string;
    smoking: string;
    parties: string;
    trash: string;
  };
  emergency: {
    localPolice: string;
    fire: string;
    hospital: string;
    propertyManager: string;
    propertyManagerEmail: string;
  };
  reviewUrls: {
    airbnb: string;
    google: string;
  };
  checkoutInstructions?: string;
  localRecommendations?: LocalRecommendationCategory[];
  checkoutTasks?: CheckoutTask[];
}

// Merge static property data with CMS content (CMS overrides placeholders)
function mergeWithCMS(propertyId: string, base: Property): Property {
  const cms = (cmsContent as Record<string, any>)[propertyId];
  if (!cms) return base;

  // Check for localStorage overrides (admin panel changes)
  let localOverrides: Record<string, any> = {};
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(`cms-override-${propertyId}`);
      if (stored) localOverrides = JSON.parse(stored);
    } catch {}
  }

  const merged = { ...cms, ...localOverrides };

  return {
    ...base,
    name: merged.name ?? base.name,
    subtitle: merged.subtitle ?? base.subtitle,
    heroImageUrl: merged.heroImageUrl ?? base.heroImageUrl,
    features: merged.features ?? base.features,
    wifi: merged.wifi ?? base.wifi,
    doorCode: merged.doorCode ?? base.doorCode,
    parking: merged.parking ?? base.parking,
    houseGuide: merged.houseGuide ?? base.houseGuide,
    kitchen: merged.kitchen ?? base.kitchen,
    dining: merged.dining ?? base.dining,
    activities: merged.activities ?? base.activities,
    checkoutInstructions: merged.checkoutInstructions ?? base.checkoutInstructions,
    localRecommendations: merged.localRecommendations ?? base.localRecommendations,
    checkoutTasks: merged.checkoutTasks ?? base.checkoutTasks,
    houseRules: {
      ...base.houseRules,
      ...(merged.houseRules ?? {}),
    },
    emergency: {
      ...base.emergency,
      ...(merged.emergency ?? {}),
    },
    reviewUrls: {
      ...base.reviewUrls,
      ...(merged.reviewUrls ?? {}),
    },
  };
}

const _baseProperties: Record<string, Property> = {
  graeagle: {
    id: 'graeagle',
    name: 'Family Cabin in Graeagle',
    subtitle: '47 Shasta Trail, Graeagle, CA 96103',
    lodgifyId: 533203,
    features: ['3 Bedrooms', 'Sleeps 10', 'EV Charger', 'Stone Fireplace', '86" 4K TV', 'BBQ & Smoker'],
    wifi: { name: '', password: '' },
    doorCode: '',
    parking: 'Driveway parking for 3 vehicles. EV charger in driveway.',
    houseGuide: [],
    kitchen: [
      'Fully equipped cookware',
      'Coffee maker',
      'New electric stove',
      'New dishwasher',
      'New fridge with extra icemaker',
      'Queen pull-out couch',
    ],
    dining: [
      { name: 'Knotty Pine Bar & Restaurant', type: 'Bar/Restaurant', distance: 'Walkable', notes: 'Local favorite' },
      { name: 'Graeagle Meadows Golf Course', type: 'Golf', distance: '5 min', notes: '' },
      { name: 'Graeagle Landing', type: 'Restaurant', distance: '5 min', notes: '' },
    ],
    activities: [
      'Graeagle Golf Course (5 min)',
      'Tennis & Pickleball Courts (walkable)',
      'Hiking & Biking Trails',
      'Feather River Canyon',
      'Lake Davis',
      'Gold Lake',
    ],
    houseRules: {
      quietHours: '10 PM - 8 AM',
      maxOccupancy: 10,
      pets: 'No pets allowed',
      smoking: 'No smoking indoors',
      parties: 'No parties or events',
      trash: '',
    },
    emergency: {
      localPolice: '530-832-4950',
      fire: '911',
      hospital: 'Plumas District Hospital, Quincy — 530-283-2121',
      propertyManager: '',
      propertyManagerEmail: '',
    },
    reviewUrls: {
      airbnb: 'https://www.airbnb.com/rooms/533203',
      google: '',
    },
  },
  northstar: {
    id: 'northstar',
    name: 'Luxury Northstar Getaway',
    subtitle: '210 Bitter Brush Way, Placer County, CA 96161',
    lodgifyId: 746614,
    features: ['Luxury 5-Star', 'Hot Tub', "Chef's Kitchen", 'Golf Course Views', 'Two Family Rooms', 'Mountain Views'],
    wifi: { name: '', password: '' },
    doorCode: '',
    parking: '',
    houseGuide: [],
    kitchen: ["Chef's kitchen", 'High-end cookware', 'Premium coffee maker', 'Full appliances'],
    dining: [
      { name: 'Northstar Golf Course Grill', type: 'Restaurant/Golf', distance: 'On property', notes: '' },
      { name: 'Tahoe Vista restaurants', type: 'Dining', distance: '15 min', notes: '' },
    ],
    activities: [
      'Northstar Golf Course',
      'Tompkins Trail (direct access)',
      'Lake Tahoe (20 min)',
      'Northstar Ski Resort',
      'Mountain biking',
      'Truckee dining & shopping',
    ],
    houseRules: {
      quietHours: '10 PM - 8 AM',
      maxOccupancy: 12,
      pets: 'No pets allowed',
      smoking: 'No smoking indoors',
      parties: 'No parties or events',
      trash: '',
    },
    emergency: {
      localPolice: '530-546-1212',
      fire: '911',
      hospital: 'Tahoe Forest Hospital, Truckee — 530-587-6011',
      propertyManager: '',
      propertyManagerEmail: '',
    },
    reviewUrls: {
      airbnb: 'https://www.airbnb.com/rooms/746614',
      google: '',
    },
  },
};

// Properties are built lazily client-side to support localStorage overrides
let _cachedProperties: Record<string, Property> | null = null;

function buildProperties(): Record<string, Property> {
  return Object.fromEntries(
    Object.entries(_baseProperties).map(([id, base]) => [id, mergeWithCMS(id, base)])
  );
}

// Proxy to rebuild when accessed (handles localStorage changes)
export function getProperties(): Record<string, Property> {
  return buildProperties();
}

// Named export for backward compat — rebuilt on each access if needed
export const properties: Record<string, Property> = new Proxy({} as Record<string, Property>, {
  get(_target, prop: string) {
    return buildProperties()[prop];
  },
  ownKeys() {
    return Object.keys(_baseProperties);
  },
  has(_target, prop: string) {
    return prop in _baseProperties;
  },
  getOwnPropertyDescriptor(_target, prop: string) {
    if (prop in _baseProperties) return { enumerable: true, configurable: true };
    return undefined;
  },
});

export function getProperty(id: string): Property | undefined {
  return buildProperties()[id];
}

export function getAllPropertyIds(): string[] {
  return Object.keys(_baseProperties);
}

export function savePropertyOverride(propertyId: string, overrides: Partial<Property>): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = JSON.parse(localStorage.getItem(`cms-override-${propertyId}`) || '{}');
    localStorage.setItem(`cms-override-${propertyId}`, JSON.stringify({ ...existing, ...overrides }));
  } catch {}
}

export function clearPropertyOverride(propertyId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`cms-override-${propertyId}`);
}
