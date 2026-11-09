import { ShieldCheck } from "lucide-react";
import Link from "next/link";

import { compliance, integrations, workflow } from "@/content/pages/home";
import { cn } from "@/lib/cn";

import { workflowIcons } from "./icons";

export function WorkflowStrip({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-3xl border border-border bg-card", className)}>
      <div className="p-4 sm:p-6">
        <p className="mb-5 text-center text-small font-semibold text-subtle">
          One platform for the complete calibration workflow
        </p>
        <ul aria-label="Calibration workflow" className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {workflow.map(({ label, icon, href }) => {
            const Icon = workflowIcons[icon];
            return (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-3 py-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-lime/60"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-8 text-purple transition-colors group-hover:text-lime"
                    strokeWidth={1.6}
                  />
                  <span className="text-small font-semibold text-text">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <dl className="grid gap-4 border-t border-border bg-white/[0.03] px-6 py-5 text-small sm:grid-cols-[9rem_1fr] sm:gap-x-6">
        <dt className="font-semibold text-subtle">Audit-ready</dt>
        <dd className="flex flex-wrap gap-x-5 gap-y-2">
          {compliance.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 font-semibold text-text">
              <ShieldCheck aria-hidden="true" className="size-4 text-purple" />
              {item}
            </span>
          ))}
        </dd>
        <dt className="font-semibold text-subtle">Integrates with</dt>
        <dd className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-text">
          {integrations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </dd>
      </dl>
    </div>
  );
}
