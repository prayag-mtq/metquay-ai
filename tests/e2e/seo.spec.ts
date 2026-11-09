import { expect, test } from "@playwright/test";

import { sitemapPaths } from "../support/routes";

test("discovery files are served", async ({ request }) => {
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
    "/manifest.webmanifest",
    "/.well-known/security.txt",
    "/glossary.md",
    "/calibration-management-software.md",
    "/blog/monte-carlo-method.md",
  ]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }
  expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap: https://www.metquay.com/sitemap.xml");
});

test("every sitemap page has one h1, unique title and description, canonical and valid JSON-LD", async ({
  request,
}) => {
  const paths = await sitemapPaths(request);
  expect(paths.length).toBeGreaterThanOrEqual(117);
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const path of paths) {
    const html = (await (await request.get(path)).text()).replace(
      /<script(?! type="application\/ld\+json")[\s\S]*?<\/script>/g,
      "",
    );
    expect(html.match(/<h1[\s>]/g), path).toHaveLength(1);

    const title = /<title>([^<]+)<\/title>/.exec(html)?.[1];
    const description = /<meta name="description" content="([^"]+)"/.exec(html)?.[1];
    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
    expect(title, path).toBeTruthy();
    expect(description, path).toBeTruthy();
    expect(canonical, path).toBe(`https://www.metquay.com${path === "/" ? "" : path}`);
    expect(titles.has(title!), `duplicate title ${title}`).toBe(false);
    expect(descriptions.has(description!), `duplicate description on ${path}`).toBe(false);
    titles.add(title!);
    descriptions.add(description!);

    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      expect(() => JSON.parse(block[1]), path).not.toThrow();
    }
  }
});
