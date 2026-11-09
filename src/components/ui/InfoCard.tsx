import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type InfoCardProps = { title: string; body: string; icon?: LucideIcon; className?: string };

export function InfoCard({ title, body, icon: Icon, className }: InfoCardProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6 md:p-7", className)}>
      {Icon && <Icon aria-hidden="true" className="mb-5 size-7 text-purple" strokeWidth={1.6} />}
      <h3 className="text-h4">{title}</h3>
      <p className="mt-2 text-body text-muted">{body}</p>
    </div>
  );
}
