import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { glossary, glossaryIntro, type GlossaryTerm } from "@/content/glossary";
import { getPost } from "@/lib/blog";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Calibration & Metrology Glossary",
  description:
    "Definitions of calibration terms: measurement uncertainty, traceability, TUR, coverage factor k, Gage R&R, ISO/IEC 17025, 21 CFR Part 11 and more.",
  path: "/glossary",
});

function termLink(term: GlossaryTerm) {
  if (term.page) return { href: term.page, label: "Learn more" };
  const post = term.post ? getPost(term.post) : null;
  return post ? { href: `/blog/${post.slug}`, label: `Read: ${post.title}` } : null;
}

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={jsonLd.definedTermSet(glossary)} />
      <JsonLd
        data={jsonLd.breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />
      <PageHero eyebrow="Glossary" title="Calibration & metrology glossary" lead={glossaryIntro} />
      <Container width="reading" className="pb-16">
        <nav aria-label="Glossary terms" className="mb-10 flex flex-wrap gap-2">
          {glossary.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted hover:border-lime hover:text-text"
            >
              {t.term}
            </a>
          ))}
        </nav>
        <dl className="divide-y divide-border border-y border-border">
          {glossary.map((t) => {
            const link = termLink(t);
            return (
              <div key={t.id} id={t.id} className="py-6">
                <dt className="text-h4 font-semibold">{t.term}</dt>
                <dd className="mt-2 text-body text-muted">
                  {t.definition}
                  {link && (
                    <Link
                      href={link.href}
                      className="mt-3 flex items-center gap-1.5 text-small font-semibold text-lime hover:underline"
                    >
                      {link.label}
                      <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                    </Link>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </>
  );
}
