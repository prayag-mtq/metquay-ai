import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { PostNav } from "@/components/blog/PostNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/layout/CtaBand";
import { Mdx } from "@/components/mdx/Mdx";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPost, getRelated } from "@/lib/blog";
import { formatDate, toSummary } from "@/lib/post";

export const dynamicParams = false;

export const generateStaticParams = () => getAllPosts().map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const newer = index > 0 ? toSummary(posts[index - 1]) : null;
  const older = index < posts.length - 1 ? toSummary(posts[index + 1]) : null;

  return (
    <>
      <article>
        <Container width="reading" className="pt-10 md:pt-14">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <p className="mt-8 text-small font-semibold text-purple">{post.category}</p>
          <h1 className="mt-3 text-h1">{post.title}</h1>
          <p className="mt-4 text-small text-subtle">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
          </p>
        </Container>
        <Container width="reading" className="prose mt-10 border-t border-border pt-10">
          <Mdx source={post.body} />
        </Container>
      </article>
      <Container width="reading" className="mt-16">
        <PostNav newer={newer} older={older} />
      </Container>
      <Container className="mt-20">
        <h2 className="text-h3">Related posts</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {getRelated(slug).map((related) => (
            <li key={related.slug}>
              <PostCard post={toSummary(related)} />
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
