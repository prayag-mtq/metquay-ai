import { Container } from "@/components/ui/Container";
import { Faq } from "@/components/ui/Faq";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faq } from "@/content/pages/home";

export function HomeFaq() {
  return (
    <Section id="faq" labelledBy="faq-title" className="bg-surface">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <SectionHeader id="faq-title" title={faq.title} align="left" />
        <Faq items={faq.items} />
      </Container>
    </Section>
  );
}
