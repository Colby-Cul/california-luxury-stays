"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Graeagle Cabin", href: "/properties/graeagle" },
  { label: "Northstar Retreat", href: "/properties/northstar" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ bookNowHref = "/#properties" }: { bookNowHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold-400/10 bg-charcoal-800/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group" aria-label="California Luxury Stays home">
          <Image
            src="/images/cls-icon-512.png"
            alt="CLS logo"
            width={44}
            height={44}
            className="rounded-lg transition group-hover:opacity-90"
            priority
          />
          <p className="text-base font-semibold text-white font-serif hidden sm:block">California Luxury Stays</p>
        </Link>

        <nav className="hidden xl:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-stone-300 transition hover:text-gold-300">
              {link.label}
            </Link>
          ))}
          <Link href={bookNowHref} className="rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300">
            Book Now
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={`block h-0.5 w-6 bg-gold-300 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gold-300 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gold-300 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-gold-400/10 xl:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 px-6 py-6 bg-charcoal-800/95">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-stone-200 transition hover:text-gold-300">
                  {link.label}
                </Link>
              ))}
              <Link href={bookNowHref} onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-gold-400 px-5 py-3 text-center text-sm font-semibold text-charcoal-800">
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
