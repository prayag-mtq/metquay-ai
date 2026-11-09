import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { blogIntro } from "@/content/blog";
import { getAllPosts, getCategories } from "@/lib/blog";
import { toSummary } from "@/lib/post";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: blogIntro,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights, guides & updates — all in one place." lead={blogIntro} />
      <Container className="pb-16">
        <BlogIndex posts={getAllPosts().map(toSummary)} categories={getCategories()} />
      </Container>
    </>
  );
}
