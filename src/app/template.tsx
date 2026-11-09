"use client";

import { m } from "motion/react";
import { useEffect, useState } from "react";

import { presets } from "@/lib/motion";

let isFirstPage = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => !isFirstPage);

  useEffect(() => {
    isFirstPage = false;
  }, []);

  return (
    <m.div initial={animate ? "initial" : false} animate="animate" variants={presets.pageEnter}>
      {children}
    </m.div>
  );
}
