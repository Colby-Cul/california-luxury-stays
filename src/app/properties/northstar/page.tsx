"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const REVIEW_THEMES = [
  "Stunning home, even better in person",
  "Hot tub views were incredible",
  "Kitchen was amazing for group dinners",
  "Perfect ski trip base — so close to the lifts",
  "Immaculately clean, beautifully decorated",
  "Responsive host, smooth check-in",
];

export default function NorthstarPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.lodgify.com/booking-widget/stable/loader.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />

      <section className="relative pt-20">
        <div className="h-[50vh] bg-gradient-to-br from-sky-900/25 via-stone-900 to-charcoal-800 flex items-center justify-center">
          <span className="rounded-full bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-200 backdrop-blur-sm">
            Property Photos Coming Soon
          </span>
        </div>
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

          <div className="space-y-6">
            <div className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-2xl font-semibold text-white font-serif">From $690<span className="text-base font-normal text-stone-400">/night</span></p>
                <p className="text-sm text-gold-400/80 mt-1">{PROPERTY.rating} ★ · {PROPERTY.reviews} reviews · {PROPERTY.region}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Sleeps</p><p className="font-semibold text-white">{PROPERTY.guests}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bedrooms</p><p className="font-semibold text-white">{PROPERTY.bedrooms}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Bathrooms</p><p className="font-semibold text-white">{PROPERTY.baths}</p></div>
                <div className="rounded-xl bg-charcoal-700 p-3 text-center"><p className="text-stone-400">Rating</p><p className="font-semibold text-gold-300">{PROPERTY.rating} ★</p></div>
              </div>

              <div
                id="lodgify-booking-widget"
                data-id={String(PROPERTY.lodgifyId)}
                data-currency="USD"
                data-locale="en"
                data-theme-color="#C9A96E"
                className="min-h-[200px] rounded-xl overflow-hidden"
              />

              <p className="text-xs text-center text-stone-500">Book direct for the best rate — no platform fees</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
