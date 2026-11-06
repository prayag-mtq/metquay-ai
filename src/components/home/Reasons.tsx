import { Container } from "@/components/ui/Container";
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
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.items.map((item, index) => {
            const Icon = reasonIcons[item.icon];
            return (
              <li key={item.title}>
                <Reveal index={index % 3} className="h-full rounded-2xl border border-border bg-card p-7">
                  <Icon aria-hidden="true" className="size-7 text-purple" strokeWidth={1.6} />
                  <h3 className="mt-5 text-h4">{item.title}</h3>
                  <p className="mt-2 text-body text-muted">{item.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
