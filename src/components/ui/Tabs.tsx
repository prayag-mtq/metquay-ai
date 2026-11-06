"use client";

import { motion } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { presets } from "@/lib/motion";

export type TabItem = { id: string; label: string; icon?: ReactNode; panel: ReactNode };

type TabsProps = { label: string; items: TabItem[]; className?: string };

export function Tabs({ label, items, className }: TabsProps) {
  const baseId = useId();
  const [selected, setSelected] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number) => {
    const next = (index + items.length) % items.length;
    setSelected(next);
    setInteracted(true);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: selected + 1,
      ArrowLeft: selected - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    select(keys[event.key]);
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="flex flex-wrap justify-center gap-2">
        {items.map((item, index) => {
          const active = index === selected;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={active}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => select(index)}
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full border px-5 text-small font-semibold transition-colors",
                active
                  ? "border-purple bg-purple-deep text-text"
                  : "border-border-strong text-muted hover:border-text hover:text-text",
              )}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item, index) => {
        const active = index === selected;
        return (
          <motion.div
            key={active ? `${item.id}-active` : item.id}
            role="tabpanel"
            id={`${baseId}-panel-${item.id}`}
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={!active}
            tabIndex={0}
            initial={active && interacted ? "initial" : false}
            animate="animate"
            variants={presets.tabSwap}
            className="mt-10 focus-visible:outline-offset-8"
          >
            {item.panel}
          </motion.div>
        );
      })}
    </div>
  );
}
