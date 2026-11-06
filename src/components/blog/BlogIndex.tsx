"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useHasMounted } from "@/lib/use-has-mounted";
import type { PostSummary } from "@/lib/post";
import { PostCard } from "./PostCard";

const PAGE_SIZE = 12;
const ALL = "All";

const categoryFromUrl = () =>
  typeof window === "undefined" ? ALL : (new URLSearchParams(window.location.search).get("category") ?? ALL);

export function BlogIndex({ posts, categories }: { posts: PostSummary[]; categories: string[] }) {
  const mounted = useHasMounted();
  const [category, setCategory] = useState(categoryFromUrl);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const active = mounted ? category : ALL;
  const filtered = active === ALL ? posts : posts.filter((post) => post.category === active);
  const visible = mounted ? limit : Infinity;

  const choose = (next: string) => {
    setCategory(next);
    setLimit(PAGE_SIZE);
    const url = new URL(window.location.href);
    if (next === ALL) url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {[ALL, ...categories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={active === item}
            onClick={() => choose(item)}
            className={cn(
              "h-9 rounded-full border px-4 text-small font-semibold transition-colors",
              active === item
                ? "border-purple bg-purple-deep text-text"
                : "border-border-strong text-muted hover:border-text hover:text-text",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} posts
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, index) => (
          <li key={post.slug} hidden={index >= visible}>
            <PostCard post={post} headingLevel="h2" />
          </li>
        ))}
      </ul>
      {filtered.length > visible && (
        <div className="mt-12 text-center">
          <Button variant="secondary" onClick={() => setLimit((n) => n + PAGE_SIZE)}>
            Load more posts
          </Button>
        </div>
      )}
    </>
  );
}
