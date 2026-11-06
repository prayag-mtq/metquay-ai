import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Size = "md" | "sm";
type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200";
const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-body",
  sm: "h-9 px-4 text-small",
};
const variants: Record<Variant, string> = {
  primary: "bg-lime text-bg hover:bg-[#a6ff5c]",
  secondary: "border border-border-strong text-text hover:border-text hover:bg-white/5",
};

type Style = { size?: Size; variant?: Variant; className?: string };
type LinkProps = Style & { href: string; children: ReactNode } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >;
type NativeProps = Style & { href?: undefined; children: ReactNode } & Omit<ComponentProps<"button">, "className">;

export const buttonClass = ({ size = "md", variant = "primary", className }: Style) =>
  cn(base, sizes[size], variants[variant], className);

export function Button(props: LinkProps | NativeProps) {
  if (props.href !== undefined) {
    const { size, variant, className, ...rest } = props;
    return <Link className={buttonClass({ size, variant, className })} {...rest} />;
  }
  const { size, variant, className, type = "button", ...rest } = props;
  return <button type={type} className={buttonClass({ size, variant, className })} {...rest} />;
}
