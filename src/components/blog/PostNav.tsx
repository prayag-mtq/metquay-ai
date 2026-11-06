import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PostSummary } from "@/lib/post";

type PostNavProps = { newer: PostSummary | null; older: PostSummary | null };

export function PostNav({ newer, older }: PostNavProps) {
  return (
    <nav aria-label="More posts" className="grid gap-4 sm:grid-cols-2">
      {older ? (
        <Link
          href={`/blog/${older.slug}`}
          className="group rounded-2xl border border-border p-5 transition-colors hover:border-border-strong"
        >
          <span className="flex items-center gap-1.5 text-small text-subtle">
            <ArrowLeft aria-hidden="true" className="size-4" /> Previous post
          </span>
          <span className="mt-2 line-clamp-2 block font-semibold group-hover:text-lime">{older.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {newer && (
        <Link
          href={`/blog/${newer.slug}`}
          className="group rounded-2xl border border-border p-5 text-right transition-colors hover:border-border-strong"
        >
          <span className="flex items-center justify-end gap-1.5 text-small text-subtle">
            Next post <ArrowRight aria-hidden="true" className="size-4" />
          </span>
          <span className="mt-2 line-clamp-2 block font-semibold group-hover:text-lime">{newer.title}</span>
        </Link>
      )}
    </nav>
  );
}
