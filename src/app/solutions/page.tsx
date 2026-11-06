import { LayoutDashboard, Layers, RefreshCw } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { StepNav } from "@/components/solutions/StepNav";
import { WorkflowStep } from "@/components/solutions/WorkflowStep";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { across, cta, hero, steps } from "@/content/pages/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Calibration software that follows every instrument from due alert to delivery: customer portal, scheduling, smart worksheets, offline capture, approval, certificates and shipping.",
};

const acrossIcons = { dashboard: LayoutDashboard, workspace: Layers, erp: RefreshCw };

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />
      <StepNav steps={steps} />
      {steps.map((step, index) => (
        <WorkflowStep key={step.id} step={step} index={index} />
      ))}
      <Section labelledBy="across-title">
        <Container>
          <SectionHeader id="across-title" eyebrow={across.eyebrow} title={across.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {across.items.map((item) => {
              const Icon = acrossIcons[item.icon];
              return (
                <li key={item.title} className="rounded-2xl border border-border bg-card p-7">
                  <Icon aria-hidden="true" className="size-7 text-purple" strokeWidth={1.6} />
                  <h3 className="mt-5 text-h4">{item.title}</h3>
                  <p className="mt-2 text-body text-muted">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
