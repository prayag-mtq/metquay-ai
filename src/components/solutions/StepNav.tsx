"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type StepNavProps = { steps: { id: string; short: string }[] };

export function StepNav({ steps }: StepNavProps) {
  const [current, setCurrent] = useState(steps[0].id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      const passed = steps.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? 0) <= line);
      setCurrent((passed.at(-1) ?? steps[0]).id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [steps]);

  return (
    <nav
      aria-label="Workflow steps"
      className="sticky top-(--header-height) z-30 border-y border-border bg-bg/90 backdrop-blur-md"
    >
      <ol className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] md:px-8">
        {steps.map((step, index) => {
          const active = step.id === current;
          return (
            <li key={step.id} className="shrink-0">
              <a
                href={`#${step.id}`}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-1.5 text-small font-semibold whitespace-nowrap transition-colors",
                  active ? "bg-purple-deep text-text" : "text-subtle hover:text-text",
                )}
              >
                <span className={cn("tabular-nums", active ? "text-lime" : "text-subtle")}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.short}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
