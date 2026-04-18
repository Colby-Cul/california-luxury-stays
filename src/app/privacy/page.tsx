import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for California Luxury Stays vacation rental properties.",
  alternates: {
    canonical: "https://californialuxurystays.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | California Luxury Stays",
    description: "Privacy policy for California Luxury Stays vacation rental properties.",
    type: "website",
    url: "https://californialuxurystays.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <h1 className="text-4xl font-semibold text-white font-serif">Privacy Policy</h1>
          <p className="mt-2 text-sm text-stone-400">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-stone-300 leading-7 text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
              <p>When you book a stay or contact us, we collect personal information you provide, including your name, email address, phone number, mailing address, and payment information. We also collect booking details such as dates, number of guests, and special requests.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
              <p>We use your information to process bookings, communicate about your stay, send check-in instructions and welcome guides, respond to inquiries, and improve our services. We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Third-Party Services</h2>
              <p>We use trusted third-party services to operate our business, including Lodgify (property management and booking platform) and payment processors. These services have their own privacy policies governing their use of your data.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Cookies & Analytics</h2>
              <p>Our website may use cookies and analytics tools to understand how visitors use our site. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information. Payment processing is handled by PCI-compliant third-party processors \u2014 we do not store credit card numbers on our servers.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at stay@californialuxurystays.com. California residents have additional rights under the CCPA.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p>For privacy-related questions, contact us at <a href="mailto:stay@californialuxurystays.com" className="text-gold-400 hover:text-gold-300">stay@californialuxurystays.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
