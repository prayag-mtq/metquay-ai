import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Screenshot } from "@/components/ui/Screenshot";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { platform } from "@/content/pages/home";
import { cn } from "@/lib/cn";

export function PlatformFeatures() {
  return (
    <Section id="platform" labelledBy="platform-title" className="border-t border-border">
      <Container>
        <SectionHeader id="platform-title" eyebrow={platform.eyebrow} title={platform.title} />
        <div className="mt-12 space-y-16 md:mt-14 md:space-y-20">
          {platform.features.map((feature, index) => (
            <article
              key={feature.id}
              id={feature.id}
              aria-labelledby={`${feature.id}-title`}
              className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16"
            >
              <Reveal className={cn(index % 2 === 1 && "lg:order-2")}>
                <Pill>{feature.label}</Pill>
                <h3 id={`${feature.id}-title`} className="mt-4 text-h2">
                  {feature.title}
                </h3>
                <p className="mt-4 text-body-lg text-muted">{feature.body}</p>
                <CheckList items={feature.points} className="mt-6" />
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
