import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Things to Do Near Northstar Lake Tahoe | Activity Guide",
  description: "Complete guide to things to do near Northstar Lake Tahoe — skiing, golf, mountain biking, hiking, Lake Tahoe beaches, Truckee dining, and NPOA amenities for guests.",
  alternates: {
    canonical: "https://californialuxurystays.com/things-to-do-near-northstar",
  },
  openGraph: {
    title: "Things to Do Near Northstar Lake Tahoe | California Luxury Stays",
    description: "Skiing, mountain biking, golf, hiking, Lake Tahoe beaches and Truckee dining — the complete activity guide for Northstar.",
    url: "https://californialuxurystays.com/things-to-do-near-northstar",
    type: "article",
  },
};

const touristDestinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Northstar, Lake Tahoe, California",
  description: "A four-season mountain resort community in Truckee, CA — world-class skiing, golf, mountain biking, and Lake Tahoe water activities.",
  url: "https://californialuxurystays.com/things-to-do-near-northstar",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.2558,
    longitude: -120.1221,
  },
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Northstar California Resort", description: "World-class ski resort, 3,170 acres, 100 trails, lift-served bike park in summer" },
    { "@type": "TouristAttraction", name: "Northstar Golf Course", description: "18-hole championship course on-site at Northstar" },
    { "@type": "TouristAttraction", name: "Lake Tahoe", description: "Second deepest lake in North America, Kings Beach 15 minutes from property" },
    { "@type": "TouristAttraction", name: "Downtown Truckee", description: "Historic mountain town with independent restaurants, bars, and shops" },
    { "@type": "TouristAttraction", name: "NPOA Recreation Center", description: "Full-service recreation facility for Northstar property owners and guests" },
  ],
};

const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Northstar Luxury Retreat",
  url: "https://californialuxurystays.com/properties/northstar",
  description: "5,000 sq ft, 7BR/6BA luxury mountain home sleeping 22 guests at Northstar Lake Tahoe.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 Bitter Brush Way",
    addressLocality: "Truckee",
    addressRegion: "CA",
    postalCode: "96161",
    addressCountry: "US",
  },
  brand: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://californialuxurystays.com" },
    { "@type": "ListItem", position: 2, name: "Things to Do Near Northstar", item: "https://californialuxurystays.com/things-to-do-near-northstar" },
  ],
};

export default function ThingsToDoNearNorthstarPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <div className="pt-20">
        {/* Hero */}
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Northstar · Lake Tahoe Travel Guide</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Things to Do Near Northstar, Lake Tahoe
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-stone-300 leading-8">
            Northstar California sits at 6,330 feet in the Tahoe-Truckee region — one of the most activity-rich mountain destinations in the country. World-class skiing, a lift-served bike park, championship golf, direct access to Lake Tahoe, and a historic mountain town 10 minutes down the hill. Here is the complete four-season guide.
          </p>
        </div>

        {/* Skiing */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Winter Recreation</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Skiing: World-Class Resorts Within 30 Minutes</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Our Northstar property sits 5 minutes from one of California&apos;s premier ski resorts. On big snow years, the entire Tahoe region transforms into some of the best skiing in North America. Here are the resorts within easy reach:
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  name: "Northstar California Resort",
                  distance: "5 min drive",
                  acres: "3,170 acres · 100 trails",
                  detail: "The home resort — 97% of terrain is lift-accessible, with groomed runs from every level. Northstar is known for its family-friendly culture, excellent snowmaking, and the ski-in/ski-out Ritz-Carlton Village atmosphere. The Big Springs Gondola serves the primary mountain; Lookout Mountain adds a back-country-feeling area for advanced riders. Night skiing on select runs. Ski school for all ages. The NPOA community shuttle (available to our property guests) runs between the recreation center and Northstar Village during ski season.",
                  badge: "Home Resort",
                },
                {
                  name: "Palisades Tahoe (Squaw Valley)",
                  distance: "25 min drive",
                  acres: "6,000 acres · 270 trails",
                  detail: "The biggest resort in the Tahoe region, host of the 1960 Winter Olympics. Palisades + Alpine Meadows combined offer the full spectrum of terrain from groomed beginner boulevards to legendary expert chutes like KT-22. The aerial tram and the Headwall area are iconic. Best for strong intermediate to expert skiers who want max vertical and variety.",
                  badge: "Biggest in Tahoe",
                },
                {
                  name: "Sugar Bowl Resort",
                  distance: "20 min drive",
                  acres: "1,650 acres · 103 trails",
                  detail: "Established in 1939 (Disney helped fund it originally), Sugar Bowl is one of the most charming ski resorts in California. The gondola to the village from the parking lot is iconic. Excellent intermediate and advanced terrain, fewer crowds than Palisades, and a European alpine village feel. The Judah lift area is great for families. Highly recommended as a mid-week alternative to Northstar.",
                  badge: "Best Mid-Week",
                },
                {
                  name: "Boreal Mountain",
                  distance: "20 min drive",
                  acres: "380 acres · 41 trails",
                  detail: "Directly off I-80, Boreal is ideal for families with young children or beginners who don&apos;t need a full-mountain experience. Affordable day tickets, excellent beginner terrain, and night skiing. The Woodward Tahoe terrain park is here — one of the best freestyle parks in the Sierra for park riders and snowboarders.",
                  badge: "Best for Beginners",
                },
              ].map((resort) => (
                <div key={resort.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <div className="flex flex-wrap items-start gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-white">{resort.name}</h3>
                        <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-xs text-gold-400">{resort.badge}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-stone-400">{resort.distance} · {resort.acres}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-stone-300 leading-6">{resort.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Golf */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Golf</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Golf: Four Championship Courses Nearby</h2>
            <p className="mt-4 text-stone-300 leading-7">
              The Northstar area has some of the best high-altitude golf in the West, with championship courses sitting at 5,800–6,500 feet elevation. Ball travels 8–10% farther at altitude — factor that into club selection.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Northstar Golf Course",
                  distance: "On-site",
                  detail: "18-hole championship course designed by Robert Muir Graves. The course winds through the Northstar resort community with stunning Sierra views from every hole. Open to the public; property guests get preferred tee times. Green fees $80–$130.",
                },
                {
                  name: "Tahoe Donner Golf Course",
                  distance: "15 min",
                  detail: "A beautiful 18-hole course in the Tahoe Donner community, carved through mature pines at 6,000 ft. The course is well-maintained with excellent pace of play. Green fees $70–$100. The on-site restaurant has a great deck for post-round food and drinks.",
                },
                {
                  name: "Coyote Moon Golf Course",
                  distance: "20 min",
                  detail: "Consistently ranked one of the top public courses in California. The layout traverses dramatic terrain with elevation changes, rock outcroppings, and forest sightlines. Green fees $90–$140. This is the most technically demanding option in the area — not a casual round.",
                },
                {
                  name: "Schaffer&apos;s Mill Golf Club",
                  distance: "10 min",
                  detail: "A newer private-feel course with semi-public access in the Schaffer&apos;s Mill community. Excellent conditioning, fast greens, and a stunning setting near the Martis Creek valley. Green fees $85–$120.",
                },
              ].map((course) => (
                <div key={course.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{course.name}</h3>
                  <p className="mt-1 text-xs text-gold-400/70">{course.distance}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{course.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mountain Biking */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Mountain Biking</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Mountain Biking: From the Front Door to Epic Rides</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Northstar Bike Park", distance: "5 min", detail: "Lift-served bike park with 100+ miles of singletrack. Big Springs Gondola haul pass $60–$80. Beginner to expert terrain. Mid-June through Labor Day." },
                { name: "Tompkins Trail", distance: "From property", detail: "Singletrack loop accessible from the front door. 6.8 mi, 850 ft gain. Mix of forest singletrack and fire roads. 90 min–2.5 hrs. Intermediate." },
                { name: "Martis Valley Trail", distance: "From property", detail: "Paved 4.6-mile trail between Northstar and Truckee. Flat, scenic, family-friendly. Ride to Truckee for lunch and back. Perfect for casual riders." },
                { name: "Donner Lake Rim Trail", distance: "15 min", detail: "9 miles of singletrack open to bikes with spectacular views of Donner Lake. Rocky and exposed on ridge sections. Experienced riders. 3–4 hrs." },
                { name: "Flume Trail", distance: "30 min", detail: "One of the top 10 rides in the country — traverses the east shore of Lake Tahoe at 8,000 ft. 14 miles point-to-point with shuttle. Book via Flume Trail Mountain Bikes." },
              ].map((trail) => (
                <div key={trail.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-5">
                  <h3 className="font-semibold text-white">{trail.name}</h3>
                  <p className="mt-1 text-xs text-gold-400/70">{trail.distance}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{trail.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiking */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Hiking</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Hiking: Sierra Nevada Trails in Every Direction</h2>

            <div className="mt-8 space-y-5">
              {[
                {
                  name: "Donner Lake Rim Trail",
                  distance: "15 min to trailhead",
                  spec: "13 mi full loop · 2,400 ft gain · Moderate–Strenuous",
                  detail: "The full Donner Lake Rim Trail is a 13-mile loop around the ridge above Donner Lake with views stretching across the Sierra Nevada. The partial section from Castle Peak trailhead (4 mi out-and-back to ridge views) is one of the most popular shorter options. Historic significance: the ridge overlooking Donner Lake is where the ill-fated Donner Party was stranded in 1846–47.",
                },
                {
                  name: "Shirley Canyon Trail",
                  distance: "8 min to trailhead",
                  spec: "5 mi round trip · 1,600 ft gain · Moderate",
                  detail: "Starts at Palisades Tahoe (base area parking) and climbs through Shirley Canyon alongside a beautiful creek with multiple waterfalls, pool swimming spots, and granite slabs for sunbathing. An excellent summer hike that ends with an optional gondola ride back down. One of the best waterfall hikes in the Lake Tahoe region.",
                },
                {
                  name: "Five Lakes Trail",
                  distance: "15 min to trailhead",
                  spec: "4.6 mi round trip · 1,000 ft gain · Moderate",
                  detail: "A moderately demanding climb to a cluster of five alpine lakes near Palisades Tahoe. The lakes are excellent for swimming in late summer and the surrounding granite terrain is spectacular. Begin at the Alpine Meadows Road trailhead. Arrive early on summer weekends — this is a popular trail.",
                },
                {
                  name: "Mt. Judah Loop",
                  distance: "20 min to trailhead",
                  spec: "5 mi loop · 1,000 ft gain · Moderate",
                  detail: "Accessed from the Sugar Bowl/Donner Pass area, the Mt. Judah Loop traverses high alpine terrain above 8,000 ft with panoramic views of Donner Lake, the Central Valley on clear days, and the surrounding Sierra crest. Excellent wildflower display in late June–July. The Roller Pass section of the original Emigrant Trail crosses this route.",
                },
              ].map((trail) => (
                <div key={trail.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <div className="flex flex-wrap items-start gap-2">
                    <h3 className="font-semibold text-white">{trail.name}</h3>
                    <span className="text-xs text-gold-400/70">· {trail.distance} · {trail.spec}</span>
                  </div>
                  <p className="mt-3 text-sm text-stone-300 leading-6">{trail.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lake Tahoe */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Lake Tahoe</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Lake Tahoe: 15 Minutes Away</h2>
            <p className="mt-4 text-stone-300 leading-7">
              One of the most stunning lakes in the world — 22 miles long, 12 miles wide, and so clear you can see 70 feet to the bottom. Kings Beach is the closest North Shore access point at 15 minutes from the property.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Kings Beach",
                  distance: "15 min",
                  detail: "The closest beach to Northstar. Long stretch of sand, public beach access, kayak and paddleboard rentals from multiple vendors in summer. Water temperature reaches 68°F in August — actually swimmable. The beach has restrooms, picnic areas, and a casual strip of restaurants and ice cream shops within a 5-minute walk.",
                },
                {
                  name: "Sand Harbor State Park",
                  distance: "30 min (Nevada side)",
                  detail: "Arguably the most beautiful beach on Lake Tahoe — crystal clear water, massive granite boulders, and stunning mountain backdrop. Kayak rentals on-site. The annual Shakespeare at Sand Harbor festival in August is a beloved Tahoe tradition. Arrive early (before 9 AM) on summer weekends; the lot fills completely by 10 AM.",
                },
                {
                  name: "Emerald Bay State Park",
                  distance: "45 min",
                  detail: "Lake Tahoe&apos;s most photographed spot — a stunning cove with a small island, the only island in Lake Tahoe, plus a historic Scandinavian-style castle (Vikingsholm) accessible by a 1-mile trail to the water&apos;s edge. The bay&apos;s water is an otherworldly emerald-green. A mandatory stop if you&apos;re driving the lake.",
                },
                {
                  name: "Kayaking & Paddleboarding",
                  distance: "15 min",
                  detail: "Multiple rental operations at Kings Beach and Tahoe City offer kayaks, stand-up paddleboards, and pedal boats by the hour. Tahoe Sport Fishing and several other operators run guided sunset paddling tours from Kings Beach — an exceptional way to experience the lake in the golden hour.",
                },
              ].map((spot) => (
                <div key={spot.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{spot.name}</h3>
                  <p className="mt-1 text-xs text-gold-400/70">{spot.distance}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{spot.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Truckee */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Truckee, CA</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Downtown Truckee: 10 Minutes Away</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Truckee&apos;s Commercial Row is one of the most authentic historic mountain town main streets in California, operating continuously since the 1860s railroad era. Independent restaurants, bars, shops, and galleries line a two-block stretch with no chain restaurants in sight.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Commercial Row History", detail: "Stroll the Victorian-era storefronts. The Truckee Hotel (1871) and Jibboom Street buildings are listed on the National Register of Historic Places. Pick up the walking history guide at the Truckee Donner Chamber of Commerce." },
                { name: "Truckee River Walk", detail: "A 1.5-mile paved riverside path follows the Truckee River through town — flat, dog-friendly, and connects to the Martis Valley Trail system extending toward Northstar." },
                { name: "Alibi Ale Works", detail: "The best craft beer in Truckee, brewed on-site. 16 rotating taps, excellent pub food, and a beautiful Victorian taproom on Commercial Row. Family-friendly until 9 PM." },
                { name: "Trokay Restaurant", detail: "Truckee&apos;s most ambitious restaurant — seasonal tasting menus sourced from regional farms and foragers. Book weeks in advance for weekend dinner." },
                { name: "Squeeze In", detail: "60+ omelette varieties. A California institution. Go on weekdays at 8 AM to skip the weekend line." },
                { name: "Truckee Farmers Market", detail: "Thursday evenings in summer at the Commercial Row parking area. Local produce, cheese, prepared foods, and live music. Free admission." },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-5">
                  <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NPOA Amenities */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Guest Perk</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">NPOA Recreation Center: Included with Your Stay</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Guests of our Northstar property have full access to the Northstar Property Owners Association (NPOA) Recreation Center — a premium facility that most Northstar visitors never even know exists. This is one of the most significant perks of staying at our property vs. a hotel in the Village.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Outdoor Pool", detail: "Heated summer pool in a beautiful setting. Open Memorial Day through Labor Day, typically 8 AM–9 PM." },
                { name: "Year-Round Lap Pool", detail: "Indoor heated lap pool. Open year-round — excellent for ski week mornings or after a long day on the mountain." },
                { name: "Multiple Hot Tubs & Spas", detail: "Several hot tubs and therapy spas at the Recreation Center. The outdoor hot tub on a cold ski evening is hard to beat." },
                { name: "Fitness Center", detail: "Full gym with cardio machines, free weights, and strength equipment. Open year-round." },
                { name: "Tennis & Pickleball", detail: "Multiple lighted tennis and pickleball courts. Racquet rentals available at the Recreation Center." },
                { name: "More Amenities", detail: "Bocce ball, basketball court, arcade, game room, owners' lounge, playground, and BBQ picnic areas. Hours 8 AM–9 PM." },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-700 p-5">
                  <h3 className="font-semibold text-gold-400 text-sm">{item.name}</h3>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-stone-400">
              NPOA Recreation Center passes are provided with your booking. The center is approximately 3 minutes&apos; drive from the property.
            </p>
          </div>
        </section>

        {/* Where to Stay CTA */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
            <div className="rounded-2xl border border-gold-400/15 bg-gradient-to-br from-gold-400/10 via-charcoal-700 to-charcoal-800 p-8 lg:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Where to Stay Near Northstar</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">The Best Base for Northstar Activities</h2>
              <p className="mt-4 max-w-2xl text-stone-300 leading-7">
                Our Northstar property is 5 minutes from the ski resort, steps from the Tompkins Trail, and 15 minutes from Lake Tahoe. 7 bedrooms, 6 bathrooms, sleeps up to 22 — with a chef&apos;s kitchen, private hot tub, heated 2-car garage, and full NPOA Recreation Center access included. No platform service fees when you book direct.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/properties/northstar"
                  className="inline-block rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300"
                >
                  View the Northstar Retreat
                </Link>
                <a
                  href="https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/746614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-gold-400/40 px-8 py-3 text-sm font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400/10"
                >
                  Check Availability
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Guests", value: "Up to 22" },
                  { label: "Bedrooms", value: "7 BR" },
                  { label: "Rating", value: "5.0 ★" },
                  { label: "To Northstar", value: "5 min" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-semibold text-gold-400">{stat.value}</p>
                    <p className="text-xs text-stone-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
