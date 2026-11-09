import { ArrowRight } from "lucide-react";

import { CardLink } from "@/components/ui/CardLink";
import type { LandingPage } from "@/content/landing";

export function GuideCard({ page }: { page: LandingPage }) {
  return (
    <CardLink href={`/${page.slug}`} className="block p-6">
      <span className="text-xs font-semibold tracking-wide text-muted uppercase">Related guide</span>
      <span className="mt-2 block text-h4">{page.title}</span>
      <span className="mt-2 block text-small text-muted">{page.metaDescription}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-purple">
        Read the guide
        <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" />
      </span>
    </CardLink>
  );
}
