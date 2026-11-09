import type { Metadata } from "next";

import { BlogTeaser } from "@/components/home/BlogTeaser";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import { Playbooks } from "@/components/home/Playbooks";
import { Reasons } from "@/components/home/Reasons";
import { RoleTabs } from "@/components/home/RoleTabs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Calibration Management Software for ISO 17025 Labs | ${site.name}`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd.softwareApplication()} />
      <Hero />
      <RoleTabs />
      <PlatformFeatures />
      <Reasons />
      <Testimonials />
      <Playbooks />
      <HomeFaq />
      <BlogTeaser />
      <CtaBand />
    </>
  );
}
