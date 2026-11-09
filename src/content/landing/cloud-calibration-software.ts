import type { LandingPage } from "./types";

export default {
  slug: "cloud-calibration-software",
  keyword: "Cloud Calibration Software",
  group: "Platform",
  eyebrow: "Web-based · Hosted on AWS",
  title: "Cloud Calibration Software: Hosting, Security and Access",
  metaTitle: "Cloud Calibration Software: Hosting, Security & Backups",
  metaDescription:
    "metquay.ai is cloud calibration software hosted on AWS, with regional data residency, AES-256 encryption, daily backups and SSO, compared with on-premise.",
  summary:
    "metquay.ai is cloud calibration software: a web-based platform hosted on AWS that labs use from the browser, the customer portal and an offline-first app. Data is stored in the United States by default, with EU and Asia-Pacific regions on request, encrypted in transit and at rest, and backed up daily, so the lab runs no servers of its own.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What cloud calibration software means",
      body: [
        "Cloud calibration software runs on infrastructure the vendor operates, and the lab reaches it over the internet. There is nothing to install on a server, no database to patch and no backup tapes to rotate. Technicians, reviewers, managers and customers sign in to the same system from wherever they are.",
        "For a calibration lab the questions are practical: where the records are stored, who can read them, how they are backed up, and whether the system stays available on the day of an assessment.",
      ],
    },
    {
      heading: "Where metquay.ai runs",
      body: [
        "metquay.ai is hosted on AWS, whose data centers hold SOC 2 Type II and ISO/IEC 27001 certifications. Services run across multiple availability zones with health monitoring and automatic failover, with a target of 99.5% monthly uptime.",
      ],
      points: [
        "Customer data stored in the United States by default",
        "EU and Asia-Pacific regions available on request",
        "Dedicated or private-cloud deployments for enterprise customers",
        "Each customer's data logically separated, with dedicated databases on enterprise plans",
      ],
    },
    {
      heading: "How the data is protected",
      body: [
        "All traffic to the web app, customer portal, APIs and offline app uses TLS 1.2 or higher with HSTS enforced. Databases, certificate files, uploaded spreadsheets, attachments and backups are encrypted at rest with AES-256, with keys held in a cloud KMS and rotated annually.",
        "Backups run daily, are encrypted, kept for 35 days and stored in a separate availability zone or region. The recovery point objective is 24 hours, the recovery time objective is 8 hours, and restores are tested quarterly.",
      ],
      link: { label: "Read the full security overview", href: "/security" },
    },
    {
      heading: "Access from anywhere, under your control",
      body: [
        "Access is controlled by role-based permissions down to module and action level. Labs can sign in through SAML 2.0 or OpenID Connect single sign-on with Azure AD (Entra ID), Okta or Google Workspace, and enforce multi-factor authentication, password policies, account lockout and session timeout. Customer portal users see only the assets and certificates their lab chooses to share.",
        "Being in the cloud does not mean needing a connection at all times. Technicians keep working offline, and their changes sync when they reconnect.",
      ],
      link: { label: "Onsite and offline calibration", href: "/onsite-calibration-software" },
    },
    {
      heading: "Cloud or on-premise",
      body: [
        "An on-premise system puts the hardware, operating system patches, database backups, disaster recovery and security monitoring on the lab's own IT team. A cloud system moves that work to the vendor, and the lab's job becomes checking that the vendor does it well: encryption, backups, recovery targets, patching windows and penetration testing.",
        "Whichever model you choose, confirm in the service agreement that the lab owns its data, where that data is stored and how it is deleted at the end of the contract. For metquay.ai, customer data is deleted from production within 90 days of termination and from backups as they expire.",
      ],
    },
  ],
  faq: [
    {
      id: "what-is",
      q: "What is cloud calibration software?",
      a: "Cloud calibration software is calibration management software hosted by the vendor and used through a web browser. The lab does not run its own servers; hosting, backups, security patching and updates are handled by the vendor.",
    },
    {
      id: "hosting",
      q: "Where is metquay.ai hosted?",
      a: "metquay.ai runs on AWS. Customer data is stored in the United States by default, with EU and Asia-Pacific regions and dedicated private-cloud deployments available on request.",
    },
    {
      id: "secure",
      q: "Is cloud calibration software secure enough for regulated labs?",
      a: "It depends on the controls. metquay.ai encrypts data with TLS 1.2+ in transit and AES-256 at rest, isolates each tenant, keeps a Part 11 audit trail, and has independent penetration tests annually with a summary available under NDA.",
    },
    {
      id: "backups",
      q: "How often is calibration data backed up?",
      a: "Daily. Backups are encrypted, kept for 35 days and stored in a separate availability zone or region, with a 24-hour recovery point objective and an 8-hour recovery time objective.",
    },
    {
      id: "updates",
      q: "How are updates handled in a validated environment?",
      a: "Metquay provides release notes and validation documentation, so regulated customers can assess changes and keep their own validation of metquay.ai current under GAMP 5.",
    },
  ],
  related: [
    { label: "Calibration management software", href: "/calibration-management-software" },
    { label: "21 CFR Part 11 calibration software", href: "/21-cfr-part-11-calibration-software" },
    { label: "Security & compliance details", href: "/security" },
    {
      label: "Moving a calibration lab to the cloud",
      href: "/blog/apprehensions-in-migrating-calibration-labs-to-cloud",
    },
  ],
} satisfies LandingPage;
