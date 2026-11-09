import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { reasons } from "@/content/pages/home";

import { reasonIcons } from "./icons";

export function Reasons() {
  return (
    <Section id="why" labelledBy="why-title" className="bg-surface">
      <Container>
        <SectionHeader id="why-title" eyebrow={reasons.eyebrow} title={reasons.title} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.items.map((item, index) => (
            <li key={item.title}>
              <Reveal index={index % 3} className="h-full">
                <InfoCard title={item.title} body={item.body} icon={reasonIcons[item.icon]} className="h-full" />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
