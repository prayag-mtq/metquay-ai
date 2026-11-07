export type NavLink = { label: string; href: string; external?: boolean };
export type FooterColumn = { heading: string; links: NavLink[] };

export const site = {
  name: "metquay.ai",
  legalName: "Metquay Inc.",
  url: "https://www.metquay.com",
  tagline: "Calibration operations platform",
  description:
    "Asset-centric calibration management software for ISO/IEC 17025 labs. Manage the complete process from customer portal to shipping, with offline workflows and AI built in.",
  contactEmail: "consulting@metquay.com",
  phone: "+1 971 340 9608",
  address: {
    street: "2018 156th Ave NE, Suite 237",
    city: "Bellevue",
    region: "WA",
    postalCode: "98007",
    country: "US",
  },
  contactEndpoint: null as string | null,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  },
  meetingUrl: "https://meetings-na2.hubspot.com/sandeep-nair/metquay-presentation",
  ctas: {
    trial: { label: "Start Free Trial", href: "/contact?intent=trial" },
    expert: { label: "Talk to an Expert", href: "/contact?intent=expert" },
    nav: { label: "Get Free Trial", href: "/contact?intent=trial" },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/metquay-inc/",
    youtube: "https://www.youtube.com/@metquay-calibrationmanagem67",
  },
  nav: [
    { label: "Product", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Resources", href: "/resources" },
    { label: "Company", href: "/company" },
    { label: "Blog", href: "/blog" },
  ] satisfies NavLink[],
  footer: [
    {
      heading: "Product",
      links: [
        { label: "Dashboard", href: "/#dashboard" },
        { label: "Worksheets", href: "/#worksheet" },
        { label: "Works & Scheduling", href: "/solutions#step-03" },
        { label: "Certificates", href: "/solutions#step-07" },
        { label: "Offline / PWA", href: "/solutions#step-05" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Due Alerts", href: "/solutions#step-01" },
        { label: "Customer Portal", href: "/solutions#step-02" },
        { label: "Receiving", href: "/solutions#step-03" },
        { label: "Traceability", href: "/solutions#step-06" },
        { label: "Shipping", href: "/solutions#step-08" },
      ],
    },
    {
      heading: "Ecosystem",
      links: [
        { label: "Integrations", href: "/ecosystem#integrations" },
        { label: "Fluke MET/CAL", href: "/ecosystem#fluke" },
        { label: "metrology.net", href: "/ecosystem#fluke" },
        { label: "API & Webhooks", href: "/ecosystem#api" },
      ],
    },
    {
      heading: "Guides",
      links: [
        { label: "Calibration management software", href: "/calibration-management-software" },
        { label: "ISO 17025 software", href: "/iso-17025-calibration-software" },
        { label: "21 CFR Part 11", href: "/21-cfr-part-11-calibration-software" },
        { label: "Migration", href: "/calibration-software-migration" },
        { label: "Glossary", href: "/glossary" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/company#about" },
        { label: "Careers", href: "https://www.linkedin.com/company/metquay-inc/", external: true },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ] satisfies FooterColumn[],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ] satisfies NavLink[],
};

export const absoluteUrl = (path: string) => (path === "/" ? `${site.url}/` : `${site.url}${path}`);
