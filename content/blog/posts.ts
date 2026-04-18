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
    image: "/images/blog/golf.jpg",
    body: `
<p>One of the best-kept secrets about the Graeagle area? It's home to some of the finest golf in California — six courses within 25 minutes of our cabin, each with its own character and stunning Sierra Nevada backdrop. Whether you're a scratch golfer hunting a bucket-list round or a casual player looking for a beautiful walk in the mountains, Graeagle delivers a golf experience that rivals anything in Pebble Beach or the Monterey Peninsula at a fraction of the cost.</p>

<h2>1. Graeagle Meadows Golf Course (5 min)</h2>
<p>Right down the road and walkable from the cabin, Graeagle Meadows is a par 72, 6,725-yard course that Golf Digest named a "Best Place to Play." The mountain views from the elevated tees are spectacular, and the on-site restaurant makes it easy to extend the day. Green fees typically run $55–$85 depending on the day and season — one of the best value rounds in the region.</p>
<p>Graeagle Meadows suits every type of player. The layout is approachable enough for high-handicappers to have fun, but the elevation changes, tree-lined fairways, and fast mountain greens demand accuracy from better players. We particularly love the back nine, which climbs into the pines and rewards well-placed tee shots with stunning views of the Feather River Valley.</p>
<p><strong>Best for:</strong> All skill levels, families with beginners, those who want to walk from the cabin.<br>
<strong>Book:</strong> Call ahead — weekends fill up fast in July and August. Tee times at graeaglemeadows.com.<br>
<strong>Dress code:</strong> Smart casual. Collared shirts preferred but not strictly enforced.</p>

<h2>2. Golf Club at Whitehawk Ranch (10 min)</h2>
<p>Consistently ranked in the Top 10 public courses in California, Whitehawk Ranch is a Dick Bailey design that weaves through streams, waterfalls, and wildflower meadows at 5,000-foot elevation. It's an absolute must-play — and guests visiting in June will be treated to meadows exploding with yellow mule-ears and purple lupine lining the fairways.</p>
<p>The course plays 6,983 yards from the back tees but is enjoyable from every set of boxes. The par-5 15th hole, which plays along a tree-lined creek, is regularly cited as one of the most beautiful holes in Northern California. Green fees run $85–$115, and the pro shop is well-stocked for forgotten gear.</p>
<p><strong>Best for:</strong> Serious golfers looking for a top-tier public experience. Also great for intermediate players who want a memorable round.<br>
<strong>Book:</strong> Reserve at least a week in advance in summer. Whitehawkranch.com.<br>
<strong>Dress code:</strong> Soft spikes required. Collared shirts.</p>

<h2>3. Plumas Pines Golf Course (8 min)</h2>
<p>A full-resort par 72 with Longboard's Restaurant on-site — perfect for groups who want great golf followed by a casual dinner with craft cocktails and a wall of TVs. Plumas Pines plays through the Sierra Nevada pines and feels more remote than its 8-minute drive suggests. Green fees are among the most affordable in the area at $45–$75.</p>
<p>The course has been substantially renovated in recent years, and the conditions are excellent. We recommend booking the early tee time and then settling into Longboard's for lunch after your round. Their happy hour from 4–6 PM is a local favorite — $5 pints and half-off appetizers on the deck.</p>
<p><strong>Best for:</strong> Groups who want golf plus a great dinner without driving far. Budget-conscious golfers who still want a quality experience.</p>

<h2>4. Grizzly Ranch Golf Club (20 min)</h2>
<p>Rated #1 public course in the Sierra Nevada and #11 in California by Golf Digest. Bob Cupp designed this masterpiece, and every hole delivers. Worth the short drive to Portola. Grizzly Ranch sits at 4,800 feet elevation, which means your ball travels about 10% farther than at sea level — so adjust your club selection accordingly.</p>
<p>The signature par-3 8th hole plays over a natural rock formation to a green backed by mountain ridges. Even non-golfers in your group will want to walk that one. Green fees run $85–$125, and twilight rates offer excellent value after 2 PM. The clubhouse is handsome and the staff exceptionally friendly — this course punches well above its greens-fee weight class.</p>
<p><strong>Best for:</strong> Golfers who want to say they've played the #1 course in the Sierras. Competitive players who want a true challenge.<br>
<strong>Best time of day:</strong> Morning rounds have the calmest conditions; afternoon sees summer thunderstorms roll in around 3–4 PM, so start early.</p>

<h2>5. Dragon at Nakoma (25 min)</h2>
<p>The showstopper. The Dragon course is home to the only Frank Lloyd Wright-designed golf clubhouse in the world. Golf World Top 75. The architecture alone is worth the visit — the golf is just a bonus. Wright's original design for the Nakoma Resort was commissioned in the 1920s but wasn't actually built until 2004, making it one of the most ambitious posthumous architectural projects ever completed.</p>
<p>The clubhouse interior is magnificent: organic forms, natural stone, and Wright's signature Prairie Style horizontal lines all set against a backdrop of pine-forested ridgelines. Even if you're not playing, call ahead and ask if you can walk through the clubhouse — the staff is generally happy to accommodate curious architecture lovers.</p>
<p>The course itself (designed by Robin Nelson) plays 7,015 yards through forested terrain and across multiple elevation changes. Green fees are $110–$150. Dress code is more formal than the other area courses — collared shirts required, denim not permitted.</p>
<p><strong>Best for:</strong> Architecture enthusiasts, bucket-list golfers, anyone celebrating a special occasion.<br>
<strong>Dress code:</strong> Collared shirts required. No denim. Soft spikes only.</p>

<h2>Bonus: Feather River Park Resort</h2>
<p>Just 5 minutes away, this casual 9-hole, par-35 course on the Middle Fork of the Feather River is perfect for beginners, kids, or anyone who wants a relaxed round without the pressure of a championship course. Green fees are just $20–$25, making it an accessible choice for families where skill levels vary. The riverside setting is genuinely beautiful, and you'll likely see osprey and great blue herons working the water along the back nine.</p>

<h2>The Graeagle Meadows Walking Path and Mill Pond Area</h2>
<p>Whether or not you golf, the Graeagle Meadow itself is worth exploring on foot. A flat, paved path runs along the edge of the fairways and through the historic mill town district, connecting to the Graeagle Mill Pond about a half-mile east. The Mill Pond — a beautiful man-made lake created in the early 1900s to power the local lumber mill — now serves as Graeagle's summertime gathering spot, with kayak and paddleboard rentals, a small sandy beach, and a concession stand operated by the Graeagle Outpost (excellent burritos and espresso).</p>
<p>Summer evenings at the Mill Pond often feature live music and community gatherings. The path from the cabin through the meadow to the pond takes about 20 minutes on foot and is flat enough for strollers and casual walkers. We recommend the walk at golden hour — around 7:30 PM in June and July — when the light on the water and the sound of the evening birds make for an unforgettable Sierra evening.</p>

<h2>Planning Your Golf Getaway: Pro Tips</h2>
<ul>
<li><strong>Book tee times in advance.</strong> July 4th weekend, Labor Day, and any summer weekend with good weather will see every course in the area fully booked. Reserve at least 7–10 days ahead in peak season.</li>
<li><strong>Play early to avoid afternoon weather.</strong> Summer afternoons in the Sierra bring occasional thunderstorms, especially at higher elevations. Most courses will pause play for lightning — tee off before 11 AM to complete your round comfortably.</li>
<li><strong>Bring layers.</strong> Morning tee times at 4,500–5,000 feet can be cool (55–65°F) even in July. By noon it'll be warm, but the layer helps for the first few holes.</li>
<li><strong>The combo day:</strong> Our favorite Graeagle golf day combines an early round at Whitehawk Ranch with an afternoon walk to Graeagle Meadow and Mill Pond, then dinner at the Grizzly Grill in the evening. It covers the best of the area in one perfect day.</li>
<li><strong>Rentals available.</strong> All courses have club rental for those who travel light. Quality varies — Whitehawk Ranch and Dragon at Nakoma have the best rental equipment.</li>
<li><strong>After your round:</strong> The Graeagle Meadows Clubhouse restaurant does a Saturday prime rib dinner that's become a local institution. Call ahead for reservations. The deck has panoramic mountain views and is one of the best spots in the area for a post-round cocktail.</li>
</ul>

<p>Ready to tee it up? Our Graeagle cabin puts you closer to world-class golf than almost any vacation rental in Northern California. <a href="/properties/graeagle" class="text-gold-400 underline hover:text-gold-300">Book the Graeagle cabin</a> and we'll help you line up the perfect golf itinerary for your group — just let us know your skill levels and preferred courses when you reach out.</p>
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
    image: "/images/blog/frazier-falls.jpg",
    body: `
