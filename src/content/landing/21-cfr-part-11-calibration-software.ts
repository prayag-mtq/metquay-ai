import type { LandingPage } from "./types";

export default {
  slug: "21-cfr-part-11-calibration-software",
  keyword: "21 CFR Part 11 Calibration Software",
  group: "Compliance",
  eyebrow: "FDA 21 CFR Part 11 · GAMP 5",
  title: "21 CFR Part 11 Calibration Software for Regulated Labs",
  metaTitle: "21 CFR Part 11 Compliant Calibration Software",
  metaDescription:
    "Calibration software with 21 CFR Part 11 controls: secure audit trails, re-authenticated e-signatures, record locking and GAMP 5 validation.",
  summary:
    "metquay.ai is 21 CFR Part 11 calibration software for FDA-regulated labs. It keeps secure, computer-generated, time-stamped audit trails, links electronic signatures to their records with re-authentication, locks approved records, enforces role-based access and provides validation documentation so customers can validate the system under GAMP 5.",
  updated: "2026-11-07",
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
} satisfies LandingPage;
