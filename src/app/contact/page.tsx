"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", property: "", checkin: "", checkout: "", guests: "", message: "", _honey: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", property: "", checkin: "", checkout: "", guests: "", message: "", _honey: "" });
      }
    } catch {
      setErrorMsg("Network error. Please email us directly at christine@californialuxurystays.com.");
      setStatus("error");
    }
  };

  const inputStyle = "w-full bg-charcoal-700 border border-gold-400/15 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 outline-none focus:border-gold-400/40 transition";

  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Get In Touch</p>
            <h1 className="mt-3 text-4xl font-semibold text-white font-serif sm:text-5xl">Book Your Stay</h1>
            <p className="mt-4 text-stone-300 max-w-xl">Fill out the form below and we&apos;ll get back to you within 2 hours with availability and pricing.</p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Full Name *</label>
                  <input id="name" type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Email *</label>
                  <input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={inputStyle} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Phone</label>
                  <input id="phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="property" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Property</label>
                  <select id="property" value={form.property} onChange={e => setForm({ ...form, property: e.target.value })} className={inputStyle}>
                    <option value="">Select a property</option>
                    <option value="Graeagle Mountain Cabin">Graeagle Mountain Cabin</option>
                    <option value="Northstar Luxury Retreat">Northstar Luxury Retreat</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="checkin" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Check-in</label>
                  <input id="checkin" type="date" value={form.checkin} onChange={e => setForm({ ...form, checkin: e.target.value })} className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Check-out</label>
                  <input id="checkout" type="date" value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Guests</label>
                  <input id="guests" type="number" min="1" max="10" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} placeholder="# of guests" className={inputStyle} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gold-400 mb-2">Message</label>
                <textarea id="message" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your trip — special occasions, questions, requests..." className={inputStyle + " resize-none"} />
              </div>
              {/* Honeypot — hidden from real users, catches bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" value={form._honey} onChange={e => setForm({ ...form, _honey: e.target.value })} />
              </div>
              <button type="submit" disabled={status === "sending" || status === "sent"} className="w-full rounded-full bg-gold-400 py-3.5 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300 disabled:opacity-50">
                {status === "sending" ? "Sending..." : status === "sent" ? "Inquiry Sent!" : "Send Inquiry"}
              </button>
              {status === "sent" && <p className="text-sm text-green-400 text-center">Thanks! We typically respond within 2 hours.</p>}
              {status === "error" && <p className="text-sm text-red-400 text-center">{errorMsg || "Something went wrong. Please email us directly."}</p>}
            </form>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6 space-y-5">
                <h2 className="text-lg font-semibold text-white font-serif">Contact Info</h2>
                <div className="space-y-3 text-sm text-stone-300">
                  <div><p className="text-xs uppercase tracking-wider text-gold-400 mb-1">Email</p><a href="mailto:christine@californialuxurystays.com" className="hover:text-gold-300">christine@californialuxurystays.com</a></div>
                  <div><p className="text-xs uppercase tracking-wider text-gold-400 mb-1">Response Time</p><p>Within 2 hours (8 AM \u2013 10 PM PT)</p></div>
                </div>
              </div>

              <div className="rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6 space-y-3">
                <h2 className="text-lg font-semibold text-white font-serif">Why Book Direct</h2>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> Best rate guaranteed — no platform fees</li>
                  <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> Direct communication with your host</li>
                  <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> Flexible booking modifications</li>
                  <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> Personal concierge-level service</li>
                </ul>
              </div>

              <Link href="/faq" className="block rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6 transition hover:border-gold-400/25">
                <h2 className="text-lg font-semibold text-white font-serif">Have Questions?</h2>
                <p className="mt-2 text-sm text-stone-400">Check our FAQ for answers about check-in times, cancellation, pets, and more.</p>
                <span className="mt-3 inline-block text-sm font-semibold text-gold-400">View FAQ &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
