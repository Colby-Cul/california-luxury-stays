import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getPostBySlug, getLatestPosts } from "@/../content/blog/posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getLatestPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
    mainEntityOfPage: `https://californialuxurystays.com/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <Header />
      <div className="pt-20">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <Link href="/blog" className="text-sm text-gold-400 hover:text-gold-300">&larr; All Posts</Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-stone-500">
            <span className="rounded-full bg-gold-400/10 px-2.5 py-0.5 text-gold-300 uppercase tracking-wider">{post.category}</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>By {post.author}</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold text-white font-serif sm:text-4xl leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-stone-300 leading-8">{post.description}</p>

          <div className="mt-10 border-t border-gold-400/10 pt-10">
            <div
              className="prose prose-invert prose-gold max-w-none
                prose-headings:font-serif prose-headings:text-white prose-headings:font-semibold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-stone-300 prose-p:leading-7
                prose-li:text-stone-300
                prose-a:text-gold-400 prose-a:no-underline hover:prose-a:text-gold-300
                prose-strong:text-white
                prose-ul:space-y-1"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1 text-xs text-gold-200">
                {tag}
              </span>
            ))}
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12 border-t border-gold-400/10 pt-10">
              <h2 className="text-lg font-semibold text-white font-serif mb-6">More from the Journal</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-xl border border-gold-400/10 bg-charcoal-600 p-4 transition hover:border-gold-400/25"
                  >
                    <span className="text-xs text-gold-400/70">{r.category}</span>
                    <h3 className="mt-1 text-sm font-semibold text-white">{r.title}</h3>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-2">{r.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
      <Footer />
    </div>
  );
}
