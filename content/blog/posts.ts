export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  tags: string[];
  image?: string;
  body: string; // HTML content
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-golf-courses-near-graeagle",
    title: "5 Golf Courses Within 25 Minutes of Our Graeagle Cabin",
    description: "From the Frank Lloyd Wright clubhouse at Nakoma to the top-rated Grizzly Ranch, here are our favorite courses near the cabin.",
    date: "2026-04-07",
    author: "CLS Team",
    category: "Graeagle",
    tags: ["golf", "graeagle", "outdoors", "summer"],
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80",
    body: `
<p>One of the best-kept secrets about the Graeagle area? It's home to some of the finest golf in California — six courses within 25 minutes of our cabin, each with its own character and stunning Sierra Nevada backdrop.</p>

<h2>1. Graeagle Meadows Golf Course (5 min)</h2>
<p>Right down the road and walkable from the cabin, Graeagle Meadows is a par 72, 6,725-yard course that Golf Digest named a "Best Place to Play." The mountain views from the elevated tees are spectacular, and the on-site restaurant makes it easy to extend the day.</p>

<h2>2. Golf Club at Whitehawk Ranch (10 min)</h2>
<p>Consistently ranked in the Top 10 public courses in California, Whitehawk Ranch is a Dick Bailey design that weaves through streams, waterfalls, and wildflower meadows. It's an absolute must-play.</p>

<h2>3. Plumas Pines Golf Course (8 min)</h2>
<p>A full-resort par 72 with Longboard's Restaurant on-site — perfect for groups who want great golf followed by a casual dinner with craft cocktails and a wall of TVs.</p>

<h2>4. Grizzly Ranch Golf Club (20 min)</h2>
<p>Rated #1 public course in the Sierra Nevada and #11 in California by Golf Digest. Bob Cupp designed this masterpiece, and every hole delivers. Worth the short drive to Portola.</p>

<h2>5. Dragon at Nakoma (25 min)</h2>
<p>The showstopper. The Dragon course is home to the only Frank Lloyd Wright-designed golf clubhouse in the world. Golf World Top 75. The architecture alone is worth the visit — the golf is just a bonus.</p>

<h2>Bonus: Feather River Park Resort</h2>
<p>Just 5 minutes away, this casual 9-hole, par-35 course on the Middle Fork of the Feather River is perfect for beginners, kids, or anyone who wants a relaxed round without the pressure of a championship course.</p>

<p>All six courses are open to the public, and green fees range from $25 (Feather River) to $150+ (Grizzly Ranch). We're happy to help with tee time recommendations — just ask in your booking inquiry.</p>
`,
  },
  {
    slug: "frazier-falls-easiest-spectacular-hike",
    title: "Frazier Falls: The Easiest Spectacular Hike in the Sierra",
    description: "A 1-mile paved trail to a 178-foot waterfall — family-friendly, wheelchair accessible, and absolutely stunning in spring.",
    date: "2026-04-05",
    author: "CLS Team",
    category: "Graeagle",
    tags: ["hiking", "graeagle", "family", "outdoors", "summer"],
    image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=1200&q=80",
    body: `
<p>If you only do one hike during your stay at our Graeagle cabin, make it Frazier Falls. It's just 20 minutes from the front door, and it delivers one of the most dramatic payoffs in the Sierra Nevada for the least amount of effort.</p>

<h2>The Trail</h2>
<p>The Frazier Falls Trail is approximately 1 mile each way on a well-maintained, mostly paved path. The total elevation gain is just 82 feet — making it genuinely accessible for strollers, wheelchairs, and anyone who wants a beautiful walk without a demanding climb. The round trip takes about 25-30 minutes at a leisurely pace.</p>

<h2>The Waterfall</h2>
<p>At the end of the trail, a fenced overlook gives you a front-row view of Frazier Falls — a 178-foot cascade that thunders down a granite cliff face. In spring and early summer (May through July), the flow is at its peak, and the mist can reach the viewing platform. By late summer, the flow decreases but the falls remain beautiful.</p>

<h2>When to Go</h2>
<p>The trail is typically accessible from late May through October, depending on snowpack. Peak waterfall flow is usually June. Early morning visits (before 10 AM) offer the best light for photos and fewer crowds. The parking lot can fill up on summer weekends by late morning.</p>

<h2>Getting There</h2>
<p>From the cabin, head south on Highway 89, then turn onto Gold Lake Road. The Frazier Falls trailhead parking lot is well-signed, about 4 miles up Gold Lake Road. The drive takes about 20 minutes.</p>

<h2>Tips</h2>
<ul>
<li>Bring a light jacket — it can be cool in the shade even on warm days</li>
<li>The trail is dog-friendly (leashed)</li>
<li>Combine it with a stop at Gold Lake or Sardine Lake on the way back</li>
<li>Pack a picnic — there are tables at the trailhead</li>
</ul>
`,
  },
  {
    slug: "best-restaurants-near-northstar",
    title: "The Best Restaurants Near Northstar Village for Families",
    description: "From Ritz-Carlton dining to beloved Truckee breakfast spots, here's where to eat during your Northstar stay.",
    date: "2026-04-03",
    author: "CLS Team",
    category: "Northstar",
    tags: ["dining", "northstar", "family", "truckee", "tahoe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    body: `
<p>One of the best things about staying at our Northstar property is the dining. Whether you want a five-star meal at the Ritz-Carlton or a casual pizza in the Village, there's something for every taste and budget within 20 minutes.</p>

<h2>In Northstar Village (5 min)</h2>

<h3>Manzanita at The Ritz-Carlton ($$$)</h3>
<p>Mountain-inspired cuisine with a stone fireplace and impeccable service. Their breakfast is excellent — we especially love the huckleberry pancakes. Dinner features seasonal California cuisine with a Tahoe twist. Reservations recommended.</p>

<h3>Rubicon Pizza Company ($$)</h3>
<p>The go-to for families. Hand-tossed gourmet pizza with creative toppings, plus pasta and salads. The energy is fun and casual, and kids love it. No reservations needed, but expect a wait on ski weekends.</p>

<h3>Backyard Bar & BBQ ($$)</h3>
<p>Ski-in/ski-out at the Ritz-Carlton — literally pull off the mountain and grab smoked brisket, ribs, and a craft beer on the deck. The vibes are incredible on a sunny ski day.</p>

<h2>Downtown Truckee (10 min)</h2>

<h3>Moody's Bistro Bar & Beats ($$$)</h3>
<p>Farm-to-table on historic Commercial Row. Great cocktails, live music, and a menu that changes with the seasons. It's our top pick for a date night or group dinner.</p>

<h3>Squeeze In ($)</h3>
<p>The legendary breakfast spot. Over 60 omelette varieties and a line out the door every weekend. Pro tip: go on a weekday at 8 AM to skip the wait. Their "Racy Tracy" omelette is famous for a reason.</p>

<h3>Bar of America ($$)</h3>
<p>Three decades of Truckee history. Campfire-inspired American food, great beer selection, and a patio that's perfect for people-watching on Commercial Row.</p>

<h2>Worth the Drive</h2>

<h3>Christy Hill Lakeside Bistro, Tahoe City (20 min, $$$)</h3>
<p>If you want the single best dining view in the Tahoe area, this is it. Panoramic Lake Tahoe views with French-Mediterranean cuisine. Perfect for a special occasion. Book a lakeside table at sunset.</p>
`,
  },
  {
    slug: "why-book-direct",
    title: "Why Book Direct? The Real Cost of Platform Fees",
    description: "A transparent look at what Airbnb and VRBO actually charge — and how booking direct saves you money with better service.",
    date: "2026-04-01",
    author: "CLS Team",
    category: "Booking",
    tags: ["booking", "direct", "tips"],
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
    body: `
<p>If you've ever booked a vacation rental on Airbnb or VRBO, you've probably noticed the price jump between the listed nightly rate and the final checkout total. That gap is platform fees — and they add up fast, especially on premium properties.</p>

<h2>What Platforms Actually Charge</h2>
<p>Airbnb typically charges guests a 14-16% service fee on top of the host's price. VRBO charges 6-12%. On a 3-night stay at our Northstar property during ski season, that can mean $300-$500 in fees that go straight to the platform — not to us, not to your experience.</p>

<h2>What Booking Direct Gets You</h2>
<ul>
<li><strong>No service fees</strong> — the price you see is the price you pay (plus cleaning and tax)</li>
<li><strong>Direct communication</strong> — text or email us directly, no platform messaging delays</li>
<li><strong>Flexible modifications</strong> — need to change dates? We work with you, not against you</li>
<li><strong>Personal concierge service</strong> — restaurant recommendations, activity planning, local tips</li>
<li><strong>Best rate guarantee</strong> — our direct rates are always equal to or lower than any platform</li>
</ul>

<h2>Same Property, Better Experience</h2>
<p>When you book direct, 100% of your money goes toward your stay and our ability to maintain these properties at the highest standard. We invest in premium linens, top-tier amenities, and the personal touches that make a mountain vacation memorable.</p>

<p>Ready to book? Check availability on our <a href="/properties/graeagle">Graeagle cabin</a> or <a href="/properties/northstar">Northstar retreat</a> — and save those platform fees for an extra dinner out.</p>
`,
  },
  {
    slug: "northstar-mountain-biking-guide",
    title: "Northstar Mountain Biking: Everything You Need to Know",
    description: "From lift-served bike park to family-friendly trails, here's your complete guide to mountain biking at Northstar and beyond.",
    date: "2026-03-28",
    author: "CLS Team",
    category: "Northstar",
    tags: ["biking", "northstar", "outdoors", "summer"],
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1200&q=80",
    body: `
<p>Northstar isn't just a ski resort — in summer, it transforms into one of the best mountain biking destinations in the Tahoe region. And with our property located steps from the Tompkins Trail, you can ride right from the front door.</p>

<h2>Northstar Bike Park</h2>
<p>The lift-served bike park at Northstar California Resort is the main attraction. Take the Big Springs Gondola up and choose from a variety of trails ranging from smooth, flowy cruisers to technical downhill runs. Bike and gear rentals are available at the base, and they offer lessons for all skill levels.</p>
<p>The bike park typically operates from mid-June through mid-September, Friday through Sunday (daily in peak summer). A full-day bike haul pass runs around $60-80.</p>

<h2>Tompkins Trail (From the Property)</h2>
<p>The Tompkins Trail connects directly to the Northstar trail network and is accessible from our property. It's a mix of singletrack and fire road that's great for intermediate riders. You can loop through the forest and meadows without ever loading your bike onto a car.</p>

<h2>Martis Valley Trail</h2>
<p>For a more relaxed ride, the paved Martis Valley Trail runs 4.6 miles between Northstar and downtown Truckee. It's flat, scenic, and perfect for families or a casual afternoon spin. You can ride to Truckee for lunch and back.</p>

<h2>Donner Lake Rim Trail</h2>
<p>For experienced riders looking for a longer adventure, 9 miles of the Donner Lake Rim Trail are open to bikes. The views of Donner Lake from the high country are spectacular. It's about 15 minutes by car to the trailhead.</p>

<h2>Rentals & Shops</h2>
<p>If you didn't bring your own bike, Northstar has a full rental fleet at the Village. For more specialized needs, there are several bike shops in downtown Truckee. We can recommend our favorites — just ask when you book.</p>
`,
  },
];

export function getReadingTime(body: string): number {
  const text = body.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
