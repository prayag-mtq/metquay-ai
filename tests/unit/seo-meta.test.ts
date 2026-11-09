import { describe, expect, it } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { landingPages } from "@/content/landing";
import { getAllPosts } from "@/lib/blog";
import { toMarkdown } from "@/lib/markdown";
import { jsonLd, metaDescription, metaTitle, pageMetadata } from "@/lib/seo";

import { buildLlmsTxt } from "../../scripts/gen-llms";

describe("metaTitle", () => {
  it("adds the brand only when the result stays within 60 characters", () => {
    expect(metaTitle("Security & Compliance")).toBe("Security & Compliance | metquay.ai");
    const long = "Calibration Management Software: Features, Compliance & FAQ";
    expect(metaTitle(long)).toBe(long);
  });
});

describe("metaDescription", () => {
  it("keeps short text as is and collapses whitespace", () => {
    expect(metaDescription("One  sentence.\n")).toBe("One sentence.");
  });

  it("cuts long text at a sentence boundary when one fits", () => {
    const first = "A".repeat(100) + ".";
    expect(metaDescription(`${first} ${"B".repeat(100)}.`)).toBe(first);
  });

  it("cuts at a word boundary with an ellipsis otherwise", () => {
    const result = metaDescription("word ".repeat(60));
    expect(result.length).toBeLessThanOrEqual(160);
    expect(result.endsWith("word…")).toBe(true);
  });

  it("keeps every blog post within search snippet limits", () => {
    for (const post of getAllPosts()) {
      const meta = pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
      expect((meta.description ?? "").length).toBeLessThanOrEqual(160);
    }
  });
});

describe("structured data graph", () => {
  it("links pages and posts to the website and organization ids", () => {
    expect(jsonLd.website()["@id"]).toBe("https://www.metquay.com/#website");
    const post = jsonLd.blogPosting(getAllPosts()[0]);
    expect(post).toMatchObject({ isPartOf: { "@id": "https://www.metquay.com/blog#blog" }, inLanguage: "en" });
  });

  it("describes the blog with its latest posts", () => {
    const blog = jsonLd.blog(getAllPosts());
    expect(blog["@type"]).toBe("Blog");
    expect(blog.blogPost).toHaveLength(20);
  });
});

describe("markdown alternates", () => {
  it("turns MDX components into plain Markdown", () => {
    const md = toMarkdown('<Figure src="/a.webp" alt="Fig 1" />\n\n<YouTube id="abc" />');
    expect(md).toContain("![Fig 1](https://www.metquay.com/a.webp)");
    expect(md).toContain("[Watch on YouTube](https://www.youtube.com/watch?v=abc)");
    expect(md).not.toMatch(/<[A-Z]/);
  });

  it("advertises markdown copies on posts and guides", () => {
    const post = getAllPosts()[0];
    const meta = pageMetadata({ title: "t", description: "d", path: `/blog/${post.slug}`, markdown: true });
    expect(meta.alternates?.types).toMatchObject({ "text/markdown": `https://www.metquay.com/blog/${post.slug}.md` });
  });
});

describe("crawler access", () => {
  it("names current AI search and assistant crawlers", () => {
    const rules = [robots().rules].flat();
    const agents = rules.flatMap((r) => r.userAgent);
    for (const bot of ["Claude-SearchBot", "Perplexity-User", "Bingbot", "Applebot", "DuckAssistBot"]) {
      expect(agents).toContain(bot);
    }
  });

  it("lists blog cover images in the sitemap", () => {
    const entry = sitemap().find((e) => e.url.includes("/blog/") && !e.url.includes("/category/"));
    expect(entry?.images?.[0]).toMatch(/^https:\/\/www\.metquay\.com\/og\/blog\/.+\.png$/);
  });
});

describe("llms.txt", () => {
  it("puts the blog archive under the Optional section and points to markdown copies", () => {
    const txt = buildLlmsTxt();
    expect(txt).toContain("## Optional");
    expect(txt.indexOf("## Optional")).toBeLessThan(txt.indexOf("/blog/"));
    expect(txt).toContain(".md");
  });

  it("covers every guide", () => {
    const txt = buildLlmsTxt();
    for (const page of landingPages) expect(txt).toContain(`/${page.slug}`);
  });
});
