"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoCarousel from "@/components/PhotoCarousel";
import LodgifyBookingWidget from "@/components/LodgifyBookingWidget";

const PROPERTY = {
  title: "Luxury Northstar Getaway",
  subtitle: "On the Golf Course · Hot Tub · 5,000 sq ft",
  address: "210 Bitter Brush Way, Truckee, CA 96161",
  region: "Northstar, Lake Tahoe",
  guests: 22, bedrooms: 7, baths: 6,
  rating: 5.0, reviews: 5,
  lodgifyId: 746614,
};

const DESCRIPTION = [
  "Welcome to our luxury Northstar residence — a spacious, fully remodeled home situated on the Northstar Golf Course in Martis Valley with panoramic forest and mountain views. This is where elevated mountain living meets resort-style comfort.",
  "With 5,000 square feet of living space, this home offers room for everyone. The great room features vaulted ceilings, a stone gas fireplace, and floor-to-ceiling windows that frame classic Tahoe scenery. Two separate family rooms — one with a game area and one with a media center — mean everyone has their own space.",
  "The chef's kitchen is the heart of the home, equipped with premium appliances, a large island with bar seating, and everything you need to cook for a crowd. Step outside to the expansive deck with hot tub, where you'll enjoy unobstructed views of the golf course and surrounding mountains.",
  "You're steps from Tompkins Trail for hiking and biking, minutes from Northstar Village with its shops and restaurants, and a short drive to Lake Tahoe's north shore. In winter, Northstar ski resort is literally next door.",
];

const THE_SPACE = "5,000 sq ft remodeled home on two levels. Main floor: great room with vaulted ceilings and gas fireplace, chef's kitchen with premium appliances, dining area seats 12, primary suite with king bed and spa-style en-suite bathroom. Upper level: 3 additional bedrooms, 2.5 additional bathrooms, family room with games, media room with projector. Expansive deck with hot tub and mountain views. Heated 2-car garage with ski and snowboard storage.";

const AMENITIES = {
  "Kitchen & Dining": ["Chef's kitchen", "Premium appliances", "Island with bar seating", "Double oven", "Wine fridge", "Espresso machine", "Coffee maker", "Full cookware", "Dining for 12"],
  "Entertainment": ["Sonos whole-home audio", "Smart TVs in every room", "Game room (pool table, foosball)", "Media room with projector", "Board games", "Books"],
  "Outdoor": ["Hot tub", "Expansive deck", "Mountain & golf course views", "Direct trail access (Tompkins)", "BBQ grill", "Outdoor dining for 8"],
  "Comfort": ["Gas fireplace", "Radiant floor heating", "Central A/C", "Spa-style master bath", "Premium linens"],
  "Practical": ["High-speed WiFi", "Smart home system", "Free parking (4 cars)", "Heated 2-car garage", "Ski storage", "Washer & dryer", "Iron", "Hair dryers"],
  "Activities Nearby": ["Northstar ski resort (5 min)", "Northstar Golf Course (on-site)", "Tompkins Trail (direct access)", "Lake Tahoe (15 min)", "Mountain biking", "Hiking"],
};

const HOUSE_RULES = [
  { label: "Check-in", value: "4:00 PM" },
  { label: "Check-out", value: "10:00 AM" },
  { label: "Minimum stay", value: "4 nights" },
  { label: "Pets", value: "No pets (service animals welcome)" },
  { label: "Smoking", value: "No smoking on property" },
  { label: "Parties", value: "No parties or events" },
  { label: "Quiet hours", value: "10 PM – 8 AM" },
  { label: "Max guests", value: "22" },
];

const LOCATION = [
  "On the Northstar Golf Course",
  "Direct access to Tompkins Trail",
  "5 min to Northstar Village",
  "5 min to Northstar ski lifts",
  "15 min to Lake Tahoe north shore",
  "45 min to Reno-Tahoe International Airport",
  "Martis Valley — Tahoe's most prestigious neighborhood",
];