<p>If you only do one hike during your stay at our Graeagle cabin, make it Frazier Falls. It's just 20 minutes from the front door, and it delivers one of the most dramatic payoffs in the Sierra Nevada for the least amount of effort. A 178-foot waterfall thundering down an ancient granite cliff, framed by old-growth forest, accessible to nearly anyone who can walk a mile — this is the rare place that lives up to every photo you've seen.</p>

<h2>The Trail</h2>
<p>The Frazier Falls Trail is approximately 1 mile each way on a well-maintained, mostly paved path. The total elevation gain is just 82 feet — making it genuinely accessible for strollers, wheelchairs, and anyone who wants a beautiful walk without a demanding climb. The round trip takes about 25-30 minutes at a leisurely pace, though you'll want to linger at the overlook. The path winds through a mixed conifer forest of white fir, Jeffrey pine, and incense cedar before opening to the overlook platform above the gorge.</p>

<h2>The Waterfall</h2>
<p>At the end of the trail, a fenced overlook gives you a front-row view of Frazier Falls — a 178-foot cascade that thunders down a granite cliff face into a pool below. In spring and early summer (May through July), the flow is at its peak, and the mist can reach the viewing platform. By late summer, the flow decreases but the falls remain beautiful — the exposed granite becomes more visible, and the afternoon light hitting the rock face creates striking photographic opportunities even in low-flow conditions.</p>
<p>The geology here is a direct product of the last Ice Age. Frazier Creek carved this gorge over thousands of years as it flowed from the Lakes Basin — the cluster of glacially-scoured alpine lakes that sit above — down toward the Middle Fork of the Feather River. The granite cliff face the water drops over is roughly 100 million years old, part of the Sierra Nevada batholith that forms the spine of California's mountains.</p>

<h2>Seasonal Guide</h2>
<h3>Spring (May–June)</h3>
<p>Peak waterfall season. Snowmelt from the Lakes Basin above pumps maximum volume through Frazier Creek, and the falls hit their most dramatic flow — the thundering at the overlook is audible from the parking lot. The forest floor is carpeted with wildflowers: purple shooting stars, yellow violets, pink bleeding hearts. Note that the road may not open until late May in high-snowpack years. Check conditions with the Plumas National Forest before driving out.</p>

<h3>Early Summer (July)</h3>
<p>Still excellent flow, but the road is reliably open and crowds are manageable on weekdays. Afternoon light is particularly beautiful in July, hitting the spray at a low angle that creates persistent rainbows at the overlook. Temperatures in the forest are comfortable — typically 75–85°F in the afternoon.</p>

<h3>Late Summer (August–September)</h3>
<p>Lower flow, but the trails and forest are at their most accessible. Photography actually improves in some ways — you can see the rock face clearly, and the long shadows of September add drama. The hike is shorter than most visitors expect, so combine it with a swim at Sardine Lake or Gold Lake on the same day.</p>

<h3>Fall (October)</h3>
<p>The aspens in the Lakes Basin turn gold in early to mid-October, and the drive up Gold Lake Road becomes a fall foliage show. The falls typically have adequate flow through October, and the autumn colors frame the white cascade beautifully. Early morning visits before 9 AM offer the best fog and light conditions.</p>

<h3>Winter</h3>
<p>The road closes with the first significant snowfall, typically in November. Adventurous visitors with snowshoes occasionally access the falls in winter, but the road is not plowed and requires a 4–5 mile snowshoe from the highway junction. Not recommended without winter wilderness experience.</p>

