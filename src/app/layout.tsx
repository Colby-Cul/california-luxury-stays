import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "California Luxury Stays | Sierra Nevada Mountain Retreats",
    template: "%s | California Luxury Stays",
  },
  description: "Curated luxury cabin rentals in Graeagle and Northstar, California. Ski weekends, summer escapes, and unforgettable mountain getaways in the Sierra Nevada.",
  metadataBase: new URL("https://californialuxurystays.com"),
  openGraph: {
    title: "California Luxury Stays",
    description: "Luxury mountain retreats in the Sierra Nevada",
    siteName: "California Luxury Stays",
    type: "website",
    locale: "en_US",
    url: "https://californialuxurystays.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "California Luxury Stays",
    description: "Luxury mountain retreats in the Sierra Nevada",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "California Luxury Stays",
              description: "Curated luxury cabin rentals in Graeagle and Northstar, California",
              url: "https://californialuxurystays.com",
              email: "stay@californialuxurystays.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "CA",
                addressCountry: "US",
              },
              hasMap: "https://maps.google.com/?q=Graeagle+CA",
              priceRange: "$259 - $3,029",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-charcoal-800 text-stone-100 font-sans">{children}</body>
    </html>
  );
}
