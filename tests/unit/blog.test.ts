import { describe, expect, it } from "vitest";

import { getAllPosts, getCategories, getPost, getRelated } from "@/lib/blog";

describe("blog", () => {
  const posts = getAllPosts();

  it("loads every migrated post", () => {
    expect(posts).toHaveLength(97);
  });

  it("sorts newest first", () => {
    const dates = posts.map((p) => p.date);
    expect(dates).toEqual([...dates].sort().reverse());
  });

  it("finds a post by slug and returns null for unknown slugs", () => {
    expect(getPost(posts[0].slug)?.title).toBe(posts[0].title);
    expect(getPost("nope")).toBeNull();
  });

  it("returns related posts excluding the current one, same category first", () => {
    const post = posts[5];
    const related = getRelated(post.slug);
    expect(related).toHaveLength(3);
    expect(related.every((p) => p.slug !== post.slug)).toBe(true);
    const sameCategory = posts.filter((p) => p.category === post.category && p.slug !== post.slug).length;
    expect(related.slice(0, Math.min(3, sameCategory)).every((p) => p.category === post.category)).toBe(true);
  });

  it("computes reading time and categories", () => {
    expect(posts.every((p) => p.readingMinutes >= 1)).toBe(true);
    expect(getCategories().length).toBeGreaterThan(1);
  });
});
