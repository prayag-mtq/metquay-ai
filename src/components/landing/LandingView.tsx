import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/layout/CtaBand";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import type { LandingPage } from "@/content/landing";
import { formatDate } from "@/lib/post";
import { slugify } from "@/lib/slugify";
import { jsonLd } from "@/lib/seo";

export function LandingView({ page }: { page: LandingPage }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.eyebrow, path: `/${page.slug}` },
  ];

  return (
    <>
      <JsonLd data={jsonLd.breadcrumbs(crumbs)} />
      <JsonLd
        data={jsonLd.webPage({
          title: page.title,
          description: page.metaDescription,
          path: `/${page.slug}`,
          updated: page.updated,
        })}
      />
      <Container width="reading" className="pt-10 md:pt-14">
        <Breadcrumbs items={crumbs} />
        <Pill className="mt-8">{page.eyebrow}</Pill>
        <h1 className="mt-4 text-h1">{page.title}</h1>
        <p className="mt-6 border-l-2 border-lime pl-5 text-body-lg text-text">{page.summary}</p>
        <p className="mt-4 text-small text-subtle">
          Last updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={site.ctas.trial.href}>{site.ctas.trial.label}</Button>
          <Button href={site.ctas.expert.href} variant="secondary">
            {site.ctas.expert.label}
          </Button>
        </div>
      </Container>

      <Container width="reading" className="mt-14 space-y-12 border-t border-border pt-12">
        {page.sections.map((section) => (
          <section key={section.heading} aria-labelledby={slugify(section.heading)}>
            <h2 id={slugify(section.heading)} className="text-h3">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-body-lg text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.points && <CheckList items={section.points} className="mt-5" />}
            {section.link && (
              <Link
                href={section.link.href}
                className="mt-5 inline-flex items-center gap-1.5 text-small font-semibold text-lime hover:underline"
              >
                {section.link.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            )}
          </section>
        ))}
      </Container>

      <Container width="reading" className="mt-16">
        <h2 id="faq" className="text-h2">
          Frequently asked questions
        </h2>
        <div className="mt-6">
          <Faq items={page.faq} />
        </div>
      </Container>

      <Container width="reading" className="mt-16">
        <h2 className="text-h4">Related guides</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {page.related.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 text-small font-semibold text-muted transition-colors hover:border-border-strong hover:text-text"
              >
                {item.label}
                <ArrowRight aria-hidden="true" className="size-4 text-subtle group-hover:text-lime" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  );
}
