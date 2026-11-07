"use client";

import { Pause, Play } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CarouselProps = { label: string; children: ReactNode[]; seconds?: number; className?: string };

export function Carousel({ label, children, seconds = 60, className }: CarouselProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const paused = hovered || focused || stopped;

  const track = (duplicate: boolean) => (
    <ul
      data-track=""
      aria-hidden={duplicate || undefined}
      className={cn("flex shrink-0 gap-5 pr-5", duplicate && "motion-reduce:hidden")}
    >
      {children.map((child, index) => (
        <li key={index} className="w-[min(85vw,380px)] shrink-0" inert={duplicate || undefined}>
          {child}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      data-paused={paused}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn("group relative", className)}
    >
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        <div
          className="flex w-max animate-[marquee_var(--duration)_linear_infinite] group-data-[paused=true]:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ "--duration": `${seconds}s` } as React.CSSProperties}
        >
          {track(false)}
          {track(true)}
        </div>
      </div>
      <div className="mt-6 flex justify-center motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setStopped((value) => !value)}
          aria-label={stopped ? "Play testimonials" : "Pause testimonials"}
          className="inline-flex h-9 items-center gap-2 rounded-full border border-border-strong px-4 text-small font-semibold text-muted transition-colors hover:border-text hover:text-text"
        >
          {stopped ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          {stopped ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
