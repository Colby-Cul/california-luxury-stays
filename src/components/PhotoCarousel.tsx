"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoCarouselProps {
  photos: { src: string; alt: string }[];
  aspectRatio?: string;
}

export default function PhotoCarousel({ photos, aspectRatio = "aspect-[16/9]" }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + photos.length) % photos.length);
    },
    [photos.length],
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  if (!photos.length) return null;

  return (
    <div className="relative group">
      {/* Main image */}
      <div className={`relative ${aspectRatio} overflow-hidden rounded-2xl bg-charcoal-700`}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={photos[current].src}
              alt={photos[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800/70 text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100 hover:bg-charcoal-800/90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800/70 text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100 hover:bg-charcoal-800/90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 z-10 rounded-full bg-charcoal-800/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
          {current + 1} / {photos.length}
        </div>
      </div>

      {/* Dot indicators */}
      {photos.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-gold-400" : "w-1.5 bg-gold-400/30 hover:bg-gold-400/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
