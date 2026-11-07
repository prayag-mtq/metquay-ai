import { Check, Code2, Cpu, Gauge, Landmark } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { ReactNode } from "react";
import { IntegrationDirectory } from "@/components/ecosystem/IntegrationDirectory";
import { SyncFlow } from "@/components/ecosystem/SyncFlow";
import { SyncTable } from "@/components/ecosystem/SyncTable";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/config/site";
import { api, cta, directory, erp, groups, hero, metrology, partners, syncFlow } from "@/content/pages/ecosystem";

export const metadata: Metadata = pageMetadata({
  title: "Ecosystem & Integrations",
  description:
    "metquay.ai integrates with Odoo, NetSuite, QuickBooks, Dynamics 365, Business Central, Xero, Fluke MET/CAL, MET/CONNECT and metrology.net, plus a REST API and webhooks.",
  path: "/ecosystem",
});

const groupIcons = { erp: Landmark, metrology: Gauge, hardware: Cpu, developer: Code2 };

function Split({
  id,
  label,
  title,
  body,
  children,
}: {
  id: string;
  label: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <Section id={id} labelledBy={`${id}-title`} className="border-t border-border">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Pill>{label}</Pill>
          <h2 id={`${id}-title`} className="mt-4 text-h2">
            {title}
          </h2>
          <p className="mt-4 text-body-lg text-muted">{body}</p>
        </Reveal>
        <Reveal index={1}>{children}</Reveal>
      </Container>
    </Section>
  );
}

export default function EcosystemPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <Button href="#directory">Browse Integrations</Button>
        <Button href={site.ctas.trial.href} variant="secondary">
          Get Started
        </Button>
      </PageHero>

      <section id="integrations" aria-label="Integration categories" className="pb-20">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => {
              const Icon = groupIcons[group.icon];
              return (
                <li key={group.title}>
                  <Link
                    href={group.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <Icon aria-hidden="true" className="size-7 text-purple" strokeWidth={1.6} />
                    <span className="mt-5 text-h4 font-semibold group-hover:text-lime">{group.title}</span>
                    <span className="mt-1 text-small font-semibold text-lime">{group.meta}</span>
                    <span className="mt-2 text-small text-muted">{group.body}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <Split id={erp.id} label={erp.label} title={erp.title} body={erp.body}>
        <SyncTable caption="ERP and finance sync" rows={erp.rows} />
      </Split>

      <Split id={metrology.id} label={metrology.label} title={metrology.title} body={metrology.body}>
        <SyncTable caption="Metrology sync" rows={metrology.rows} />
      </Split>

      <Section id="directory" labelledBy="directory-title" className="bg-surface">
        <Container>
          <SectionHeader id="directory-title" eyebrow="Directory" title={directory.title} lead={directory.lead} />
          <div className="mt-10">
            <IntegrationDirectory categories={directory.categories} items={directory.items} />
          </div>
        </Container>
      </Section>

      <Split id="api" label={api.label} title={api.title} body={api.body}>
        <ul className="mb-6 space-y-3">
          {api.points.map((point) => (
            <li key={point} className="flex gap-3 text-body text-muted">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
              {point}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-border bg-surface p-5 font-mono text-small">
          <p className="text-xs font-semibold tracking-wide text-subtle uppercase">Webhook events</p>
          <ul className="mt-3 space-y-2">
            {api.events.map((event) => (
              <li key={event} className="text-lime">
                {event}
              </li>
            ))}
          </ul>
        </div>
      </Split>

      <Section labelledBy="sync-title" className="border-t border-border">
        <Container>
          <SectionHeader id="sync-title" eyebrow={syncFlow.eyebrow} title={syncFlow.title} />
          <SyncFlow />
        </Container>
      </Section>

      <Section labelledBy="partners-title" className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              id="partners-title"
              eyebrow={partners.eyebrow}
              title={partners.title}
              lead={partners.body}
              align="left"
            />
            <Button href={partners.cta.href} className="mt-8">
              {partners.cta.label}
            </Button>
          </div>
          <div className="space-y-4">
            {partners.types.map((type) => (
              <div key={type.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-h4">{type.title}</h3>
                <p className="mt-2 text-body text-muted">{type.body}</p>
              </div>
            ))}
            <dl className="grid grid-cols-2 gap-4">
              {partners.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col rounded-2xl border border-border p-5">
                  <dt className="text-small text-subtle">{stat.label}</dt>
                  <dd className="order-first text-h3 font-semibold text-lime">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
