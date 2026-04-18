import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Large Group Vacation Rental Lake Tahoe | 22-Person Cabin Truckee",
  description: "Large group vacation rental near Lake Tahoe that sleeps 22. 7BR/6BA, 5,000 sq ft, chef's kitchen, hot tub, heated garage at Northstar CA. Perfect for corporate retreats, ski groups, family reunions.",
  alternates: {
    canonical: "https://californialuxurystays.com/group-retreats-northstar",
  },
  openGraph: {
    title: "Group Retreat Near Northstar Lake Tahoe | Sleeps 22 | California Luxury Stays",
    description: "The ultimate large group vacation rental at Lake Tahoe. 7BR/6BA, sleeps 22, 5,000 sq ft. Corporate retreats, family reunions, ski groups, bachelorette weekends.",
    url: "https://californialuxurystays.com/group-retreats-northstar",
    type: "website",
  },
};

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Northstar Luxury Retreat — Group Retreat at Lake Tahoe",
  description: "5,000 sq ft luxury mountain home sleeping 22 guests near Northstar California Resort. Ideal for corporate retreats, family reunions, ski groups, and large group vacations.",
  url: "https://californialuxurystays.com/group-retreats-northstar",
  image: "https://californialuxurystays.com/images/northstar/exterior.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 Bitter Brush Way",
    addressLocality: "Truckee",
    addressRegion: "CA",
    postalCode: "96161",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.2558,
    longitude: -120.1221,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5.0,
    reviewCount: 5,
    bestRating: 5,
  },
  numberOfRooms: 7,
  brand: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Chef's Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hot Tub", value: true },
    { "@type": "LocationFeatureSpecification", name: "Heated Garage", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "NPOA Recreation Center Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Media Room", value: true },
  ],
};

const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Northstar Luxury Retreat",
  url: "https://californialuxurystays.com/properties/northstar",
  description: "7BR/6BA, 5,000 sq ft luxury mountain home at Northstar Lake Tahoe. Sleeps 22. Chef's kitchen, hot tub, heated garage.",
  occupancy: { "@type": "QuantitativeValue", maxValue: 22, unitText: "guests" },
  numberOfBedrooms: 7,
  brand: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://californialuxurystays.com" },
    { "@type": "ListItem", position: 2, name: "Group Retreats at Northstar", item: "https://californialuxurystays.com/group-retreats-northstar" },
  ],
};

