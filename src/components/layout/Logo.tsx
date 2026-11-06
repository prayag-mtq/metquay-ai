import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label={`${site.name} home`}>
      <Image src="/brand/logo.png" alt="" width={461} height={64} className="h-6 w-auto" priority />
    </Link>
  );
}
