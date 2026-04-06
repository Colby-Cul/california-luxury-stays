"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import PhotoCarousel from "@/components/PhotoCarousel";

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

const PLACES_TO_EAT = [
  { name: "Grizzly Grill", description: "Upscale American dining with steaks, seafood, and housemade desserts in a cozy mountain setting.", distance: "1 mi", cuisine: "American", price: "$$" },
  { name: "Cuccia's Pasta, Pizza & Wine Bar", description: "Family-run Sicilian restaurant with handmade pizza, fresh seafood, and a curated wine list.", distance: "0.5 mi", cuisine: "Italian", price: "$$" },
  { name: "The Iron Door", description: "Historic 1906 fine-dining restaurant offering gourmet entrees like lobster and wiener schnitzel.", distance: "5 mi", cuisine: "Fine Dining", price: "$$$" },
  { name: "Longboards Bar & Grill", description: "Casual bistro at Plumas Pines Golf Resort with hearty entrees and craft cocktails.", distance: "2 mi", cuisine: "American", price: "$$" },
  { name: "Graeagle Meadows Clubhouse", description: "Panoramic mountain views, fresh American cuisine, and Saturday prime rib on an outdoor patio.", distance: "0.3 mi", cuisine: "American", price: "$$" },
  { name: "The Brewing Lair", description: "Outdoor craft brewery on 15 forested acres with house-brewed ales, tacos, disc golf, and live music.", distance: "2 mi", cuisine: "Brewery", price: "$" },
  { name: "Firewoods at Gray Eagle Lodge", description: "Seasonal gourmet lodge restaurant serving prime rib and cocktails in a serene forest setting.", distance: "5 mi", cuisine: "Gourmet", price: "$$$" },
  { name: "Graeagle Outpost", description: "Espresso, breakfast burritos, ice cream, and paddleboat rentals at the Mill Pond.", distance: "0.2 mi", cuisine: "Coffee & Snacks", price: "$" },
];

const THINGS_TO_DO = [
  { name: "Plumas-Eureka State Park", description: "Historic gold mining park with museum, camping, hiking trails, and winter skiing at Plumas Eureka Ski Bowl.", distance: "5 mi", category: "Hiking & History" },
  { name: "Lakes Basin Recreation Area", description: "20+ glacial lakes connected by 30 miles of trails — swimming, fishing, and wildflower viewing.", distance: "3 mi", category: "Hiking & Swimming" },
  { name: "Frazier Falls Trail", description: "Easy, paved 1-mile family-friendly trail to a fenced overlook of a stunning 176-foot waterfall.", distance: "6 mi", category: "Family Hike" },
  { name: "Graeagle Mill Pond", description: "In-town swimming spot with kayak, paddleboard, canoe, and paddleboat rentals plus a sandy beach.", distance: "0.2 mi", category: "Water Sports" },
  { name: "Gold Lake", description: "Pristine alpine lake with excellent trout fishing, non-motorized boating, and scenic shoreline picnicking.", distance: "7 mi", category: "Fishing & Boating" },
  { name: "Plumas Pines Golf Resort", description: "18-hole championship course winding along the Feather River with tree-lined fairways and mountain views.", distance: "2 mi", category: "Golf" },
  { name: "Graeagle Meadows Golf Course", description: "Scenic 18-hole public course in the heart of town with meadow and mountain views.", distance: "0.3 mi", category: "Golf" },
  { name: "Western Pacific Railroad Museum", description: "One of the largest diesel locomotive collections in the country with seasonal train rides.", distance: "15 mi", category: "Museum & Family" },
  { name: "Middle Fork Feather River", description: "Year-round trout fishing across 1,000+ miles of mountain streams and 100+ lakes in Plumas County.", distance: "1–10 mi", category: "Fishing" },
];

const REVIEWS = [
  { text: "Incredibly clean and well-maintained. We felt right at home from the moment we walked in.", guest: "Sarah M.", date: "March 2026" },
  { text: "Perfect for families — kids loved the bunk room and we loved the stone fireplace.", guest: "David R.", date: "February 2026" },
  { text: "Stone fireplace was the highlight. Cozy, warm, and beautifully maintained.", guest: "Jennifer L.", date: "January 2026" },
  { text: "Great communication, smooth check-in. Everything was exactly as described.", guest: "Michael T.", date: "December 2025" },
  { text: "Peaceful location, gorgeous surroundings. Deer on the deck every morning!", guest: "Amy K.", date: "November 2025" },
  { text: "Well-stocked kitchen made cooking for the whole family a breeze.", guest: "Chris P.", date: "October 2025" },
  { text: "EV charger was a huge plus — didn't expect that at a mountain cabin!", guest: "Lauren W.", date: "September 2025" },
];

export default function GraeaglePage() {
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

            {/* Things to Do */}
            <section>
              <h2 className="text-2xl font-semibold text-white font-serif mb-2">Things to Do</h2>
              <p className="text-sm text-stone-400 mb-6">Our favorite outdoor adventures and attractions near the cabin.</p>
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
          <div className="space-y-6">
            <div className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-2xl font-semibold text-white font-serif">From $259<span className="text-base font-normal text-stone-400">/night</span></p>
                <p className="text-sm text-gold-400/80 mt-1">{PROPERTY.rating} ★ · {PROPERTY.reviews} reviews · {PROPERTY.region}</p>
                <p className="text-xs text-stone-500 mt-2">Rates vary by season. Holiday and peak weekends may have higher minimums.</p>
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
