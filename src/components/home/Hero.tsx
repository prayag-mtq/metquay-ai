import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import { hero } from "@/content/pages/home";
import { WorkflowStrip } from "./WorkflowStrip";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(123,104,238,0.18),transparent_70%)]"
      />
      <Container className="relative pt-16 pb-20 text-center md:pt-24">
        <Pill>{hero.eyebrow}</Pill>
        <h1 id="hero-title" className="mx-auto mt-6 max-w-4xl text-display">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-muted">{hero.lead}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={site.ctas.trial.href}>{site.ctas.trial.label}</Button>
          <Button href={site.ctas.expert.href} variant="secondary">
            {site.ctas.expert.label}
          </Button>
        </div>
        <p className="mt-4 text-small text-subtle">{hero.note}</p>
        <WorkflowStrip className="mt-16 text-left" />
      </Container>
    </section>
  );
}
