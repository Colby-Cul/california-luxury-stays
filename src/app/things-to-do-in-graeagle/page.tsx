import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Things to Do in Graeagle CA | Complete Activity Guide",
  description: "Comprehensive guide to things to do in Graeagle, CA — golf, hiking, water activities, dining, and winter adventures in the Sierra Nevada. Updated for 2026.",
  alternates: {
    canonical: "https://californialuxurystays.com/things-to-do-in-graeagle",
  },
  openGraph: {
    title: "Things to Do in Graeagle CA | California Luxury Stays",
    description: "Golf, hiking, kayaking, skiing, dining and more — the complete guide to Graeagle, California.",
    url: "https://californialuxurystays.com/things-to-do-in-graeagle",
    type: "article",
  },
};

const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Graeagle Mountain Cabin",
  url: "https://californialuxurystays.com/properties/graeagle",
  description: "4-bedroom Sierra Nevada cabin steps from Graeagle Meadows Golf Course and 20 minutes from Frazier Falls.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Shasta Trail",
    addressLocality: "Graeagle",
    addressRegion: "CA",
    postalCode: "96103",
    addressCountry: "US",
  },
  brand: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
};

const touristDestinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Graeagle, California",
  description: "A mountain resort town in Plumas County, Sierra Nevada — known for world-class golf, alpine lakes, waterfall hiking, and four-season outdoor recreation.",
  url: "https://californialuxurystays.com/things-to-do-in-graeagle",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7625,
    longitude: -120.6175,
  },
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Frazier Falls", description: "178-foot waterfall, 1-mile accessible trail" },
    { "@type": "TouristAttraction", name: "Graeagle Meadows Golf Course", description: "Golf Digest Best Places to Play, par 72" },
    { "@type": "TouristAttraction", name: "Gold Lake Basin", description: "50+ glacial alpine lakes, hiking, kayaking, fishing" },
    { "@type": "TouristAttraction", name: "Plumas Eureka State Park", description: "Historic gold mine, hiking, winter skiing" },
    { "@type": "TouristAttraction", name: "Graeagle Mill Pond", description: "Historic landmark, kayak rentals, summer concerts" },
    { "@type": "TouristAttraction", name: "Western Pacific Railroad Museum", description: "One of the largest diesel locomotive collections in the US" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://californialuxurystays.com" },
    { "@type": "ListItem", position: 2, name: "Things to Do in Graeagle CA", item: "https://californialuxurystays.com/things-to-do-in-graeagle" },
  ],
};

