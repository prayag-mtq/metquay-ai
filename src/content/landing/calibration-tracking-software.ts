import type { LandingPage } from "./types";

export default {
  slug: "calibration-tracking-software",
  keyword: "Calibration Tracking Software",
  group: "Workflow",
  eyebrow: "Assets · Due dates · History",
  title: "Calibration Tracking Software for Assets and Due Dates",
  metaTitle: "Calibration Tracking Software: Due Dates, Alerts & History",
  metaDescription:
    "Track every instrument's calibration status, due date and history. Tiered due alerts, QR-coded labels and scanning keep equipment from going overdue.",
  summary:
    "Calibration tracking software keeps a live record of every instrument, its calibration status and its next due date, and warns before anything goes overdue. metquay.ai tracks the due date on every asset, sends tiered alerts at 30 days, 7 days and overdue, links QR-coded labels to the live asset record and keeps the full calibration history.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What calibration tracking covers",
      body: [
        "Tracking starts with an accurate inventory: each instrument's identification, location, owner, calibration interval, current status and next due date. Behind that sits the history, meaning every past calibration with its results and certificate.",
        "The goal is simple. No one should use an instrument without knowing it is in calibration, and no instrument should reach its due date without someone already planning the work.",
      ],
    },
    {
      heading: "Due alerts that reach the right people",
      body: [
        "metquay.ai tracks every asset's due date automatically and sends tiered reminders at 30 days, 7 days and on overdue escalation. Alerts go by email and in-app to the lab and to the customer, so customers know when it is time to send their instruments in.",
        "For other systems, an asset.due_soon webhook event lets you drive your own automations from the same due dates.",
      ],
      link: { label: "How due alerts work", href: "/solutions#step-01" },
    },
    {
      heading: "Labels and scanning on the floor",
      body: [
        "Each calibration produces a QR-coded label that links back to the live asset record, so anyone who scans it sees the current status rather than a date printed months ago. Technicians and receiving staff can look up any asset or work order with a camera or a hardware scanner across every workspace they can access.",
        "metquay.ai works with barcode and QR scanners, including Honeywell scanners, and Zebra label printers.",
      ],
      link: { label: "Hardware and integrations", href: "/ecosystem" },
    },
    {
      heading: "Keeping reference standards in date",
      body: [
        "Reference standards are tracked like any other asset, with their own calibration status. Because worksheets link each calibration to the reference assets used, an expired standard is visible before it is used rather than discovered during an assessment.",
      ],
      link: { label: "What a reference standard is", href: "/glossary#reference-standard" },
    },
    {
      heading: "History that informs the interval",
      body: [
        "Every calibration stays on the asset record with its As Found and As Left readings, the procedure version, the technician and the reviewer. That history is what makes interval decisions defensible.",
        "metquay.ai's AI interval optimization uses it to propose adaptive calibration intervals. Each proposed change needs a recommendation report, a risk assessment, QA Manager approval and an immutable audit entry before it takes effect.",
      ],
      link: { label: "Calibration intervals explained", href: "/glossary#calibration-interval" },
    },
  ],
  faq: [
    {
      id: "what-is-calibration-tracking-software",
      q: "What is calibration tracking software?",
      a: "Calibration tracking software keeps an inventory of measuring instruments with their calibration status, due dates, history and certificates, and sends reminders so nothing is used or left out of calibration.",
    },
    {
      id: "how-to-track-calibration-due-dates",
      q: "How do you track calibration due dates?",
      a: "Record each instrument's last calibration date and interval, calculate the next due date, and set reminders well ahead of it. metquay.ai does this on every asset and sends alerts at 30 days, 7 days and overdue.",
    },
    {
      id: "overdue-calibration",
      q: "What should happen when an instrument is overdue for calibration?",
      a: "It should be taken out of use and labeled until it is calibrated. If it is then found out of tolerance, the As Found data is used to assess whether measurements made with it since its last good calibration are affected.",
    },
    {
      id: "tracking-vs-management",
      q: "Is calibration tracking the same as calibration management?",
      a: "Tracking is one part of it. Calibration management also covers how calibrations are performed, calculated, reviewed and reported. metquay.ai does both, so the tracked due date leads directly into a scheduled job.",
    },
    {
      id: "customers-see-calibration-status",
      q: "Can customers see the calibration status of their instruments?",
      a: "Yes. In the metquay.ai customer portal, customers follow live job status and download certificates. They see only the assets and certificates the lab chooses to share with them.",
    },
  ],
  related: [
    { label: "Calibration scheduling software", href: "/calibration-scheduling-software" },
    { label: "Equipment calibration software", href: "/equipment-calibration-software" },
    { label: "Replacing Excel for calibration", href: "/calibration-excel-alternative" },
    { label: "Calibration management software", href: "/calibration-management-software" },
  ],
} satisfies LandingPage;
