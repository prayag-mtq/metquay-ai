import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = "out";
const TITLE_WARN = 70;
const DESCRIPTION = { min: 50, max: 160 };

const pages = readdirSync(OUT, { recursive: true })
  .filter((file) => file.endsWith(".html") && !file.startsWith("_") && !file.includes("404"))
  .map((file) => join(OUT, file));

const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"');
const count = (html, pattern) => (html.match(pattern) ?? []).length;

const errors = [];
const warnings = [];
const seen = { title: new Map(), description: new Map() };

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = relative(OUT, file);
  const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
  const description = decode(html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "");
  const fail = (message) => errors.push(`${page}: ${message}`);

  if (!title) fail("missing <title>");
  if (title.length > TITLE_WARN) warnings.push(`${page}: title is ${title.length} characters`);
  if (description.length < DESCRIPTION.min || description.length > DESCRIPTION.max)
    fail(`description is ${description.length} characters`);
  if (count(html, /<h1[\s>]/g) !== 1) fail(`has ${count(html, /<h1[\s>]/g)} <h1> elements`);
  if (!/<link rel="canonical"/.test(html)) fail("missing canonical link");
  if (!/<meta property="og:image"/.test(html)) fail("missing og:image");
  if (!/application\/ld\+json/.test(html)) fail("missing JSON-LD");
  if (!/href="[^"]*\/llms\.txt"/.test(html)) fail("missing llms.txt alternate link");
  if (count(html, /<img(?![^>]*\balt=)[^>]*>/g)) fail("image without alt attribute");

  for (const [key, value] of Object.entries({ title, description })) {
    const other = seen[key].get(value);
    if (other) fail(`duplicate ${key} with ${other}`);
    else seen[key].set(value, page);
  }
}

for (const warning of warnings) console.warn(`warn  ${warning}`);
for (const error of errors) console.error(`error ${error}`);
console.log(`${pages.length} pages, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
