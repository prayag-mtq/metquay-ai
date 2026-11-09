import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { CardLink } from "@/components/ui/CardLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { playbooks } from "@/content/pages/home";

export function Playbooks() {
  return (
    <Section id="playbooks" labelledBy="playbooks-title" className="border-t border-border">
      <Container>
        <SectionHeader
          id="playbooks-title"
          eyebrow={playbooks.eyebrow}
          title={playbooks.title}
          align="left"
          action={
            <Button href={playbooks.cta.href} variant="secondary" size="sm">
              {playbooks.cta.label}
            </Button>
          }
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {playbooks.items.map((item) => (
            <li key={item.title}>
              <CardLink href={playbooks.cta.href} className="flex h-full flex-col p-7">
                <span className="text-small font-semibold text-purple">{item.tag}</span>
                <h3 className="mt-3 text-h4">{item.title}</h3>
                <p className="mt-2 flex-1 text-body text-muted">{item.body}</p>
                <ArrowRight
                  aria-hidden="true"
                  className="mt-6 size-5 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-lime"
                />
              </CardLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
