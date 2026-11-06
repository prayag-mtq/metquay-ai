import { Check } from "lucide-react";
import { Screenshot } from "@/components/ui/Screenshot";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platform } from "@/content/pages/home";
import { cn } from "@/lib/cn";

export function PlatformFeatures() {
  return (
    <Section id="platform" labelledBy="platform-title" className="border-t border-border">
      <Container>
        <SectionHeader id="platform-title" eyebrow={platform.eyebrow} title={platform.title} />
        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {platform.features.map((feature, index) => (
            <article
              key={feature.id}
              id={feature.id}
              aria-labelledby={`${feature.id}-title`}
              className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16"
            >
              <Reveal className={cn(index % 2 === 1 && "lg:order-2")}>
                <Pill>{feature.label}</Pill>
                <h3 id={`${feature.id}-title`} className="mt-4 text-h2">
                  {feature.title}
                </h3>
                <p className="mt-4 text-body-lg text-muted">{feature.body}</p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-3 text-body text-muted">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal index={1}>
                <Screenshot {...feature.image} />
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
