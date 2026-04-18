import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  description:
    "Book direct — no platform fees. Luxury 22-guest Northstar home on the golf course and a cozy 12-guest Graeagle cabin. Sierra Nevada's finest vacation rentals.",
  alternates: {
    canonical: "https://californialuxurystays.com",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: "California Luxury Stays — Luxury Vacation Rentals in Graeagle & Lake Tahoe",
    description:
      "Book direct — no platform fees. Luxury 22-guest Northstar home on the golf course and a cozy 12-guest Graeagle cabin. Sierra Nevada's finest vacation rentals.",
    type: "website",
    url: "https://californialuxurystays.com",
    siteName: "California Luxury Stays",
    locale: "en_US",
  },
};

export default function Page() {
  return <HomeClient />;
}
