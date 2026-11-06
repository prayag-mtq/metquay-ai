import type { APIRequestContext } from "@playwright/test";

export async function sitemapPaths(request: APIRequestContext) {
  const xml = await (await request.get("/sitemap.xml")).text();
  return [...xml.matchAll(/<loc>https:\/\/www\.metquay\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
}
