"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { type ReactNode, useLayoutEffect, useRef, useState } from "react";

import { presets, STAGGER_STEP } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    if (reduce || !ref.current) return;
    setArmed(ref.current.getBoundingClientRect().top > window.innerHeight);
  }, [reduce]);

  return (
    <m.div
      ref={ref}
      data-reveal=""
      className={className}
      initial={false}
      animate={armed && !inView ? "hidden" : "visible"}
      variants={presets.reveal}
      transition={{ delay: index * STAGGER_STEP }}
    >
      {children}
    </m.div>
  );
}
