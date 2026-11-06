import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const widths = { page: "max-w-[1200px]", reading: "max-w-[720px]" };

type ContainerProps = { width?: keyof typeof widths; className?: string; children: ReactNode };

export function Container({ width = "page", className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 md:px-8", widths[width], className)}>{children}</div>;
}
