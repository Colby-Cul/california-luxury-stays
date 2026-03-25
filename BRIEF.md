# California Luxury Stays — Welcome Book Website

## Brand
- Domain: CaliforniaLuxuryStays.com
- Aesthetic: Luxury boutique hotel energy. Think dark backgrounds, gold accents, elegant typography, high-end feel. NOT generic Airbnb template.
- Fonts: Use a classy serif for headings (Playfair Display) + clean sans-serif for body (Inter or similar)

## Tech Stack
- Next.js 14+ with App Router (static export for GitHub Pages deployment)
- Tailwind CSS for styling
- Framer Motion for smooth page transitions / flipbook feel
- Responsive — must look stunning on mobile (guests will open on phones)

## Structure

### Welcome Book (per property)
Route: `/welcome/graeagle` and `/welcome/northstar`

Sections (flipbook-style pages, swipeable on mobile):
1. **Welcome Hero** — Full-screen property photo, property name, warm welcome message
2. **Property Details** — Bedrooms, bathrooms, capacity, key features
3. **Access & Check-In** — Door codes (placeholder {{CODE}}), WiFi info (placeholder {{WIFI_NAME}} / {{WIFI_PASSWORD}}), parking instructions
4. **House Guide** — How to use: fireplace, TV/streaming, BBQ/smoker, hot tub (Northstar), EV charger (Graeagle), thermostat, etc. Include placeholder spots for how-to video embeds.
5. **Kitchen & Amenities** — What's provided (cookware, coffee maker, etc.)
6. **Local Dining & Activities** — Restaurants, bars, golf courses, hiking, things to do nearby
7. **House Rules** — Quiet hours, trash, pets policy, max occupancy
8. **Emergency & Contact** — Emergency numbers, property manager contact, nearest hospital
9. **Thank You** — Closing message, review request links (Airbnb, Google)

### Checkout Guide (per property)
Route: `/checkout/graeagle` and `/checkout/northstar`

Clean checklist format:
- Dishes in dishwasher (start it)
- Strip beds, pile linens in laundry room
- Take out all trash to bins
- Turn off all lights and fans
- Set thermostat to 68°F
- Lock all doors and windows
- Garage door closed
- Return any moved furniture
- Check personal belongings
- Leave keys (if applicable)
- Thank you + review request

## Property Data

### Graeagle Cabin (ID: 533203)
- **Name**: Family Cabin in Graeagle CA w/King Bed & EV Charge
- **Address**: 47 Shasta Trail, Graeagle, CA 96103
- **Rating**: 5.0 stars
- **Price**: $258-$580/night
- **Description**: Charming cabin in Sierra Nevada Mountains. Stone fireplace, 86" 4K TV, queen pull-out couch, 3 bedrooms sleeping 10. Two BBQs (Weber charcoal + Traeger Electric Smoker). New fridge with extra icemaker, new electric stove and dishwasher. EV charger available. Walkable to restaurants, bars, shops, tennis/pickleball courts. Close to Graeagle Golf Course and other Sierra Nevada courses. Deer sleep under the decks. Very quiet neighborhood.
- **Lat/Long**: 39.760433, -120.614192
- **Nearby**: Graeagle restaurants, Knotty Pine bar, golf courses, hiking/biking trails, tennis/pickleball courts

### Northstar Luxury (ID: 746614)
- **Name**: Luxury Northstar Getaway • On Golf Course
- **Address**: 210 Bitter Brush Way, Placer County, CA 96161
- **Price**: $689-$3,025/night
- **Description**: 5000 Acres at Martis Valley. Panoramic forest views, direct access to Tompkins Trail and Northstar Golf Course. Chef's kitchen, two spacious family rooms with games and TVs. Hot tub overlooking Tahoe scenery. Remodeled, comfort/style/space.
- **Lat/Long**: 39.2943854, -120.1207838
- **Nearby**: Northstar Golf Course, Tompkins Trail, Lake Tahoe, ski resorts

## Key Requirements
- All dynamic content (codes, WiFi, etc.) uses clearly marked placeholders so we can later connect to a CMS or API
- Image placeholders with descriptive alt text (we'll add real photos later)
- Smooth page transitions — swipe/click to navigate between sections
- Progress indicator showing which section you're on
- Share button (copy link)
- Print-friendly version option
- Dark/light mode (default dark for luxury feel)
- Fast loading — static export, optimized

## Deployment
- GitHub Pages via `next export` / static output
- Repository: Will be created at github.com/Colby-Cul/california-luxury-stays