const PHOTOS = [
  { src: "/images/northstar/northstar-1.jpg", alt: "Northstar luxury home exterior with aspen trees and two-car garage" },
  { src: "/images/northstar/northstar-2.jpg", alt: "Great room with leather sectional and hardwood floors" },
  { src: "/images/northstar/northstar-3.jpg", alt: "Living area with sectional sofa and open floor plan to kitchen" },
  { src: "/images/northstar/northstar-4.jpg", alt: "Great room with linear gas fireplace, smart TV, and leather sectional" },
  { src: "/images/northstar/northstar-5.jpg", alt: "Game nook with table and panoramic golf course views" },
  { src: "/images/northstar/northstar-6.jpg", alt: "Open living space with sectional and game table" },
  { src: "/images/northstar/northstar-7.jpg", alt: "Dining room with seating for twelve and golf course views" },
  { src: "/images/northstar/northstar-8.jpg", alt: "Formal dining area with stone accent wall and mountain views" },
  { src: "/images/northstar/northstar-9.jpg", alt: "Kitchen and dining area with natural light" },
  { src: "/images/northstar/northstar-10.jpg", alt: "Chef's kitchen with pendant lights, island bar seating, and premium appliances" },
  { src: "/images/northstar/northstar-11.jpg", alt: "Kitchen detail with double ovens and wine fridge" },
  { src: "/images/northstar/northstar-12.jpg", alt: "Kitchen island with quartz countertops and bar stools" },
  { src: "/images/northstar/northstar-13.jpg", alt: "Open kitchen and living area with forest views" },
  { src: "/images/northstar/northstar-14.jpg", alt: "Breakfast nook with natural light" },
  { src: "/images/northstar/northstar-15.jpg", alt: "Dining area with counter-height table and golf course views" },
  { src: "/images/northstar/northstar-16.jpg", alt: "Hallway and interior details" },
  { src: "/images/northstar/northstar-17.jpg", alt: "Living space with comfortable furnishings" },
  { src: "/images/northstar/northstar-18.jpg", alt: "Bedroom with king bed and mountain decor" },
  { src: "/images/northstar/northstar-19.jpg", alt: "Bedroom with warm lighting and forest views" },
  { src: "/images/northstar/northstar-20.jpg", alt: "Primary suite with king bed, sitting area, and bay windows" },
  { src: "/images/northstar/northstar-21.jpg", alt: "Bedroom with queen bed and cozy decor" },
  { src: "/images/northstar/northstar-22.jpg", alt: "Guest bedroom with warm wood furnishings" },
  { src: "/images/northstar/northstar-23.jpg", alt: "Bunk room for kids" },
  { src: "/images/northstar/northstar-24.jpg", alt: "Bedroom with natural light and mountain views" },
  { src: "/images/northstar/northstar-25.jpg", alt: "Cozy guest room with mirrored closet" },
  { src: "/images/northstar/northstar-26.jpg", alt: "Bedroom suite with sitting area" },
  { src: "/images/northstar/northstar-27.jpg", alt: "Guest bedroom with forest views" },
  { src: "/images/northstar/northstar-28.jpg", alt: "Bedroom with desk workspace and bay windows" },
  { src: "/images/northstar/northstar-29.jpg", alt: "Bedroom with rustic wood headboard" },
  { src: "/images/northstar/northstar-30.jpg", alt: "Primary suite with king bed, sitting chairs, and golf course views" },
  { src: "/images/northstar/northstar-31.jpg", alt: "Spa-style primary bathroom with dual vanity" },
  { src: "/images/northstar/northstar-32.jpg", alt: "Bathroom with walk-in shower and stone tile" },
  { src: "/images/northstar/northstar-33.jpg", alt: "Full bathroom with tub and dual vanity" },
  { src: "/images/northstar/northstar-34.jpg", alt: "Expansive deck with lounge chairs and mountain panorama" },
  { src: "/images/northstar/northstar-35.jpg", alt: "Deck with umbrella seating and golf course views" },
  { src: "/images/northstar/northstar-36.jpg", alt: "Hot tub on the deck with panoramic views" },
  { src: "/images/northstar/northstar-37.jpg", alt: "Outdoor dining area on the deck" },
  { src: "/images/northstar/northstar-38.jpg", alt: "Deck and yard with mountain backdrop" },
  { src: "/images/northstar/northstar-39.jpg", alt: "Property exterior with mature trees" },
  { src: "/images/northstar/northstar-40.jpg", alt: "Family room with large sectional and smart TV" },
  { src: "/images/northstar/northstar-41.jpg", alt: "Media room with comfortable seating" },
  { src: "/images/northstar/northstar-42.jpg", alt: "Game room with pool table" },
  { src: "/images/northstar/northstar-43.jpg", alt: "Laundry room with full-size washer and dryer" },
  { src: "/images/northstar/northstar-44.jpg", alt: "Heated garage with ski and snowboard storage" },
  { src: "/images/northstar/northstar-45.jpg", alt: "Full bathroom with dual vanity and tub-shower combo" },
  { src: "/images/northstar/northstar-46.jpg", alt: "Bathroom with modern fixtures" },
  { src: "/images/northstar/northstar-47.jpg", alt: "Half bath with elegant vanity" },
  { src: "/images/northstar/northstar-48.jpg", alt: "Bathroom with mosaic tile accent and natural light" },
  { src: "/images/northstar/northstar-49.jpg", alt: "Primary suite with king bed and workspace" },
  { src: "/images/northstar/northstar-50.jpg", alt: "Property view from the golf course" },
];

