import { Check } from "lucide-react";

import { cn } from "@/lib/cn";

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-body text-muted">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
          {item}
        </li>
      ))}
    </ul>
  );
}
