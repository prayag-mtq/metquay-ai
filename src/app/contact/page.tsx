import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactFormFromUrl } from "@/components/contact/ContactFormFromUrl";
import { Container } from "@/components/ui/Container";
import { Faq } from "@/components/ui/Faq";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { addressLine, phoneHref, site } from "@/config/site";
import { contact } from "@/content/pages/contact";
import { faq } from "@/content/pages/home";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to the Metquay team about calibration management software, a free trial, migration or integrations.",
  path: "/contact",
});

const details = [
  { icon: Mail, label: site.contactEmail, href: `mailto:${site.contactEmail}` },
  { icon: Phone, label: site.phone, href: phoneHref },
  { icon: CalendarDays, label: "Book a demo", href: site.meetingUrl, external: true },
  { icon: MapPin, label: addressLine },
];

export default function ContactPage() {
  return (
    <>
      <Container className="grid gap-10 pt-12 pb-16 md:pt-16 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <Pill>{contact.eyebrow}</Pill>
          <h1 className="mt-5 text-h1">{contact.title}</h1>
          <p className="mt-4 text-body-lg text-muted">{contact.lead}</p>
          <ul className="mt-8 space-y-4">
            {details.map(({ icon: Icon, label, href, external }) => (
              <li key={label} className="flex items-start gap-3 text-body text-muted">
                <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-purple" />
                {href ? (
                  <a
                    href={href}
                    className="hover:text-lime"
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <section
          aria-label="Write us a message"
          className="relative rounded-3xl border border-border bg-card p-6 md:p-8"
        >
          <ContactFormFromUrl endpoint={site.contactEndpoint} />
        </section>
      </Container>
      <Section id="faq" labelledBy="faq-title" className="border-t border-border">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 id="faq-title" className="text-h2">
            {faq.title}
          </h2>
          <Faq items={faq.items} />
        </Container>
      </Section>
    </>
  );
}
