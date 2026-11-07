import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { landingPages } from "@/content/landing";
import { getAllPosts, getCategories } from "@/lib/blog";
import { categorySlug } from "@/lib/categories";
import { staticRoutes } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.date;
  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: path === "/blog" ? latest : new Date().toISOString().slice(0, 10),
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    })),
    ...landingPages.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/glossary"), lastModified: latest, changeFrequency: "monthly" as const, priority: 0.7 },
    ...getCategories().map((category) => ({
      url: absoluteUrl(`/blog/category/${categorySlug(category)}`),
      lastModified: posts.find((p) => p.category === category)?.date,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated ?? post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
