'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavigationBar({ currentProperty }: { currentProperty?: string }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/90 backdrop-blur-md border-b border-white/5 no-print"
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-lg text-gold">California Luxury Stays</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/welcome/graeagle"
            className={`transition-colors ${currentProperty === 'graeagle' ? 'text-gold' : 'text-luxury-muted hover:text-white'}`}
          >
            Graeagle
          </Link>
          <Link
            href="/welcome/northstar"
            className={`transition-colors ${currentProperty === 'northstar' ? 'text-gold' : 'text-luxury-muted hover:text-white'}`}
          >
            Northstar
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
