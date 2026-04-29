'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NavProps {
  currentProperty?: string;
  mode?: 'welcome' | 'checkout' | 'qr' | 'home';
}

export default function NavigationBar({ currentProperty, mode = 'welcome' }: NavProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/90 backdrop-blur-md border-b border-white/5 no-print"
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="California Luxury Stays"
            width={200}
            height={56}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-4 text-xs sm:text-sm overflow-x-auto">
          {currentProperty && (
            <>
              <Link
                href={`/welcome/${currentProperty}`}
                className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
                  mode === 'welcome' ? 'text-gold' : 'text-luxury-muted hover:text-white'
                }`}
              >
                Welcome
              </Link>
              <Link
                href={`/checkout/${currentProperty}`}
                className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
                  mode === 'checkout' ? 'text-gold' : 'text-luxury-muted hover:text-white'
                }`}
              >
                Checkout
              </Link>
              <span className="text-white/10 hidden sm:inline">|</span>
            </>
          )}
          <Link
            href="/welcome/graeagle"
            className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
              currentProperty === 'graeagle' ? 'text-white/60' : 'text-luxury-muted hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">Graeagle</span>
            <span className="sm:hidden">GAE</span>
          </Link>
          <Link
            href="/welcome/northstar"
            className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
              currentProperty === 'northstar' ? 'text-white/60' : 'text-luxury-muted hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">Northstar</span>
            <span className="sm:hidden">NST</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
