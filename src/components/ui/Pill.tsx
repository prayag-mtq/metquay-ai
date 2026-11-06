import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-lime-deep/70 px-3 py-1 text-small font-semibold text-lime",
        className,
      )}
    >
      {children}
    </span>
  );
}
