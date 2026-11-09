import type { LandingPage } from "./types";

export default {
  slug: "calibration-management-software",
  keyword: "Calibration Management Software",
  group: "Platform",
  eyebrow: "Calibration management software",
  title: "Calibration Management Software for ISO/IEC 17025 Labs",
  metaTitle: "Calibration Management Software: Features, Compliance & FAQ",
  metaDescription:
    "metquay.ai is calibration management software for the full lab workflow: assets, scheduling, worksheets, uncertainty, certificates and audit trails.",
  summary:
    "metquay.ai is calibration management software for ISO/IEC 17025 calibration labs. It tracks every asset and due date, schedules work against technician capacity, captures readings in smart worksheets that calculate uncertainty, generates accredited certificates on approval, and keeps an immutable audit trail that meets FDA 21 CFR Part 11.",
  updated: "2026-11-07",
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
} satisfies LandingPage;
