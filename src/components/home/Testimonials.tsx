import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/pages/home";

export function Testimonials() {
  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <Container>
        <SectionHeader id="testimonials-title" eyebrow={testimonials.eyebrow} title={testimonials.title} />
      </Container>
      <Carousel label="Customer testimonials" className="mt-10">
        {testimonials.items.map((item) => (
          <figure key={item.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
            <blockquote className="flex-1 text-body text-muted">“{item.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <p className="font-semibold text-text">{item.name}</p>
              <p className="text-small text-subtle">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </Section>
  );
}
