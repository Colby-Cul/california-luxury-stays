"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import PhotoCarousel from "@/components/PhotoCarousel";

const PROPERTY = {
  title: "Luxury Northstar Getaway",
  subtitle: "On the Golf Course · Hot Tub · 5,000 sq ft",
  address: "210 Bitter Brush Way, Truckee, CA 96161",
  region: "Northstar, Lake Tahoe",
  guests: 13, bedrooms: 5, beds: 7, baths: 3.5,
  rating: 5.0, reviews: 5,
  lodgifyId: 746614,
};

const DESCRIPTION = [
  "Welcome to our luxury Northstar residence — a spacious, fully remodeled home situated on the Northstar Golf Course in Martis Valley with panoramic forest and mountain views. This is where elevated mountain living meets resort-style comfort.",
  "With 5,000 square feet of living space, this home offers room for everyone. The great room features vaulted ceilings, a stone gas fireplace, and floor-to-ceiling windows that frame classic Tahoe scenery. Two separate family rooms — one with a game area and one with a media center — mean everyone has their own space.",
  "The chef's kitchen is the heart of the home, equipped with premium appliances, a large island with bar seating, and everything you need to cook for a crowd. Step outside to the expansive deck with hot tub, where you'll enjoy unobstructed views of the golf course and surrounding mountains.",
  "You're steps from Tompkins Trail for hiking and biking, minutes from Northstar Village with its shops and restaurants, and a short drive to Lake Tahoe's north shore. In winter, Northstar ski resort is literally next door.",
];

const THE_SPACE = "5,000 sq ft remodeled home on two levels. Main floor: great room with vaulted ceilings and gas fireplace, chef's kitchen with premium appliances, dining area seats 12, primary suite with king bed and spa-style en-suite bathroom. Upper level: 4 additional bedrooms (2 kings, 1 queen, 1 bunk room), 2.5 additional bathrooms, family room with games, media room with projector. Expansive deck with hot tub and mountain views. Heated 2-car garage with ski and snowboard storage.";

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
  { label: "Check-out", value: "11:00 AM" },
  { label: "Pets", value: "No pets (service animals welcome)" },
  { label: "Smoking", value: "No smoking on property" },
  { label: "Parties", value: "No parties or events" },
  { label: "Quiet hours", value: "10 PM – 8 AM" },
  { label: "Max guests", value: "13" },
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
  { src: "/images/northstar/exterior-1.jpg", alt: "Northstar luxury home exterior with aspen trees and two-car garage" },
  { src: "/images/northstar/interior-1.jpg", alt: "Great room with vaulted ceilings and floor-to-ceiling windows" },
  { src: "/images/northstar/interior-2.jpg", alt: "Chef's kitchen with premium appliances and island bar seating" },
  { src: "/images/northstar/interior-3.jpg", alt: "Dining area with seating for twelve" },
  { src: "/images/northstar/interior-4.jpg", alt: "Primary suite with king bed and spa-style en-suite" },
  { src: "/images/northstar/interior-5.jpg", alt: "Game room with pool table and entertainment area" },
  { src: "/images/northstar/interior-6.jpg", alt: "Media room with projector setup" },
  { src: "/images/northstar/interior-7.jpg", alt: "Upper level bedroom with mountain views" },
  { src: "/images/northstar/interior-8.jpg", alt: "Expansive deck with golf course and mountain panorama" },
  { src: "/images/northstar/hot-tub-deck-view.jpg", alt: "Hot tub on the upper deck with panoramic mountain views" },
];

const PLACES_TO_EAT = [
  { name: "Manzanita", description: "Upscale mountain cuisine with a stone fireplace, serving breakfast and dinner inside the Ritz-Carlton.", distance: "0.5 mi", cuisine: "New American", price: "$$$" },
  { name: "Rubicon Pizza", description: "High-energy Northstar Village staple serving gourmet pizzas with bold toppings.", distance: "0.5 mi", cuisine: "Pizza", price: "$$" },
  { name: "Moody's Bistro Bar & Beats", description: "Farm-to-table dining with craft cocktails and live music on historic Commercial Row.", distance: "6 mi", cuisine: "Bistro", price: "$$$" },
  { name: "Bar of America", description: "Iconic downtown Truckee watering hole specializing in campfire-inspired American cuisine.", distance: "6 mi", cuisine: "American", price: "$$" },
  { name: "Squeeze In", description: "Beloved breakfast institution famous for its enormous selection of creative omelettes.", distance: "6 mi", cuisine: "Breakfast", price: "$" },
  { name: "Christy Hill Lakeside Bistro", description: "Lakefront fine dining with panoramic Lake Tahoe views and French-Mediterranean influences.", distance: "14 mi", cuisine: "Fine Dining", price: "$$$" },
  { name: "Spindleshanks", description: "Lodge-style restaurant on Old Brockway Golf Course with alfresco dining and seafood specials.", distance: "12 mi", cuisine: "American & Seafood", price: "$$$" },
  { name: "Lanza's Restaurant", description: "Family-run Italian serving hearty scratch-made red sauce and pastas since 1974.", distance: "12 mi", cuisine: "Italian", price: "$$" },
];

