import Image from "next/image";

import { cn } from "@/lib/cn";

type ScreenshotProps = { src: string; alt: string; width: number; height: number; className?: string };

export function Screenshot({ alt, className, ...image }: ScreenshotProps) {
  return (
    <Image
      {...image}
      alt={alt}
      sizes="(min-width: 1024px) 680px, 100vw"
      className={cn("h-auto w-full rounded-2xl border border-border shadow-2xl shadow-black/60", className)}
    />
  );
}
