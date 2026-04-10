"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import LodgifyBookingWidget from "@/components/LodgifyBookingWidget";

const PROPERTY = {
  title: "Family Cabin in Graeagle",
  subtitle: "King Bed · EV Charging · Stone Fireplace",
  address: "47 Shasta Trail, Graeagle, CA 96103",
  region: "Plumas County, Sierra Nevada",
  guests: 12, bedrooms: 3, beds: 9, baths: 2.5,
  rating: 4.73, reviews: 52,
  lodgifyId: 533203,
};

const DESCRIPTION = [
  "An idyllic retreat at 47 Shasta Trail in Graeagle, California — a charming cabin nestled in the heart of the Sierra Nevada Mountains. With its rustic allure and modern comforts, this cozy property invites you to unwind by the stone fireplace or watch a movie with the family on the 86-inch 4K TV in the family room.",
  "Explore the endless hiking and biking trails just steps from the front door, and marvel at the local wildlife — deer, eagles, and the occasional bear are all part of the Graeagle experience. Fire up the Weber charcoal grill or the Traeger electric smoker on the deck for a mountain-style dinner under the stars.",
  "The cabin sits on a quiet, tree-lined street in one of Graeagle's most desirable neighborhoods. You're minutes from the Graeagle Meadow, the historic Mill Pond, and Plumas Eureka State Park. In winter, skiing and cross-country trails are right in your backyard.",
];

const THE_SPACE = "The main living area features an open floor plan with a stone fireplace as the centerpiece. The chef's kitchen is fully equipped with modern appliances, and the dining area seats 8. The family room features an 86-inch 4K Smart TV. Three bedrooms include a master suite with a king bed, a bedroom with a queen bed, and an upstairs loft bedroom. Two and a half bathrooms. A wraparound deck provides forest views from every angle.";

const AMENITIES = {
  "Kitchen & Dining": ["Full kitchen", "Refrigerator", "Oven & microwave", "Dishwasher", "Coffee maker", "Toaster", "Cooking basics", "Dishes & silverware", "Dining for 8"],
  "Entertainment": ["86\" 4K Smart TV", "Streaming services", "Board games", "Card games", "Books"],
  "Outdoor": ["Weber charcoal grill", "Traeger electric smoker", "Wraparound deck", "Outdoor dining", "Forest views", "Yard"],
  "Comfort": ["Wood-burning stone fireplace (firewood provided)", "Central heating", "Ceiling fans", "Premium linens", "Extra pillows & blankets"],
  "Practical": ["Free WiFi", "Free parking (3 cars)", "EV charger (Level 2)", "Washer & dryer", "Iron", "Hair dryer"],
  "Activities Nearby": ["Hiking trails (direct access)", "Biking trails", "Skiing (Plumas Eureka)", "Fishing", "Golf (Graeagle Meadows)"],
};

const HOUSE_RULES = [
  { label: "Check-in", value: "4:00 PM" },
  { label: "Check-out", value: "10:00 AM" },
  { label: "Minimum stay", value: "3 nights" },
  { label: "Pets", value: "Dogs welcome (2 max, $75 fee)" },
  { label: "Smoking", value: "No smoking indoors" },
  { label: "Parties", value: "No parties without prior approval" },
  { label: "Quiet hours", value: "10 PM – 8 AM" },
  { label: "Max guests", value: "12" },
];

const LOCATION = [
  "5 min walk to Graeagle Meadow",
  "10 min drive to Plumas Eureka State Park",
  "15 min to Lakes Basin Recreation Area",
  "45 min to Reno-Tahoe International Airport",
  "Quiet residential neighborhood",
  "Wildlife viewing from the deck",
];

const PHOTOS = [
  { src: "/images/graeagle/front-yard-snow.jpg", alt: "Graeagle cabin front yard blanketed in fresh snow with towering pines" },
  { src: "/images/graeagle/family-room.jpg", alt: "Cozy family room with stone fireplace and comfortable seating" },
  { src: "/images/graeagle/interior-1.jpg", alt: "Open living area with natural light and mountain decor" },
  { src: "/images/graeagle/interior-2.jpg", alt: "Dining area with seating for eight guests" },
  { src: "/images/graeagle/interior-3.jpg", alt: "Fully equipped chef's kitchen with modern appliances" },
  { src: "/images/graeagle/interior-4.jpg", alt: "Master bedroom with king bed and forest views" },
  { src: "/images/graeagle/interior-5.jpg", alt: "Guest bedroom with queen bed and warm decor" },
  { src: "/images/graeagle/interior-6.jpg", alt: "Bunk room perfect for kids" },
  { src: "/images/graeagle/interior-7.jpg", alt: "Wraparound deck with forest views and outdoor dining" },
  { src: "/images/graeagle/interior-8.jpg", alt: "Cabin exterior surrounded by Sierra Nevada pines" },
];

