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
