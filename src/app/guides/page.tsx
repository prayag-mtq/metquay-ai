import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { CardLink } from "@/components/ui/CardLink";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import { GUIDE_GROUPS, landingPages } from "@/content/landing";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const description =
  "Guides to calibration software: features, ISO/IEC 17025 and 21 CFR Part 11 compliance, scheduling, certificates, uncertainty, integrations and migration.";

export const metadata: Metadata = pageMetadata({
  title: "Calibration Software Guides",
  description,
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Calibration software guides",
          url: absoluteUrl("/guides"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: landingPages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.title,
              url: absoluteUrl(`/${page.slug}`),
            })),
          },
        }}
      />
      <JsonLd data={jsonLd.breadcrumbs([{ name: "Guides", path: "/guides" }])} />
      <PageHero eyebrow="Guides" title="Calibration software guides" lead={description} />
      {GUIDE_GROUPS.map((group) => {
        const pages = landingPages.filter((page) => page.group === group);
        if (!pages.length) return null;
        const id = `${slugify(group)}-title`;
        return (
          <Section key={group} labelledBy={id} className="border-t border-border">
            <Container>
              <h2 id={id} className="text-h3">
                {group}
              </h2>
              <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <CardLink href={`/${page.slug}`} className="flex h-full flex-col p-6">
                      <span className="text-small font-semibold text-purple">{page.eyebrow}</span>
                      <span className="mt-2 text-h4">{page.title}</span>
                      <span className="mt-3 text-small text-muted">{page.metaDescription}</span>
                      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-small font-semibold text-text">
                        Read the guide
                        <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </CardLink>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
