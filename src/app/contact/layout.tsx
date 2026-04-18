import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact California Luxury Stays about booking our Graeagle or Northstar properties. Direct communication with your hosts — response within 2 hours during business hours.",
  alternates: {
    canonical: "https://californialuxurystays.com/contact",
  },
  openGraph: {
    title: "Contact California Luxury Stays",
    description: "Book direct or ask us anything about your Sierra Nevada stay. Response within 2 hours.",
    url: "https://californialuxurystays.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
