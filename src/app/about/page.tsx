import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | California Luxury Stays",
  description: "Family-operated luxury cabin rentals in Graeagle and Northstar, California. Learn about our approach to Sierra Nevada hospitality.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Our Story</p>
              <h1 className="mt-3 text-4xl font-semibold text-white font-serif sm:text-5xl">About California Luxury Stays</h1>
            </div>
            <div className="space-y-6 text-stone-300 leading-8 text-lg">
              <p>
                California Luxury Stays was born from a simple belief: the Sierra Nevada deserves
                better hospitality. Not just clean sheets and a working lock &mdash; but thoughtful spaces
                that elevate the mountain experience.
              </p>
              <p>
                We&apos;re a family-operated collection of premium short-term rental properties in
                Graeagle and Northstar, California. Every cabin in our portfolio is hand-selected,
                personally maintained, and designed with guests who appreciate quality in mind.
              </p>
              <p>
                From the stone fireplaces to the chef&apos;s kitchens, from the hot tubs under the stars
                to the ski storage by the door &mdash; every detail is intentional. We live here. We know
                these mountains. And we want your stay to feel like coming home to a place you didn&apos;t
                know you were missing.
              </p>
            </div>
            <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-8 space-y-4">
              <h2 className="text-xl font-semibold text-white font-serif">The Culbertson Approach</h2>
              <ul className="space-y-3 text-stone-300">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" /> Book direct for the best rates &mdash; no platform markups</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" /> Personal concierge service for restaurant picks, trail guides, and local tips</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" /> Premium amenities come standard &mdash; not as upgrades</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" /> 24/7 availability for anything you need during your stay</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
