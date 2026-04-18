import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about booking, check-in, cancellation, pets, parking, and amenities at our Graeagle and Northstar vacation rentals.",
  alternates: {
    canonical: "https://californialuxurystays.com/faq",
  },
  openGraph: {
    title: "FAQ | California Luxury Stays",
    description: "Everything you need to know about booking with California Luxury Stays.",
    url: "https://californialuxurystays.com/faq",
  },
};

const FAQS = [
  { q: "What are your check-in and check-out times?", a: "Check-in is at 4:00 PM and check-out is at 10:00 AM. Early check-in or late check-out may be available upon request depending on the booking schedule." },
  { q: "What is your cancellation policy?", a: "Cancellations made 30 or more days before check-in receive a full refund. Cancellations 14\u201329 days before check-in receive a 50% refund. Cancellations less than 14 days before check-in are non-refundable. Holiday bookings require 60 days notice for a full refund." },
  { q: "Are pets allowed?", a: "The Graeagle Mountain Cabin is pet-friendly for well-behaved dogs (2 dog maximum, $75 pet fee per stay). The Northstar Luxury Retreat does not allow pets. Service animals are welcome at both properties." },
  { q: "Is there a minimum stay requirement?", a: "The Graeagle Cabin has a 3-night minimum and the Northstar Retreat has a 4-night minimum. Holiday periods (Thanksgiving, Christmas, New Year\u2019s, Presidents\u2019 Day) may require longer minimums." },
  { q: "How do I book?", a: "Book directly through our website using the booking calendar on each property page. Direct bookings get you the best rates — no platform service fees — and direct communication with us throughout your stay." },
  { q: "What amenities are included?", a: "All properties include high-speed WiFi, smart TVs with streaming, fully equipped kitchens, washer/dryer, BBQ grills, and linens/towels. Property-specific amenities like hot tubs, fireplaces, and game rooms are listed on each property page." },
  { q: "Is there parking?", a: "Yes, both properties have free on-site parking. The Graeagle Cabin has space for 3 vehicles. The Northstar Retreat has a heated garage plus driveway parking for 2 additional vehicles." },
  { q: "Do you provide firewood?", a: "Firewood is available at our Graeagle Cabin, which has a wood-burning stone fireplace \u2014 a starter supply is provided, and additional firewood can be purchased locally. Our Northstar Retreat has gas fireplaces only, so no firewood is needed." },
  { q: "What if something breaks during our stay?", a: "Contact us immediately at any hour. We have local maintenance partners who can respond quickly. Guests are not responsible for normal wear and tear." },
  { q: "Do you offer discounts for longer stays?", a: "Yes. Stays of 7+ nights receive a 10% discount. Stays of 14+ nights receive a 15% discount. Monthly rates are available \u2014 contact us for pricing." },
  { q: "Can I host a wedding, reunion, or corporate event at your properties?", a: "Yes \u2014 the Northstar Luxury Retreat sleeps 22 guests across 7 bedrooms and is ideal for weddings, family reunions, and corporate retreats. The wraparound deck, chef's kitchen, and media room handle groups beautifully. Event-specific terms may apply; contact us before booking to discuss your group's needs." },
  { q: "How close is the Northstar property to the ski lifts?", a: "Our Northstar property is a 5-minute drive from the Northstar California Resort base village. It is not ski-in/ski-out, but a free community shuttle runs between the Northstar Property Owners Association (NPOA) amenities area and the village during ski season. The heated garage has dedicated ski and snowboard storage." },
  { q: "What HOA amenities can guests access at the Northstar property?", a: "Guests have access to the full NPOA Recreation Center: heated summer pool, year-round lap pool, multiple hot tubs and spas, fitness center, tennis and pickleball courts, bocce ball, basketball court, arcade, game room, owners' lounge, playground, and BBQ picnic areas. Recreation Center hours are 8 AM \u2013 9 PM; some amenities are seasonal." },
  { q: "Is the Graeagle cabin walking distance to golf?", a: "Yes. Graeagle Meadows Golf Course is a 5-minute walk from the cabin. Five additional courses \u2014 including Grizzly Ranch, Whitehawk Ranch, and the Dragon at Nakoma \u2014 are within 25 minutes by car." },
  { q: "Do you have a hot tub?", a: "The Northstar Luxury Retreat has a private outdoor hot tub on the deck with mountain views. The Graeagle Mountain Cabin does not have a private hot tub, but guests can enjoy Graeagle's natural springs nearby." },
  { q: "What's the best way to contact you?", a: "Use the contact form on our website or email christine@californialuxurystays.com. We respond within 2 hours during business hours (8 AM \u2013 10 PM PT). Once you've booked, you'll have direct access to us throughout your stay." },
  { q: "Do you charge a cleaning fee?", a: "Yes, a cleaning fee is included at checkout and varies by property and stay length. All fees are transparent \u2014 you'll see the full breakdown before confirming your booking. There are no hidden service or platform fees when you book direct." },
  { q: "Are the properties suitable for families with young children?", a: "Yes. Both properties are family-friendly. The Graeagle cabin has a game room and is steps from hiking trails and the Mill Pond. The Northstar property has bunk rooms, a media room with projector, and is close to the Northstar Village playground, ice skating, and pottery activities. Pack-and-plays and high chairs can be requested before arrival." },
  { q: "What's the best time of year to visit?", a: "Each season offers something different. December\u2013March is peak ski season at Northstar and snowshoeing around Graeagle. May\u2013June brings wildflowers and peak waterfall flow (Frazier Falls). July\u2013September is ideal for golf, mountain biking, Lake Tahoe beaches, and hiking. October delivers aspens turning gold. Graeagle is a 4-season destination; Northstar shines brightest in winter and summer." },
  { q: "How far is your Graeagle cabin from Lake Tahoe?", a: "The Graeagle cabin is about 1 hour from Lake Tahoe's north shore. Our Northstar property is just 15 minutes from Lake Tahoe. Both are in the Sierra Nevada; Graeagle is further north in Plumas County, while Northstar sits at Truckee in the greater Lake Tahoe region." },
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

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Support</p>
            <h1 className="mt-3 text-4xl font-semibold text-white font-serif sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-stone-300">Everything you need to know about staying with us.</p>
          </div>

          <div className="mt-12 space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6">
                <h2 className="text-base font-semibold text-white">{faq.q}</h2>
                <p className="mt-3 text-sm text-stone-300 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gold-400/15 bg-gradient-to-br from-gold-400/10 via-charcoal-700 to-charcoal-800 p-8 text-center">
            <h2 className="text-xl font-semibold text-white font-serif">Still have questions?</h2>
            <p className="mt-2 text-sm text-stone-400">Reach out anytime \u2014 we typically respond within 2 hours.</p>
            <a href="mailto:stay@californialuxurystays.com" className="mt-4 inline-block rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300">
              Email Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
