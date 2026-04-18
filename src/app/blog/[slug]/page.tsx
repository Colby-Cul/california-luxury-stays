import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getPostBySlug, getReadingTime } from "@/../content/blog/posts";

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
      ...(post.image ? { images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    alternates: {
      canonical: `https://californialuxurystays.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const readingTime = getReadingTime(post.body);

  // Prefer same-category posts for related
  const sameCategoryPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const related = [...sameCategoryPosts, ...otherPosts].slice(0, 2);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.image ? { image: post.image } : {}),
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "California Luxury Stays", url: "https://californialuxurystays.com" },
    mainEntityOfPage: `https://californialuxurystays.com/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://californialuxurystays.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://californialuxurystays.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://californialuxurystays.com/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-charcoal-800 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <div className="pt-20">
        <article className="mx-auto max-w-[680px] px-6 py-16 lg:px-8 pb-28">
          <nav aria-label="Breadcrumb" className="text-sm text-stone-400">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-gold-300 transition">Home</Link></li>
              <li><span className="text-stone-600">/</span></li>
              <li><Link href="/blog" className="hover:text-gold-300 transition">Blog</Link></li>
              <li><span className="text-stone-600">/</span></li>
              <li className="text-stone-300 truncate max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
          </nav>

          <div className="mt-6 flex items-center gap-3 text-xs text-stone-400">
            <span className="rounded-full bg-gold-400/10 px-2.5 py-0.5 text-gold-300 uppercase tracking-wider">{post.category}</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>By {post.author}</span>
            <span>{readingTime} min read</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold text-white font-serif sm:text-4xl leading-[1.15] tracking-tight">{post.title}</h1>
          <p className="mt-5 text-xl text-stone-300 leading-relaxed font-light">{post.description}</p>

          {post.image && (
            <div className="mt-8 overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          )}

          <div className="mt-12 border-t border-gold-400/10 pt-12">
            <div
              className="blog-content max-w-none text-stone-200"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`} className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1 text-xs text-gold-200 hover:border-gold-400/40 hover:text-gold-300 transition">
                {tag}
              </Link>
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
                    className="rounded-xl border border-gold-400/10 bg-charcoal-600 overflow-hidden transition hover:border-gold-400/25"
                  >
                    {r.image && (
                      <div className="aspect-video overflow-hidden">
                        <img src={r.image} alt={r.title} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="text-xs text-gold-400/70">{r.category}</span>
                      <h3 className="mt-1 text-sm font-semibold text-white">{r.title}</h3>
                      <p className="mt-1 text-xs text-stone-400 line-clamp-2">{r.description}</p>
                    </div>
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
