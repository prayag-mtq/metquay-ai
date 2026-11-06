import { expect, test } from "@playwright/test";
import { sitemapPaths } from "./support/routes";

const ids = (html: string) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

test("every internal link and anchor resolves", async ({ request }) => {
  test.setTimeout(180_000);
  const pages = new Map<string, string>();
  const fetchPage = async (path: string) => {
    if (!pages.has(path)) {
      const res = await request.get(path);
      pages.set(path, res.ok() ? await res.text() : "");
      expect(res.ok(), `${path} returned ${res.status()}`).toBe(true);
    }
    return pages.get(path)!;
  };

  const broken: string[] = [];
  let checked = 0;
  for (const from of await sitemapPaths(request)) {
    const html = (await fetchPage(from)).replace(/<script[\s\S]*?<\/script>/g, "");
    const hrefs = new Set([...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&")));
    for (const href of hrefs) {
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      if (href.startsWith("/_next/") || /\.(png|ico|css|js|woff2|webp|txt|xml)(\?|$)/.test(href)) continue;
      const [pathAndQuery, hash] = href.split("#");
      const path = (pathAndQuery || from).split("?")[0];
      checked++;
      const target = await fetchPage(path).catch(() => "");
      if (!target) broken.push(`${from} → ${href}`);
      else if (hash && !ids(target).has(hash)) broken.push(`${from} → ${href} (missing #${hash})`);
    }
  }
  expect(checked).toBeGreaterThan(2000);
  expect(pages.size).toBeGreaterThanOrEqual(107);
  expect(broken).toEqual([]);
});