const LOCAL_GUIDE: Record<string, { name: string; description: string; distance: string; href?: string; detail?: string }[]> = {
  "Golf Courses": [
    { name: "Northstar Golf Course", description: "18-hole, par 72, Robert Muir Graves design. Meadow Nine (links-style) + Mountain Nine (tree-lined). The 19th Hole bar has incredible Martis Valley views.", distance: "Steps away", href: "https://www.northstarcalifornia.com/explore-the-resort/activities-and-events/golf.aspx" },
    { name: "Old Greenwood Golf Course", description: "Jack Nicklaus Signature course. Par 72. One of Tahoe's top courses.", distance: "15 min", href: "https://www.oldgreenwood.com/" },
    { name: "Gray's Crossing Golf Course", description: "Peter Jacobsen design. Public. Beautiful Truckee River setting.", distance: "10 min", href: "https://www.grayscrossing.com/" },
    { name: "Tahoe Donner Golf Course", description: "Championship course in a stunning alpine setting.", distance: "15 min", href: "https://www.tahoedonner.com/amenities/golf/" },
    { name: "Coyote Moon Golf Course", description: "Ranked #4 in the Nevada/Tahoe region. Brad Bell design.", distance: "20 min", href: "https://www.coyotemoongolf.com/" },
  ],
  "Skiing & Winter Sports": [
    { name: "Northstar California Resort", description: "3,170 acres, 100 trails, 20 lifts. 60% intermediate. Epic Pass. Village with 35+ shops and restaurants.", distance: "5 min", href: "https://www.northstarcalifornia.com/" },
    { name: "Palisades Tahoe", description: "6,000 acres combined with Alpine Meadows. Olympic heritage (1960 Winter Games). Expert terrain.", distance: "20 min", href: "https://www.palisadestahoe.com/" },
    { name: "Sugar Bowl Resort", description: "Historic resort since 1939. Great powder, less crowded than bigger resorts.", distance: "25 min", href: "https://www.sugarbowl.com/" },
    { name: "Boreal Mountain Resort", description: "Budget-friendly with night skiing and a great terrain park.", distance: "15 min", href: "https://www.rideboreal.com/" },
    { name: "Tahoe Donner Downhill", description: "Perfect for families and beginners. Very affordable.", distance: "15 min", href: "https://www.tahoedonner.com/amenities/downhill-ski-area/" },
    { name: "Tahoe XC (Cross-Country)", description: "100+ km of groomed Nordic trails.", distance: "15 min", href: "https://www.tahoedonner.com/amenities/cross-country-ski-center/" },
  ],
  "Lake Tahoe Activities": [
    { name: "Kings Beach", description: "Largest public sandy beach on Tahoe's north shore — 1,700 feet of south-facing lakefront with a playground.", distance: "15 min", href: "https://parks.nv.gov/parks/sand-harbor" },
    { name: "Sand Harbor (Nevada)", description: "Crystal-clear water, rocky coves, Shakespeare festival in summer.", distance: "25 min", href: "https://parks.nv.gov/parks/sand-harbor" },
    { name: "Tahoe City", description: "Shopping, dining, Fanny Bridge, Commons Beach. Gateway to the west shore.", distance: "20 min" },
    { name: "Truckee River Rafting", description: "Self-guided 5-mile Class I float from Tahoe City. Fun for ages 2+.", distance: "20 min" },
  ],
  "Hiking & Biking": [
    { name: "Tompkins Trail", description: "Direct access from the property. Hiking and mountain biking connecting to the broader Northstar trail network.", distance: "0 min" },
    { name: "Northstar Bike Park", description: "Lift-served mountain biking from smooth cruisers to technical terrain. Rentals and lessons available.", distance: "5 min", href: "https://www.northstarcalifornia.com/" },
    { name: "Martis Valley Trail", description: "Paved 4.6-mile pathway connecting Truckee to Northstar — walk or bike from the house.", distance: "0 min" },
    { name: "Donner Lake Rim Trail", description: "Scenic 23-mile loop through high country. 9 miles open to bikes. Panoramic views.", distance: "15 min" },
    { name: "Shirley Canyon Trail", description: "Moderate hike to waterfalls near Palisades Tahoe.", distance: "20 min" },
    { name: "Mt. Judah Loop", description: "Stunning views of Donner Lake. Moderate, ~5 miles.", distance: "25 min" },
  ],
  "More Activities": [
    { name: "Village at Northstar", description: "Ice skating, bungee trampolines, pottery, candle-making, 35+ shops and restaurants.", distance: "5 min", href: "https://www.northstarcalifornia.com/" },
    { name: "Historic Downtown Truckee", description: "Charming Commercial Row with galleries, boutiques, restaurants, and the historic train depot.", distance: "10 min" },
    { name: "Donner Memorial State Park", description: "History, hiking, picnicking, and the Emigrant Trail Museum at Donner Lake.", distance: "15 min" },
    { name: "The Ritz-Carlton Spa", description: "Full luxury spa and fitness center at Northstar.", distance: "5 min" },
  ],
  "Dining & Apr\u00e8s": [
    { name: "Manzanita at The Ritz-Carlton", description: "Upscale mountain cuisine with a stone fireplace. California-inspired breakfast and dinner.", distance: "5 min", detail: "$$$" },
    { name: "Rubicon Pizza Company", description: "Northstar Village staple. Hand-tossed gourmet pizza, pasta. Family-friendly.", distance: "5 min", detail: "$$" },
    { name: "Backyard Bar & BBQ", description: "Ski-in/ski-out at the Ritz-Carlton. Smoked meats, craft beer, mountain views.", distance: "5 min", detail: "$$" },
    { name: "Moody's Bistro Bar & Beats", description: "Farm-to-table with craft cocktails and live music on historic Commercial Row.", distance: "10 min", detail: "$$$" },
    { name: "Trokay Restaurant", description: "One of the best in the Truckee/Tahoe region. Upscale dining, seasonal menus.", distance: "10 min", detail: "$$$" },
    { name: "Bar of America", description: "Iconic Truckee watering hole since the 1990s. Campfire-inspired American cuisine.", distance: "10 min", detail: "$$" },
    { name: "Squeeze In", description: "Beloved breakfast institution. Enormous selection of creative omelettes.", distance: "10 min", detail: "$" },
    { name: "Christy Hill Lakeside Bistro", description: "Lakefront fine dining with panoramic Lake Tahoe views. French-Mediterranean influences.", distance: "20 min", href: "https://www.christyhill.com/", detail: "$$$" },
  ],
};

