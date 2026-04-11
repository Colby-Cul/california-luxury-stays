"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SUPABASE_URL = "https://bdlvwfobjqvnrffzxrfz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkbHZ3Zm9ianF2bnJmZnp4cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzUwNjAsImV4cCI6MjA4OTkxMTA2MH0.Tc4bdXUKWLhQQCVQlWbwFzcuV0Ry_gvFmuxcHKuvxHA";

interface PhotoGridProps {
  photos: { src: string; alt: string }[];
  propertyId?: string; // If provided, fetches from Supabase and overrides photos prop
}

export default function PhotoGrid({ photos: fallbackPhotos, propertyId }: PhotoGridProps) {
  const [photos, setPhotos] = useState(fallbackPhotos);

  useEffect(() => {
    if (!propertyId) return;
    fetch(
      `${SUPABASE_URL}/rest/v1/property_photos?property_id=eq.${propertyId}&order=sort_order&select=src,alt`,
      { headers: { apikey: SUPABASE_ANON_KEY } }
    )
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPhotos(data);
      })
      .catch(() => {}); // fall back to hardcoded photos on error
  }, [propertyId]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openGallery = useCallback((index: number) => {
    setCurrent(index);
    setGalleryOpen(true);
  }, []);

  const go = useCallback(
    (dir: number) => {
      setCurrent((prev) => (prev + dir + photos.length) % photos.length);
    },
    [photos.length],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!galleryOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Escape") setGalleryOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [galleryOpen, go]);

  if (!photos.length) return null;

  const hero = photos[0];
  const grid = photos.slice(1, 5);

  return (
    <>
      {/* Airbnb-style grid */}
      <div className="relative group">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden" style={{ height: "clamp(300px, 50vw, 480px)" }}>
          {/* Hero image — spans left half */}
          <button
            onClick={() => openGallery(0)}
            className="md:col-span-2 relative cursor-pointer overflow-hidden"
            aria-label="Open photo gallery"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover transition hover:scale-105 duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </button>

          {/* 2x2 grid — right half */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 grid-rows-2 gap-2">
            {grid.map((photo, i) => (
              <button
                key={i}
                onClick={() => openGallery(i + 1)}
                className="relative cursor-pointer overflow-hidden"
                aria-label={`View photo ${i + 2}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition hover:scale-105 duration-300"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>

          {/* Show all photos button */}
          {photos.length > 5 && (
            <button
              onClick={() => openGallery(0)}
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-charcoal-800 shadow-lg transition hover:bg-stone-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="3" cy="3" r="1.5" />
                <circle cx="8" cy="3" r="1.5" />
                <circle cx="13" cy="3" r="1.5" />
                <circle cx="3" cy="8" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="13" cy="8" r="1.5" />
                <circle cx="3" cy="13" r="1.5" />
                <circle cx="8" cy="13" r="1.5" />
                <circle cx="13" cy="13" r="1.5" />
              </svg>
              Show all photos
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen gallery modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-charcoal-800/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setGalleryOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-charcoal-700/80 px-4 py-2 text-sm text-white transition hover:bg-charcoal-600"
              aria-label="Close gallery"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </button>

            {/* Counter */}
            <div className="absolute top-4 right-4 z-10 rounded-full bg-charcoal-700/80 px-4 py-2 text-sm text-white">
              {current + 1} / {photos.length}
            </div>

            {/* Main image */}
            <div
              className="relative w-full max-w-5xl mx-4 aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photos[current].src}
                    alt={photos[current].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-700/80 text-white transition hover:bg-charcoal-600"
              aria-label="Previous photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-700/80 text-white transition hover:bg-charcoal-600"
              aria-label="Next photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Caption */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-sm text-stone-300 text-center max-w-lg">
              {photos[current].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
