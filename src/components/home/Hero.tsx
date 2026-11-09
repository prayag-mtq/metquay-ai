import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import { hero } from "@/content/pages/home";

import { WorkflowStrip } from "./WorkflowStrip";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <Container className="relative pt-12 pb-14 text-center md:pt-16">
        <Pill>{hero.eyebrow}</Pill>
        <h1 id="hero-title" className="mx-auto mt-6 max-w-4xl text-display">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-muted">{hero.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={site.ctas.trial.href}>{site.ctas.trial.label}</Button>
          <Button href={site.ctas.expert.href} variant="secondary">
            {site.ctas.expert.label}
          </Button>
        </div>
        <p className="mt-4 text-small text-subtle">{hero.note}</p>
        <WorkflowStrip className="mt-12 text-left" />
      </Container>
    </section>
  );
}
