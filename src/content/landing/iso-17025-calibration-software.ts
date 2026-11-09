import type { LandingPage } from "./types";

export default {
  slug: "iso-17025-calibration-software",
  keyword: "ISO 17025 Calibration Software",
  group: "Compliance",
  eyebrow: "ISO/IEC 17025:2017",
  title: "ISO 17025 Calibration Software, Mapped to the Standard",
  metaTitle: "ISO 17025 Calibration Software for Accredited Labs",
  metaDescription:
    "How metquay.ai supports ISO/IEC 17025:2017 clause by clause: equipment, traceability, technical records, uncertainty, reporting and control of data.",
  summary:
    "metquay.ai is ISO 17025 calibration software built for accredited labs. It supports the clauses assessors check most: equipment records and calibration status, metrological traceability, technical records, evaluation of measurement uncertainty, reporting of results on certificates, and control of data, with every change kept in an immutable, version-pinned audit trail.",
  updated: "2026-11-07",
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
} satisfies LandingPage;