const LOCAL_GUIDE: Record<string, { name: string; description: string; distance: string; href?: string; detail?: string }[]> = {
  "Golf Courses": [
    { name: "Graeagle Meadows Golf Course", description: "Par 72, 6,725 yards. Golf Digest \"Best Places to Play.\" Mountain views, elevated tees.", distance: "5 min", href: "https://graeaglemeadows.com/" },
    { name: "Golf Club at Whitehawk Ranch", description: "Top 10 in California. Par 71, 6,983 yards. Dick Bailey design. Streams, waterfalls, wildflowers.", distance: "10 min", href: "https://www.whitehawkranch.com/" },
    { name: "Plumas Pines Golf Course", description: "Par 72. Full resort with Longboard's Restaurant. Great for groups.", distance: "8 min", href: "https://www.plumaspinesgolfresort.com/" },
    { name: "Grizzly Ranch Golf Club", description: "#1 public course in the Sierra Nevada, #11 in California (Golf Digest). Bob Cupp design.", distance: "20 min", href: "https://www.grizzlyranchgolfclub.com/" },
    { name: "Dragon at Nakoma", description: "Frank Lloyd Wright clubhouse — the only one in the world for a golf club. Golf World Top 75.", distance: "25 min", href: "https://www.nakomaresort.com/" },
    { name: "Feather River Park Resort", description: "Casual 9-hole, par 35 on the Middle Fork of the Feather River. Great for beginners and families.", distance: "5 min" },
  ],
  "Hiking & Nature": [
    { name: "Frazier Falls Trail", description: "Easy, paved 1-mile family-friendly hike to a stunning 178-foot waterfall. Wheelchair accessible.", distance: "20 min", href: "https://www.fs.usda.gov/recarea/plumas/recarea/?recid=11488" },
    { name: "Lakes Basin Recreation Area", description: "50+ glacial lakes including Gold Lake and Sardine Lake. Swimming, kayaking, fishing, wildflower viewing.", distance: "15 min", href: "https://www.fs.usda.gov/recarea/plumas/recarea/?recid=11453" },
    { name: "Plumas Eureka State Park", description: "Historic gold mining museum, Eureka Peak loop trail, camping. Winter cross-country skiing.", distance: "10 min", href: "https://www.parks.ca.gov/?page_id=507" },
    { name: "Graeagle Meadow", description: "Flat walking path right from the cabin. Wildflowers in summer, wildlife year-round.", distance: "5 min walk" },
  ],
  "Skiing & Winter": [
    { name: "Plumas Eureka Ski Bowl", description: "Small, historic community ski area in the state park. Cross-country trails.", distance: "10 min", href: "https://www.parks.ca.gov/?page_id=507" },
    { name: "Northstar California", description: "Full resort, 3,170 acres, 100 trails. Great day trip from the cabin.", distance: "60 min", href: "https://www.northstarcalifornia.com/" },
  ],
  "Fishing & Water": [
    { name: "Middle Fork Feather River", description: "Year-round trout fishing across 1,000+ miles of mountain streams in Plumas County.", distance: "1–10 mi" },
    { name: "Gold Lake", description: "Pristine alpine lake. Excellent fly fishing, kayaking, and shoreline picnicking.", distance: "15 min" },
    { name: "Graeagle Mill Pond", description: "In-town swimming with kayak, paddleboard, canoe, and paddleboat rentals plus a sandy beach.", distance: "2 min walk" },
  ],
  "More Activities": [
    { name: "Western Pacific Railroad Museum", description: "One of the largest diesel locomotive collections in the country. Seasonal train rides and cab rides.", distance: "20 min", href: "https://wplives.org/" },
    { name: "Mountain Biking", description: "Hundreds of miles of trails. Howling Dog Bike and Ski for rentals in Blairsden.", distance: "Various" },
    { name: "Horseback Riding", description: "Pacific Dunes Ranch Riding Stables — guided trail rides through the Plumas National Forest.", distance: "15 min" },
  ],
  "Dining & Drinks": [
    { name: "Grizzly Grill", description: "Best restaurant in the area. Upscale American with steaks, seafood, and housemade desserts.", distance: "1 mi", detail: "$$" },
    { name: "Cuccia's Pasta & Pizza", description: "Family-run Sicilian restaurant. Handmade pizza, fresh seafood, curated wine list.", distance: "0.5 mi", detail: "$$" },
    { name: "The Iron Door", description: "Historic 1906 fine-dining. Lobster, wiener schnitzel, rib eye in rustic elegance.", distance: "5 mi", detail: "$$$" },
    { name: "The Brewing Lair", description: "Outdoor craft brewery on 15 forested acres. House-brewed ales, tacos, disc golf, live summer music.", distance: "2 mi", href: "https://www.thebrewinglair.com/", detail: "$" },
    { name: "Longboards Bar & Grill", description: "Casual bistro at Plumas Pines Golf Resort. Hearty entrees, craft cocktails, TVs for games.", distance: "2 mi", detail: "$$" },
    { name: "Firewoods at Gray Eagle Lodge", description: "Seasonal gourmet lodge restaurant. Prime rib, sea bass, cocktails in a serene forest setting.", distance: "5 mi", href: "https://www.grayeaglelodge.com/", detail: "$$$" },
    { name: "Graeagle Outpost", description: "Espresso, breakfast burritos, ice cream, milkshakes. Also the Mill Pond rental hub.", distance: "0.2 mi", detail: "$" },
    { name: "Graeagle Meadows Clubhouse", description: "Panoramic mountain views, Saturday prime rib, outdoor patio dining.", distance: "0.3 mi", href: "https://graeaglemeadows.com/restaurant/", detail: "$$" },
  ],
};

