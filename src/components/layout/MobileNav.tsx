"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { isActive } from "@/lib/nav";

export function MobileNav({ pathname }: { pathname: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        ref={toggle}
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="grid size-10 place-items-center rounded-full border border-border text-text lg:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <dialog
        ref={dialog}
        aria-label="Menu"
        onClose={() => toggle.current?.focus()}
        onClick={(event) => event.target === dialog.current && close()}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-sm bg-surface p-0 text-text backdrop:bg-black/70 open:flex open:flex-col"
      >
        <div className="flex h-(--header-height) items-center justify-end px-5">
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="grid size-10 place-items-center rounded-full border border-border"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 px-5">
          <ul className="flex flex-col">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block border-b border-border py-4 text-h4 font-semibold",
                      active ? "text-lime" : "text-text",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-5">
          <Button href={site.ctas.nav.href} onClick={close} className="w-full">
            {site.ctas.nav.label}
          </Button>
        </div>
      </dialog>
    </>
  );
}
