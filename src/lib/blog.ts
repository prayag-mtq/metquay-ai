import matter from "gray-matter";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";
import type { Post } from "./post";

const BLOG_DIR = join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 220;

const toIso = (value: unknown) => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value));

function readPost(file: string): Post {
  const { data, content } = matter(readFileSync(join(BLOG_DIR, file), "utf8"));
  return {
    slug: file.replace(/\.mdx$/, ""),
    title: data.title,
    description: data.description,
    date: toIso(data.date),
    updated: data.updated ? toIso(data.updated) : undefined,
    category: data.category,
    author: data.author,
    cover: data.cover,
    readingMinutes: Math.max(1, Math.round(content.split(/\s+/).length / WORDS_PER_MINUTE)),
    body: content,
  };
}

export const getAllPosts = cache((): Post[] =>
  readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date)),
);

export const getPost = (slug: string) => getAllPosts().find((post) => post.slug === slug) ?? null;

export const getCategories = () => [...new Set(getAllPosts().map((post) => post.category))].sort();

export function getRelated(slug: string, count = 3) {
  const post = getPost(slug);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const same = others.filter((p) => p.category === post?.category);
  const rest = others.filter((p) => p.category !== post?.category);
  return [...same, ...rest].slice(0, count);
}