const REVIEWS = [
  { text: "Incredibly clean and well-maintained. We felt right at home from the moment we walked in.", guest: "Sarah M.", date: "March 2026" },
  { text: "Perfect for families — kids loved the bunk room and we loved the stone fireplace.", guest: "David R.", date: "February 2026" },
  { text: "Stone fireplace was the highlight. Cozy, warm, and beautifully maintained.", guest: "Jennifer L.", date: "January 2026" },
  { text: "Great communication, smooth check-in. Everything was exactly as described.", guest: "Michael T.", date: "December 2025" },
  { text: "Peaceful location, gorgeous surroundings. Deer on the deck every morning!", guest: "Amy K.", date: "November 2025" },
  { text: "Well-stocked kitchen made cooking for the whole family a breeze.", guest: "Chris P.", date: "October 2025" },
  { text: "EV charger was a huge plus — didn't expect that at a mountain cabin!", guest: "Lauren W.", date: "September 2025" },
];

const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: PROPERTY.title,
  description: DESCRIPTION[0],
  url: "https://californialuxurystays.com/properties/graeagle",
  image: PHOTOS.map((p) => `https://californialuxurystays.com${p.src}`),
  address: { "@type": "PostalAddress", streetAddress: "47 Shasta Trail", addressLocality: "Graeagle", addressRegion: "CA", postalCode: "96103", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: PROPERTY.rating, reviewCount: PROPERTY.reviews, bestRating: 5 },
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 2.5,
  occupancy: { "@type": "QuantitativeValue", value: 12 },
  petsAllowed: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "EV Charger", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
  ],
};

export default function GraeaglePage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <Header bookNowHref="#booking" />

      {/* Hero — Photo Carousel + Property Info */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-10">
          <PhotoGrid photos={PHOTOS} />
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
          {/* Main Content */}
          <div className="space-y-12">
            {/* Description */}
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">About This Property</h2>
              {DESCRIPTION.map((p, i) => (
                <p key={i} className="text-stone-300 leading-7 mb-4">{p}</p>
              ))}
            </motion.section>

            {/* The Space */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">The Space</h2>
              <p className="text-stone-300 leading-7">{THE_SPACE}</p>
            </section>

            {/* Amenities */}
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

            {/* House Rules */}
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

            {/* Location */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Location</h2>
              <p className="text-stone-300 mb-4">{PROPERTY.address}</p>
              <div className="rounded-xl overflow-hidden border border-gold-400/10 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12322!2d-120.6175!3d39.7575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809c5d3b9da4f1d3%3A0x0!2s47+Shasta+Trail%2C+Graeagle%2C+CA+96103!5e0!3m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Graeagle cabin location map"
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
              <p className="text-sm text-stone-400 mb-8">Our curated guide to the best of Graeagle and the Northern Sierra.</p>
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

            {/* Reviews Summary */}
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

          {/* Sidebar — Booking */}
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
