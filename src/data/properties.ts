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
}

export const properties: Record<string, Property> = {
  graeagle: {
    id: 'graeagle',
    name: 'Family Cabin in Graeagle',
    subtitle: '47 Shasta Trail, Graeagle, CA 96103',
    lodgifyId: 533203,
    features: ['3 Bedrooms', 'Sleeps 10', 'EV Charger', 'Stone Fireplace', '86" 4K TV', 'BBQ & Smoker'],
    wifi: { name: '{{WIFI_NAME}}', password: '{{WIFI_PASSWORD}}' },
    doorCode: '{{DOOR_CODE}}',
    parking: 'Driveway parking for 3 vehicles. EV charger in driveway.',
    houseGuide: [
      { title: 'Stone Fireplace', instructions: '{{FIREPLACE_INSTRUCTIONS}}', videoUrl: null },
      { title: '86" 4K TV & Streaming', instructions: '{{TV_INSTRUCTIONS}}', videoUrl: null },
      { title: 'Weber Charcoal BBQ', instructions: '{{BBQ_INSTRUCTIONS}}', videoUrl: null },
      { title: 'Traeger Electric Smoker', instructions: '{{SMOKER_INSTRUCTIONS}}', videoUrl: null },
      { title: 'EV Charger', instructions: '{{EV_INSTRUCTIONS}}', videoUrl: null },
      { title: 'Thermostat', instructions: '{{THERMOSTAT_INSTRUCTIONS}}', videoUrl: null },
    ],
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
      trash: 'Take trash to bins at end of driveway',
    },
    emergency: {
      localPolice: '530-832-4950',
      fire: '911',
      hospital: 'Plumas District Hospital, Quincy — 530-283-2121',
      propertyManager: '{{MANAGER_PHONE}}',
      propertyManagerEmail: '{{MANAGER_EMAIL}}',
    },
    reviewUrls: {
      airbnb: 'https://www.airbnb.com/rooms/533203',
      google: '{{GOOGLE_REVIEW_URL}}',
    },
  },
  northstar: {
    id: 'northstar',
    name: 'Luxury Northstar Getaway',
    subtitle: '210 Bitter Brush Way, Placer County, CA 96161',
    lodgifyId: 746614,
    features: ['Luxury 5-Star', 'Hot Tub', "Chef's Kitchen", 'Golf Course Views', 'Two Family Rooms', 'Mountain Views'],
    wifi: { name: '{{WIFI_NAME}}', password: '{{WIFI_PASSWORD}}' },
    doorCode: '{{DOOR_CODE}}',
    parking: '{{PARKING_INSTRUCTIONS}}',
    houseGuide: [
      { title: 'Hot Tub', instructions: '{{HOT_TUB_INSTRUCTIONS}}', videoUrl: null },
      { title: 'TV & Streaming', instructions: '{{TV_INSTRUCTIONS}}', videoUrl: null },
      { title: "Chef's Kitchen", instructions: '{{KITCHEN_INSTRUCTIONS}}', videoUrl: null },
      { title: 'Thermostat', instructions: '{{THERMOSTAT_INSTRUCTIONS}}', videoUrl: null },
    ],
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
      trash: '{{TRASH_INSTRUCTIONS}}',
    },
    emergency: {
      localPolice: '530-546-1212',
      fire: '911',
      hospital: 'Tahoe Forest Hospital, Truckee — 530-587-6011',
      propertyManager: '{{MANAGER_PHONE}}',
      propertyManagerEmail: '{{MANAGER_EMAIL}}',
    },
    reviewUrls: {
      airbnb: 'https://www.airbnb.com/rooms/746614',
      google: '{{GOOGLE_REVIEW_URL}}',
    },
  },
};

export function getProperty(id: string): Property | undefined {
  return properties[id];
}

export function getAllPropertyIds(): string[] {
  return Object.keys(properties);
}
