'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const propertyCards = [
  {
    id: 'graeagle',
    name: 'Family Cabin in Graeagle',
    tagline: 'Sierra Nevada Mountain Retreat',
    features: ['3 Bedrooms', 'Sleeps 10', 'EV Charger', 'Stone Fireplace'],
    href: '/welcome/graeagle',
  },
  {
    id: 'northstar',
    name: 'Luxury Northstar Getaway',
    tagline: 'On the Golf Course at Northstar',
    features: ['Luxury 5-Star', 'Hot Tub', "Chef's Kitchen", 'Mountain Views'],
    href: '/welcome/northstar',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4">
            <span className="gold-gradient">California</span>
            <br />
            <span className="text-white">Luxury Stays</span>
          </h1>
          <p className="text-luxury-muted text-lg md:text-xl max-w-xl mx-auto">
            Premium vacation rentals in California&apos;s most beautiful destinations
          </p>
        </motion.div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {propertyCards.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <Link href={property.href} className="block group">
                <div className="luxury-card p-8 hover:border-gold/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold/5">
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-luxury-gray rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-gold/20 transition-colors">
                    <span className="text-luxury-muted text-sm">Property Photo</span>
                  </div>
                  <h2 className="font-serif text-2xl text-white mb-1 group-hover:text-gold transition-colors">
                    {property.name}
                  </h2>
                  <p className="text-gold/70 text-sm mb-4">{property.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-luxury-muted border border-white/5"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium">
                    View Welcome Book
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-luxury-muted text-xs border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} California Luxury Stays. All rights reserved.</p>
      </footer>
    </main>
  );
}
