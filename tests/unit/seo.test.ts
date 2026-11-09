import { describe, expect, it } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { site } from "@/config/site";
import { getAllPosts } from "@/lib/blog";
import { jsonLd, pageMetadata } from "@/lib/seo";

import { buildLlmsFull, buildLlmsTxt } from "../../scripts/gen-llms";

describe("pageMetadata", () => {
  it("builds absolute canonical URLs without trailing slashes", () => {
    const meta = pageMetadata({ title: "Company", description: "d", path: "/company" });
    expect(meta.alternates?.canonical).toBe("https://www.metquay.com/company");
    expect(pageMetadata({ title: "Home", description: "d", path: "/" }).alternates?.canonical).toBe(
      "https://www.metquay.com/",
    );
  });

  it("fills Open Graph and Twitter cards", () => {
    const meta = pageMetadata({ title: "Company", description: "About us", path: "/company" });
    expect(meta.openGraph).toMatchObject({ url: "https://www.metquay.com/company", description: "About us" });
    expect(meta.twitter).toMatchObject({ card: "summary_large_image" });
  });
});

describe("jsonLd", () => {
  it("describes the product as business software", () => {
    const app = jsonLd.softwareApplication();
    expect(app["@type"]).toBe("SoftwareApplication");
    expect(app.applicationCategory).toBe("BusinessApplication");
    expect(app.name).toBe("metquay.ai");
  });

  it("builds breadcrumbs with absolute item URLs", () => {
    const crumbs = jsonLd.breadcrumbs([
      { name: "Blog", path: "/blog" },
      { name: "Post", path: "/blog/x" },
    ]);
    expect(crumbs.itemListElement[1]).toMatchObject({ position: 2, item: "https://www.metquay.com/blog/x" });
  });

  it("builds a BlogPosting from a post", () => {
    const post = getAllPosts()[0];
    const article = jsonLd.blogPosting(post);
    expect(article).toMatchObject({ "@type": "BlogPosting", headline: post.title, datePublished: post.date });
  });
});

describe("sitemap", () => {
  it("lists every static route and post with lastModified", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(10 + 97);
    expect(entries.every((e) => e.url.startsWith("https://www.metquay.com/") && e.lastModified)).toBe(true);
    expect(entries.some((e) => e.url.endsWith("/"))).toBe(true);
    expect(entries.filter((e) => e.url.endsWith("/") && e.url !== "https://www.metquay.com/")).toHaveLength(0);
  });
});

describe("sitemap freshness", () => {
  it("dates static pages by content changes, not by build time", () => {
    const home = sitemap().find((e) => e.url === "https://www.metquay.com/");
    expect(home?.lastModified).toBe(site.contentUpdated);
  });
});

describe("robots", () => {
  it("allows everyone, names AI crawlers explicitly and points at the sitemap", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const agents = rules.flatMap((r) => r.userAgent);
    for (const bot of ["*", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot"]) {
      expect(agents).toContain(bot);
    }
    expect(rules.every((r) => r.allow === "/")).toBe(true);
    expect(result.sitemap).toBe("https://www.metquay.com/sitemap.xml");
  });
});

describe("llms.txt", () => {
  const txt = buildLlmsTxt();

  it("follows the llms.txt structure", () => {
    expect(txt.startsWith("# metquay.ai\n\n> ")).toBe(true);
    for (const section of ["## Product", "## Solutions", "## Integrations", "## Compliance", "## Company", "## Blog"]) {
      expect(txt).toContain(section);
    }
  });

  it("links only absolute canonical URLs and every post", () => {
    const links = [...txt.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
    expect(links.every((l) => l.startsWith("https://www.metquay.com/"))).toBe(true);
    expect(links.filter((l) => l.includes("/blog/"))).toHaveLength(97);
  });

  it("has a full-text companion with the marketing pages", () => {
    const full = buildLlmsFull();
    expect(full).toContain("Calibration Management, built for every detail and any scale");
    expect(full).toContain("Follow an instrument from calibration due alert to delivery");
  });
});
