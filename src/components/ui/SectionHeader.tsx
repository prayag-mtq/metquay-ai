import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Pill } from "./Pill";

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ id, eyebrow, title, lead, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <h2 id={id} className="mt-4 text-h2">
        {title}
      </h2>
      {lead && <p className="mt-4 text-body-lg text-muted">{lead}</p>}
    </div>
  );
}