const REVIEWS = [
  { text: "Stunning home, even better in person. Every detail was perfect for our family reunion.", guest: "Rachel H.", date: "March 2026" },
  { text: "Hot tub views were incredible — we spent every evening out there watching the sunset.", guest: "Brian S.", date: "February 2026" },
  { text: "Kitchen was amazing for group dinners. Cooked Thanksgiving for 12 with ease.", guest: "Megan D.", date: "January 2026" },
  { text: "Perfect ski trip base — so close to the lifts. We'll be back every season.", guest: "Jason T.", date: "December 2025" },
  { text: "Immaculately clean, beautifully decorated. True luxury mountain living.", guest: "Nicole B.", date: "November 2025" },
];

const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: PROPERTY.title,
  description: DESCRIPTION[0],
  url: "https://californialuxurystays.com/properties/northstar",
  image: PHOTOS.map((p) => `https://californialuxurystays.com${p.src}`),
  address: { "@type": "PostalAddress", streetAddress: "210 Bitter Brush Way", addressLocality: "Truckee", addressRegion: "CA", postalCode: "96161", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: PROPERTY.rating, reviewCount: PROPERTY.reviews, bestRating: 5 },
  numberOfBedrooms: 7,
  numberOfBathroomsTotal: 6,
  occupancy: { "@type": "QuantitativeValue", value: 22 },
  petsAllowed: false,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hot Tub", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Heated Garage", value: true },
  ],
};

