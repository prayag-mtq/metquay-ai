import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TeamGrid } from "@/components/company/TeamGrid";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/config/site";
import { cta, hero, hq, milestones, principles, story, team } from "@/content/pages/company";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "Metquay builds asset-centric, human-verified, AI-supercharged calibration management software. Meet the team in Bellevue, WA.",
  path: "/company",
});

const { street, city, region, postalCode } = site.address;

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />

      <Section id="about" labelledBy="about-title" className="scroll-mt-(--header-height) border-t border-border">
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
            <dl className="grid grid-cols-2 gap-4">
              {story.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col rounded-2xl border border-border p-5">
                  <dt className="text-small text-subtle">{stat.label}</dt>
                  <dd className="order-first text-h2 font-semibold text-lime">{stat.value}</dd>
                </div>
              ))}
            </dl>
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
                <Reveal index={index} className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-h4">{item.title}</h3>
                  <p className="mt-2 text-body text-muted">{item.body}</p>
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
              {site.legalName} · {street}, {city}, {region} {postalCode}
              <br />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-lime">
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
              <li key={channel.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-h4">{channel.title}</h3>
                <p className="mt-2 text-body text-muted">{channel.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
