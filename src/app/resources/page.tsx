import { ArrowRight, BookOpen, Clock } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CardLink } from "@/components/ui/CardLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/config/site";
import { consult, hero, intro, more, playbooks, why } from "@/content/pages/resources";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Playbooks",
  description:
    "Seven free playbooks for calibration labs: digital transformation, migration, ERP integration, Fluke MET/CAL, FDA validation, ISO/IEC 17025 audit prep and marketing.",
  path: "/resources",
});

const playbookHref = (id: string) => `/contact?intent=playbook&playbook=${id}`;

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <Button href="#playbooks">Browse the Library</Button>
        <Button href={site.ctas.trial.href} variant="secondary">
          Get Started
        </Button>
      </PageHero>
      <Container className="-mt-4 pb-16">
        <ul className="flex flex-wrap justify-center gap-2" aria-label="Library facts">
          {hero.facts.map((fact) => (
            <li key={fact} className="rounded-full border border-border px-3 py-1 text-small text-muted">
              {fact}
            </li>
          ))}
        </ul>
      </Container>

      <Section labelledBy="intro-title" className="border-t border-border">
        <Container width="reading">
          <h2 id="intro-title" className="text-h2">
            {intro.title}
          </h2>
          <div className="mt-6 space-y-4 text-body-lg text-muted">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="playbooks" labelledBy="playbooks-title" className="bg-surface">
        <Container>
          <SectionHeader id="playbooks-title" eyebrow="One complete journey" title="Seven playbooks, one per stage" />
          <nav aria-label="Playbook stages" className="mt-10">
            <ol className="flex flex-wrap justify-center gap-2">
              {playbooks.map((playbook, index) => (
                <li key={playbook.id}>
                  <a
                    href={`#${playbook.id}`}
                    className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-small font-semibold text-muted transition-colors hover:border-lime hover:text-text"
                  >
                    <span className="text-lime tabular-nums">{index + 1}</span>
                    {playbook.short}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {playbooks.map((playbook, index) => (
              <li key={playbook.id} id={playbook.id} data-playbook="">
                <Reveal index={index % 2} className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <p className="text-small font-semibold text-purple">{playbook.stage}</p>
                  <h3 className="mt-2 text-h3">{playbook.title}</h3>
                  <p className="mt-3 text-body text-muted">{playbook.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="For">
                    {playbook.audience.map((role) => (
                      <li key={role} className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
                        {role}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                    <span className="flex items-center gap-4 text-small text-subtle">
                      <span className="flex items-center gap-1.5">
                        <BookOpen aria-hidden="true" className="size-4" />
                        {playbook.pages} pages
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock aria-hidden="true" className="size-4" />
                        {playbook.minutes} min
                      </span>
                    </span>
                    <Button href={playbookHref(playbook.id)} size="sm" aria-label={`Request the ${playbook.title}`}>
                      Request this playbook
                    </Button>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-2xl border border-border p-7 text-center">
            <h3 className="text-h4">Not sure where to start?</h3>
            <p className="mt-2 text-body text-muted">
              Tell us where your lab is today and we’ll point you to the playbooks that apply.
            </p>
            <Button href={site.ctas.expert.href} variant="secondary" size="sm" className="mt-5">
              Talk to a specialist
            </Button>
          </div>
        </Container>
      </Section>

      <Section labelledBy="why-title">
        <Container className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 id="why-title" className="text-h2">
              {why.eyebrow}
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-muted">
              {why.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {why.sizes.map((size) => (
              <div key={size.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-h4">{size.title}</h3>
                <p className="mt-2 text-body text-muted">{size.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="more-title" className="border-t border-border">
        <Container>
          <SectionHeader id="more-title" eyebrow={more.eyebrow} title={more.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {more.items.map((item) => (
              <li key={item.title}>
                <CardLink href={item.href} external={item.href.startsWith("http")} className="flex h-full flex-col p-7">
                  <span className="text-h4 font-semibold">{item.title}</span>
                  <span className="mt-2 flex-1 text-body text-muted">{item.body}</span>
                  <span className="mt-6 flex items-center gap-1.5 text-small font-semibold text-lime">
                    {item.label}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section aria-labelledby="consult-title" className="pb-16">
        <Container>
          <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-16">
            <h2 id="consult-title" className="text-h2">
              {consult.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted">{consult.body}</p>
            <Button href={site.meetingUrl} target="_blank" rel="noopener noreferrer" className="mt-8">
              {consult.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
