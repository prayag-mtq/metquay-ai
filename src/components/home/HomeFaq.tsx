import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Faq } from "@/components/ui/Faq";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faq } from "@/content/pages/home";

export function HomeFaq() {
  return (
    <Section id="faq" labelledBy="faq-title" className="bg-surface">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionHeader id="faq-title" title={faq.title} align="left" />
          <Link
            href="/calibration-management-software"
            className="mt-6 inline-flex items-center gap-1.5 text-small font-semibold text-lime hover:underline"
          >
            The complete guide to calibration management software
            <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
          </Link>
        </div>
        <Faq items={faq.items} />
      </Container>
    </Section>
  );
}
