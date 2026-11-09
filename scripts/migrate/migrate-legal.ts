import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { load } from "cheerio";
import matter from "gray-matter";

import { CRAWL } from "./crawl";
import { createTurndown, tightenLists } from "./migrate-blog";

const PAGES = { security: "Security", privacy: "Privacy Policy", terms: "Terms of Service" } as const;

export function migrateLegal(html: string, title: string) {
  const $ = load(html);
  $("script, style, svg, button, noscript").remove();
  $(".ssr-variant + .ssr-variant").remove();
  const content = $('[data-framer-name="Hero"] [data-framer-name="Content"]').first();
  const updated = /Last updated:?\s*([A-Za-z]+ \d{4})/.exec(content.text())?.[1];
  content
    .find("h1, h2, h3, h4, h5, h6, p")
    .filter((_, el) => /^Last updated/i.test($(el).text().trim()) || $(el).text().trim() === title)
    .remove();
  tightenLists($, content);
  content.find("h1").each((_, el) => {
    el.tagName = "h2";
  });
  const seen = new Set<string>();
  content.find('[data-framer-component-type="RichTextContainer"], table').each((_, el) => {
    const key = $(el).text().replace(/\s+/g, " ").trim();
    if (seen.has(key)) $(el).remove();
    else seen.add(key);
  });
  const markdown = createTurndown()
    .turndown(content.html() ?? "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return matter.stringify(`${markdown}\n`, { title, ...(updated && { updated }) });
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  mkdirSync("content/legal", { recursive: true });
  for (const [page, title] of Object.entries(PAGES)) {
    const html = readFileSync(join(CRAWL, `pages/${page}.html`), "utf8");
    writeFileSync(join("content/legal", `${page}.mdx`), migrateLegal(html, title));
    console.log(page);
  }
}
