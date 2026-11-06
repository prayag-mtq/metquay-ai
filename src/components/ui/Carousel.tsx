"use client";

import { useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CarouselProps = { label: string; children: ReactNode[]; seconds?: number; className?: string };

export function Carousel({ label, children, seconds = 60, className }: CarouselProps) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  const track = (hidden: boolean) => (
    <ul data-track="" aria-hidden={hidden || undefined} className="flex shrink-0 gap-5 pr-5">
      {children.map((child, index) => (
        <li key={index} className="w-[min(85vw,380px)] shrink-0" inert={hidden || undefined}>
          {child}
        </li>
      ))}
    </ul>
  );

  if (reduce) {
    return (
      <section aria-label={label} aria-roledescription="carousel" className={cn("overflow-x-auto pb-4", className)}>
        {track(false)}
      </section>
    );
  }

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      data-paused={paused}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      className={cn(
        "group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      <div
        data-animated=""
        className="flex w-max animate-[marquee_var(--duration)_linear_infinite] group-data-[paused=true]:[animation-play-state:paused]"
        style={{ "--duration": `${seconds}s` } as React.CSSProperties}
      >
        {track(false)}
        {track(true)}
      </div>
    </section>
  );
}