const THINGS_TO_DO = [
  { name: "Northstar California Resort", description: "100+ trails across 3,000 acres with 20 lifts, terrain parks, and runs for all levels.", distance: "0.5 mi", category: "Winter Sports" },
  { name: "Northstar Bike Park & Gondola", description: "Lift-served mountain biking and scenic Big Springs Gondola rides for hikers and sightseers.", distance: "0.5 mi", category: "Summer Adventure" },
  { name: "Village at Northstar", description: "Outdoor ice rink, bungee trampolines, pottery, shopping, and dining in a pedestrian village.", distance: "0.5 mi", category: "Family Activities" },
  { name: "Donner Lake & Memorial State Park", description: "Historic alpine lake with swimming, paddleboarding, kayaking, picnicking, and easy hiking trails.", distance: "10 mi", category: "Lake & Outdoors" },
  { name: "Donner Lake Rim Trail", description: "Scenic 23-mile loop through high country surrounding Donner Lake, with 9 miles open to bikes.", distance: "10 mi", category: "Hiking & Biking" },
  { name: "Kings Beach State Recreation Area", description: "The largest public sandy beach on Tahoe's north shore — 1,700 feet of south-facing lakefront.", distance: "12 mi", category: "Beach" },
  { name: "Truckee River Rafting", description: "Self-guided 5-mile Class I float through scenic meadows — fun for ages 2 and up.", distance: "14 mi", category: "Water Sports" },
  { name: "Martis Valley Trail", description: "Paved 4.6-mile pathway connecting downtown Truckee to Northstar — walk or bike from the house.", distance: "0 mi", category: "Hiking & Biking" },
  { name: "Historic Downtown Truckee", description: "Charming Commercial Row with galleries, boutiques, restaurants, and the historic train depot.", distance: "6 mi", category: "Shopping & Culture" },
];

const REVIEWS = [
  { text: "Stunning home, even better in person. Every detail was perfect for our family reunion.", guest: "Rachel H.", date: "March 2026" },
  { text: "Hot tub views were incredible — we spent every evening out there watching the sunset.", guest: "Brian S.", date: "February 2026" },
  { text: "Kitchen was amazing for group dinners. Cooked Thanksgiving for 12 with ease.", guest: "Megan D.", date: "January 2026" },
  { text: "Perfect ski trip base — so close to the lifts. We'll be back every season.", guest: "Jason T.", date: "December 2025" },
  { text: "Immaculately clean, beautifully decorated. True luxury mountain living.", guest: "Nicole B.", date: "November 2025" },
];

export default function NorthstarPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />

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
              <span>{PROPERTY.bedrooms} bed</span>
              <span>·</span>
              <span>{PROPERTY.baths} bath</span>
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
              <ul className="space-y-2">
                {LOCATION.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Things to Do */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-2">Things to Do</h2>
              <p className="text-sm text-stone-400 mb-6">Our favorite adventures and attractions near the property.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {THINGS_TO_DO.map((item) => (
                  <div key={item.name} className="rounded-xl border border-gold-400/10 bg-charcoal-700/50 p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                      <span className="text-xs text-gold-400/70 shrink-0 ml-2">{item.distance}</span>
                    </div>
                    <span className="inline-block rounded-full bg-gold-400/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold-300">{item.category}</span>
                    <p className="text-xs text-stone-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Places to Eat */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-2">Places to Eat</h2>
              <p className="text-sm text-stone-400 mb-6">Local restaurants and dining spots we recommend to our guests.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {PLACES_TO_EAT.map((spot) => (
                  <div key={spot.name} className="rounded-xl border border-gold-400/10 bg-charcoal-700/50 p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">{spot.name}</h3>
                      <span className="text-xs text-gold-400/70 shrink-0 ml-2">{spot.distance}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="inline-block rounded-full bg-gold-400/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold-300">{spot.cuisine}</span>
                      <span className="text-xs text-stone-500">{spot.price}</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{spot.description}</p>
                  </div>
                ))}
              </div>
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

          <div className="space-y-6">
            <div className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-2xl font-semibold text-white font-serif">From $690<span className="text-base font-normal text-stone-400">/night</span></p>
                <p className="text-sm text-gold-400/80 mt-1">{PROPERTY.rating} ★ · {PROPERTY.reviews} reviews · {PROPERTY.region}</p>
                <p className="text-xs text-stone-500 mt-2">Rates vary by season. Holiday and peak weekends may have higher minimums.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Sleeps</p><p className="font-semibold text-white">{PROPERTY.guests}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bedrooms</p><p className="font-semibold text-white">{PROPERTY.bedrooms}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bathrooms</p><p className="font-semibold text-white">{PROPERTY.baths}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Rating</p><p className="font-semibold text-gold-300">{PROPERTY.rating} ★</p></div>
              </div>

              <AvailabilityCalendar propertyId={PROPERTY.lodgifyId} />

              <a
                href={`https://checkout.lodgify.com/en/colby-culbertson/${PROPERTY.lodgifyId}/reservation?currency=USD`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-gold-400 py-3.5 text-center text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                Book This Property
              </a>

              <p className="text-xs text-center text-stone-500">You&apos;ll be redirected to our secure booking partner to complete your reservation.</p>
              <p className="text-xs text-center text-stone-500">Book direct for the best rate — no platform fees</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
