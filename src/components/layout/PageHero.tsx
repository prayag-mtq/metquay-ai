import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

type PageHeroProps = { eyebrow?: string; title: ReactNode; lead?: ReactNode; children?: ReactNode };

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <Container className="pt-16 pb-12 text-center md:pt-24 md:pb-16">
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <h1 className="mx-auto mt-5 max-w-4xl text-h1">{title}</h1>
      {lead && <p className="mx-auto mt-5 max-w-2xl text-body-lg text-muted">{lead}</p>}
      {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
    </Container>
  );
}
