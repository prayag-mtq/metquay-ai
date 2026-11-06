import type { Transition, Variants } from "motion/react";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const STAGGER_STEP = 0.08;

export const presets = {
  reveal: {
    hidden: { opacity: 0, y: 16, transition: { duration: 0 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  },
  tabSwap: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, ease } },
    exit: { opacity: 0, transition: { duration: 0.15, ease } },
  },
  pageEnter: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
  },
} satisfies Record<string, Variants>;
