# PROJECT STATE — READ THIS FIRST

> **EVERY agent session MUST read this file before making ANY changes.**
> **After completing work, UPDATE this file with what you did.**

---

## Project Overview

- **Project:** California Luxury Stays — Direct Booking STR Website
- **Properties:** 2 (Graeagle Mountain Cabin, Northstar Luxury Getaway)
- **Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS, Framer Motion, TypeScript
- **PMS Integration:** Lodgify (API-based availability calendar + checkout links)
- **Hosting:** Vercel (pineside-cabins.vercel.app)
- **Domain:** CaliforniaLuxuryStays.com (DNS pending — point to Vercel)
- **Repository:** https://github.com/Colby-Cul/california-luxury-stays

---

## CRITICAL RULES (Never Violate)

1. **NEVER rebuild this project from scratch.** Modify the existing codebase only.
2. **NEVER add links to Airbnb, VRBO, Booking.com, or any OTA.** This is a DIRECT BOOKING site. All booking goes through Lodgify.
3. **NEVER delete or overwrite existing working pages** without explicit approval.
4. **Preserve the design system:** Dark luxury theme, Playfair Display (serif), Inter (sans), gold accent #C9A96E, charcoal background.
5. **All booking CTAs go to Lodgify checkout:** `https://checkout.lodgify.com/colby-culbertson/en/?currency=USD#/{PROPERTY_ID}`

---

## Current Pages (9 total + sitemap)

| Route | Status | Notes |
|---|---|---|
| `/` | Working | Homepage with hero, property cards, features, CTA |
| `/properties/graeagle` | Working | Full content, amenities, house rules, availability calendar, Lodgify booking |
| `/properties/northstar` | Working | Full content, amenities, house rules, availability calendar, Lodgify booking |
| `/about` | Working | Company story, approach |
| `/contact` | Working | Booking inquiry form (mailto), contact info |
| `/faq` | Working | 10 questions covering check-in, cancellation, pets, booking, etc. |
| `/privacy` | Working | Privacy policy |
| `/terms` | Working | Terms of service / rental agreement |
| `/not-found` | Working | Custom 404 page |
| `/sitemap.xml` | Working | Auto-generated sitemap |

---

## Property Details

### Graeagle Mountain Cabin
- **Lodgify Property ID:** 533203
- **Lodgify Room ID:** 599857
- **Address:** 47 Shasta Trail, Graeagle, CA 96103
- **Capacity:** 9 guests, 4 bedrooms, 5 beds, 2 bathrooms
- **Rating:** 4.73★ (52 reviews)
- **Price range:** $259 – $580/night
- **Content status:** Full description, amenities, house rules, location, review themes — all from Airbnb scrape
- **Booking:** Lodgify checkout link active
- **Calendar:** Live Lodgify API availability calendar working
- **Photos:** 10 real photos in `/public/images/graeagle/` — carousel on property page + featured on homepage
- **Local Guide:** Things to Do (9 activities) + Places to Eat (8 restaurants)

### Northstar Luxury Getaway
- **Lodgify Property ID:** 746614
- **Lodgify Room ID:** 813739
- **Address:** 210 Bitter Brush Way, Truckee, CA 96161
- **Capacity:** 13 guests, 5 bedrooms, 7 beds, 3.5 bathrooms
- **Rating:** 5.0★ (5 reviews)
- **Price range:** $690 – $3,029/night
- **Content status:** Full description, amenities, house rules, location, review themes — all from Airbnb/VRBO scrape
- **Booking:** Lodgify checkout link active
- **Calendar:** Live Lodgify API availability calendar working
- **Photos:** 10 real photos in `/public/images/northstar/` — carousel on property page + featured on homepage
- **Local Guide:** Things to Do (9 activities) + Places to Eat (8 restaurants)

---

## Lodgify Integration Status

- **API Key configured:** [x] Yes — stored in Vercel env as `LODGIFY_API_KEY` and local `.env.local`
- **Graeagle Property ID:** [x] Set — 533203
- **Northstar Property ID:** [x] Set — 746614
- **Booking links working:** [x] Yes — links to `checkout.lodgify.com/colby-culbertson/en/`
- **Availability calendar working:** [x] Yes — API route at `/api/availability?propertyId=X` fetches live Lodgify data
- **Lodgify account owner:** colby-culbertson

---

## Completed Work Log

