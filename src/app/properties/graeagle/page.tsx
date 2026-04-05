"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

const PROPERTY = {
  title: "Family Cabin in Graeagle",
  subtitle: "King Bed · EV Charging · Stone Fireplace",
  address: "47 Shasta Trail, Graeagle, CA 96103",
  region: "Plumas County, Sierra Nevada",
  guests: 9, bedrooms: 4, beds: 5, baths: 2,
  rating: 4.73, reviews: 52,
  lodgifyId: 533203,
};

const DESCRIPTION = [
  "An idyllic retreat at 47 Shasta Trail in Graeagle, California — a charming cabin nestled in the heart of the Sierra Nevada Mountains. With its rustic allure and modern comforts, this cozy property invites you to unwind by the stone fireplace or watch a movie with the family on the 86-inch 4K TV in the family room.",
  "Explore the endless hiking and biking trails just steps from the front door, and marvel at the local wildlife — deer, eagles, and the occasional bear are all part of the Graeagle experience. Fire up the Weber charcoal grill or the Traeger electric smoker on the deck for a mountain-style dinner under the stars.",
  "The cabin sits on a quiet, tree-lined street in one of Graeagle's most desirable neighborhoods. You're minutes from the Graeagle Meadow, the historic Mill Pond, and Plumas Eureka State Park. In winter, skiing and cross-country trails are right in your backyard.",
];

const THE_SPACE = "The main living area features an open floor plan with a stone fireplace as the centerpiece. The chef's kitchen is fully equipped with modern appliances, and the dining area seats 8. The family room features an 86-inch 4K Smart TV. Four bedrooms include a master suite with a king bed, two bedrooms with queen beds, and a bunk room for the kids. Two full bathrooms. A wraparound deck provides forest views from every angle.";

const AMENITIES = {
  "Kitchen & Dining": ["Full kitchen", "Refrigerator", "Oven & microwave", "Dishwasher", "Coffee maker", "Toaster", "Cooking basics", "Dishes & silverware", "Dining for 8"],
  "Entertainment": ["86\" 4K Smart TV", "Streaming services", "Board games", "Card games", "Books"],
  "Outdoor": ["Weber charcoal grill", "Traeger electric smoker", "Wraparound deck", "Outdoor dining", "Forest views", "Yard"],
  "Comfort": ["Stone fireplace", "Central heating", "Ceiling fans", "Premium linens", "Extra pillows & blankets"],
  "Practical": ["Free WiFi", "Free parking (3 cars)", "EV charger (Level 2)", "Washer & dryer", "Iron", "Hair dryer"],
  "Activities Nearby": ["Hiking trails (direct access)", "Biking trails", "Skiing (Plumas Eureka)", "Fishing", "Golf (Graeagle Meadows)"],
};

const HOUSE_RULES = [
  { label: "Check-in", value: "4:00 PM" },
  { label: "Check-out", value: "11:00 AM" },
  { label: "Pets", value: "Dogs welcome (2 max, $75 fee)" },
  { label: "Smoking", value: "No smoking indoors" },
  { label: "Parties", value: "No parties without prior approval" },
  { label: "Quiet hours", value: "10 PM – 8 AM" },
  { label: "Max guests", value: "9" },
];

const LOCATION = [
  "5 min walk to Graeagle Meadow",
  "10 min drive to Plumas Eureka State Park",
  "15 min to Lakes Basin Recreation Area",
  "45 min to Reno-Tahoe International Airport",
  "Quiet residential neighborhood",
  "Wildlife viewing from the deck",
];

const REVIEW_THEMES = [
  "Incredibly clean and well-maintained",
  "Perfect for families — kids loved the bunk room",
  "Stone fireplace was the highlight",
  "Great communication, smooth check-in",
  "Peaceful location, gorgeous surroundings",
  "Well-stocked kitchen for cooking meals",
  "EV charger was a huge plus",
];

export default function GraeaglePage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="h-[50vh] bg-gradient-to-br from-amber-900/30 via-stone-900 to-charcoal-800 flex items-center justify-center">
          {/* TODO: Replace with real property photos */}
          <span className="rounded-full bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-200 backdrop-blur-sm">
            Property Photos Coming Soon
          </span>
        </div>
        {/* Quick stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-800 to-transparent pt-20 pb-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
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
              <ul className="space-y-2">
                {LOCATION.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews Summary */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">
                Guest Reviews <span className="text-gold-300">{PROPERTY.rating} ★</span> <span className="text-stone-400 text-base font-normal">({PROPERTY.reviews} reviews)</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {REVIEW_THEMES.map((theme) => (
                  <div key={theme} className="flex items-start gap-2 text-sm text-stone-300">
                    <span className="text-gold-400 mt-0.5 shrink-0">★</span>
                    {theme}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — Booking */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-2xl font-semibold text-white font-serif">From $259<span className="text-base font-normal text-stone-400">/night</span></p>
                <p className="text-sm text-gold-400/80 mt-1">{PROPERTY.rating} ★ · {PROPERTY.reviews} reviews · {PROPERTY.region}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Sleeps</p><p className="font-semibold text-white">{PROPERTY.guests}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bedrooms</p><p className="font-semibold text-white">{PROPERTY.bedrooms}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bathrooms</p><p className="font-semibold text-white">{PROPERTY.baths}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Rating</p><p className="font-semibold text-gold-300">{PROPERTY.rating} ★</p></div>
              </div>

              {/* Availability Calendar */}
              <AvailabilityCalendar propertyId={PROPERTY.lodgifyId} />

              <a
                href={`https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/${PROPERTY.lodgifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-gold-400 py-3.5 text-center text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                Book This Property
              </a>

              <p className="text-xs text-center text-stone-500">Book direct for the best rate — no platform fees</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
