import type { LandingPage } from "./types";

export default {
  slug: "calibration-certificate-software",
  keyword: "Calibration Certificate Software",
  group: "Workflow",
  eyebrow: "Certificates & labels",
  title: "Calibration Certificate Software for Accredited Certificates",
  metaTitle: "Calibration Certificate Software: Certificates & Labels",
  metaDescription:
    "Generate accredited PDF/A calibration certificates and QR-coded labels from approved data, with drag-and-drop designers, versioned re-issue and portal delivery.",
  summary:
    "Calibration certificate software generates calibration certificates from recorded measurement data instead of retyped documents. metquay.ai produces a data-bound PDF/A certificate and a QR-coded label the moment a calibration is approved, uses drag-and-drop designers for both, re-issues a new version when a record changes, and delivers certificates to the customer portal or by email.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What a calibration certificate has to show",
      body: [
        "Under ISO/IEC 17025, a calibration certificate identifies the lab, the customer and the item calibrated, the method used, the date of calibration and the date of issue. It reports the results with their units and measurement uncertainty, shows how the results are metrologically traceable, and names the person who authorized the certificate. If the lab states conformity to a specification, the certificate also has to say which decision rule was applied.",
        "Every one of those fields already exists somewhere in the calibration record. Retyping them into a document is where transcription errors come from.",
      ],
      link: { label: "Measurement uncertainty explained", href: "/glossary#measurement-uncertainty" },
    },
    {
      heading: "Generated from approved data",
      body: [
        "In metquay.ai, the certificate is bound to the worksheet data. When the Approved Signatory signs off, with re-authentication, the certificate and label are generated from the same readings, uncertainty and reference standards the reviewer just checked. Nothing is copied by hand.",
      ],
      link: { label: "Certificates in the workflow", href: "/solutions#step-07" },
    },
    {
      heading: "Designing certificates and labels",
      body: [
        "Drag-and-drop designers let the lab lay out certificate and label templates to its own format. Label templates take dynamic fields, such as the certificate number, calibration date, due date and technician, which fill in from the current work, and labels can be printed in bulk in the lab or onsite.",
        "Each label carries a QR code that links back to the live asset record.",
      ],
      link: {
        label: "How calibration labels are built",
        href: "/blog/revolutionize-your-calibration-labelling-create-diy-calibration-labels-stickers-in-metquay",
      },
    },
    {
      heading: "Versioning and re-issue",
      body: [
        "Issued certificates and approved records are locked. If a record has to change, the change creates a new revision instead of overwriting history, and the certificate is re-issued automatically as a new version. The audit trail keeps who changed what, when and why.",
      ],
    },
    {
      heading: "Delivery to the customer",
      body: [
        "Certificates go to the customer portal and by email in one click. Customers download them as soon as they are issued and see only the certificates the lab shares with them. A certificate.issued webhook event lets other systems react to each new certificate.",
      ],
      link: { label: "API and webhooks", href: "/ecosystem#api" },
    },
  ],
  faq: [
    {
      id: "what-is-calibration-certificate-software",
      q: "What is calibration certificate software?",
      a: "Calibration certificate software creates calibration certificates and labels from the recorded calibration data, using templates, so results, uncertainty and traceability are reported without retyping.",
    },
    {
      id: "what-must-a-calibration-certificate-include",
      q: "What must a calibration certificate include?",
      a: "Under ISO/IEC 17025, it identifies the lab, customer, item and method, gives the calibration and issue dates, reports results with units and measurement uncertainty, states traceability, and names who authorized it. Conformity statements must name the decision rule.",
    },
    {
      id: "why-pdf-a-calibration-certificates",
      q: "Why are calibration certificates issued as PDF/A?",
      a: "PDF/A is the ISO standard for long-term archiving of PDF documents. It embeds everything needed to display the file, so a certificate still renders the same way years later, when it may be needed as audit evidence.",
    },
    {
      id: "correct-issued-calibration-certificate",
      q: "How do you correct an issued calibration certificate?",
      a: "Issue an amended certificate that is clearly identified as a new version, and keep the original. In metquay.ai, a change to an approved record creates a new revision and the certificate is re-issued automatically.",
    },
    {
      id: "print-calibration-labels",
      q: "Can the software print calibration labels too?",
      a: "Yes. metquay.ai generates a QR-coded label with each certificate, from templates with dynamic fields, and works with Zebra label printers. Labels can be printed in bulk.",
    },
  ],
  related: [
    { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
    { label: "Measurement uncertainty software", href: "/measurement-uncertainty-software" },
    { label: "Calibration management software", href: "/calibration-management-software" },
    {
      label: "Digital certification in calibration labs",
      href: "/blog/digital-transformation-of-certification-and-documentation-processes-in-calibration-labs",
    },
  ],
} satisfies LandingPage;
