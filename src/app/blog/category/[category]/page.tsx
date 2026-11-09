import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllPosts, getCategories } from "@/lib/blog";
import { categoryIntros } from "@/content/blog";
import { categoryFromSlug } from "@/lib/categories";
import { slugify } from "@/lib/slugify";
import { toSummary } from "@/lib/post";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export const generateStaticParams = () => getCategories().map((c) => ({ category: slugify(c) }));

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const slug = (await params).category;
  const category = categoryFromSlug(slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category} articles`,
    description: categoryIntros[category],
    path: `/blog/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const slug = (await params).category;
  const category = categoryFromSlug(slug);
  if (!category) notFound();
  const posts = getAllPosts().filter((p) => p.category === category);
  const crumbs = [
    { name: "Blog", path: "/blog" },
    { name: category, path: `/blog/category/${slug}` },
  ];

  return (
    <Container className="pt-10 pb-16 md:pt-14">
      <JsonLd data={jsonLd.breadcrumbs(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-6 text-h1">{category}</h1>
      <p className="mt-4 max-w-2xl text-body-lg text-muted">{categoryIntros[category]}</p>
      <p className="mt-2 text-small text-subtle">{posts.length} articles</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={toSummary(post)} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </Container>
  );
}
