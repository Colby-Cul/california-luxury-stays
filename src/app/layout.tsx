import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

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
    default: "Luxury Cabin Rentals in Graeagle & Lake Tahoe | California Luxury Stays",
    template: "%s | California Luxury Stays",
  },
  description: "Book direct and save on luxury vacation rentals in Graeagle and Northstar, Lake Tahoe. Sleeps up to 22. Hot tub, golf course views, mountain panoramas — zero platform fees.",
  metadataBase: new URL("https://californialuxurystays.com"),
  openGraph: {
    title: "Luxury Cabin Rentals in Graeagle & Lake Tahoe",
    description: "Book direct and save on luxury Sierra Nevada vacation rentals — Graeagle cabin (sleeps 12) and Northstar retreat (sleeps 22).",
    siteName: "California Luxury Stays",
    type: "website",
    locale: "en_US",
    url: "https://californialuxurystays.com",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Emerald Bay, Lake Tahoe — California Luxury Stays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Cabin Rentals in Graeagle & Lake Tahoe",
    description: "Book direct. Sleep up to 22. Graeagle & Northstar vacation rentals.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://californialuxurystays.com",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
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
              "@id": "https://californialuxurystays.com/#business",
              name: "California Luxury Stays",
              description: "Direct-booking luxury vacation rentals in Graeagle and Northstar, Lake Tahoe",
              url: "https://californialuxurystays.com",
              email: "christine@californialuxurystays.com",
              logo: "https://californialuxurystays.com/images/cls-icon-512.png",
              image: "https://californialuxurystays.com/images/og-image.png",
              address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
              areaServed: [
                { "@type": "City", name: "Graeagle" },
                { "@type": "City", name: "Truckee" },
                { "@type": "AdministrativeArea", name: "Lake Tahoe" },
                { "@type": "AdministrativeArea", name: "Sierra Nevada" },
              ],
              priceRange: "$259 - $3,029",
              currenciesAccepted: "USD",
              paymentAccepted: "Credit Card",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://californialuxurystays.com/#organization",
              name: "California Luxury Stays",
              url: "https://californialuxurystays.com",
              logo: {
                "@type": "ImageObject",
                url: "https://californialuxurystays.com/images/cls-icon-512.png",
                width: 512,
                height: 512,
              },
              email: "christine@californialuxurystays.com",
              description: "Family-operated direct-booking luxury vacation rentals in the Sierra Nevada.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://californialuxurystays.com/#website",
              url: "https://californialuxurystays.com",
              name: "California Luxury Stays",
              description: "Luxury vacation rentals in Graeagle and Lake Tahoe",
              publisher: { "@id": "https://californialuxurystays.com/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://californialuxurystays.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-charcoal-800 text-stone-100 font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-gold-400 focus:text-charcoal-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold">Skip to content</a>
        <div id="main-content">{children}</div>
        <ChatWidget />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