<h2>Photography Tips</h2>
<p>Frazier Falls photographs well in nearly every condition, but a few tips will dramatically improve your shots:</p>
<ul>
<li><strong>Use the mist strategically.</strong> In peak flow (May–June), the mist at the overlook means your lens will fog. Bring a microfiber cloth and wipe frequently. Position yourself at the far left of the overlook platform for the least spray exposure while still getting the full falls in frame.</li>
<li><strong>Shoot in the shade.</strong> The falls face generally northeast. Morning light hits the face directly and can blow out the white water. Overcast days or late afternoon in the shade of the gorge walls produce the most dramatic, even lighting.</li>
<li><strong>Slow shutter for silky water.</strong> Even with a phone camera, use portrait mode or the dedicated slow-shutter mode if available. Set up on the overlook railing for stability. A 1/8-second to 1/4-second exposure will give the classic silky waterfall effect.</li>
<li><strong>Include human scale.</strong> Have someone stand at the overlook railing in a shot — it dramatically illustrates how massive 178 feet actually is.</li>
<li><strong>The gorge view.</strong> About 100 yards before the overlook, a short spur to the left gives a side-angle view into the gorge that's less common in photos and sometimes more dramatic than the standard overlook shot.</li>
</ul>

<h2>The Gold Lake Basin: What to Combine It With</h2>
<p>Frazier Falls sits at the edge of the Gold Lake Basin, one of the most remarkable landscapes in the Sierra Nevada. Within a 10-minute drive of the falls trailhead, you have access to over 30 glacial lakes ranging from easily accessible to genuinely remote. Here are the best to combine with a Frazier Falls visit:</p>

<h3>Sardine Lake (10 min from falls)</h3>
<p>One of the most photogenic lakes in the Sierra. The lower Sardine Lake sits at the base of Sierra Buttes (the jagged, dramatic peaks visible from much of the Graeagle area), and the reflection of those peaks in the clear blue water on a calm morning is extraordinary. There's a small, rustic resort at the lake with a restaurant serving lunch and dinner in summer — the cheeseburger and cold beer situation after a hike and waterfall visit is highly recommended. The upper Sardine Lake requires a moderate 1.5-mile hike from the lower lake parking area and is usually less crowded.</p>

<h3>Packer Lake (12 min from falls)</h3>
<p>A quieter alternative to Sardine, Packer Lake has a campground and good fishing for rainbow trout. The lake sits in a glacially carved bowl with Sierra Buttes looming overhead. Several trailheads at Packer Lake lead up to the Sierra Buttes Lookout Tower (a 4-mile round trip with 1,800 feet of gain — a serious hike with one of the best panoramic views in Northern California).</p>

<h3>Gold Lake (15 min from cabin, 5 min from falls)</h3>
<p>The largest lake in the Gold Lake Basin at 1,500 acres, Gold Lake offers kayaking, paddleboarding, and excellent fly fishing for trophy-sized rainbow and brown trout. The Gold Lake Lodge has kayak and paddleboard rentals in summer. A sandy beach area at the south end is popular for swimming, though the water stays cold (typically 62–68°F) even in August. The shoreline walk around the north end of the lake is flat, beautiful, and takes about 90 minutes round-trip.</p>

<h3>Long Lake (15 min from falls)</h3>
<p>A 2-mile round-trip trail from the Frazier Falls parking area (continue past the main lot) leads to Long Lake, one of the clearest alpine lakes in the Basin. The trail passes through stands of old-growth red fir and across granite slabs. Fishing is excellent, and the swimming at Long Lake — while cold — is one of the purest mountain swimming experiences in the region.</p>

<h2>Getting There</h2>
<p>From the cabin, head south on Highway 89, then turn onto Gold Lake Road. The Frazier Falls trailhead parking lot is well-signed, about 4 miles up Gold Lake Road. The drive takes about 20 minutes. The parking lot holds approximately 30 vehicles; arrive before 10 AM on summer weekends to guarantee a spot. There are pit toilets at the trailhead.</p>

<h2>Packing List</h2>
<ul>
<li>Light jacket or fleece — the gorge is shaded and cool even on warm days</li>
<li>Microfiber cloth if you're bringing a camera (mist in peak season)</li>
<li>Water — at least 16 oz per person for the short walk, more if you're continuing to nearby lakes</li>
<li>Snacks — there are picnic tables at the trailhead</li>
<li>Sun protection — the parking area and first part of the trail are exposed</li>
<li>Dog leash — the trail is dog-friendly but dogs must be leashed at all times</li>
<li>Swimsuit if combining with Gold Lake or Sardine Lake</li>
</ul>

<h2>Pro Tips</h2>
<ul>
<li><strong>Go early on weekends.</strong> The parking lot can fill up by 10 AM on summer Saturdays. Aim for a 8–9 AM arrival. Weekday visits are significantly less crowded.</li>
<li><strong>Check road conditions.</strong> Gold Lake Road is closed in winter and may not open until late May in high-snow years. Call the Plumas National Forest Beckwourth Ranger District at (530) 836-2575 for current road status.</li>
<li><strong>The falls-to-lake day:</strong> Our favorite itinerary is Frazier Falls in the morning (park opens at 6 AM), then drive to Sardine Lake for lunch at the resort restaurant (~noon), then over to Gold Lake for paddleboarding in the afternoon. That's a perfect 8-hour day that covers three of the best sites in the basin.</li>
<li><strong>Wildlife watch:</strong> Keep an eye on the forest between the parking lot and the falls — black bears are occasionally spotted in this area in late summer, particularly near the creek crossings. Standard bear precautions apply: don't leave food in your car, make noise on the trail, keep dogs leashed.</li>
</ul>

