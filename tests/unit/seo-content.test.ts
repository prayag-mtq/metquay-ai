import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { glossary } from "@/content/glossary";
import { landingPages } from "@/content/landing";
import { categoryFromSlug, getAllPosts, getCategories } from "@/lib/blog";
import { buildRssFeed } from "@/lib/rss";
import { slugify } from "@/lib/slugify";

const words = (text: string) => text.trim().split(/\s+/).length;

describe("blog categories", () => {
  it("round-trips category names through URL slugs", () => {
    expect(slugify("AI in calibration")).toBe("ai-in-calibration");
    expect(slugify("ERP Integrations")).toBe("erp-integrations");
    for (const category of getCategories()) expect(categoryFromSlug(slugify(category))).toBe(category);
    expect(categoryFromSlug("nope")).toBeNull();
  });
});

describe("rss feed", () => {
  const xml = buildRssFeed();

  it("lists every post with absolute links and RFC 822 dates", () => {
    expect(xml.match(/<item>/g)).toHaveLength(getAllPosts().length);
    expect(xml).toContain("<link>https://www.metquay.com/blog</link>");
    expect(xml).toMatch(/<pubDate>\w{3}, \d{2} \w{3} \d{4} 12:00:00 GMT<\/pubDate>/);
  });

  it("escapes XML special characters", () => {
    expect(xml).not.toMatch(/<title>[^<]*&(?!amp;|lt;|gt;|quot;|apos;)/);
  });
});

describe("landing pages", () => {
  it("covers the target keywords with one page each", () => {
    const slugs = landingPages.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(landingPages.map((p) => p.keyword.toLowerCase())).size).toBe(slugs.length);
    for (const slug of ["calibration-management-software", "calibration-software", "calibration-lab-software"]) {
      expect(slugs).toContain(slug);
    }
  });

  it.each(landingPages.map((p) => [p.slug, p]))("%s is built for answer engines", (_, page) => {
    expect(page.title.toLowerCase()).toContain(page.keyword.toLowerCase());
    expect(page.metaDescription.length).toBeLessThanOrEqual(160);
    expect(words(page.summary)).toBeGreaterThanOrEqual(30);
    expect(words(page.summary)).toBeLessThanOrEqual(70);
    expect(page.faq.length).toBeGreaterThanOrEqual(5);
    for (const item of page.faq) expect(words(item.a)).toBeLessThanOrEqual(70);
    expect(page.sections.length).toBeGreaterThanOrEqual(3);
  });
});

describe("glossary", () => {
  it("defines terms alphabetically with unique anchors", () => {
    const terms = glossary.map((t) => t.term);
    expect(terms).toEqual([...terms].sort((a, b) => a.localeCompare(b)));
    expect(new Set(glossary.map((t) => t.id)).size).toBe(glossary.length);
    expect(glossary.length).toBeGreaterThanOrEqual(15);
    for (const t of glossary) expect(words(t.definition)).toBeGreaterThanOrEqual(15);
  });

  it("only links to posts that exist", () => {
    const slugs = new Set(getAllPosts().map((p) => p.slug));
    for (const t of glossary) if (t.post) expect(slugs.has(t.post)).toBe(true);
  });
});

describe("sitemap coverage", () => {
  it("includes landing pages, glossary and category hubs", () => {
    const urls = sitemap().map((e) => e.url);
    for (const page of landingPages) expect(urls).toContain(`https://www.metquay.com/${page.slug}`);
    expect(urls).toContain("https://www.metquay.com/glossary");
    for (const c of getCategories()) expect(urls).toContain(`https://www.metquay.com/blog/category/${slugify(c)}`);
  });
});
