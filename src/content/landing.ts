type LandingSection = {
  heading: string;
  body: string[];
  points?: string[];
  link?: { label: string; href: string };
};

export type LandingPage = {
  slug: string;
  keyword: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  updated: string;
  sections: LandingSection[];
  faq: { id: string; q: string; a: string }[];
  related: { label: string; href: string }[];
};

const UPDATED = "2026-11-07";

export const landingPages: LandingPage[] = [
  {
    slug: "calibration-management-software",
    keyword: "Calibration Management Software",
    eyebrow: "Calibration management software",
    title: "Calibration Management Software for ISO/IEC 17025 Labs",
    metaTitle: "Calibration Management Software: Features, Compliance & FAQ",
    metaDescription:
      "metquay.ai is calibration management software for the full lab workflow: assets, scheduling, worksheets, uncertainty, certificates and audit trails.",
    summary:
      "metquay.ai is calibration management software for ISO/IEC 17025 calibration labs. It tracks every asset and due date, schedules work against technician capacity, captures readings in smart worksheets that calculate uncertainty, generates accredited certificates on approval, and keeps an immutable audit trail that meets FDA 21 CFR Part 11.",
    updated: UPDATED,
    sections: [
      {
        heading: "What calibration management software does",
        body: [
          "Calibration management software replaces spreadsheets, paper worksheets and disconnected tools with one system of record for a calibration program. It holds every asset, its calibration history and its next due date, and it controls how each calibration is performed, reviewed and reported.",
          "For an accredited lab, the software also has to prove what happened: which reference standard was used, which procedure version ran, who approved the result and when. That evidence is what an ISO/IEC 17025 assessor asks to see.",
        ],
      },
      {
        heading: "The complete calibration workflow in one platform",
        body: [
          "metquay.ai follows an instrument from the calibration due alert to delivery. Every step is connected, so data entered once flows through to the certificate and the invoice.",
        ],
        points: [
          "Due alerts: tiered reminders at 30 days, 7 days and overdue, by email and in-app",
          "Customer portal: requests, quotes, live job status and certificate downloads",
          "Receiving & scheduling: barcode intake and capacity-aware scheduling",
          "Smart worksheets: unit conversion, validation, pass/fail and uncertainty calculated automatically",
          "Offline capture: an offline-first app that syncs with conflict resolution",
          "Review: approval gates with re-authenticated digital signatures",
          "Certificates & labels: PDF/A certificates and QR-coded labels generated on approval",
          "Shipping: pack lists, carrier tracking and chain of custody",
        ],
        link: { label: "Follow the end-to-end workflow", href: "/solutions" },
      },
      {
        heading: "Built for every role in the lab",
        body: [
          "Lab managers see live workload, urgent jobs and overdue assignments. Quality managers get an immutable, version-pinned audit trail. Technicians capture readings anywhere, even offline. IT teams get role-based permissions, multi-workspace switching, a REST API and webhooks. Portfolio operators see every site on one pane.",
        ],
      },
      {
        heading: "Compliance designed in, not bolted on",
        body: [
          "Every measurement, procedure version, signature and approval is captured in an immutable audit trail. Digital signatures require re-authentication for 21 CFR Part 11, certificates are produced as PDF/A, and validation documentation is available for GAMP 5.",
        ],
        link: { label: "See how metquay.ai supports ISO/IEC 17025", href: "/iso-17025-calibration-software" },
      },
      {
        heading: "Connected to the systems you already run",
        body: [
          "metquay.ai syncs customers, assets, invoices and payments with Odoo, Oracle NetSuite, QuickBooks, Microsoft Dynamics 365, Business Central and Xero. It imports Fluke MET/CAL® runs through MET/CONNECT® and pulls orders from metrology.net.",
        ],
        link: { label: "Browse all integrations", href: "/ecosystem" },
      },
      {
        heading: "AI where it earns its place",
        body: [
          "AI interval optimization proposes adaptive calibration intervals from your own history. It rolls out in staged phases, and every change needs a recommendation report, a risk assessment, QA Manager approval and an immutable audit entry. A person stays in the loop for every decision.",
        ],
      },
    ],
    faq: [
      {
        id: "what-is",
        q: "What is calibration management software?",
        a: "Calibration management software is a system of record for a calibration program. It tracks assets and due dates, schedules and records calibrations, calculates uncertainty, issues certificates and keeps the audit trail that accreditation bodies and regulators review.",
      },
      {
        id: "who-for",
        q: "Who is metquay.ai built for?",
        a: "metquay.ai is built for commercial and in-house calibration labs working to ISO/IEC 17025, including regulated life-science sites under FDA 21 CFR Part 11, from single-site labs to multi-site portfolios.",
      },
      {
        id: "offline",
        q: "Can technicians use it without an internet connection?",
        a: "Yes. metquay.ai is an offline-first PWA. Worksheets, assets and procedures are stored locally, and changes queue in an outbox that syncs automatically with conflict resolution when connectivity returns.",
      },
      {
        id: "uncertainty",
        q: "Does it calculate measurement uncertainty?",
        a: "Yes. Smart worksheets use an expression engine that handles unit conversion, validation rules and uncertainty, with color-coded pass/fail results and live charts on every reading.",
      },
      {
        id: "erp",
        q: "Which ERP and accounting systems does it integrate with?",
        a: "Odoo, Oracle NetSuite, QuickBooks Online and Desktop, Microsoft Dynamics 365, Business Central and Xero. REST APIs and webhooks cover anything custom.",
      },
      {
        id: "migration",
        q: "How long does it take to move from another calibration system?",
        a: "Most labs go live in 10 to 20 weeks with a structured, parallel-run migration. Metquay supports moves from Qualer, GagePack, IndySoft and MET/TEAM with per-platform playbooks.",
      },
      {
        id: "hosting",
        q: "Where is the data hosted?",
        a: "metquay.ai runs on AWS. Customer data is stored in the United States by default, with EU and Asia-Pacific regions and dedicated private-cloud deployments available on request.",
      },
      {
        id: "trial",
        q: "Is there a free trial?",
        a: "Yes. You can start a free trial with no credit card, or talk to an expert who will walk you through metquay.ai on your own instruments and procedures.",
      },
    ],
    related: [
      { label: "ISO/IEC 17025 calibration software", href: "/iso-17025-calibration-software" },
      { label: "21 CFR Part 11 calibration software", href: "/21-cfr-part-11-calibration-software" },
      { label: "Migrating calibration software", href: "/calibration-software-migration" },
      { label: "Calibration glossary", href: "/glossary" },
    ],
  },
  {
    slug: "iso-17025-calibration-software",
    keyword: "ISO 17025 Calibration Software",
    eyebrow: "ISO/IEC 17025:2017",
    title: "ISO 17025 Calibration Software, Mapped to the Standard",
    metaTitle: "ISO 17025 Calibration Software for Accredited Labs",
    metaDescription:
      "How metquay.ai supports ISO/IEC 17025:2017 clause by clause: equipment, traceability, technical records, uncertainty, reporting and control of data.",
    summary:
      "metquay.ai is ISO 17025 calibration software built for accredited labs. It supports the clauses assessors check most: equipment records and calibration status, metrological traceability, technical records, evaluation of measurement uncertainty, reporting of results on certificates, and control of data, with every change kept in an immutable, version-pinned audit trail.",
    updated: UPDATED,
    sections: [
      {
        heading: "6.4 Equipment",
        body: [
          "Every asset carries its identification, calibration status, history and next due date. Tiered reminders at 30 days, 7 days and overdue keep equipment from being used out of calibration, and QR-coded labels link back to the live asset record.",
        ],
      },
      {
        heading: "6.5 Metrological traceability",
        body: [
          "Worksheets link each calibration to the reference assets used, building a traceability chain from reference standard to certificate. Reference standards carry their own calibration status, so an expired standard is visible before it is used.",
        ],
      },
      {
        heading: "7.5 Technical records",
        body: [
          "Readings, As Found and As Left data, the procedure version, the technician and the reviewer are recorded with each work. Records are auto-saved, version-pinned and kept as immutable snapshots, so the original observations can always be reconstructed.",
        ],
      },
      {
        heading: "7.6 Evaluation of measurement uncertainty",
        body: [
          "The worksheet expression engine calculates uncertainty alongside each reading, with unit conversion and validation rules. Pass/fail decisions are color-coded and charted live, so technicians and reviewers see the result and its uncertainty together.",
        ],
        link: { label: "Uncertainty terms explained", href: "/glossary#measurement-uncertainty" },
      },
      {
        heading: "7.8 Reporting of results",
        body: [
          "Accredited certificates are generated from the approved data as PDF/A, using drag-and-drop certificate designers. Certificates are versioned, re-issued automatically when a record changes, and delivered to the customer portal or by email.",
        ],
      },
      {
        heading: "7.11 Control of data and information management",
        body: [
          "Role-based permissions control who can approve a calibration or release a certificate. Every change is logged with who, when and why, and approved records are locked so changes create a new revision instead of overwriting history.",
        ],
        link: { label: "Read the security overview", href: "/security" },
      },
    ],
    faq: [
      {
        id: "accredit",
        q: "Does using ISO 17025 software make a lab accredited?",
        a: "No. Accreditation is granted to the lab by an accreditation body. Software like metquay.ai supports the records, traceability, uncertainty and reporting requirements the assessor reviews, which makes demonstrating conformity faster.",
      },
      {
        id: "edition",
        q: "Which edition of ISO/IEC 17025 does metquay.ai support?",
        a: "metquay.ai is designed around ISO/IEC 17025:2017, the current edition, including its requirements for metrological traceability, measurement uncertainty, technical records and control of data.",
      },
      {
        id: "audit-time",
        q: "How does the software help during an assessment?",
        a: "Assessors can follow any certificate back to the readings, reference standards, procedure version and approvals behind it. Because records are version-pinned and immutable, the evidence is available without assembling spreadsheets.",
      },
      {
        id: "checklist",
        q: "Is there an ISO/IEC 17025 readiness checklist?",
        a: "Yes. The ISO/IEC 17025:2017 Audit Prep Playbook covers clause-by-clause preparation, a 5-phase timeline and the 10 most common findings to prevent. You can request it free from the resources page.",
      },
      {
        id: "regulated",
        q: "Can the same system meet FDA 21 CFR Part 11 as well?",
        a: "Yes. metquay.ai combines ISO/IEC 17025 support with 21 CFR Part 11 controls: secure audit trails, re-authenticated electronic signatures and validation documentation for GAMP 5.",
      },
    ],
    related: [
      { label: "Calibration management software", href: "/calibration-management-software" },
      { label: "21 CFR Part 11 calibration software", href: "/21-cfr-part-11-calibration-software" },
      { label: "Free ISO/IEC 17025 playbook", href: "/resources#6-audit" },
      { label: "Calibration glossary", href: "/glossary" },
    ],
  },
  {
    slug: "21-cfr-part-11-calibration-software",
    keyword: "21 CFR Part 11 Calibration Software",
    eyebrow: "FDA 21 CFR Part 11 · GAMP 5",
    title: "21 CFR Part 11 Calibration Software for Regulated Labs",
    metaTitle: "21 CFR Part 11 Compliant Calibration Software",
    metaDescription:
      "Calibration software with 21 CFR Part 11 controls: secure audit trails, re-authenticated e-signatures, record locking and GAMP 5 validation.",
    summary:
      "metquay.ai is 21 CFR Part 11 calibration software for FDA-regulated labs. It keeps secure, computer-generated, time-stamped audit trails, links electronic signatures to their records with re-authentication, locks approved records, enforces role-based access and provides validation documentation so customers can validate the system under GAMP 5.",
    updated: UPDATED,
    sections: [
      {
        heading: "Audit trails — §11.10(e)",
        body: [
          "metquay.ai records who created, changed or deleted data, with old and new values, the time and the reason for change. Users cannot edit or delete audit entries.",
        ],
      },
      {
        heading: "Electronic signatures — §11.50 and §11.200",
        body: [
          "Signatures are linked to their record and show the signer's name, the date and time, and the meaning of the signature, such as reviewed or approved. Every signature requires re-authentication.",
        ],
      },
      {
        heading: "Record integrity and access — §11.10(c) and (d)",
        body: [
          "Approved calibration records and issued certificates are locked, so changes create a new revision rather than overwriting history. Role-based permissions reach down to module and action level, with SSO, multi-factor authentication and automatic session timeout.",
        ],
      },
      {
        heading: "Validation — §11.10(a) and GAMP 5",
        body: [
          "Metquay provides release notes and validation documentation to help customers validate metquay.ai in their environment. The FDA Validation Playbook covers the full IQ/OQ/PQ protocol aligned to 21 CFR Part 11, EU Annex 11 and GAMP 5.",
        ],
        link: { label: "Request the FDA Validation Playbook", href: "/resources#5-validate" },
      },
    ],
    faq: [
      {
        id: "compliant",
        q: "Is metquay.ai 21 CFR Part 11 compliant?",
        a: "metquay.ai provides the technical controls Part 11 requires: audit trails, re-authenticated electronic signatures, record locking and access control. Compliance also depends on the customer's procedures and validation, which Metquay supports with documentation.",
      },
      {
        id: "annex-11",
        q: "Does it also cover EU Annex 11?",
        a: "Yes. The same audit trail, signature and validation controls support EU GMP Annex 11, and the FDA Validation Playbook is aligned to both 21 CFR Part 11 and Annex 11.",
      },
      {
        id: "ai-changes",
        q: "How are AI-suggested calibration interval changes controlled?",
        a: "Every AI-driven interval change needs a recommendation report, a risk assessment, QA Manager approval and an immutable audit entry before it takes effect, rolled out in staged phases.",
      },
      {
        id: "data",
        q: "How is regulated data protected?",
        a: "Data is encrypted in transit with TLS 1.2 or higher and at rest with AES-256, isolated per tenant, backed up daily for 35 days, and hosted on AWS in the region you choose.",
      },
      {
        id: "validation-time",
        q: "Who validates the system?",
        a: "The regulated customer validates the system in their environment, as Part 11 requires. Metquay supplies the release notes and validation documentation that make the IQ/OQ/PQ effort shorter.",
      },
    ],
    related: [
      { label: "Calibration management software", href: "/calibration-management-software" },
      { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
      { label: "Security & compliance details", href: "/security" },
      { label: "Calibration glossary", href: "/glossary" },
    ],
  },
  {
    slug: "calibration-software-migration",
    keyword: "Calibration Software Migration",
    eyebrow: "Qualer · GagePack · IndySoft · MET/TEAM",
    title: "Calibration Software Migration Without Losing Compliance",
    metaTitle: "Calibration Software Migration: Qualer, GagePack, IndySoft",
    metaDescription:
      "Move from Qualer, GagePack, IndySoft or MET/TEAM to metquay.ai in 10–20 weeks with a parallel-run migration that keeps records intact.",
    summary:
      "Calibration software migration to metquay.ai takes most labs 10 to 20 weeks. Metquay runs a structured, parallel-run migration rather than a big-bang cutover, with per-platform playbooks for Qualer, GagePack, IndySoft and MET/TEAM, so asset history, certificates and compliance continuity carry over intact.",
    updated: UPDATED,
    sections: [
      {
        heading: "Why labs switch",
        body: [
          "Labs move when their current tool can no longer keep up: certificates take half a day, technicians cannot work offline, ERP data is keyed twice, or audit preparation means rebuilding evidence from spreadsheets. metquay.ai brings those steps into one connected, audit-ready system.",
        ],
      },
      {
        heading: "A parallel run, not a big-bang cutover",
        body: [
          "The old and new systems run side by side while data is migrated and verified. Nothing is switched off until the lab has confirmed that assets, history and certificates match, which protects compliance continuity through the move.",
        ],
        points: [
          "Plan: scope, data mapping and the per-platform playbook",
          "Migrate: assets, calibration history, procedures and customers",
          "Verify: parallel run with side-by-side checks",
          "Go live: cut over once the records match",
        ],
      },
      {
        heading: "Supported source systems",
        body: [
          "Metquay has per-platform playbooks for Qualer, GagePack, IndySoft and MET/TEAM®. For a single-site lab, GagePack to metquay.ai can be completed in about 10 weeks.",
        ],
        link: { label: "Request the Master Migration Playbook", href: "/resources#2-migrate" },
      },
      {
        heading: "Connect the rest of your stack",
        body: [
          "During migration, metquay.ai is connected to your ERP and metrology tools, so invoices, customers and Fluke MET/CAL® runs flow automatically from day one.",
        ],
        link: { label: "See integrations", href: "/ecosystem" },
      },
    ],
    faq: [
      {
        id: "how-long",
        q: "How long does a calibration software migration take?",
        a: "Most labs go live in 10 to 20 weeks with a structured, parallel-run migration. Smaller single-site labs moving from GagePack can finish in about 10 weeks.",
      },
      {
        id: "history",
        q: "Will we keep our calibration history and certificates?",
        a: "Yes. Asset records, calibration history and certificates are migrated and verified during the parallel run, so compliance continuity is maintained and nothing is switched off until the records match.",
      },
      {
        id: "sources",
        q: "Which systems can we migrate from?",
        a: "Metquay supports migrations from Qualer, GagePack, IndySoft and MET/TEAM with per-platform playbooks. Other sources, including spreadsheets, can be mapped during planning.",
      },
      {
        id: "downtime",
        q: "Does the lab have to stop work during the move?",
        a: "No. Because the old and new systems run in parallel, technicians keep working while data is migrated and verified, and cutover happens only after the lab signs off.",
      },
      {
        id: "multi-site",
        q: "Can multi-site labs migrate in stages?",
        a: "Yes. The migration playbook handles multi-site parallel runs, and metquay.ai's multi-workspace architecture gives every site independence with consolidated visibility for the portfolio.",
      },
    ],
    related: [
      { label: "Calibration management software", href: "/calibration-management-software" },
      { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
      { label: "All implementation playbooks", href: "/resources" },
      { label: "Talk to a migration expert", href: "/contact?intent=expert" },
    ],
  },
];

export const getLandingPage = (slug: string) => landingPages.find((page) => page.slug === slug) ?? null;
