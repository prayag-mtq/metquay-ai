import { CardLink } from "@/components/ui/CardLink";
import { formatDate } from "@/lib/date";
import type { PostSummary } from "@/lib/post";

import { PostCover } from "./PostCover";

export function PostCard({ post, headingLevel = "h3" }: { post: PostSummary; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <CardLink href={`/blog/${post.slug}`} className="flex h-full flex-col overflow-hidden">
      <PostCover category={post.category} />
      <div className="flex flex-1 flex-col p-6">
        <Heading className="line-clamp-2 text-h4 group-hover:text-lime">{post.title}</Heading>
        <p className="mt-2 line-clamp-2 text-small text-subtle">{post.description}</p>
        <p className="mt-auto pt-5 text-xs text-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        </p>
      </div>
    </CardLink>
  );
}
