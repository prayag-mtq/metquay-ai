import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/cn";
import type { PostSummary } from "@/lib/post";

type PostNavProps = { newer: PostSummary | null; older: PostSummary | null };

export function PostNav({ newer, older }: PostNavProps) {
  const links = [
    { post: older, label: "Previous post", next: false },
    { post: newer, label: "Next post", next: true },
  ];

  return (
    <nav aria-label="More posts" className="grid gap-4 sm:grid-cols-2">
      {links.map(({ post, label, next }) =>
        post ? (
          <Link
            key={label}
            href={`/blog/${post.slug}`}
            className={cn(
              "group rounded-2xl border border-border p-5 transition-colors hover:border-border-strong",
              next && "text-right sm:col-start-2",
            )}
          >
            <span className={cn("flex items-center gap-1.5 text-small text-subtle", next && "justify-end")}>
              {!next && <ArrowLeft aria-hidden="true" className="size-4" />}
              {label}
              {next && <ArrowRight aria-hidden="true" className="size-4" />}
            </span>
            <span className="mt-2 line-clamp-2 block font-semibold group-hover:text-lime">{post.title}</span>
          </Link>
        ) : null,
      )}
    </nav>
  );
}
