import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardLinkProps = { href: string; className?: string; children: ReactNode; "aria-label"?: string };

export function CardLink({ href, className, children, ...rest }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-card-hover",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
