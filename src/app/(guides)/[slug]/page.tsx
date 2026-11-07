import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingView } from "@/components/landing/LandingView";
import { site } from "@/config/site";
import { getLandingPage, landingPages } from "@/content/landing";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export const generateStaticParams = () => landingPages.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = getLandingPage((await params).slug);
  if (!page) return {};
  return pageMetadata({
    title: `${page.metaTitle} | ${site.name}`,
    absoluteTitle: true,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function GuidePage({ params }: PageProps<"/[slug]">) {
  const page = getLandingPage((await params).slug);
  if (!page) notFound();
  return <LandingView page={page} />;
}
