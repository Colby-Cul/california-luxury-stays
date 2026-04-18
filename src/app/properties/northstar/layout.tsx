import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Northstar Vacation Rental | Sleeps 22, 7BR, On Golf Course",
  description: "Luxury 7-bedroom Northstar rental near Lake Tahoe. Sleeps 22 with hot tub, chef's kitchen, spa bathroom, golf course views. Wedding & reunion ready. Book direct.",
  alternates: {
    canonical: "https://californialuxurystays.com/properties/northstar",
  },
  openGraph: {
    title: "Luxury Northstar Vacation Rental | Sleeps 22, 7BR",
    description: "Lake Tahoe luxury home — 22 guests, 7 bedrooms, hot tub, golf course views. Perfect for weddings, reunions, and corporate retreats. Book direct.",
    type: "website",
    url: "https://californialuxurystays.com/properties/northstar",
    images: [
      {
        url: "/images/northstar/northstar-1.jpg",
        width: 1200,
        height: 800,
        alt: "Northstar luxury home exterior with aspen trees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Northstar Vacation Rental",
    description: "Sleeps 22. Hot tub, golf course views, spa bathroom. Book direct.",
    images: ["/images/northstar/northstar-1.jpg"],
  },
};

export default function NorthstarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
