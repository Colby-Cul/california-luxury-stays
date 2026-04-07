import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/../content/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Local guides, seasonal tips, and insider knowledge from California Luxury Stays — your hosts in Graeagle and Northstar.",
};

const sorted = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Journal</p>
            <h1 className="mt-3 text-4xl font-semibold text-white font-serif sm:text-5xl">From the Sierra</h1>
            <p className="mt-4 text-stone-300 max-w-xl">Local guides, seasonal tips, and insider knowledge from your hosts in Graeagle and Northstar.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gold-400/10 bg-charcoal-600 p-6 transition hover:border-gold-400/25 hover:shadow-lg hover:shadow-gold-400/5"
              >
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="rounded-full bg-gold-400/10 px-2.5 py-0.5 text-gold-300 uppercase tracking-wider">{post.category}</span>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-white font-serif group-hover:text-gold-300 transition">{post.title}</h2>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed line-clamp-3">{post.description}</p>
                <p className="mt-4 text-sm font-semibold text-gold-400">Read more &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