export default function NorthstarPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <Header bookNowHref="#booking" />

      {/* Hero — Photo Carousel + Property Info */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-10">
          <PhotoCarousel photos={PHOTOS} aspectRatio="aspect-[16/9]" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-gold-400/80 uppercase tracking-wider">{PROPERTY.region}</p>
              <h1 className="text-3xl font-semibold text-white font-serif sm:text-4xl">{PROPERTY.title}</h1>
              <p className="text-stone-300 mt-1">{PROPERTY.subtitle}</p>
            </div>
            <div className="flex gap-4 text-sm text-stone-300">
              <span className="text-gold-300 font-semibold">{PROPERTY.rating} ★ ({PROPERTY.reviews} reviews)</span>
              <span>·</span>
              <span>{PROPERTY.guests} guests</span>
              <span>·</span>
              <span>{PROPERTY.bedrooms} Bedrooms</span>
              <span>·</span>
              <span>{PROPERTY.baths} Bathrooms</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Link href="/" className="text-sm text-gold-400 hover:text-gold-300">&larr; All Properties</Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="space-y-12">
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">About This Property</h2>
              {DESCRIPTION.map((p, i) => (
                <p key={i} className="text-stone-300 leading-7 mb-4">{p}</p>
              ))}
            </motion.section>

            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">The Space</h2>
              <p className="text-stone-300 leading-7">{THE_SPACE}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-6">Amenities</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(AMENITIES).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">House Rules</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {HOUSE_RULES.map((rule) => (
                  <div key={rule.label} className="flex justify-between py-2 border-b border-gold-400/10">
                    <span className="text-sm text-stone-400">{rule.label}</span>
                    <span className="text-sm text-white font-medium">{rule.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Location</h2>
              <p className="text-stone-300 mb-4">{PROPERTY.address}</p>
              <div className="rounded-xl overflow-hidden border border-gold-400/10 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12322!2d-120.1285!3d39.2745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bd5e2f04b5e39%3A0x0!2s210+Bitter+Brush+Way%2C+Truckee%2C+CA+96161!5e0!3m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Northstar property location map"
                />
              </div>
              <ul className="space-y-2">
                {LOCATION.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Local Guide — Things to Do & Places to Eat */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-2">Around the Property</h2>
              <p className="text-sm text-stone-400 mb-8">Our curated guide to the best of Northstar, Truckee, and Lake Tahoe.</p>
              {Object.entries(LOCAL_GUIDE).map(([category, items]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">{category}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {items.map((item) => (
                      <div key={item.name} className="rounded-xl border border-gold-400/10 bg-charcoal-700/50 p-4 space-y-1">
                        <div className="flex items-center justify-between">
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-gold-300 transition">
                              {item.name} <span className="text-gold-400/50 text-xs">&nearr;</span>
                            </a>
                          ) : (
                            <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                          )}
                          <span className="text-xs text-gold-400/70 shrink-0 ml-2">{item.distance}{item.detail ? ` · ${item.detail}` : ""}</span>
                        </div>
                        <p className="text-xs text-stone-400 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">
                Guest Reviews <span className="text-gold-300">{PROPERTY.rating} ★</span> <span className="text-stone-400 text-base font-normal">({PROPERTY.reviews} reviews)</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {REVIEWS.map((review) => (
                  <div key={review.guest} className="rounded-xl border border-gold-400/10 bg-charcoal-700/50 p-4 space-y-2">
                    <div className="flex items-start gap-2 text-sm text-stone-300">
                      <span className="text-gold-400 mt-0.5 shrink-0">★</span>
                      <p className="leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                    </div>
                    <p className="text-xs text-stone-500 pl-5">— {review.guest}, {review.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div id="booking" className="space-y-6 scroll-mt-24">
            <div className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-sm text-gold-400/80">{PROPERTY.rating} ★ · {PROPERTY.reviews} reviews · {PROPERTY.region}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Sleeps</p><p className="font-semibold text-white">{PROPERTY.guests}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bedrooms</p><p className="font-semibold text-white">{PROPERTY.bedrooms}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bathrooms</p><p className="font-semibold text-white">{PROPERTY.baths}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Rating</p><p className="font-semibold text-gold-300">{PROPERTY.rating} ★</p></div>
              </div>

              <LodgifyBookingWidget rentalId={PROPERTY.lodgifyId} />

              <p className="text-xs text-center text-stone-500">Book direct for the best rate — no platform fees</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
