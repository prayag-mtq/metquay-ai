"use client";

import { type ReactNode, useState } from "react";

import { cn } from "@/lib/cn";

type CarouselProps = { label: string; children: ReactNode[]; seconds?: number; className?: string };

export function Carousel({ label, children, seconds = 60, className }: CarouselProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const paused = hovered || focused || touched;

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
      tabIndex={0}
      data-paused={paused}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onPointerDown={(event) => event.pointerType !== "mouse" && setTouched((value) => !value)}
      className={cn(
        "group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]",
        className,
      )}
    >
      <div
        className="flex w-max animate-[marquee_var(--duration)_linear_infinite] group-data-[paused=true]:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ "--duration": `${seconds}s` } as React.CSSProperties}
      >
        {track(false)}
        {track(true)}
      </div>
    </section>
  );
}
