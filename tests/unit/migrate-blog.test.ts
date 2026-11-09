import matter from "gray-matter";
import { describe, expect, it } from "vitest";

import { migrateBlog, type SearchEntry } from "../../scripts/migrate/migrate-blog";
import { hasCrawl, readCrawl } from "../support/crawl";

const index: Record<string, SearchEntry> = hasCrawl
  ? JSON.parse(readCrawl("other/searchIndex-L23Mj2gdC6SS__4319ce1aa816.json"))
  : {};
const resolveAsset = (url: string) => (url.includes("framerusercontent.com/images/") ? "images/x.png" : null);

const migrate = (slug: string) =>
  migrateBlog(readCrawl(`pages/blog__${slug}.html`), index[`/blog/${slug}`], slug, resolveAsset);

describe.skipIf(!hasCrawl)("migrateBlog", () => {
  const slug = "linear-interpolation-made-simple-with-metquay";
  const { mdx, images } = migrate(slug);
  const { data, content } = matter(mdx);

  it("builds front-matter from the search index", () => {
    expect(data.title).toBe("Linear Interpolation Made Simple With Metquay 2023 update");
    expect(data.category).toBe("Efficient Approaches");
    expect(data.date).toBe("2022-12-20");
    expect(data.description).toMatch(/\S/);
    expect(data.cover).toBeUndefined();
  });

  it("leaves no Framer markup behind", () => {
    expect(content).not.toMatch(/framer-|style=|<div|<span/);
  });

  it("starts with the article, not the title", () => {
    expect(content).not.toMatch(/^#+ Linear Interpolation Made Simple/m);
    expect(content.trimStart()).toMatch(/^\*?Linear interpolation can be best explained/);
  });

  it("turns HTML tables into GFM tables", () => {
    expect(content).toMatch(/^\|.*\|\n\|\s*-{3,}/m);
  });

  it("rewrites in-body images to local figures", () => {
    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      expect(image.dest).toMatch(new RegExp(String.raw`^/blog/${slug}/\d+\.webp$`));
      expect(content).toContain(`src="${image.dest}"`);
    }
    expect(content).not.toContain("framerusercontent.com");
  });

  it("converts code blocks and YouTube embeds", () => {
    const byoa = matter(migrate("introducing-byoa-bring-your-own-aiagent").mdx).content;
    expect(byoa).toMatch(/```[\s\S]+?```/);
    const metConnect = matter(migrate("met-connect-for-integrating-metquay-and-calibrators").mdx).content;
    expect(metConnect).toContain('<YouTube id="9TG1Ka4dZVs" />');
  });

  it("escapes MDX-sensitive characters in prose", () => {
    const sample = migrateBlog(
      '<div data-framer-name="Content" data-framer-component-type="RichTextContainer"><p>Use {x} when a < b</p></div>',
      { title: "T | metquay.ai", description: "d", p: ["Cat", "Jan 1, 2024", "Use {x} when a < b"] },
      "t",
      resolveAsset,
    );
    expect(matter(sample.mdx).content).toContain(String.raw`Use \{x\} when a \< b`);
  });
});

describe("migrateBlog links", () => {
  it("maps legacy internal links and unlinks hashtag pages", () => {
    const html =
      '<div data-framer-name="Content" data-framer-component-type="RichTextContainer"><p>' +
      '<a href="https://www.metquay.com/post/gage">a</a> <a href="./blog/hashtags/ISO17025">#ISO17025</a> ' +
      '<a href="/faq">b</a> <a href="/metconnect/">c</a> <a href="https://example.com/x">d</a></p></div>';
    const { mdx } = migrateBlog(html, { title: "T", description: "d", p: ["C", "Jan 1, 2024", "x"] }, "t", () => null);
    const content = matter(mdx).content;
    expect(content).toContain("[a](/blog/gage)");
    expect(content).toContain("#ISO17025");
    expect(content).not.toContain("hashtags");
    expect(content).toContain("[b](/contact#faq)");
    expect(content).toContain("[c](/ecosystem#fluke)");
    expect(content).toContain("[d](https://example.com/x)");
  });
});