<p>The Graeagle cabin puts you 20 minutes from one of the Sierra's greatest accessible wonders. <a href="/properties/graeagle" class="text-gold-400 underline hover:text-gold-300">Book your Graeagle stay</a> and we'll include a full local guide with seasonal trail conditions, the best times to visit each lake, and our current restaurant recommendations for the area.</p>
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
    image: "/images/blog/restaurants.jpg",
    body: `
<p>One of the best things about staying at our Northstar property is the dining. Whether you want a five-star meal at the Ritz-Carlton or a casual pizza in the Village, there's something for every taste and budget within 20 minutes. This guide covers every category: the Village restaurants walkable from the gondola, the Truckee classics 10 minutes down the mountain, the Lake Tahoe City options worth the 20-minute drive, and the grocery situation for nights when you want to cook in the chef's kitchen.</p>

<h2>In Northstar Village (5 min)</h2>

<h3>Manzanita at The Ritz-Carlton ($$$)</h3>
<p>Mountain-inspired cuisine with a stone fireplace and impeccable service. Their breakfast is excellent — we especially love the huckleberry pancakes. Dinner features seasonal California cuisine with a Tahoe twist. Reservations are essential — book 1–2 weeks ahead in ski season and at least 3–4 days ahead in summer. The wine list skews California-focused with excellent Sierra Nevada and Napa selections. For a special occasion, ask for a table by the fireplace.</p>

<h3>Rubicon Pizza Company ($$)</h3>
<p>The go-to for families. Hand-tossed gourmet pizza with creative toppings, plus pasta and salads. The energy is fun and casual, and kids love it. No reservations needed, but expect a wait of 20–30 minutes on ski weekends (the bar area is a good place to hang while you wait). The white truffle mushroom pizza and the spicy soppressata are standouts.</p>

<h3>Backyard Bar & BBQ ($$)</h3>
<p>Ski-in/ski-out at the Ritz-Carlton — literally pull off the mountain and grab smoked brisket, ribs, and a craft beer on the deck. The vibes are incredible on a sunny ski day. In summer, the deck becomes one of the best outdoor dining spots in the Village, with live music on weekend afternoons.</p>

<h2>Downtown Truckee (10 min)</h2>

<p>Truckee's Commercial Row is one of the most authentically preserved mountain town main streets in California. The district has operated continuously since the 1860s, when Truckee was a major stop on the transcontinental railroad. Today it's lined with independent restaurants, bars, and shops that have resisted chain-restaurant pressure. Bar of America, which anchors one end of the strip, opened in 1989 and remains family-owned — worth a stop just to read the framed history on the walls.</p>

<h3>Trokay ($$$)</h3>
<p>Truckee's most ambitious restaurant — farm-to-table tasting menus and à la carte options in a refined but relaxed setting. Chef Tom Thacher changes the menu with the seasons and sources from regional farms and foragers. The wine program is exceptional. This is our pick for a special dinner without driving to Lake Tahoe City. Book well in advance; weekend tables fill weeks out. Located on Donner Pass Road, a 5-minute walk from Commercial Row.</p>

<h3>Moody's Bistro Bar & Beats ($$$)</h3>
<p>Farm-to-table on historic Commercial Row. Great cocktails, live music, and a menu that changes with the seasons. It's our top pick for a date night or group dinner. The patio on summer evenings is particularly memorable — fairy lights, mountain air, and some of the best cocktails in the Tahoe region. The "Moody's Mule" and the mushroom flatbread are must-orders.</p>

<h3>Alibi Ale Works ($$)</h3>
<p>The best craft beer in Truckee, brewed on site in a beautifully renovated Victorian building on Commercial Row. The taproom serves excellent pub food — elevated burgers, loaded fries, wood-fired wings — alongside a rotating selection of 16 house-brewed beers. The seasonal sours and their flagship California IPA are standouts. Family-friendly until 9 PM. The back patio is one of the nicest outdoor spaces in downtown Truckee.</p>

<h3>Squeeze In ($)</h3>
<p>The legendary breakfast spot. Over 60 omelette varieties and a line out the door every weekend. Pro tip: go on a weekday at 8 AM to skip the wait. Their "Racy Tracy" omelette is famous for a reason. Cash is accepted but credit cards are preferred. Expect a 30–45 minute wait on Saturday and Sunday mornings — it moves quickly and is worth it.</p>

<h3>Bar of America ($$)</h3>
<p>Three decades of Truckee history in a warm, wood-paneled setting on Commercial Row. Bar of America was opened in 1989 by the Hinkle family and has remained independently owned — a rarity in a ski town that's seen significant corporate investment. Campfire-inspired American food, great beer selection, and a patio that's perfect for people-watching. The elk burger, when it's on the menu, is the order. A good choice for groups with varied tastes — the menu covers everything from nachos to salmon.</p>

<h2>Lake Tahoe City Options (20–25 min)</h2>
<p>Lake Tahoe City — "Tahoe City" to locals — sits on the northwest shore of Lake Tahoe and offers a handful of dining experiences worth the 20-minute drive from Northstar. The views from the waterfront restaurants are among the best in the Sierra Nevada.</p>

<h3>Christy Hill Lakeside Bistro ($$$)</h3>
<p>If you want the single best dining view in the Tahoe area, this is it. Panoramic Lake Tahoe views with French-Mediterranean cuisine. Perfect for a special occasion. Book a lakeside table at sunset — the water turns gold, then pink, then deep violet as the sun drops behind the mountains. The bouillabaisse and the duck confit are exceptional. Reservations essential: book 1–2 weeks ahead for weekend dinner.</p>

<h3>Sunnyside Restaurant & Lodge ($$)</h3>
<p>The most iconic lakeside deck dining at Lake Tahoe. Sunnyside's floating dock extends over the water, and a summer lunch here — salads, seafood, cocktails, with the lake shimmering 10 feet below — is one of the quintessential Tahoe experiences. Arrives early for weekend lunch or expect a long wait. In winter, the cozy interior with lake views is one of the most atmospheric dining rooms in the region.</p>

<h2>Grocery Shopping: Cooking In at the Property</h2>
<p>Our Northstar property has a full chef's kitchen — two ovens, six-burner range, dual refrigerators, and a breakfast bar — and many guests choose to cook several meals in, especially for large groups where restaurant logistics get complicated. Here's the grocery situation:</p>

<h3>Safeway, Kings Beach (10 min)</h3>
<p>The closest full-service grocery store to Northstar. Well-stocked with a solid wine section, deli counter, and butcher. Open until 11 PM. Stock up here on your arrival day — it's 10 minutes from the property and directly on the route from I-80.</p>

<h3>New Moon Natural Foods, Truckee (12 min)</h3>
<p>The best local option for organic produce, specialty items, prepared foods, and a solid wine and beer section. Their deli counter has excellent grab-and-go options for ski day lunches. Worth a stop if you prefer organic or specialty ingredients.</p>

<h3>SPD Market, Tahoe City (20 min)</h3>
<p>A Tahoe City institution — independently owned and operated since 1950, it's the beloved local alternative to the chains. Excellent meat counter, good selection of local and regional products, and the staff actually knows food. If you're planning a group dinner night, the butcher here will custom-cut your steaks or prepare a rack of lamb with advance notice.</p>

<h2>Winter vs. Summer Dining Differences</h2>
<p>The dining scene around Northstar shifts significantly between seasons. In ski season (December–March), Northstar Village restaurants are all open with full menus, extended hours, and lively après-ski atmospheres. Truckee's restaurants have their most festive energy of the year — fire pits on patios, mulled wine specials, and a palpable buzz that the ski town does better than anywhere. Wait times at popular spots like Squeeze In and Rubicon can hit 45–60 minutes on peak ski weekends.</p>
<p>In summer (June–September), the scene is more relaxed. Hours are shorter at some spots, and a few of the Village restaurants operate on reduced schedules. On the flip side, patio dining comes alive, and the outdoor seating at spots like Alibi Ale Works and Moody's becomes the primary draw. Lake Tahoe City restaurants are at their most vibrant in summer.</p>

<h2>Reservation Strategy for Peak Season</h2>
<ul>
<li><strong>Presidents' Day weekend, Christmas–New Year's, and Fourth of July:</strong> Book your signature dinners (Trokay, Christy Hill, Manzanita) 2–3 weeks in advance. Seriously — these dates fill months out at the best spots.</li>
<li><strong>Regular ski weekends:</strong> 5–7 days ahead for sit-down dinner reservations. Same-day for pizza, casual spots, and breakfast.</li>
<li><strong>Summer weekends:</strong> 3–5 days ahead is usually sufficient, except for Christy Hill (always book ahead) and Trokay.</li>
<li><strong>Apps to use:</strong> OpenTable works for Manzanita, Moody's, and Christy Hill. Trokay and smaller spots prefer direct phone calls.</li>
<li><strong>Lunch is always easier:</strong> Same-day service at almost every restaurant for weekday lunch, and much shorter waits for weekend lunch vs. dinner.</li>
</ul>

<h2>Pro Tips from Previous Guests</h2>
<ul>
<li>The Ritz-Carlton lobby bar is a great après-ski spot even if you're not staying there — cocktails, fireplace, people-watching. No reservation needed.</li>
<li>Truckee has a fantastic weekly Farmers Market on Thursday evenings in summer at the Commercial Row parking area — excellent for picking up fresh produce, local cheeses, and prepared foods for a home-cooked dinner.</li>
<li>Squeeze In also has a Truckee location on Donner Pass Road, which is slightly less crowded than the original Commercial Row spot.</li>
<li>Gas stations in Truckee and Kings Beach are open until midnight if you need a late-night snack run.</li>
</ul>

<p>Our Northstar property is a 5-minute drive from the Village and 10 minutes from Truckee's dining scene. <a href="/properties/northstar" class="text-gold-400 underline hover:text-gold-300">Book the Northstar retreat</a> and we'll send you our updated restaurant guide with current hours, seasonal specials, and our personal top picks for your travel dates.</p>
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
    image: "/images/blog/book-direct.jpg",
    body: `
