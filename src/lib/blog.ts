import { readdirSync } from "node:fs";
import { join } from "node:path";

import { readMdx } from "./frontmatter";
import type { Post } from "./post";
import { slugify } from "./slugify";

const BLOG_DIR = join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 220;

function readPost(file: string): Post {
  const mdx = readMdx(join(BLOG_DIR, file));
  return {
    slug: file.replace(/\.mdx$/, ""),
    title: mdx.string("title"),
    description: mdx.string("description"),
    date: mdx.date("date"),
    updated: mdx.optionalDate("updated"),
    category: mdx.string("category"),
    author: mdx.optionalString("author"),
    cover: mdx.optionalString("cover"),
    readingMinutes: Math.max(1, Math.round(mdx.content.split(/\s+/).length / WORDS_PER_MINUTE)),
    body: mdx.content,
  };
}

let posts: Post[] | undefined;

export const getAllPosts = (): Post[] =>
  (posts ??= readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date)));

export const getPost = (slug: string) => getAllPosts().find((post) => post.slug === slug) ?? null;

export const getCategories = () => [...new Set(getAllPosts().map((post) => post.category))].sort();

export function getRelated(slug: string, count = 3) {
  const post = getPost(slug);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const same = others.filter((p) => p.category === post?.category);
  const rest = others.filter((p) => p.category !== post?.category);
  return [...same, ...rest].slice(0, count);
}

export const categoryFromSlug = (slug: string) => getCategories().find((c) => slugify(c) === slug) ?? null;
