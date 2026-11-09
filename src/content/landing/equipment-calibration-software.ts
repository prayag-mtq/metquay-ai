import type { LandingPage } from "./types";

export default {
  slug: "equipment-calibration-software",
  keyword: "Equipment Calibration Software",
  group: "Platform",
  eyebrow: "In-house quality teams · Test & measurement equipment",
  title: "Equipment Calibration Software for In-House Quality Teams",
  metaTitle: "Equipment Calibration Software for Quality Teams",
  metaDescription:
    "Equipment calibration software for teams that own test and measurement equipment: due dates, calibration history, QR labels, certificates and status by asset.",
  summary:
    "metquay.ai is equipment calibration software for organizations that own test and measurement equipment and need every instrument in calibration. It keeps each asset's calibration status, history, certificates and next due date, sends tiered due alerts, and links QR-coded labels to the live record, whether the calibration is done by an in-house lab or an outside provider.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "The problem equipment owners are solving",
      body: [
        "A manufacturer, utility or test facility may own hundreds of gauges, meters, torque tools and sensors. Each one has its own calibration interval, and a measurement taken with an instrument that is out of calibration can put the product, the batch or the audit at risk.",
        "Equipment calibration software answers three questions for every asset at any moment: is it in calibration, when is it next due, and where is the evidence.",
      ],
    },
    {
      heading: "Calibration management versus asset management",
      body: [
        "Asset management software tracks equipment: add and retire assets, label them, remind owners of due dates and store the last certificate. That suits an organization that sends every instrument out for calibration and only needs to know its status.",
        "Calibration management software does that and also runs the calibration itself: procedures, readings, uncertainty, review, certificates and the audit trail. If your quality team calibrates any equipment in-house, you need the second kind.",
      ],
      link: {
        label: "Calibration vs asset management",
        href: "/blog/google-thinks-calibration-management-software-and-asset-management-software-are-the-same",
      },
    },
    {
      heading: "Every asset, with its status and history",
      body: [
        "metquay.ai is asset-centric. Each instrument carries its identification, calibration status, calibration history and next due date, with the certificates attached.",
      ],
      points: [
        "Tiered due alerts at 30 days, 7 days and overdue, by email and in-app",
        "QR-coded labels that link back to the live asset record",
        "Barcode and QR lookup from a phone camera or a hardware scanner",
        "As Found and As Left data recorded with each calibration",
        "Multi-workspace roll-up when equipment is spread across sites",
      ],
      link: { label: "How due alerts work", href: "/solutions#step-01" },
    },
    {
      heading: "In-house calibration, with the same rigor as an accredited lab",
      body: [
        "When the quality team calibrates its own equipment, metquay.ai records the work the way an ISO/IEC 17025 lab would: smart worksheets that calculate uncertainty and pass/fail, reference standards linked to each calibration with their own status, version-pinned procedures, approval with re-authenticated signatures, and an immutable audit trail.",
        "For FDA-regulated sites, the same records carry 21 CFR Part 11 controls, and Metquay provides validation documentation for GAMP 5.",
      ],
      link: { label: "21 CFR Part 11 calibration software", href: "/21-cfr-part-11-calibration-software" },
    },
    {
      heading: "Setting intervals from your own data",
      body: [
        "Manufacturer intervals are a starting point. AI interval optimization proposes adaptive calibration intervals from your own calibration history. Every proposed change needs a recommendation report, a risk assessment, QA Manager approval and an immutable audit entry before it takes effect.",
      ],
      link: { label: "Calibration interval defined", href: "/glossary#calibration-interval" },
    },
  ],
  faq: [
    {
      id: "what-is",
      q: "What is equipment calibration software?",
      a: "Equipment calibration software tracks the calibration of an organization's test and measurement equipment: status, history, certificates and due dates for every asset, and often the calibration records themselves when the work is done in-house.",
    },
    {
      id: "vs-asset-management",
      q: "What is the difference between calibration management and asset management software?",
      a: "Asset management software tracks equipment, due dates and stored certificates. Calibration management software adds the calibration work itself: procedures, readings, uncertainty, approvals, certificates and the audit trail.",
    },
    {
      id: "external-lab",
      q: "Can we track equipment that an outside lab calibrates?",
      a: "Yes. Each asset holds its calibration status, history, certificates and due date regardless of who performed the work. If your provider runs metquay.ai, its customer portal shows the assets and certificates the lab shares with you.",
    },
    {
      id: "intervals",
      q: "How often should test equipment be calibrated?",
      a: "Start from the manufacturer's recommendation, then adjust based on usage and As Found results. Instruments that are consistently found in tolerance may support longer intervals; drift supports shorter ones.",
    },
    {
      id: "multi-site",
      q: "Can we manage equipment calibration across several sites?",
      a: "Yes. metquay.ai's multi-workspace architecture gives each site its own workspace, with role-based permissions and portfolio-level visibility across all of them.",
    },
  ],
  related: [
    { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    { label: "Gauge calibration software", href: "/gauge-calibration-software" },
    { label: "Calibration management software", href: "/calibration-management-software" },
    {
      label: "An asset owner's calibration checklist",
      href: "/blog/how-to-prepare-for-your-next-equipment-calibration-an-asset-owner-s-checklist",
    },
  ],
} satisfies LandingPage;
