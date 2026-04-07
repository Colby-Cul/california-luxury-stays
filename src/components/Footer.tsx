"use client";

import Link from "next/link";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setNlStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setNlStatus("done");
        setEmail("");
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
  };

  return (
    <footer className="border-t border-gold-400/10 bg-charcoal-700" role="contentinfo">
      {/* Newsletter Banner */}
      <div className="border-b border-gold-400/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-base font-semibold text-white font-serif">Get seasonal deals & local guides</p>
            <p className="text-sm text-stone-400 mt-1">Join our list for insider tips, events, and exclusive offers.</p>
          </div>
          <form onSubmit={handleNewsletter} className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={nlStatus === "done"}
              className="w-full sm:w-64 bg-charcoal-800 border border-gold-400/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-stone-500 outline-none focus:border-gold-400/40 transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={nlStatus === "sending" || nlStatus === "done"}
              className="shrink-0 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 disabled:opacity-50"
            >
              {nlStatus === "done" ? "Subscribed!" : nlStatus === "sending" ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

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
