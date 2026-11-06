import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { ctaBand } from "@/content/pages/home";

type CtaBandProps = { title?: string; body?: string };

export function CtaBand({ title = ctaBand.title, body = ctaBand.body }: CtaBandProps) {
  return (
    <section aria-labelledby="cta-title" className="py-14 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center md:py-14 md:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgba(140,255,46,0.14),transparent_70%)]"
          />
          <h2 id="cta-title" className="relative text-h2">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-body-lg text-muted">{body}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href={site.ctas.trial.href}>{site.ctas.trial.label}</Button>
            <Button href={site.ctas.expert.href} variant="secondary">
              {site.ctas.expert.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
