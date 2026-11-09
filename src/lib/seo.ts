import type { Metadata } from "next";

import { absoluteUrl, site } from "@/config/site";

import type { Post } from "./post";

export const OG_IMAGE = { url: "/og/default.png", width: 1200, height: 630, alt: site.name };

type PageMeta = {
  title: string;
  image?: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle,
  image,
  ...times
}: PageMeta): Metadata {
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : [OG_IMAGE];
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      images,
      ...(type === "article" && times),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [images[0].url] },
  };
}

const organizationId = `${site.url}/#organization`;

export const jsonLd = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.legalName,
    alternateName: ["Metquay", site.name],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/logo.png"),
    email: site.contactEmail,
    telephone: site.phone,
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.linkedin, site.social.youtube],
  }),

  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl("/"),
    publisher: { "@id": organizationId },
  }),

  softwareApplication: () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Calibration management software",
    operatingSystem: "Web, iOS, Android (offline-capable PWA)",
    description: site.description,
    url: absoluteUrl("/"),
    publisher: { "@id": organizationId },
    featureList: [
      "ISO/IEC 17025 compliant calibration management",
      "FDA 21 CFR Part 11 audit trail and electronic signatures",
      "Customer portal",
      "Smart calibration worksheets with uncertainty calculation",
      "Offline-first mobile app",
      "Certificate and label designer",
      "AI calibration interval optimization",
      "ERP integrations: Odoo, NetSuite, QuickBooks, Dynamics 365, Business Central, Xero",
      "Fluke MET/CAL and metrology.net integration",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial" },
  }),

  webPage: ({
    title,
    description,
    path,
    updated,
  }: {
    title: string;
    description: string;
    path: string;
    updated: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    dateModified: updated,
    isPartOf: { "@type": "WebSite", url: absoluteUrl("/") },
    about: { "@type": "Thing", name: "Calibration management software" },
    publisher: { "@id": organizationId },
  }),

  definedTermSet: (terms: { id: string; term: string; definition: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Calibration and metrology glossary",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": absoluteUrl(`/glossary#${t.id}`),
      name: t.term,
      description: t.definition,
      url: absoluteUrl(`/glossary#${t.id}`),
    })),
  }),

  faqPage: (items: { q: string; a: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }),

  breadcrumbs: (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }),

  blogPosting: (post: Post, image = absoluteUrl(OG_IMAGE.url)) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    articleSection: post.category,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  }),
};
