import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getCategories } from "@/lib/blog";
import { toSummary } from "@/lib/post";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guidance for calibration teams, metrology leaders, and quality operations.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights, guides & updates — all in one place."
        lead="Practical guidance for calibration teams, metrology leaders, and quality operations."
      />
      <Container className="pb-24">
        <BlogIndex posts={getAllPosts().map(toSummary)} categories={getCategories()} />
      </Container>
    </>
  );
}
