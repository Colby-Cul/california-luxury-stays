import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20 flex items-center justify-center min-h-[70vh]">
        <div className="text-center px-6">
          <p className="text-8xl font-semibold text-gold-400/30 font-serif">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-white font-serif">Page Not Found</h1>
          <p className="mt-3 text-stone-400 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/" className="rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-charcoal-800 transition hover:bg-gold-300">
              Back to Home
            </Link>
            <Link href="/contact" className="rounded-full border border-gold-400/30 px-6 py-3 text-sm font-semibold text-gold-200 transition hover:border-gold-400">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
