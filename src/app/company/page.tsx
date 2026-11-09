import type { Metadata } from "next";

import { TeamGrid } from "@/components/company/TeamGrid";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatGrid } from "@/components/ui/StatGrid";
import { addressLine, phoneHref, site } from "@/config/site";
import { cta, hero, hq, milestones, principles, story, team } from "@/content/pages/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Metquay, the Calibration Software Company",
  description:
    "Metquay builds asset-centric, human-verified, AI-supercharged calibration management software. Meet the team in Bellevue, WA.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />

      <Section id="about" labelledBy="about-title" className="border-t border-border">
        <Container className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <Pill>{story.eyebrow}</Pill>
            <h2 id="about-title" className="mt-4 text-h2">
              {story.title}
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-muted">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <blockquote className="rounded-2xl border border-border bg-card p-6 text-body-lg text-text">
              <p className="text-small font-semibold text-purple">What we stand for</p>
              <p className="mt-2">{story.stand}</p>
            </blockquote>
            <StatGrid stats={story.stats} size="lg" />
          </div>
        </Container>
      </Section>

      <Section id="team" labelledBy="team-title" className="bg-surface">
        <Container>
          <SectionHeader id="team-title" eyebrow="The Leadership Team" title="The people steering Metquay" />
          <div className="mt-12 space-y-12">
            {team.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 flex items-baseline gap-3 text-h4">
                  {group.title}
                  <span className="text-small font-normal text-subtle">{group.people.length}</span>
                </h3>
                <TeamGrid people={group.people} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="principles-title">
        <Container>
          <SectionHeader
            id="principles-title"
            eyebrow={principles.eyebrow}
            title={principles.title}
            lead={principles.lead}
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item, index) => (
              <li key={item.title}>
                <Reveal index={index} className="h-full">
                  <InfoCard title={item.title} body={item.body} className="h-full" />
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="milestones-title" className="border-t border-border">
        <Container width="reading">
          <SectionHeader id="milestones-title" eyebrow={milestones.eyebrow} title={milestones.title} />
          <ol className="mt-12 border-l border-border">
            {milestones.items.map((item) => (
              <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-lime" />
                <p className="text-small font-semibold text-lime">{item.year}</p>
                <h3 className="mt-1 text-h4">{item.title}</h3>
                <p className="mt-2 text-body text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="hq-title" className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader id="hq-title" eyebrow={hq.eyebrow} title={hq.title} lead={hq.body} align="left" />
            <address className="mt-6 text-body text-muted not-italic">
              {site.legalName} · {addressLine}
              <br />
              <a href={phoneHref} className="hover:text-lime">
                {site.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${site.contactEmail}`} className="hover:text-lime">
                {site.contactEmail}
              </a>
            </address>
          </div>
          <ul className="space-y-4">
            {hq.channels.map((channel) => (
              <li key={channel.title}>
                <InfoCard title={channel.title} body={channel.body} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
