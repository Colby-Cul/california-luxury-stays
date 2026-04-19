'use client';

import { motion } from 'framer-motion';

interface SectionProgressProps {
  current: number;
  total: number;
  labels: string[];
  onNavigate: (index: number) => void;
}

export default function SectionProgress({ current, total, labels, onNavigate }: SectionProgressProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed top-14 left-0 right-0 z-40 bg-luxury-black/90 backdrop-blur-md no-print">
      {/* Progress bar */}
      <div className="h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-dark to-gold-light"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      {/* Dots */}
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            title={labels[i]}
            className="group relative"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-gold scale-125'
                  : i < current
                  ? 'bg-gold/40'
                  : 'bg-white/10'
              }`}
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-luxury-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {labels[i]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
