import { load } from "cheerio";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const DEDUPE_WINDOW = 12;
const PAGES = ["index", "solutions", "ecosystem", "resources", "company", "contact", "security", "privacy", "terms"];

export function extractText(html: string): string[] {
  const $ = load(html);
  $("script, style, noscript, svg, template").remove();

  const blocks: string[] = [];
  $("h1, h2, h3, h4, h5, h6, p").each((_, el) => {
    const text = $(el).text().replace(/\s+/g, " ").trim();
    if (!text) return;
    const level = /^h(\d)$/.exec(el.tagName)?.[1];
    const block = level ? `${"#".repeat(Math.min(Number(level), 3))} ${text}` : text;
    if (!blocks.slice(-DEDUPE_WINDOW).includes(block)) blocks.push(block);
  });
  return blocks;
}

function main() {
  const src = "metquay-website-assets/metquay-public-assets/pages";
  const dest = "docs/source-text";
  mkdirSync(dest, { recursive: true });
  for (const page of PAGES) {
    const blocks = extractText(readFileSync(join(src, `${page}.html`), "utf8"));
    writeFileSync(join(dest, `${page}.md`), `${blocks.join("\n\n")}\n`);
    console.log(`${page}: ${blocks.length} blocks`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) main();