<p>If you've ever booked a vacation rental on Airbnb or VRBO, you've probably noticed the price jump between the listed nightly rate and the final checkout total. That gap is platform fees — and they add up fast, especially on premium properties. For a 4-night stay at a $600/night property, you could be paying $400–$600 in fees that go straight to a Silicon Valley company, not to your experience or to the hosts who actually take care of the property. This post breaks down the real numbers and explains what you get when you book direct instead.</p>

<h2>What Platforms Actually Charge</h2>
<p>Airbnb typically charges guests a 14-16% service fee on top of the host's price. VRBO charges a "traveler service fee" of 6-12% (and they recently moved some listings to include the host fee as well, effectively doubling the visible fee impact). On a 3-night stay at our Northstar property during ski season, that can mean $300-$500 in fees that go straight to the platform — not to us, not to your experience.</p>

<h3>Fee Comparison Table: Real Numbers on a Real Booking</h3>
<p>Let's use a concrete example: a 4-night stay at our Northstar property at $900/night (a typical rate during ski season):</p>

<table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 1px solid #C9A96E22;">
      <th style="text-align:left; padding: 8px 12px; color: #C9A96E;">Booking Channel</th>
      <th style="text-align:right; padding: 8px 12px; color: #C9A96E;">Nightly Rate</th>
      <th style="text-align:right; padding: 8px 12px; color: #C9A96E;">Platform Fee</th>
      <th style="text-align:right; padding: 8px 12px; color: #C9A96E;">Fee on 4 Nights</th>
      <th style="text-align:right; padding: 8px 12px; color: #C9A96E;">Total (before cleaning/tax)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #ffffff11;">
      <td style="padding: 8px 12px;">Direct Booking</td>
      <td style="text-align:right; padding: 8px 12px;">$900</td>
      <td style="text-align:right; padding: 8px 12px;">$0</td>
      <td style="text-align:right; padding: 8px 12px;">$0</td>
      <td style="text-align:right; padding: 8px 12px;">$3,600</td>
    </tr>
    <tr style="border-bottom: 1px solid #ffffff11;">
      <td style="padding: 8px 12px;">Airbnb (14%)</td>
      <td style="text-align:right; padding: 8px 12px;">$900</td>
      <td style="text-align:right; padding: 8px 12px;">14%</td>
      <td style="text-align:right; padding: 8px 12px;">$504</td>
      <td style="text-align:right; padding: 8px 12px;">$4,104</td>
    </tr>
    <tr style="border-bottom: 1px solid #ffffff11;">
      <td style="padding: 8px 12px;">Airbnb (16%)</td>
      <td style="text-align:right; padding: 8px 12px;">$900</td>
      <td style="text-align:right; padding: 8px 12px;">16%</td>
      <td style="text-align:right; padding: 8px 12px;">$576</td>
      <td style="text-align:right; padding: 8px 12px;">$4,176</td>
    </tr>
    <tr style="border-bottom: 1px solid #ffffff11;">
      <td style="padding: 8px 12px;">VRBO (6%)</td>
      <td style="text-align:right; padding: 8px 12px;">$900</td>
      <td style="text-align:right; padding: 8px 12px;">6%</td>
      <td style="text-align:right; padding: 8px 12px;">$216</td>
      <td style="text-align:right; padding: 8px 12px;">$3,816</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px;">VRBO (12%)</td>
      <td style="text-align:right; padding: 8px 12px;">$900</td>
      <td style="text-align:right; padding: 8px 12px;">12%</td>
      <td style="text-align:right; padding: 8px 12px;">$432</td>
      <td style="text-align:right; padding: 8px 12px;">$4,032</td>
    </tr>
  </tbody>
