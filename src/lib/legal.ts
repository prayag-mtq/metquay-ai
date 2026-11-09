import { join } from "node:path";

import { readMdx } from "./frontmatter";

export type LegalSlug = "security" | "privacy" | "terms";

export function getLegalPage(slug: LegalSlug) {
  const mdx = readMdx(join(process.cwd(), "content/legal", `${slug}.mdx`));
  return { title: mdx.string("title"), updated: mdx.optionalString("updated"), body: mdx.content };
}
