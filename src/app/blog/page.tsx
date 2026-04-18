import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getReadingTime } from "@/../content/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Local guides, seasonal tips, and insider knowledge from California Luxury Stays — your hosts in Graeagle and Northstar.",
  alternates: {
    canonical: "https://californialuxurystays.com/blog",
  },
  openGraph: {
    title: "Sierra Nevada Travel Guide & Local Tips | California Luxury Stays Blog",
    description: "Local guides, seasonal tips, and insider knowledge from California Luxury Stays — your hosts in Graeagle and Northstar.",
    type: "website",
    url: "https://californialuxurystays.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sierra Nevada Travel Guide & Local Tips | California Luxury Stays Blog",
    description: "Local guides, seasonal tips, and insider knowledge from California Luxury Stays — your hosts in Graeagle and Northstar.",
  },
};

const sorted = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://californialuxurystays.com/blog#blog",
  url: "https://californialuxurystays.com/blog",
  name: "California Luxury Stays Blog",
  description: "Sierra Nevada travel guides and local tips from your Graeagle and Northstar hosts.",
  publisher: { "@id": "https://californialuxurystays.com/#organization" },
  blogPost: BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://californialuxurystays.com/blog/${p.slug}`,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    image: p.image ? `https://californialuxurystays.com${p.image}` : undefined,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://californialuxurystays.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://californialuxurystays.com/blog" },
  ],
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <div className="pt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold-400/80">Journal</p>
            <h1 className="mt-3 text-4xl font-semibold text-white font-serif sm:text-5xl">Sierra Nevada Travel Guide & Local Tips</h1>
            <p className="mt-2 text-lg text-stone-300 font-serif italic">From the Sierra</p>
            <p className="mt-3 text-stone-300 max-w-xl">Local guides, seasonal tips, and insider knowledge from your hosts in Graeagle and Northstar.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gold-400/10 bg-charcoal-600 overflow-hidden transition hover:border-gold-400/25 hover:shadow-lg hover:shadow-gold-400/5"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-stone-400">
                    <span className="rounded-full bg-gold-400/10 px-2.5 py-0.5 text-gold-300 uppercase tracking-wider">{post.category}</span>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                    <span>{getReadingTime(post.body)} min read</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-white font-serif group-hover:text-gold-300 transition">{post.title}</h2>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed line-clamp-3">{post.description}</p>
                  <p className="mt-4 text-sm font-semibold text-gold-400">Read more &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
