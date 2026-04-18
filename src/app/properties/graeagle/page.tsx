import type { Metadata } from "next";
import GraeagleClient from "./GraeagleClient";

export const metadata: Metadata = {
  title: "Graeagle Mountain Cabin — 3BR Luxury Rental near Plumas Pines Golf | Sleeps 12",
  description:
    "Cozy 3-bedroom luxury cabin in Graeagle, CA. Sleeps 12, stone fireplace, EV charging, minutes from Graeagle Meadows golf. Book direct for the best rate.",
  alternates: {
    canonical: "https://californialuxurystays.com/properties/graeagle",
  },
  openGraph: {
    title: "Graeagle Mountain Cabin — 3BR Luxury Rental near Plumas Pines Golf | Sleeps 12",
    description:
      "Cozy 3-bedroom luxury cabin in Graeagle, CA. Sleeps 12, stone fireplace, EV charging, minutes from Graeagle Meadows golf. Book direct for the best rate.",
    type: "website",
    url: "https://californialuxurystays.com/properties/graeagle",
    images: [
      {
        url: "https://californialuxurystays.com/images/graeagle/family-room.jpg",
        width: 1200,
        height: 630,
        alt: "Graeagle cabin family room with stone fireplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graeagle Mountain Cabin — 3BR Luxury Rental near Plumas Pines Golf | Sleeps 12",
    description:
      "Cozy 3-bedroom luxury cabin in Graeagle, CA. Sleeps 12, stone fireplace, EV charging, minutes from Graeagle Meadows golf. Book direct for the best rate.",
    images: ["https://californialuxurystays.com/images/graeagle/family-room.jpg"],
  },
};

export default function Page() {
  return <GraeagleClient />;
}
