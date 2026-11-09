import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Pill } from "./Pill";

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({ id, eyebrow, title, lead, align = "center", action, className }: SectionHeaderProps) {
  const header = (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", !action && className)}>
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <h2 id={id} className="mt-4 text-h2">
        {title}
      </h2>
      {lead && <p className="mt-4 text-body-lg text-muted">{lead}</p>}
    </div>
  );
  if (!action) return header;
  return (
    <div className={cn("flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", className)}>
      {header}
      {action}
    </div>
  );
}
