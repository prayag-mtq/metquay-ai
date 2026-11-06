import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site, type NavLink } from "@/config/site";
import { Logo } from "./Logo";

const badges = ["ISO 17025", "21 CFR Part 11", "GAMP-5"];

function FooterLink({ link }: { link: NavLink }) {
  const className = "text-small text-subtle transition-colors hover:text-text";
  return link.external ? (
    <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="max-w-xs space-y-5">
          <Logo />
          <p className="text-small text-subtle">Asset-centric, human-verified, AI-supercharged.</p>
          <ul className="flex flex-wrap gap-2" aria-label="Compliance">
            {badges.map((badge) => (
              <li key={badge} className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {site.footer.map((column) => (
            <div key={column.heading}>
              <h2 className="mb-4 text-xs font-semibold tracking-wide text-muted uppercase">{column.heading}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>
      <Container>
        <div className="flex flex-col gap-4 border-t border-border py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {site.legal.map((link) => (
              <li key={link.href}>
                <FooterLink link={link} />
              </li>
            ))}
            <li>
              <FooterLink link={{ label: "LinkedIn", href: site.social.linkedin, external: true }} />
            </li>
            <li>
              <FooterLink link={{ label: "YouTube", href: site.social.youtube, external: true }} />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
