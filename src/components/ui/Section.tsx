import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = { id?: string; className?: string; labelledBy?: string; children: ReactNode };

export function Section({ id, className, labelledBy, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
