"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLatestPosts } from "@/../content/blog/posts";

const LATEST_POSTS = getLatestPosts(3);

const PROPERTIES = [
  {
    id: "graeagle",
    name: "Graeagle Mountain Cabin",
    location: "Plumas County, Sierra Nevada",
    tagline: "A warm alpine escape nestled among towering pines",
    sleeps: 12,
    bedrooms: 3,
    baths: 2.5,
    highlights: ["Stone fireplace", "Forest views", "Game room", "Wraparound deck"],
    image: "/images/graeagle/family-room.jpg",
    imageAlt: "Cozy family room with stone fireplace and comfortable seating",
    accent: "from-amber-900/40 via-stone-900 to-charcoal-800",
    href: "/properties/graeagle",
  },
  {
    id: "northstar",
    name: "Northstar Luxury Retreat",
    location: "Lake Tahoe, Placer County",
    tagline: "Elevated mountain living with resort-style comforts",
    sleeps: 22,
    bedrooms: 7,
    baths: 6,
    highlights: ["Hot tub", "Chef's kitchen", "Spa bathroom", "Mountain panoramas"],
    image: "/images/northstar/exterior-1.jpg",
    imageAlt: "Northstar luxury home exterior with aspen trees",
    accent: "from-sky-900/30 via-stone-900 to-charcoal-800",
    href: "/properties/northstar",
  },
];

const FEATURES = [
  { title: "Curated Stays", desc: "Every property hand-selected for location, quality, and character." },
  { title: "Seamless Booking", desc: "Book direct for the best rates. Instant confirmation, no middleman." },
  { title: "Local Expertise", desc: "We live here. Insider tips, restaurant picks, and trail guides included." },
  { title: "Premium Amenities", desc: "Hot tubs, fireplaces, chef's kitchens, and mountain views come standard." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/images/lake-tahoe-hero.jpg"
          alt="Emerald Bay, Lake Tahoe — turquoise water surrounded by Sierra Nevada pine forests"
          fill
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-charcoal-800/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/40 via-transparent to-charcoal-800" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-3xl space-y-8"
          >
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-sm uppercase tracking-[0.4em] text-gold-400/80">
              Sierra Nevada · California
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl font-serif leading-[1.1]">
              Luxury Mountain<br />
              <span className="text-gold-300">Retreats</span>
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-xl text-lg leading-8 text-stone-300">
              Curated cabin stays in Graeagle and Northstar — designed for ski weekends,
              summer escapes, and long, quiet mornings under the pines.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#properties"
                className="rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                Explore Properties
              </Link>
              <Link
                href="#properties"
                className="rounded-full border border-gold-400/30 px-7 py-3.5 text-sm font-semibold text-gold-200 transition hover:border-gold-400 hover:text-gold-100"
              >
                Book Your Stay
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400/70">Featured Stays</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white font-serif sm:text-4xl">
            Two distinct properties, one standard: excellence.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROPERTIES.map((prop, i) => (
            <motion.article
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group overflow-hidden rounded-3xl border border-gold-400/10 bg-charcoal-600 shadow-2xl shadow-black/30 transition hover:border-gold-400/25"
            >
              {/* Property image — links to property page */}
              <Link href={prop.href} className="block relative h-64 overflow-hidden cursor-pointer">
                <Image
                  src={prop.image}
                  alt={prop.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/60 to-transparent" />
              </Link>
              <div className="p-7 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white font-serif">{prop.name}</h3>
                  <p className="mt-1 text-sm text-gold-400/70">{prop.location}</p>
                </div>
                <p className="text-stone-300 leading-7">{prop.tagline}</p>
                <div className="flex gap-6 text-sm text-stone-400">
                  <span>Sleeps {prop.sleeps}</span>
                  {prop.bedrooms && <span>{prop.bedrooms} Bedrooms</span>}
                  <span>{prop.baths} Baths</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {prop.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1 text-xs text-gold-200">
                      {h}
                    </span>
                  ))}
                </div>
                <Link
                  href={prop.href}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition hover:text-gold-300"
                >
                  View Property
                  <span className="transition group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-gold-400/10 bg-charcoal-700/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-400/70">The Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white font-serif">Why California Luxury Stays</h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="space-y-3"
              >
                <div className="h-px w-10 bg-gold-400/50" />
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-stone-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400/70">From the Sierra</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white font-serif">Local Guides & Tips</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6 transition hover:border-gold-400/25 hover:shadow-lg hover:shadow-gold-400/5 h-full"
              >
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="rounded-full bg-gold-400/10 px-2.5 py-0.5 text-gold-300 uppercase tracking-wider">{post.category}</span>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</time>
                </div>
                <h3 className="mt-3 text-base font-semibold text-white font-serif group-hover:text-gold-300 transition leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed line-clamp-2">{post.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sm font-semibold text-gold-400 transition hover:text-gold-300">
            View All Posts &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gold-400/15 bg-gradient-to-br from-gold-400/10 via-charcoal-700 to-charcoal-800 p-10 text-center lg:p-16"
        >
          <h2 className="text-3xl font-semibold text-white font-serif sm:text-4xl">Ready to experience the Sierra?</h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Check availability for your dates. Book direct for the best rates and a personal touch.
          </p>
          <Link
            href="#properties"
            className="mt-8 inline-block rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20"
          >
            Explore Properties
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
