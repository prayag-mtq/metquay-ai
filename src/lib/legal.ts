import matter from "gray-matter";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export type LegalSlug = "security" | "privacy" | "terms";

export function getLegalPage(slug: LegalSlug) {
  const { data, content } = matter(readFileSync(join(process.cwd(), "content/legal", `${slug}.mdx`), "utf8"));
  return { title: data.title as string, updated: data.updated as string | undefined, body: content };
}
