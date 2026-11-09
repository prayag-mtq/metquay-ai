"use client";

import { useState } from "react";

import { FilterChips } from "@/components/ui/FilterChips";
import type { DirectoryItem } from "@/content/pages/ecosystem";
import { cn } from "@/lib/cn";

const ALL = "All";

type IntegrationDirectoryProps = { categories: readonly string[]; items: DirectoryItem[] };

export function IntegrationDirectory({ categories, items }: IntegrationDirectoryProps) {
  const [category, setCategory] = useState(ALL);

  return (
    <>
      <FilterChips
        label="Filter integrations"
        options={[ALL, ...categories]}
        value={category}
        onChange={setCategory}
        className="justify-center"
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.name}
            hidden={category !== ALL && item.category !== category}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-xl bg-surface text-small font-bold text-purple"
            >
              {item.mark}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-text">{item.name}</p>
              <p className="text-small text-subtle">{item.category}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
                item.available ? "bg-lime-deep/70 text-lime" : "border border-border text-subtle",
              )}
            >
              {item.available ? "Available" : "Coming soon"}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
