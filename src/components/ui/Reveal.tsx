"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
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
    <motion.div
      ref={ref}
      data-reveal=""
      className={className}
      initial={false}
      animate={armed && !inView ? "hidden" : "visible"}
      variants={presets.reveal}
      transition={{ delay: index * STAGGER_STEP }}
    >
      {children}
    </motion.div>
  );
}
