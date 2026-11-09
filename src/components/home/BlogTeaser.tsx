import { PostCard } from "@/components/blog/PostCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogTeaser } from "@/content/pages/home";
import { getAllPosts } from "@/lib/blog";
import { toSummary } from "@/lib/post";

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3).map(toSummary);
  return (
    <Section id="blog" labelledBy="blog-title">
      <Container>
        <SectionHeader
          id="blog-title"
          eyebrow={blogTeaser.eyebrow}
          title={blogTeaser.title}
          align="left"
          action={
            <Button href={blogTeaser.cta.href} variant="secondary" size="sm">
              {blogTeaser.cta.label}
            </Button>
          }
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
