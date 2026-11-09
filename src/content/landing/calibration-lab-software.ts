import type { LandingPage } from "./types";

export default {
  slug: "calibration-lab-software",
  keyword: "Calibration Lab Software",
  group: "Platform",
  eyebrow: "Commercial & in-house labs",
  title: "Calibration Lab Software for Commercial and In-House Labs",
  metaTitle: "Calibration Lab Software: From Request to Shipment",
  metaDescription:
    "Calibration lab software that runs the lab: customer portal, quotes, receiving, scheduling, worksheets, certificates, shipping and multi-site workspaces.",
  summary:
    "Calibration lab software runs the operations of a calibration laboratory, not just its instrument list. metquay.ai is calibration lab software for commercial and in-house labs: customer requests and quotes in a branded portal, barcode receiving, capacity-aware scheduling, smart worksheets, approval, certificates, shipping and ERP invoicing, with workspaces for every site.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What makes it lab software",
      body: [
        "An asset tracker answers one question: when is this instrument due? A calibration lab has to answer many more. Who sent it, what was quoted, where is it now, who is calibrating it, which reference standards were used, has the result been approved, and has the customer been invoiced?",
        "Calibration lab software, sometimes called a calibration LIMS, holds all of that in one record per job. Each step hands its data to the next, so nothing is keyed twice between the quote, the worksheet, the certificate and the invoice.",
      ],
    },
    {
      heading: "Commercial and in-house labs",
      body: [
        "A commercial lab calibrates instruments for paying customers, so turnaround, quotes, customer communication and invoicing matter as much as the measurement. An in-house lab serves its own company's departments and plants, where the priority is keeping production equipment in calibration and audit evidence in order.",
        "metquay.ai is built for both. The workflow is the same: a request comes in, the instrument is received, scheduled, calibrated, reviewed and returned with a certificate. What changes is who the customer is.",
      ],
    },
    {
      heading: "From request to shipped certificate",
      body: ["metquay.ai follows each instrument through the lab in the order the work happens."],
      points: [
        "Request and quote: customers raise requests and approve quotes in the portal",
        "Receiving: barcode intake and condition check on arrival",
        "Scheduling: drag-and-drop by technician and test bench, against real capacity",
        "Calibration: smart worksheets with reference-asset linking and uncertainty",
        "Review: approval gates with re-authenticated digital signatures",
        "Certificate and label: PDF/A certificate and QR-coded label on approval",
        "Shipping: auto-built pack lists, carrier tracking and chain of custody",
      ],
      link: { label: "Walk through each stage", href: "/solutions" },
    },
    {
      heading: "A customer portal instead of email",
      body: [
        "Customers use a branded self-service portal to raise calibration requests, approve quotes, follow each job's live status and download certificates as soon as they are issued. Portal users see only the assets and certificates the lab chooses to share with them.",
      ],
      link: { label: "How the customer portal works", href: "/solutions#step-02" },
    },
    {
      heading: "Running more than one lab",
      body: [
        "Multi-site labs get a workspace per site with role-based permissions, workspace switching and datasets that can be shared across workspaces. Procedures, templates and certificates can be standardized, while portfolio operators see every site on one pane with cross-site benchmarking and rollup reporting.",
      ],
    },
    {
      heading: "Connected to finance",
      body: [
        "When a work is approved, the invoice is pushed to the lab's ERP. metquay.ai syncs customers, assets, invoices and payments with Odoo, Oracle NetSuite, QuickBooks, Microsoft Dynamics 365, Business Central and Xero.",
      ],
      link: { label: "Calibration software ERP integration", href: "/calibration-software-erp-integration" },
    },
  ],
  faq: [
    {
      id: "what-is-calibration-lab-software",
      q: "What is calibration lab software?",
      a: "Calibration lab software manages the work of a calibration laboratory: requests, quotes, receiving, scheduling, measurement capture, uncertainty, approval, certificates, shipping and invoicing, with the records an ISO/IEC 17025 assessor reviews.",
    },
    {
      id: "calibration-lab-software-vs-lims",
      q: "Is calibration lab software the same as a LIMS?",
      a: "It does a similar job for a different kind of lab. A general LIMS is built around samples and test results. Calibration lab software is built around instruments, reference standards, tolerances, uncertainty and certificates, which is how metquay.ai is organized.",
    },
    {
      id: "software-for-commercial-calibration-labs",
      q: "What does a commercial calibration lab need from its software?",
      a: "Beyond the measurement records, a commercial lab needs quoting, customer communication, live job status, certificate delivery and invoicing. metquay.ai covers these through its customer portal, shipping tracking and ERP sync.",
    },
    {
      id: "multi-site-calibration-labs",
      q: "Can one system run several calibration labs?",
      a: "Yes. metquay.ai gives each site its own workspace with role-based permissions, lets sites share datasets and standard templates, and gives portfolio operators consolidated visibility and rollup reporting across locations.",
    },
    {
      id: "accredited-calibration-lab-software",
      q: "Does metquay.ai support ISO/IEC 17025 accredited labs?",
      a: "Yes. It keeps equipment records, traceability to reference standards, technical records, uncertainty and certificates in an immutable, version-pinned audit trail. Accreditation itself is granted to the lab by an accreditation body.",
    },
  ],
  related: [
    { label: "Calibration management software", href: "/calibration-management-software" },
    { label: "Calibration scheduling software", href: "/calibration-scheduling-software" },
    { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
    { label: "Choosing calibration lab software", href: "/blog/choosing-the-right-calibration-lab-software" },
  ],
} satisfies LandingPage;
