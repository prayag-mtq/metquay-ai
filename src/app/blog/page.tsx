import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog/BlogIndex";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogIntro } from "@/content/blog";
import { getAllPosts, getCategories } from "@/lib/blog";
import { toSummary } from "@/lib/post";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Calibration & Metrology Blog",
  description: blogIntro,
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd data={jsonLd.blog(posts)} />
      <PageHero eyebrow="Blog" title="Insights, guides & updates — all in one place." lead={blogIntro} />
      <Container className="pb-16">
        <BlogIndex posts={posts.map(toSummary)} categories={getCategories()} />
      </Container>
    </>
  );
}
