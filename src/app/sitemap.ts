import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/config/site";
import { landingPages } from "@/content/landing";
import { getAllPosts, getCategories } from "@/lib/blog";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/solutions",
  "/ecosystem",
  "/resources",
  "/company",
  "/contact",
  "/blog",
  "/glossary",
  "/security",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.date;
  return [
    ...ROUTES.map((path) => ({
      url: absoluteUrl(path),
      lastModified: path === "/blog" || path === "/glossary" ? latest : site.contentUpdated,
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/glossary" ? 0.7 : 0.8,
    })),
    ...landingPages.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...getCategories().map((category) => ({
      url: absoluteUrl(`/blog/category/${slugify(category)}`),
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
