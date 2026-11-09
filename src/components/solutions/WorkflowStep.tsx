import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Screenshot } from "@/components/ui/Screenshot";
import type { Step } from "@/content/pages/solutions";
import { cn } from "@/lib/cn";

export function WorkflowStep({ step, index }: { step: Step; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <section
      id={step.id}
      aria-labelledby={`${step.id}-title`}
      className="scroll-mt-14 border-b border-border py-14 md:py-16"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <Reveal className={cn(index % 2 === 1 && "lg:order-2")}>
          <div className="flex items-center gap-3">
            <span className="text-h3 font-semibold text-subtle tabular-nums">{number}</span>
            <Pill>{step.label}</Pill>
          </div>
          <h2 id={`${step.id}-title`} className="mt-5 text-h2">
            {step.title}
          </h2>
          <p className="mt-4 text-body-lg text-muted">{step.body}</p>
          <CheckList items={step.points} className="mt-6" />
          <figure className="mt-8 border-l-2 border-purple pl-5">
            <blockquote className="text-body text-text italic">“{step.quote.text}”</blockquote>
            {step.quote.by && <figcaption className="mt-2 text-small text-subtle">— {step.quote.by}</figcaption>}
          </figure>
        </Reveal>
        <Reveal index={1}>
          <Screenshot {...step.image} />
        </Reveal>
      </Container>
    </section>
  );
}
