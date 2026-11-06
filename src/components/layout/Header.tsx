"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { isActive } from "@/lib/nav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-(--header-height) border-b transition-colors duration-200",
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-small font-medium transition-colors",
                      active ? "text-text" : "text-subtle hover:text-text",
                    )}
                  >
                    {item.label}
                    {active && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-lime" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button href={site.ctas.nav.href} size="sm" className="hidden sm:inline-flex">
            {site.ctas.nav.label}
          </Button>
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