const FAQS = [
  {
    q: "What is the minimum stay for large groups?",
    a: "The standard minimum is 4 nights. For peak periods (Presidents' Day weekend, Christmas–New Year's, Fourth of July), a 5–7 night minimum may apply. Contact us for your specific dates.",
  },
  {
    q: "Are pets allowed for group stays?",
    a: "No, pets are not permitted at the Northstar property. Service animals are always welcome with advance notice.",
  },
  {
    q: "Can we host an event or party at the property?",
    a: "Private group dinners, celebrations, and retreats are welcome with advance notice. Large parties with outside guests beyond the 22-person occupancy limit require prior approval and may be subject to event terms. Please contact us before booking to discuss your group's specific plans.",
  },
  {
    q: "Is there a security deposit?",
    a: "Yes, a refundable security deposit is held on your credit card at booking and released within 72 hours of checkout, provided there is no damage beyond normal wear and tear.",
  },
  {
    q: "Can we split the booking cost across multiple credit cards or guests?",
    a: "Yes. When you book direct, we can accommodate split payments across multiple cards. Contact us after booking to arrange this — it's not possible through third-party platforms.",
  },
  {
    q: "Is the property accessible for guests with mobility limitations?",
    a: "The property has a step-free garage entrance and main level bedroom. However, the structure does have multiple levels with stairs. Contact us to discuss specific accessibility needs before booking.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function GroupRetreatsNorthstarPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header bookNowHref="https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/746614" />

      <div className="pt-20">
        {/* Hero */}
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Large Group Vacation Rentals · Lake Tahoe</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Group Retreats at<br />Northstar Lake Tahoe
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-stone-300 leading-8">
            The only 22-person luxury vacation rental at Northstar California — a 5,000 sq ft mountain home with 7 bedrooms, 6 bathrooms, a chef&apos;s kitchen, private hot tub, and heated 2-car garage. Five-star rated. Book direct and save hundreds on platform fees.
          </p>

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Max Guests", value: "22" },
              { label: "Bedrooms", value: "7 BR" },
              { label: "Bathrooms", value: "6 BA" },
              { label: "Square Feet", value: "5,000+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-gold-400/15 bg-charcoal-600 p-5 text-center">
                <p className="text-3xl font-semibold text-gold-400 font-serif">{stat.value}</p>
                <p className="mt-1 text-xs text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/746614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300"
            >
              Check Availability & Book
            </a>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-gold-400/40 px-8 py-3 text-sm font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400/10"
            >
              Contact Us About Your Group
            </Link>
          </div>
        </div>

        {/* Who Books This Property */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Who Stays Here</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Built for Large Groups</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Our Northstar property is one of the few luxury vacation rentals in the Lake Tahoe region purpose-built to accommodate large groups without the hotel compromise. Everyone stays together under one roof — no splitting into multiple units, no lobby check-in, no vending machine breakfast.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  type: "Corporate Retreats",
                  icon: "🏢",
                  detail: "Remote teams, executive offsites, and team-building weekends. The chef&apos;s kitchen handles catered dinners. The media room doubles as a presentation space. Fast WiFi throughout. Northstar is 2.5 hours from SF and 4.5 hours from LA — accessible without a flight.",
                },
                {
                  type: "Family Reunions",
                  icon: "👨‍👩‍👧‍👦",
                  detail: "Multi-generational families who want everyone together. Bunk rooms for the kids, a master suite for grandparents, and a great room that truly holds 22 people at once. The NPOA pool and game room keep every age group happy.",
                },
                {
                  type: "Ski Groups",
                  icon: "⛷️",
                  detail: "Friend groups chasing a week of Northstar powder. 5 minutes to the gondola, a heated garage for ski and snowboard storage, and a hot tub to end every ski day. We can coordinate ski rentals, group lessons, and lift ticket packages.",
                },
                {
                  type: "Bachelorette & Bachelor Weekends",
                  icon: "🥂",
                  detail: "The ultimate mountain bachelorette: hot tub on the deck, proximity to Truckee bars and restaurants, outdoor activities all day, and a kitchen that handles a catered dinner party for 22. Memorable without the Vegas hangover.",
                },
                {
                  type: "Birthday Milestone Trips",
                  icon: "🎂",
                  detail: "50th birthdays, graduation celebrations, anniversary gatherings. The wraparound deck, chef&apos;s kitchen, and dramatic mountain setting make every celebration feel intentional. We can recommend local vendors for catering, florals, and event coordination.",
                },
                {
                  type: "Golf Getaways",
                  icon: "⛳",
                  detail: "Northstar Golf Course is on-site. Coyote Moon, Tahoe Donner, and Schaffer&apos;s Mill are within 20 minutes. We can arrange tee times for your entire group and recommend the right courses for your skill levels.",
                },
              ].map((item) => (
                <div key={item.type} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <p className="text-2xl">{item.icon}</p>
                  <h3 className="mt-2 font-semibold text-white">{item.type}</h3>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Property for Groups */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">The Property</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Why This Property Works for Groups</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Most vacation rentals that claim to &ldquo;sleep 22&rdquo; are cramped spaces with pull-out couches and inflatable mattresses. This property was designed for large groups — and the difference is immediately obvious.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  feature: "Two Family / Living Rooms",
                  detail: "A main great room for the full group and a separate media room with projector and surround sound for breakout movie nights or private conversations. Groups naturally split across these two spaces, which prevents the claustrophobia that kills smaller group rentals.",
                },
                {
                  feature: "Dining Table for 12 (Expandable)",
                  detail: "A custom dining table that seats 12 comfortably, plus a kitchen bar seating another 6, and the wraparound deck for overflow dining. The first dinner together is always a highlight of group trips — this property makes it possible.",
                },
                {
                  feature: "Chef's Kitchen",
                  detail: "Two ovens, a six-burner commercial range, dual refrigerators, full pantry, and a prep island. Designed for serious cooking — whether that&apos;s a caterer working a group dinner or the group&apos;s self-designated chef making Sunday brunch for 22.",
                },
                {
                  feature: "Private Hot Tub on Deck",
                  detail: "The outdoor hot tub on the wraparound deck holds 8–10 people and runs year-round. Overlooking the Northstar Golf Course with mountain views. This becomes the post-ski gathering point every single evening — built-in group bonding.",
                },
                {
                  feature: "7 Bedrooms, Flexible Configuration",
                  detail: "The bedroom mix includes a master suite with king bed, multiple king/queen rooms, two bunk rooms (4 bunks each), and a flexible bedroom that converts between sleeping and lounge use. No one draws the short straw on sleeping arrangements.",
                },
                {
                  feature: "Heated 2-Car Garage",
                  detail: "The heated garage has direct home entry — important in ski season. Dedicated storage for skis, snowboards, and bikes. Overflow street parking and a large driveway accommodate 4+ additional vehicles. Total parking: 6+ cars.",
                },
              ].map((item) => (
                <div key={item.feature} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{item.feature}</h3>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Activities */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Group Activities</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Activities for the Whole Group</h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Group Ski Days at Northstar</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  Northstar California Resort is 5 minutes from the property. Group ski packages (10+ people) get discounted lift tickets — call the resort&apos;s group sales line to arrange. The Ski School has group lesson packages for mixed-skill groups, which is often the best use of Day 1 for groups with varying ability levels. We can recommend specific runs for intermediates vs. beginners. A group of 22 with a mix of abilities typically splits into 3–4 subgroups by ability and reconvenes for lunch at the Village.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">NPOA Amenities: Tennis, Pickleball & Pool Tournaments</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  Our property guests have full access to the NPOA Recreation Center — and for large groups, the facility&apos;s multiple tennis and pickleball courts become the venue for informal tournaments. Bring your own racquets or rent at the center. The outdoor heated pool is excellent for groups in summer. The fitness center, hot tubs, game room, and bocce courts round out the options for less athletically inclined group members.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Group Cooking Nights</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  The chef&apos;s kitchen is built for this. The best group trips we&apos;ve hosted always include at least one cooking night — divide the group into teams and assign courses, or have one talented cook command the kitchen while others prep and handle drinks. We provide the kitchen supplies; you bring the ingredients. The Safeway at Kings Beach (10 min) handles all grocery needs; SPD Market in Tahoe City (20 min) is excellent for specialty ingredients and custom-cut meat. We can send our recommended grocery list for group dinners if helpful.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Golf Foursomes at Northstar Golf Course</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  The Northstar Golf Course is on-site — ideal for groups where 8–12 people want to golf while others pursue different activities. We can arrange tee times for multiple foursomes and stagger start times so the groups finish around the same hour. For competitive groups, a skins game or two-man scramble format keeps the energy high. Post-round drinks at the 19th hole before returning to the property for dinner is a perfect group day structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Logistics */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Practical Information</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Group Logistics Made Simple</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Getting There",
                  detail: "Truckee-Tahoe Airport (15 min) handles private flights. Reno-Tahoe International (45 min) is the nearest commercial airport with direct flights from most major West Coast cities. The property is 2.5 hours from San Francisco and 4.5 hours from Los Angeles via I-80. Groups flying in can use the Truckee-based car services or rent multiple vehicles at Reno.",
                },
                {
                  title: "Parking",
                  detail: "2-car heated garage with direct home access plus a large driveway accommodating 2–3 additional vehicles. Street parking for 1–2 more. Total capacity: 6+ vehicles. In winter, the heated garage is essential — ski and snowboard storage built in.",
                },
                {
                  title: "Grocery Planning",
                  detail: "Safeway at Kings Beach is 10 minutes away — open until 11 PM. New Moon Natural Foods in Truckee (12 min) for organic and specialty items. SPD Market in Tahoe City (20 min) has the best meat counter. We recommend stopping at Safeway on arrival day and planning 2–3 grocery runs for a week-long stay. We can send a group grocery checklist sized for 15–22 people.",
                },
                {
                  title: "Check-In / Check-Out",
                  detail: "Check-in is at 4:00 PM; check-out is at 10:00 AM. Early check-in or late check-out can sometimes be arranged for groups — contact us at least 48 hours in advance. The keypad entry means no key coordination. You&apos;ll receive your code the morning of arrival.",
                },
                {
                  title: "EV Charging",
                  detail: "The heated garage has a Level 2 EV charger (240V, 48A) — handles most EV vehicles overnight. For groups with multiple EVs, the Northstar Village has a public charging station 5 minutes away. Truckee has additional public Level 2 and DC fast chargers near the downtown area.",
                },
                {
                  title: "WiFi & Technology",
                  detail: "Gigabit WiFi throughout the home — multiple access points for reliable coverage across 5,000 sq ft. The media room has a 120\" projector screen with HDMI connectivity. Smart TVs in the great room and master suite. The kitchen has a Bluetooth speaker system.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
            <div className="rounded-2xl border border-gold-400/15 bg-gradient-to-br from-gold-400/10 via-charcoal-700 to-charcoal-800 p-8 lg:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Book Direct & Save</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">Ready to Plan Your Group Retreat?</h2>
              <p className="mt-4 max-w-2xl text-stone-300 leading-7">
                Book direct and avoid $400–$800 in platform service fees. We&apos;re here to help plan your perfect group stay — tee times, ski rentals, restaurant reservations, grocery lists, and catering referrals. The property is 5.0 stars across 5 reviews and available year-round.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/746614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300"
                >
                  Check Availability & Book
                </a>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-gold-400/40 px-8 py-3 text-sm font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400/10"
                >
                  Send a Group Inquiry
                </Link>
              </div>
              <p className="mt-4 text-xs text-stone-500">
                You&apos;ll be redirected to our secure booking partner, Lodgify, to complete your reservation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Common Questions</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Group Stay FAQ</h2>

            <div className="mt-8 space-y-5">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="mt-3 text-sm text-stone-300 leading-7">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gold-400/15 bg-charcoal-700 p-6 text-center">
              <p className="text-stone-300">Have a question not covered here?</p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
