# For AI Agents — Read Before Working

## Startup Checklist

1. **READ `PROJECT_STATE.md`** — This is your memory. It tells you what exists, what's been done, and what to never do.
2. **Do NOT scaffold, rebuild, or create a new project.** This is an existing site with 9 pages, Lodgify integration, and a live deployment. Modify it.
3. **Check `git log --oneline -10`** to see recent changes.
4. **Run `npm run build`** (or `npx next build`) to confirm current state builds before making changes.
5. **After your session, UPDATE `PROJECT_STATE.md`** with:
   - What you changed
   - What files you modified
   - Any new issues discovered
   - Any TODOs that remain

## Quick Reference

- **Package manager:** npm
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (tailwind.config.ts has custom `gold` and `charcoal` color scales)
- **Fonts:** Playfair Display (serif, headings), Inter (sans, body) — loaded via next/font/google
- **Animations:** Framer Motion
- **PMS:** Lodgify — API key in `.env.local` / Vercel env as `LODGIFY_API_KEY`
- **Build:** `npx next build`
- **Dev:** `npx next dev`
- **Deploy:** `vercel --prod --yes`

## Project Structure

```
src/
  app/
    layout.tsx          — Root layout (fonts, metadata, schema.org)
    page.tsx            — Homepage
    not-found.tsx       — Custom 404
    sitemap.ts          — Auto-generated sitemap
    about/page.tsx
    contact/page.tsx    — Booking inquiry form
    faq/page.tsx
    privacy/page.tsx
    terms/page.tsx
    properties/
      graeagle/page.tsx — Full property page with Lodgify calendar
      northstar/page.tsx
    api/
      availability/route.ts — Lodgify API proxy for calendar data
  components/
    Header.tsx          — Fixed header with mobile menu
    Footer.tsx          — 4-column footer
    AvailabilityCalendar.tsx — Live calendar from Lodgify API
content/
  graeagle-property-data.json   — Scraped property content
  northstar-property-data.json
```

## NEVER DO THESE THINGS

1. **Never link to Airbnb, VRBO, Booking.com, or any OTA.** This is a direct-booking site.
2. **Never create a new Next.js project or scaffold.** Work within this existing project.
3. **Never delete pages without explicit approval.**
4. **Never change the tech stack** (Next.js, Tailwind, Framer Motion, Lodgify).
5. **Never change the brand** (Playfair Display, gold #C9A96E, dark charcoal theme).

## Starting a New Session

Always begin with:
```
Read PROJECT_STATE.md and AGENT_README.md first. Then [your actual task]. Update PROJECT_STATE.md when you're done.
```
