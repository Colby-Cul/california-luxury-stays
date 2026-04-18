import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/../content/blog/posts";

const BASE_URL = "https://californialuxurystays.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date("2026-04-18"), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/properties/graeagle`, lastModified: new Date("2026-04-18"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/properties/northstar`, lastModified: new Date("2026-04-18"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date("2026-04-18"), changeFrequency: "weekly", priority: 0.7 },
    ...blogEntries,
    { url: `${BASE_URL}/about`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date("2026-04-10"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2026-04-04"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date("2026-04-04"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/things-to-do-in-graeagle`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/things-to-do-near-northstar`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/group-retreats-northstar`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