| Date | Agent/Model | What Was Done | Files Changed |
|---|---|---|---|
| 2026-04-03 | Claude Opus 4.6 | Initial site build: Next.js 14 + Tailwind + Framer Motion, 5 pages, Playfair Display + gold theme | layout.tsx, page.tsx, Header.tsx, Footer.tsx, graeagle/page.tsx, northstar/page.tsx, about/page.tsx |
| 2026-04-04 | Claude Opus 4.6 | Added FAQ, Privacy, Terms, 404 pages. Fixed contact form. Added sitemap.ts, robots.txt. SEO metadata on all pages. Schema.org markup. | faq/page.tsx, privacy/page.tsx, terms/page.tsx, not-found.tsx, sitemap.ts, contact/page.tsx |
| 2026-04-04 | Claude Opus 4.6 | Removed ALL Airbnb/VRBO links. Scraped property content. Populated property pages with real data. | graeagle/page.tsx, northstar/page.tsx, contact/page.tsx, faq/page.tsx, privacy/page.tsx |
| 2026-04-04 | Claude Opus 4.6 | Connected Lodgify API. Built AvailabilityCalendar component. API route for live availability. Lodgify checkout links. | api/availability/route.ts, AvailabilityCalendar.tsx, graeagle/page.tsx, northstar/page.tsx |
| 2026-04-05 | Claude Opus 4.6 | Fixed broken build (parent package.json merge conflict). Created PROJECT_STATE.md and AGENT_README.md. | PROJECT_STATE.md, AGENT_README.md |
| 2026-04-06 | Claude Opus 4.6 | QA directive fixes — see details below | layout.tsx, page.tsx, Header.tsx, Footer.tsx, contact/page.tsx, graeagle/page.tsx, northstar/page.tsx, about/page.tsx, faq/page.tsx, privacy/page.tsx, terms/page.tsx |
| 2026-04-06 | Claude Opus 4.6 | Fix Lodgify checkout URLs to correct /en/{owner}/{id}/reservation path | graeagle/page.tsx, northstar/page.tsx |
| 2026-04-06 | Claude Opus 4.6 | Add property photos (20 total), PhotoCarousel component, Things to Do + Places to Eat sections, real images on homepage cards | PhotoCarousel.tsx, page.tsx, graeagle/page.tsx, northstar/page.tsx, public/images/* |

### 2026-04-06 QA Directive Fix Details

Based on `CLS_Website_Fix_Directive_1.md` design review:

| Issue | Fix Applied |
|---|---|
| **C2** Phone number removal | Removed fake (530) 555-0198 from Footer, Contact page, and Schema.org in layout.tsx. Owner plans AI chat instead. |
| **C5** Homepage card mismatch | Graeagle: 8→9 guests, 4→5 beds. Northstar: 10→13 guests, 5→7 beds. Now matches property pages. |
| **C3** "Book Now" link | Changed from `/contact` to `/#properties` in both desktop and mobile nav. |
| **H4** "Also Book On" section | Replaced with "Why Book Direct" value-prop list on Contact page. |
| **H6** Review attribution | Added guest initials and stay dates to all reviews on both property pages. |
| **M1** Duplicate title tags | Fixed About, FAQ, Privacy, Terms — removed redundant "| California Luxury Stays" from page titles (layout template adds it). |
| **M3** Lodgify transition | Added "You'll be redirected to our secure booking partner" copy above booking CTAs on both property pages. |
| **M7** Seasonal pricing | Added "Rates vary by season" note below price on both property page sidebars. |

---

## Known TODOs

- [x] **Property photos** — 10 photos per property, carousel on property pages, featured images on homepage cards
- [x] **Phone number** — Removed entirely per owner directive. AI chat system planned as replacement.
- [ ] **AI Chat** — Owner wants AI-powered guest communication system with response queue in Mission Control
- [ ] **Email** — `stay@californialuxurystays.com` needs to be set up (domain email or forwarding)
- [ ] **DNS** — Point CaliforniaLuxuryStays.com to Vercel (A record: 76.76.21.21, CNAME www: cname.vercel-dns.com)
- [ ] **Google Analytics** — Not installed yet
- [ ] **Lodgify webhook** — For real-time booking notifications (optional)
- [ ] **Contact form backend** — Currently uses mailto: fallback. Wire to API endpoint or Formspree.
- [ ] **About page photos** — Needs owner/family photo and property photos
- [ ] **Favicon** — `/favicon.ico` referenced in metadata but verify file exists in `/public/`
- [ ] **OG image** — `og:image` meta tag needs a real property photo URL

---

## Scraped Content Sources (DATA ONLY — never link to these)

- Graeagle Airbnb listing (ID: 946628554074984654)
- Graeagle VRBO listing (ID: 3548884)
- Northstar Airbnb listing (ID: 1573420782945249337)
- Northstar VRBO listing (ID: 5048003)

---

*Last updated: 2026-04-06 by Claude Opus 4.6*
