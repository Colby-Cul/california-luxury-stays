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
          <div className="flex items-center gap-5">
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-stone-500 transition hover:text-gold-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-stone-500 transition hover:text-gold-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-stone-500 transition hover:text-gold-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span className="h-4 w-px bg-stone-600" />
            <div className="flex gap-6 text-xs text-stone-500">
              <Link href="/privacy" className="transition hover:text-gold-400">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-gold-400">Terms of Service</Link>
              <Link href="/faq" className="transition hover:text-gold-400">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
