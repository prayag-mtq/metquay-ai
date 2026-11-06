import { load, type CheerioAPI } from "cheerio";
import matter from "gray-matter";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

export type SearchEntry = { title: string; description: string; p: string[] };
export type MigratedImage = { src: string; dest: string };

const CRAWL = "metquay-website-assets/metquay-public-assets";
const SITE_HOSTS = /^https?:\/\/(www\.)?metquay\.(com|ai)/;

const CATEGORY_FIXES: Record<string, string> = { "Efficient Approches": "Efficient Approaches" };

const toIsoDate = (text: string) => new Date(`${text} 12:00 UTC`).toISOString().slice(0, 10);
const cleanTitle = (title: string) => title.replace(/\s*\|\s*metquay\.ai\s*$/i, "").trim();

const LEGACY_PATHS: Record<string, string> = { "/faq": "/contact#faq", "/metconnect": "/ecosystem#fluke" };

function normalizeHref(href: string): string | null {
  const local = href.replace(SITE_HOSTS, "").replace(/^\.\//, "/");
  if (local === href && !href.startsWith("/")) return href.replace("consluting@", "consulting@");
  const path =
    local
      .replace(/^\/post\//, "/blog/")
      .replace(/#post$/, "")
      .replace(/(.)\/$/, "$1") || "/";
  if (path.startsWith("/blog/hashtags/")) return null;
  return LEGACY_PATHS[path] ?? path;
}

function replaceModules($: CheerioAPI, warnings: string[]) {
  $(".framer-text-module").each((_, module) => {
    const $module = $(module);
    const youtube = $module.find("iframe[src*='youtube.com/embed/']").attr("src");
    const code = $module.find("pre").first().text();
    if (youtube) {
      const id = /embed\/([\w-]+)/.exec(youtube)?.[1];
      $module.replaceWith(`<youtube-embed data-id="${id}">video</youtube-embed>`);
    } else if (code.trim()) {
      $module.replaceWith($("<pre><code></code></pre>").find("code").text(code).end());
    } else {
      warnings.push("dropped embedded module");
      $module.remove();
    }
  });
}

function prepareTables($: CheerioAPI) {
  $("table").each((_, table) => {
    const $table = $(table);
    $table.find("td, th").each((__, cell) => {
      const $cell = $(cell);
      const inner =
        $cell
          .find("p")
          .map((___, p) => $(p).html())
          .get()
          .join(" ") ||
        $cell.html() ||
        "";
      $cell.html(
        inner
          .replace(/<br[^>]*>/g, " ")
          .replace(/[\s​]+/g, " ")
          .trim(),
      );
    });
    if (!$table.find("th").length) {
      $table
        .find("tr")
        .first()
        .find("td")
        .each((__, td) => {
          td.tagName = "th";
        });
    }
  });
}

function createTurndown() {
  const service = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });
  service.use(gfm);
  const escape = service.escape.bind(service);
  service.escape = (text: string) => escape(text).replace(/[{}<]/g, (char) => `\\${char}`);
  service.addRule("figure", {
    filter: (node) => node.nodeName === "FIGURE-IMAGE",
    replacement: (_, node) => {
      const el = node as HTMLElement;
      const alt = (el.getAttribute("data-alt") ?? "").replace(/"/g, "&quot;");
      return `\n\n<Figure src="${el.getAttribute("data-src")}" alt="${alt}" />\n\n`;
    },
  });
  service.addRule("youtube", {
    filter: (node) => node.nodeName === "YOUTUBE-EMBED",
    replacement: (_, node) => `\n\n<YouTube id="${(node as HTMLElement).getAttribute("data-id")}" />\n\n`,
  });
  return service;
}

export function migrateBlog(
  html: string,
  entry: SearchEntry,
  slug: string,
  resolveAsset: (url: string) => string | null,
) {
  const $ = load(html);
  const warnings: string[] = [];
  const title = cleanTitle(entry.title);
  const body = $('[data-framer-name="Content"][data-framer-component-type="RichTextContainer"]').first();
  if (!body.length) throw new Error(`No body for ${slug}`);

  replaceModules($, warnings);
  body.find("script, style, svg, button, link, noscript").remove();
  body.find("h1").each((_, el) => {
    el.tagName = "h2";
  });
  const first = body.children().first();
  if (/^h[1-6]$/i.test(first.prop("tagName") ?? "") && first.text().trim() === title) first.remove();
  prepareTables($);
  body.find("a[href]").each((_, a) => {
    const href = normalizeHref($(a).attr("href")!);
    if (href) $(a).attr("href", href);
    else $(a).replaceWith($(a).text());
  });

  const images: MigratedImage[] = [];
  body.find("img").each((_, img) => {
    const url = ($(img).attr("src") ?? "").split("?")[0];
    const src = resolveAsset(url);
    if (!src) {
      warnings.push(`unresolved image ${url}`);
      $(img).remove();
      return;
    }
    const dest = `/blog/${slug}/${images.length + 1}.webp`;
    images.push({ src, dest });
    $(img).replaceWith(
      $("<figure-image>image</figure-image>").attr({ "data-src": dest, "data-alt": $(img).attr("alt") ?? "" }),
    );
  });

  const markdown = createTurndown()
    .turndown(body.html() ?? "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const frontMatter = {
    title,
    description: entry.description || entry.p[2],
    date: toIsoDate(entry.p[1]),
    category: CATEGORY_FIXES[entry.p[0]] ?? entry.p[0],
  };
  return { mdx: matter.stringify(`${markdown}\n`, frontMatter), images, warnings };
}

async function main() {
  const index: Record<string, SearchEntry> = JSON.parse(
    readFileSync(join(CRAWL, "other/searchIndex-L23Mj2gdC6SS__4319ce1aa816.json"), "utf8"),
  );
  const assets = new Map(
    readFileSync(join(CRAWL, "assets.csv"), "utf8")
      .split("\n")
      .slice(1)
      .map((line) => line.split(","))
      .filter((cols) => cols[1] === "downloaded")
      .map((cols) => [cols[0], join(CRAWL, cols[2])]),
  );
  const slugs = Object.keys(index)
    .filter((path) => path.startsWith("/blog/"))
    .map((path) => path.slice(6));

  for (const slug of slugs) {
    const html = readFileSync(join(CRAWL, `pages/blog__${slug}.html`), "utf8");
    const { mdx, images, warnings } = migrateBlog(html, index[`/blog/${slug}`], slug, (url) => assets.get(url) ?? null);
    writeFileSync(join("content/blog", `${slug}.mdx`), mdx);
    for (const image of images) {
      const out = join("public", image.dest);
      mkdirSync(dirname(out), { recursive: true });
      await sharp(image.src).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    }
    if (warnings.length) console.log(`${slug}: ${warnings.join("; ")}`);
  }
  console.log(`migrated ${slugs.length} posts`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  mkdirSync("content/blog", { recursive: true });
  await main();
}