</table>

<p>That's $216–$576 in fees on a single 4-night booking. For a week-long stay, you're looking at $375–$1,000+ going to the platform. What could you do with an extra $500? That's two exceptional dinners at Trokay or Christy Hill. That's a full day of ski rentals for the family. That's four rounds of golf at Grizzly Ranch.</p>

<h2>What Booking Direct Gets You</h2>
<ul>
<li><strong>No service fees</strong> — the price you see is the price you pay (plus cleaning and applicable taxes, which are the same on all channels)</li>
<li><strong>Direct communication</strong> — text or email us directly, no platform messaging delays or chatbot intermediaries</li>
<li><strong>Flexible modifications</strong> — need to change dates? We work with you, not against you. Platform algorithms optimize for their own booking metrics, not your vacation logistics.</li>
<li><strong>Personal concierge service</strong> — restaurant reservations, activity planning, local tips customized to your group's interests, pre-stocking requests, grocery lists</li>
<li><strong>Best rate guarantee</strong> — our direct rates are always equal to or lower than any platform listing</li>
<li><strong>Faster issue resolution</strong> — if something comes up during your stay, you reach us directly, not a platform customer service team that has never seen the property</li>
</ul>

<h2>Cancellation Policy Comparison</h2>
<p>This is where direct booking offers an often-overlooked advantage. Platform cancellation policies are rigid and enforced by an algorithm. When a guest contacts Airbnb about a cancellation during an emergency, they're dealing with a customer service representative who has no relationship with the property and limited ability to deviate from policy.</p>
<p>When you book directly with us, you talk to us — the people who care about your vacation and about maintaining a long-term relationship with guests who come back year after year. Our standard cancellation policy (30 days for a full refund, 14 days for 50%) is already more generous than Airbnb's "Strict" policy, and we have the flexibility to make accommodations for genuine hardship situations that platforms cannot.</p>
<p><strong>Direct booking cancellation:</strong> 30+ days = full refund; 14–29 days = 50% refund; under 14 days = non-refundable (with exceptions handled case-by-case)<br>
<strong>Airbnb "Strict" policy:</strong> 48 hours to cancel for full refund; after that, 50% refund only if cancelled 7+ days before check-in; non-refundable under 7 days<br>
<strong>VRBO typical policy:</strong> Varies widely by host, but platform enforces it rigidly regardless of circumstances</p>

<h2>Security Deposit Handling</h2>
<p>Platforms typically hold a security deposit authorization on your credit card for 1–2 weeks after checkout while they process the deposit release. This can tie up $500–$1,500 on your card for an uncomfortable period. When you book direct, we process any security deposit return within 48–72 hours of checkout, and we only ever charge for actual documented damage — not as a routine cash-grab.</p>
<p>Platforms have also been known to auto-withhold security deposits based on unverified host complaints, leaving guests in a dispute process that can take weeks to resolve. Booking direct means direct communication if there's ever a question — no algorithm intermediaries.</p>

<h2>The Direct-Booking Experience: More Than Just Savings</h2>
<p>Beyond the fee savings, direct bookings come with a level of personalization that platforms can't offer. Here's what that looks like in practice:</p>

<h3>Pre-Arrival Concierge</h3>
<p>When you book direct, we send you a detailed welcome guide with current local conditions, updated restaurant recommendations, seasonal tips, and a local grocery list tailored to the property you're staying at. We can pre-arrange ski rental deliveries, restaurant reservations, tee times, and guided activities on your behalf. This isn't a chatbot — it's us, and we know these areas intimately.</p>

<h3>Grocery Pre-Stocking</h3>
<p>For an additional fee, we can pre-stock the kitchen with your grocery list before you arrive. Show up at the cabin and find the refrigerator filled with your family's favorites — coffee, breakfast items, snacks, wine. A popular choice for groups who want to settle in immediately without a grocery run after a long drive.</p>

<h3>Flexibility That Platforms Can't Match</h3>
<p>Need to check in at 2 PM instead of 4 PM because your flight landed early? Staying an extra night last-minute? Want to split the bill across multiple credit cards? These are all conversations that are awkward or impossible to have through a platform's messaging system. They're easy phone calls with us.</p>

<h2>A Note on "Platform Protection"</h2>
<p>Platforms market their buyer protection programs heavily. Airbnb's AirCover, for example, sounds comprehensive. The reality — based on widely reported guest experiences — is that dispute resolution through platforms is slow, inconsistent, and often resolved in the platform's financial interest rather than the guest's. Our direct booking experience is backed by our own reputation and 4.7+ star reviews across hundreds of stays. We have every incentive to make your trip exceptional because our business depends on it — not because a platform algorithm reviews our response time metrics.</p>

<h2>Frequently Asked Questions About Booking Direct</h2>

<h3>Is it safe to book direct?</h3>
<p>Yes. All payments through our site are processed via Lodgify, a PCI-compliant booking management platform used by thousands of professional vacation rental operators. Your payment information is handled with bank-grade security, and you'll receive a formal booking confirmation and receipt. We're a licensed business with a track record of 4.7+ stars across hundreds of stays.</p>

<h3>Do I get the same legal protection when booking direct?</h3>
<p>Direct bookings are governed by our rental agreement, which you'll sign electronically as part of the booking process. This agreement provides the same protections as any platform booking — defining both parties' responsibilities, the property condition expectations, cancellation terms, and remedies for disputes. In many ways, you have more clarity with a direct contract than with a platform's one-size-fits-all terms of service.</p>

