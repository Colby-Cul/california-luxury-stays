import type { Metadata } from "next";
import NorthstarClient from "./NorthstarClient";

export const metadata: Metadata = {
  title: "Luxury Northstar Retreat — 7BR Home on the Golf Course | Sleeps 22",
  description:
    "Luxury 7-bedroom, 6-bath vacation home on Northstar golf course near Lake Tahoe. Sleeps 22, hot tub, chef's kitchen, NPOA amenities. Book direct — no platform fees.",
  alternates: {
    canonical: "https://californialuxurystays.com/properties/northstar",
  },
  openGraph: {
    title: "Luxury Northstar Retreat — 7BR Home on the Golf Course | Sleeps 22",
    description:
      "Luxury 7-bedroom, 6-bath vacation home on Northstar golf course near Lake Tahoe. Sleeps 22, hot tub, chef's kitchen, NPOA amenities. Book direct — no platform fees.",
    type: "website",
    url: "https://californialuxurystays.com/properties/northstar",
    images: [
      {
        url: "https://californialuxurystays.com/images/northstar/northstar-1.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Northstar Retreat exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Northstar Retreat — 7BR Home on the Golf Course | Sleeps 22",
    description:
      "Luxury 7-bedroom, 6-bath vacation home on Northstar golf course near Lake Tahoe. Sleeps 22, hot tub, chef's kitchen, NPOA amenities. Book direct — no platform fees.",
    images: ["https://californialuxurystays.com/images/northstar/northstar-1.jpg"],
  },
};

export default function Page() {
  return <NorthstarClient />;
}
