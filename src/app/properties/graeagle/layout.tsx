import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graeagle Mountain Cabin Rental | Sleeps 12, 3BR, 2.5BA",
  description: "Luxury 3-bedroom Graeagle cabin rental in Plumas County, Sierra Nevada. Sleeps 12, stone fireplace, 86-inch 4K TV, wraparound deck. Book direct and save.",
  alternates: {
    canonical: "https://californialuxurystays.com/properties/graeagle",
  },
  openGraph: {
    title: "Graeagle Mountain Cabin Rental | Sleeps 12, 3BR",
    description: "Luxury 3-bedroom cabin in Graeagle's Sierra Nevada pines. Stone fireplace, forest views, steps to hiking and golf. Book direct.",
    type: "website",
    url: "https://californialuxurystays.com/properties/graeagle",
    images: [
      {
        url: "/images/graeagle/family-room.jpg",
        width: 1200,
        height: 800,
        alt: "Graeagle Mountain Cabin family room with stone fireplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graeagle Mountain Cabin Rental",
    description: "3-bedroom luxury cabin in the Sierra Nevada. Sleeps 12. Book direct.",
    images: ["/images/graeagle/family-room.jpg"],
  },
};

export default function GraeagleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
