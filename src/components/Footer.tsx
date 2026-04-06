import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/10 bg-charcoal-700" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white font-serif">California Luxury Stays</p>
            <p className="mt-2 text-sm text-stone-400 leading-6">
              Curated mountain retreats in Graeagle and Northstar, California.
              Where the Sierra Nevada meets luxury hospitality.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Properties</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li><Link href="/properties/graeagle" className="transition hover:text-gold-300">Graeagle Mountain Cabin</Link></li>
              <li><Link href="/properties/northstar" className="transition hover:text-gold-300">Northstar Luxury Retreat</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li><Link href="/about" className="transition hover:text-gold-300">About Us</Link></li>
              <li><Link href="/faq" className="transition hover:text-gold-300">FAQ</Link></li>
              <li><Link href="/contact" className="transition hover:text-gold-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li><a href="mailto:stay@californialuxurystays.com" className="transition hover:text-gold-300">stay@californialuxurystays.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gold-400/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">&copy; {CURRENT_YEAR} California Luxury Stays. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-stone-500">
            <Link href="/privacy" className="transition hover:text-gold-400">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-gold-400">Terms of Service</Link>
            <Link href="/faq" className="transition hover:text-gold-400">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
