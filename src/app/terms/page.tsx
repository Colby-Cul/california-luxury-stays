import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and rental agreement for California Luxury Stays properties.",
  alternates: {
    canonical: "https://californialuxurystays.com/terms",
  },
  openGraph: {
    title: "Terms of Service | California Luxury Stays",
    description: "Terms of service and rental agreement for California Luxury Stays properties.",
    type: "website",
    url: "https://californialuxurystays.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <h1 className="text-4xl font-semibold text-white font-serif">Terms of Service</h1>
          <p className="mt-2 text-sm text-stone-400">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-stone-300 leading-7 text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Rental Agreement</h2>
              <p>By booking a stay at any California Luxury Stays property, you agree to these terms. A confirmed booking constitutes a binding rental agreement between you (the Guest) and California Luxury Stays (the Host).</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Check-In / Check-Out</h2>
              <p>Check-in: 4:00 PM. Check-out: 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional fees. Guests who do not vacate by check-out time may be charged for an additional night.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Cancellation Policy</h2>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>30+ days before check-in: Full refund</li>
                <li>14\u201329 days before check-in: 50% refund</li>
                <li>Less than 14 days: Non-refundable</li>
                <li>Holiday bookings: 60 days notice for full refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">House Rules</h2>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>No smoking inside any property</li>
                <li>No parties or events without prior written approval</li>
                <li>Quiet hours: 10:00 PM \u2013 8:00 AM</li>
                <li>Maximum occupancy must not be exceeded</li>
                <li>Pets only at designated pet-friendly properties with prior approval</li>
                <li>Guests are responsible for locking doors and windows when away</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Damages & Security</h2>
              <p>Guests are responsible for any damage beyond normal wear and tear. A damage assessment may be conducted after checkout. Significant damage will be charged to the payment method on file. We reserve the right to collect a security deposit for certain bookings.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Liability</h2>
              <p>California Luxury Stays is not liable for injuries, accidents, or loss of personal property during your stay. Guests use all amenities (hot tubs, fireplaces, outdoor areas, etc.) at their own risk. Travel insurance is recommended.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of the State of California. Any disputes will be resolved in the courts of Placer County, California.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p>Questions about these terms? Contact us at <a href="mailto:stay@californialuxurystays.com" className="text-gold-400 hover:text-gold-300">stay@californialuxurystays.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
