import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { getAllPosts } from "@/lib/blog";
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
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated ?? post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
