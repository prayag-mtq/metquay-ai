import { Layers, LayoutDashboard, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { StepNav } from "@/components/solutions/StepNav";
import { WorkflowStep } from "@/components/solutions/WorkflowStep";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { across, cta, hero, steps } from "@/content/pages/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "End-to-End Calibration Lab Workflow",
  description:
    "Follow every instrument from due alert to delivery: customer portal, scheduling, smart worksheets, offline capture, approval, certificates and shipping.",
  path: "/solutions",
});

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
            {across.items.map((item) => (
              <li key={item.title}>
                <InfoCard title={item.title} body={item.body} icon={acrossIcons[item.icon]} className="h-full" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