export default function ThingsToDoInGraeaglePage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <div className="pt-20">
        {/* Hero */}
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Graeagle, CA Travel Guide</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Things to Do in Graeagle, California
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-stone-300 leading-8">
            Graeagle is one of California&apos;s best-kept mountain secrets. Nestled at 4,300 feet in Plumas County&apos;s Sierra Nevada, this small resort town punches far above its weight: six championship golf courses, 50+ alpine lakes, a 178-foot waterfall a mile from the road, a historic mill town district, and four-season outdoor adventures. Here is the complete guide.
          </p>
        </div>

        {/* Golf Section */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Outdoor Recreation</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Golf: 6 Courses Within 25 Minutes</h2>
            <p className="mt-4 text-stone-300 leading-7">
              The Graeagle area is home to some of the finest public golf in California. All six courses below are open to the public and sit within a 25-minute drive — green fees range from $20 to $150+.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Graeagle Meadows Golf Course",
                  distance: "5 min — walkable",
                  detail: "Par 72, 6,725 yards. Golf Digest \"Best Places to Play.\" Elevated tees, mountain views, on-site restaurant. Green fees $55–$85. Ideal for all skill levels.",
                  badge: "Best Value",
                },
                {
                  name: "Golf Club at Whitehawk Ranch",
                  distance: "10 min",
                  detail: "Consistently Top 10 public courses in California. Dick Bailey design through streams and wildflower meadows. 6,983 yards. Green fees $85–$115.",
                  badge: "Top Rated",
                },
                {
                  name: "Grizzly Ranch Golf Club",
                  distance: "20 min",
                  detail: "#1 public course in the Sierra Nevada, #11 in California (Golf Digest). Bob Cupp design. Green fees $85–$125. Bring layers — morning tee times run cool at 4,800 ft.",
                  badge: "#1 in Sierra",
                },
                {
                  name: "Dragon at Nakoma",
                  distance: "25 min",
                  detail: "Home to the only Frank Lloyd Wright-designed golf clubhouse in the world. Golf World Top 75. Green fees $110–$150. Collared shirts required.",
                  badge: "Bucket List",
                },
                {
                  name: "Plumas Pines Golf Course",
                  distance: "8 min",
                  detail: "Full resort, par 72. Longboard's Restaurant on-site — perfect for group golf-and-dinner days. Green fees $45–$75.",
                  badge: "Best for Groups",
                },
                {
                  name: "Feather River Park Resort",
                  distance: "5 min",
                  detail: "Casual 9-hole par-35 on the Middle Fork of the Feather River. Perfect for beginners, kids, and relaxed rounds. Green fees $20–$25.",
                  badge: "Family Friendly",
                },
              ].map((course) => (
                <div key={course.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">{course.name}</h3>
                    <span className="shrink-0 rounded-full bg-gold-400/15 px-2 py-0.5 text-xs text-gold-400">{course.badge}</span>
                  </div>
                  <p className="mt-1 text-xs text-gold-400/70">{course.distance}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{course.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold-400/10 bg-charcoal-700 p-6">
              <h3 className="font-semibold text-white">Golf Pro Tips</h3>
              <ul className="mt-3 space-y-2 text-sm text-stone-300">
                <li>• <strong className="text-stone-100">Book early:</strong> July–August weekends at Whitehawk Ranch and Grizzly Ranch fill 7–10 days in advance.</li>
                <li>• <strong className="text-stone-100">Tee off before 11 AM</strong> to complete your round before afternoon Sierra thunderstorms.</li>
                <li>• <strong className="text-stone-100">Altitude bonus:</strong> Ball travels ~8–10% farther at 4,500+ feet — adjust your club selection down one club.</li>
                <li>• <strong className="text-stone-100">After your round:</strong> Saturday prime rib dinner at Graeagle Meadows Clubhouse is a local tradition.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hiking Section */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Hiking & Nature</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Hiking: From Paved Paths to Alpine Peaks</h2>
            <p className="mt-4 text-stone-300 leading-7">
              The Plumas National Forest and surrounding wilderness offer hiking for every level — from a paved 1-mile walk to a 178-foot waterfall to demanding summit climbs above 9,000 feet.
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">Frazier Falls Trail</h3>
                  <span className="rounded-full bg-green-900/40 px-2 py-0.5 text-xs text-green-400">Easy</span>
                  <span className="text-xs text-stone-400">20 min from cabin · 1 mi paved · 82 ft gain · Wheelchair accessible</span>
                </div>
                <p className="mt-3 text-sm text-stone-300 leading-6">
                  The Sierra&apos;s most accessible spectacular waterfall. A 1-mile paved trail ends at a fenced overlook above a 178-foot cascade thundering down a granite cliff face. Peak flow is May–June (snowmelt). Stroller and wheelchair friendly. Combine with Gold Lake or Sardine Lake for a full day in the basin.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">Rock Lake Trail</h3>
                  <span className="rounded-full bg-yellow-900/40 px-2 py-0.5 text-xs text-yellow-400">Moderate</span>
                  <span className="text-xs text-stone-400">15 min from cabin · 4.2 mi round trip · 700 ft gain</span>
                </div>
                <p className="mt-3 text-sm text-stone-300 leading-6">
                  A rewarding hike in the Gold Lake Basin to a serene alpine lake. The trail climbs through old-growth forest and across granite slabs before opening to Rock Lake, a clear glacially-carved pool with excellent fishing and few crowds. Best June–October.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">Plumas Eureka State Park Trails</h3>
                  <span className="rounded-full bg-yellow-900/40 px-2 py-0.5 text-xs text-yellow-400">Easy–Moderate</span>
                  <span className="text-xs text-stone-400">10 min from cabin · Multiple trails 1–8 mi</span>
                </div>
                <p className="mt-3 text-sm text-stone-300 leading-6">
                  Historic gold mining museum (free with park entry) plus excellent trail network. The Eureka Peak Loop is 8 miles round-trip with 2,400 ft gain to a summit with panoramic Sierra views. Shorter options available. The park also has excellent cross-country skiing trails in winter.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">Gold Lake Basin: Multiple Lakes</h3>
                  <span className="rounded-full bg-yellow-900/40 px-2 py-0.5 text-xs text-yellow-400">Easy–Moderate</span>
                  <span className="text-xs text-stone-400">15 min from cabin · 50+ lakes · Multiple trailheads</span>
                </div>
                <p className="mt-3 text-sm text-stone-300 leading-6">
                  The Gold Lake Basin contains over 50 glacially-carved lakes accessible from multiple trailheads off Gold Lake Road. Long Lake (2 mi round trip), Sardine Lake Upper (3 mi), and the Sierra Buttes Lookout Tower (4 mi, 1,800 ft gain — spectacular views) are standouts. June wildflower season is extraordinary.
                </p>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-white">Spanish Peak Trail</h3>
                  <span className="rounded-full bg-red-900/40 px-2 py-0.5 text-xs text-red-400">Strenuous</span>
                  <span className="text-xs text-stone-400">30 min from cabin · 9 mi round trip · 2,800 ft gain · Summit 7,017 ft</span>
                </div>
                <p className="mt-3 text-sm text-stone-300 leading-6">
                  The most demanding hike in the immediate Graeagle area. The trail climbs from meadow through dense forest and above treeline to Spanish Peak&apos;s summit, with 360-degree views across Plumas County and the Sierra Nevada. Experienced hikers only — bring navigation tools and sufficient water. Best July–September.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Water Activities */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Water Recreation</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Water Activities: Lakes, Ponds & Rivers</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Graeagle is surrounded by some of the most pristine freshwater in California. From the historic Mill Pond in the center of town to the remote alpine lakes of the Gold Lake Basin, the options for paddling, swimming, and fishing are exceptional.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Graeagle Mill Pond",
                  distance: "2 min walk",
                  detail: "The heart of Graeagle. This historic man-made lake (built in the 1900s to power the lumber mill) now hosts kayak, paddleboard, canoe, and paddleboat rentals through the Graeagle Outpost. Sandy beach, summer concerts, picnic tables, and the town&apos;s best espresso and breakfast burritos. Open Memorial Day through Labor Day.",
                },
                {
                  name: "Gold Lake",
                  distance: "15 min",
                  detail: "The largest lake in the Gold Lake Basin at 1,500 acres. Kayak and paddleboard rentals at Gold Lake Lodge in summer. Excellent fly fishing for trophy rainbow and brown trout. Sandy beach at the south end for swimming (water stays ~62–68°F even in August). Shoreline walking path.",
                },
                {
                  name: "Sardine Lake",
                  distance: "20 min",
                  detail: "Arguably the most photogenic lake in the Sierra — the reflection of the jagged Sierra Buttes peaks in the crystal-clear water on a calm morning is extraordinary. The Sardine Lake Resort serves lunch and dinner in summer. Upper Sardine Lake requires a 1.5-mile hike from the lower parking area.",
                },
                {
                  name: "Middle Fork Feather River",
                  distance: "Nearby",
                  detail: "Over 1,000 miles of mountain streams and rivers in Plumas County for year-round trout fishing. The Middle Fork near Graeagle is a popular catch-and-release fly fishing destination. No boat required — wading access is excellent throughout the area.",
                },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-xs text-gold-400/70">{item.distance}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Winter Activities */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Winter Recreation</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Winter Activities</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Graeagle transforms in winter. The town sits at 4,300 feet and typically receives 10–15 feet of snow annually — enough for a genuine mountain winter experience without the crowds and prices of major ski resorts.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Plumas Eureka Ski Bowl</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  A small, historic community ski area in Plumas Eureka State Park — 10 minutes from the cabin. The ski bowl has a vertical drop of about 500 feet and is primarily a beginner-to-intermediate area, ideal for teaching kids to ski without the overwhelming scale and cost of a major resort. Weekend operations only; check conditions at the state park website before heading up.
                </p>
              </div>
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Cross-Country Skiing & Snowshoeing</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  The state park maintains approximately 20 kilometers of groomed cross-country ski trails in winter, and hundreds of miles of ungroomed forest roads and trails become accessible for snowshoeing. The meadows around Graeagle are flat and ideal for beginner snowshoers — you can snowshoe from the cabin through the meadow to the Mill Pond in winter for a magical silent walk through snow-covered pines. Rental equipment is available at Howling Dog Bike and Ski in Blairsden (5 minutes).
                </p>
              </div>
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Day Trips to Major Ski Resorts</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  Northstar California (60 min), Palisades Tahoe (75 min), and Sugar Bowl (55 min) are all accessible as day trips from the Graeagle cabin — bring chains or 4WD for mountain driving in winter. The cabin&apos;s stone fireplace and EV charger make it an ideal base for ski days at major resorts without paying Lake Tahoe lodging prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dining */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Local Dining</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Where to Eat in Graeagle</h2>
            <p className="mt-4 text-stone-300 leading-7">
              Graeagle&apos;s dining scene is small but strong — the best restaurants here would be popular in any city.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { name: "The Brewing Lair", detail: "Craft brewery on 15 forested acres with outdoor seating, disc golf, house-brewed ales, tacos, and live summer music. A Graeagle institution. Family and dog friendly. 2 miles.", price: "$" },
                { name: "Grizzly Grill", detail: "The area&apos;s best sit-down restaurant. Upscale American cuisine with steaks, fresh seafood, and housemade desserts in a handsome mountain lodge setting. 1 mile.", price: "$$" },
                { name: "Longboard's Restaurant", detail: "Casual bistro at Plumas Pines Golf Resort. Hearty entrees, craft cocktails, and a wall of TVs — perfect for a relaxed post-golf dinner. 2 miles.", price: "$$" },
                { name: "The PourHouse", detail: "Local wine and craft beer bar with charcuterie, small plates, and a welcoming atmosphere. One of the few places in the area with extended evening hours. Downtown Graeagle.", price: "$$" },
                { name: "Mohawk Hotel Restaurant", detail: "The Mohawk Hotel in nearby Blairsden is a historic Sierra Nevada property with a restaurant serving classic American food in a charming 1920s setting. 5 miles.", price: "$$" },
                { name: "Firewoods at Gray Eagle Lodge", detail: "Seasonal gourmet lodge restaurant serving prime rib, sea bass, and cocktails in a serene forest setting. One of the region&apos;s most atmospheric dining rooms. 5 miles.", price: "$$$" },
              ].map((r) => (
                <div key={r.name} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{r.name}</h3>
                    <span className="text-xs text-gold-400">{r.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-stone-300 leading-6">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mill Pond & Portola */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Local Landmarks</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-gold-400">Graeagle Mill Pond & Local Landmarks</h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Graeagle Millpond</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  The Graeagle Mill Pond is both a historic landmark and the town&apos;s social heart. Built in the early 1900s to power the California Fruit Exchange lumber mill, the pond is now a recreation area with kayak, canoe, paddleboard, and paddleboat rentals operated by the Graeagle Outpost (open Memorial Day to Labor Day, daily 9 AM–5 PM, rentals from $15/hour). A sandy beach at the east end is popular for swimming and picnicking. Summer concerts on the grassy bank are a beloved community tradition — check the Graeagle schedule for free weekend performances in July and August.
                </p>
              </div>
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h3 className="font-semibold text-white">Portola Railroad Museum</h3>
                <p className="mt-2 text-sm text-stone-300 leading-6">
                  35 minutes from Graeagle in the town of Portola, the Western Pacific Railroad Museum houses one of the largest collections of diesel locomotives in the country — over 100 pieces of historic rolling stock. On operating weekends (check calendar), visitors can ride a cab on historic locomotives, including some that are fully operational. Admission is $10/adult, free for children under 12. A great half-day trip for families with train enthusiasts or children who want a hands-on history experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where to Stay CTA */}
        <section className="border-t border-charcoal-600">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
            <div className="rounded-2xl border border-gold-400/15 bg-gradient-to-br from-gold-400/10 via-charcoal-700 to-charcoal-800 p-8 lg:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-400/70">Where to Stay</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">The Best Home Base for Graeagle</h2>
              <p className="mt-4 max-w-2xl text-stone-300 leading-7">
                Our Graeagle Mountain Cabin sits on a quiet, tree-lined street just 5 minutes&apos; walk from Graeagle Meadows Golf Course, 2 minutes from the Mill Pond, and 20 minutes from Frazier Falls. 4 bedrooms, 2.5 bathrooms, sleeps 9 — fully equipped with a stone fireplace, EV charger, wraparound deck, and everything you need for a perfect Sierra Nevada stay. No platform service fees when you book direct.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/properties/graeagle"
                  className="inline-block rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300"
                >
                  View the Graeagle Cabin
                </Link>
                <a
                  href="https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/533203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-gold-400/40 px-8 py-3 text-sm font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400/10"
                >
                  Check Availability
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Guests", value: "Up to 9" },
                  { label: "Bedrooms", value: "4 BR" },
                  { label: "Rating", value: "4.73 ★" },
                  { label: "Golf", value: "5 min walk" },
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