<h3>What if I need support during my stay?</h3>
<p>Reach us directly by text or phone at any hour. You'll have our personal number from the moment you book. Compare that to being routed through a platform's customer service call center at 2 AM with a maintenance question.</p>

<h3>Can I use travel insurance when booking direct?</h3>
<p>Absolutely. Travel insurance (Cancel for Any Reason policies from providers like Travel Guard, Allianz, or Seven Corners) works for direct bookings just as it does for platform bookings. We recommend CFAR policies for peace of mind, especially for holiday travel.</p>

<h3>Are there any perks for repeat guests?</h3>
<p>Yes. Guests who book direct and return for a second stay receive a loyalty discount. We also maintain a priority waitlist for dates that haven't opened yet — direct guests get first access before we list on any platform.</p>

<p>Ready to book? Check availability on our <a href="/properties/graeagle" class="text-gold-400 underline hover:text-gold-300">Graeagle cabin</a> or <a href="/properties/northstar" class="text-gold-400 underline hover:text-gold-300">Northstar retreat</a> — and keep those platform fees in your pocket where they belong.</p>
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
    image: "/images/blog/mountain-biking.jpg",
    body: `
<p>Northstar isn't just a ski resort — in summer, it transforms into one of the best mountain biking destinations in the Tahoe region. And with our property located steps from the Tompkins Trail, you can ride right from the front door. Whether you're a first-time rider looking for a family-friendly cruise or a technical trail shredder hunting gnarly downhill lines, Northstar and the surrounding Tahoe area offer a range of terrain that punches well above its weight. This guide covers everything: the bike park, the cross-country trails, where to rent gear, how to plan your day, and the legendary Flume Trail nearby for those ready for a true bucket-list ride.</p>

<h2>Northstar Bike Park: The Lift-Served Experience</h2>
<p>The lift-served bike park at Northstar California Resort is the main attraction. Take the Big Springs Gondola up and choose from a variety of trails ranging from smooth, flowy cruisers to technical downhill runs with drops, jumps, and berms. Bike and gear rentals are available at the base, and they offer lessons for all skill levels — including first-timer packages that include a rental, helmet, pads, and 90-minute instruction.</p>
<p>The bike park typically operates from mid-June through mid-September, Friday through Sunday (daily in peak summer through Labor Day). A full-day bike haul pass runs around $60-80; adding a rental package bumps it to $120–$150 for the day. The gondola opens at 10 AM and closes at 5 PM — plan for 4–5 lift-served runs per day if you're intermediate.</p>

<h3>Trail Breakdown by Skill Level</h3>

<h4>Green (Beginner)</h4>
<p>The Livewire and Mellow Yellow trails are groomed, wide, and free of technical obstacles — perfect for families with kids 8+ or adults riding for the first time. Both start near the top of the gondola and flow gently through the trees for about 2 miles each. Expect 20–30 minutes per run including gondola time. No technical skill required; basic bike handling and confidence braking is sufficient.</p>

<h4>Blue (Intermediate)</h4>
<p>The Cardiac Ridge and Iron Horse trails are the sweet spot for most intermediate riders. Cardiac Ridge (3.2 miles, 800 ft descent) features flowing berms, optional rhythm sections, and one moderate drop feature with a clear "chicken line" bypass. Iron Horse follows the old mining roads through the forest with a more old-school flow feel — less jump-oriented, more technical with roots and rocks. These are the trails we recommend as starting points for most experienced but not expert riders.</p>

<h4>Black (Expert)</h4>
<p>The Livewire Advanced loop and The Gutter add serious technical terrain: mandatory features including 4-foot drops, steep rooty chutes, and high-speed berms that require commitment. These are appropriate for riders who have ridden park trails at other resorts and have solid jumping technique. The Gutter in particular has a reputation — it's a 15-foot road-gap feature that should only be attempted by very experienced jumpers. Observe before trying.</p>

<h2>Tompkins Trail: From the Property</h2>
<p>The Tompkins Trail connects directly to the Northstar trail network and is accessible from our property. It's a mix of singletrack and fire road that's great for intermediate riders. You can loop through the forest and meadows without ever loading your bike onto a car.</p>
<p><strong>Distance:</strong> 6.8 miles total for the main loop<br>
<strong>Elevation:</strong> 850 ft cumulative gain<br>
<strong>Character:</strong> Rolling singletrack through open meadows and mixed conifer forest. Some root crossings and small technical sections, but nothing that will overwhelm a confident beginner.<br>
<strong>Duration:</strong> 90 minutes to 2.5 hours depending on pace<br>
<strong>Best time:</strong> Morning, when the trail surface is firm and less dusty. Afternoon sun softens the trail in peak summer.</p>
<p>This trail connects to a broader network via the Northstar Golf Course perimeter path, allowing you to extend the ride to 12+ miles for stronger riders. The meadow section around mile 3 offers a great rest point with views east toward the Sierra Crest.</p>

<h2>Martis Valley Trail: Family-Friendly Paved Path</h2>
<p>For a more relaxed ride, the paved Martis Valley Trail runs 4.6 miles between Northstar and downtown Truckee. It's flat, scenic, and perfect for families or a casual afternoon spin. You can ride to Truckee for lunch and back — total distance is about 9 miles round trip, taking 45–60 minutes each way at a casual pace. The trail passes through open meadow and forest with views of the Sierra Nevada to the east. This is the most accessible option for guests with children or road bikes.</p>

<h2>Donner Lake Rim Trail: The Scenic Epic</h2>
<p>For experienced riders looking for a longer adventure, 9 miles of the Donner Lake Rim Trail are open to bikes. The views of Donner Lake from the high country are spectacular — on a clear day, you can see from the lake all the way east toward the Nevada border. It's about 15 minutes by car to the trailhead from the property.</p>
<p><strong>Distance:</strong> 9 miles (one-way section open to bikes) or 3–5 mile out-and-back options<br>
<strong>Elevation:</strong> 1,200 ft total gain<br>
<strong>Character:</strong> Rocky singletrack with significant exposure on the ridge sections. Not for riders who are uncomfortable with heights or technical terrain. The sections above the lake offer dramatic exposure with the water 500 feet below.<br>
<strong>Duration:</strong> 3–4 hours for the full section; 1.5–2 hours for a scenic out-and-back to the ridge<br>
<strong>Trailhead:</strong> Park at the China Cove trail staging area off Donner Pass Road</p>

<h2>The Flume Trail: Bucket-List Lake Tahoe Riding</h2>
<p>About 30 minutes from the property (accessible via the Tahoe City/Spooner Summit route), the Flume Trail is widely considered the single best mountain bike ride at Lake Tahoe — and by some accounts, one of the top 10 singletrack rides in the country. It's not technically extreme, but the scenery is unmatched: the trail traverses the east shore of Lake Tahoe at about 8,000 feet elevation along a historic wooden flume route, with the lake an impossible blue 800 feet directly below you for nearly 3 miles of continuous traversing.</p>
<p><strong>Distance:</strong> 14 miles point-to-point (with shuttle) or 28 miles as a loop<br>
<strong>Elevation:</strong> 1,800 ft gain, 3,200 ft descent (point-to-point)<br>
<strong>Character:</strong> Sustained technical singletrack with some exposure on cliff-edge sections. Several stream crossings. A few short, rocky steep sections. Most appropriate for intermediate riders in good physical shape.<br>
<strong>Duration:</strong> 4–5 hours for the point-to-point with shuttle; plan a full day for the loop<br>
<strong>Logistics:</strong> The standard approach is to use the Flume Trail Mountain Bikes shuttle service based out of Incline Village (flumemtb.com) — they handle logistics, provide bikes if needed, and run a shuttle from the end point back to the start. This eliminates the loop and is strongly recommended for first-timers. Bike rentals from them run $60–$90/day for quality trail bikes.</p>

<h2>Rentals and Gear</h2>
<p>If you didn't bring your own bike, Northstar has a full rental fleet at the Village base area. For more specialized needs or if you want to avoid the resort pricing, there are several excellent bike shops in downtown Truckee:</p>

<h3>Northstar Bike Shop (in Village)</h3>
<p>Convenient, full-service shop with trail and downhill bikes. Trail bike rentals run $75–$100/day; downhill-specific park bikes (recommended for the bike park) are $100–$130/day. Helmet and body armor included with all rentals. Advanced booking recommended on peak summer weekends.</p>

<h3>Tahoe XC (Tahoe City, 20 min)</h3>
<p>Specializes in cross-country and trail bikes. Better selection of XC-oriented hardtails and full-suspension trail bikes if your riding is focused on the Tompkins Trail, Martis Valley Trail, or Donner Rim. Often better daily rates than the resort shop. Staff are excellent trail advisors for the local non-park network.</p>

<h3>Gear Advice</h3>
<p>Even for casual trail riding, a proper fitting helmet is non-negotiable. All rental shops include them. For the Northstar Bike Park, we strongly recommend full-face helmets and knee pads — available at all shops. Cycling gloves protect your hands in a fall and reduce trail vibration fatigue. If you're bringing your own bike, note that Northstar requires front and rear disc brakes for the bike park (no rim brakes permitted).</p>
<p>Trail shoes with stiff soles (clipless or flat pedal shoes with sticky rubber) make a significant difference on technical terrain. Road running shoes work but feel insecure on technical sections. Most rental shops sell flat pedals for bikes if you prefer.</p>

<h2>Combining a Bike Day with Other Northstar Activities</h2>
<p>A great structure for a full Northstar day in summer: morning bike park session (gondola opens at 10 AM, do 3–4 runs before the trails get dusty), break for lunch at Rubicon Pizza in the Village, afternoon at the NPOA pool or lap pool. This gives you two very different Northstar experiences in one day — most guests are surprised by how full and varied a non-ski summer day can be here.</p>
<p>The Village also has a climbing wall, mini-golf, and outdoor yoga in summer. For a post-ride soak, the NPOA hot tub is the ideal recovery option — our property guests have full access to all NPOA amenities including the Recreation Center's multiple hot tubs and the outdoor pool.</p>

<h2>Seasonal Window</h2>
<p>The Northstar Bike Park runs from approximately mid-June through Labor Day weekend, with operations heaviest July–August. The cross-country trails around the property (Tompkins, Martis Valley) are accessible from late May through October, though June can be muddy after snowmelt and October sees the first seasonal closures at higher elevation. The optimal biking window is July 4th through late September — dry trails, warm conditions, long days.</p>
<p>Avoid riding in the 48 hours after significant rain — the clay-heavy soil in some trail sections becomes extremely slippery and damages the trail surface. Local trail conditions are posted to the Truckee Trails Foundation website and the Northstar app.</p>

<h2>Pro Tips</h2>
<ul>
<li><strong>Book gondola passes online in advance</strong> — the resort's online pre-purchase price is typically $10 cheaper than walk-up.</li>
<li><strong>Arrive early.</strong> The gondola opens at 10 AM. Lines build quickly by 11 AM on summer Saturdays. First gondola of the day means the trails are still cool, firm, and less dusty.</li>
<li><strong>Bring your own water.</strong> The bike park has one water station at the top of the gondola. Carry at least 2 liters for a full park day — the altitude and dry air dehydrate you faster than you expect at 6,000+ feet.</li>
<li><strong>Check the weather.</strong> Afternoon thunderstorms are common in July and August at elevation. The resort pauses gondola operations for lightning. Target a morning departure from the property.</li>
<li><strong>The Flume Trail in September</strong> is the peak experience — cooler temps, clear light, fewer riders than midsummer, and fall aspens beginning to turn in the valleys below. If your trip falls in the window, prioritize it.</li>
</ul>

<p>Our Northstar property sits steps from the Tompkins Trail, with bikes available for guest use and a heated garage with a dedicated bike storage and wash area. <a href="/properties/northstar" class="text-gold-400 underline hover:text-gold-300">Book the Northstar retreat</a> and request our full local biking guide — we'll map out the right trails for your group's skill level and set you up for the best riding day in Tahoe.</p>
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
