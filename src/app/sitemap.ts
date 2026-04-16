import type { MetadataRoute } from "next";
import { SITE, SERVICES, INDUSTRIES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE.url}/services`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/industries`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/team`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/blog`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE.url}/careers`,       lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE.url}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE.url}/privacy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE.url}/terms`,         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
