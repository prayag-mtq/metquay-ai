import type { LandingPage } from "./types";

export default {
  slug: "gauge-calibration-software",
  keyword: "Gauge Calibration Software",
  group: "Platform",
  eyebrow: "Gauges · In-house labs · MSA",
  title: "Gauge Calibration Software for Manufacturing Quality Teams",
  metaTitle: "Gauge Calibration Software for In-House Quality Teams",
  metaDescription:
    "Track and calibrate in-house gauges: due alerts, worksheets with As Found and As Left data, QR labels and an audit trail, plus where Gage R&R and MSA fit.",
  summary:
    "Gauge calibration software tracks a manufacturer's gauges and measuring tools, schedules their calibration and records the results that show each one is fit for use. metquay.ai gives quality teams and in-house labs an asset record and due alerts for every gauge, smart worksheets with As Found and As Left data and pass/fail, QR-coded labels and an immutable audit trail.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Gauge management and gauge calibration",
      body: [
        "Gauge management, often spelled gage management, is about knowing what you own: where each caliper, micrometer, plug gauge, torque wrench or pressure gauge is, who has it, and when it is due. Gauge calibration is the work itself: comparing the gauge against a traceable reference by a defined procedure and recording the result.",
        "Many gauge tools stop at management and store a certificate from someone else. A quality team that calibrates its own gauges needs both in one place.",
      ],
      link: {
        label: "Gauge tracking versus calibration management",
        href: "/blog/google-thinks-calibration-management-software-and-asset-management-software-are-the-same",
      },
    },
    {
      heading: "Calibrating gauges in-house",
      body: [
        "In metquay.ai, each gauge is an asset with its own due date and history. Technicians record readings in smart worksheets that apply the tolerances, calculate pass/fail and uncertainty, and capture As Found and As Left data. Worksheets link to the reference assets used, such as gauge blocks or master rings, and each run is pinned to the procedure version.",
        "Readings can be taken on the shop floor without a connection and sync when the device is back online.",
      ],
      link: { label: "How smart worksheets work", href: "/solutions#step-04" },
    },
    {
      heading: "When a gauge is found out of tolerance",
      body: [
        "Quality standards such as ISO 9001 expect a manufacturer to check whether earlier results are still valid when a measuring instrument is found unfit for purpose. That review depends on the As Found reading and on knowing when the gauge was last good.",
        "metquay.ai records the As Found and As Left values and keeps every past calibration on the asset, so the impact review starts from evidence rather than from memory.",
      ],
    },
    {
      heading: "Where Gage R&R and MSA fit",
      body: [
        "Calibration shows a gauge reads correctly against a reference. It does not show whether the measurement system, meaning the gauge, the operators and the method together, is good enough for the parts being measured. That is the job of measurement system analysis (MSA), including Gage R&R studies of repeatability and reproducibility.",
        "Automotive and other manufacturers often need both. A calibrated gauge is the starting point for a meaningful Gage R&R study, so the two records support each other.",
      ],
      link: { label: "An introduction to Gage R&R", href: "/blog/introduction-to-gage-r-r" },
    },
    {
      heading: "Labels, scanning and intervals",
      body: [
        "Each calibrated gauge gets a QR-coded label that links to its live record, and anyone on the floor can scan it with a camera or hardware scanner to check status. Due alerts go out at 30 days, 7 days and overdue.",
        "As history builds, AI interval optimization can propose longer or shorter intervals for each gauge. Every change needs a risk assessment, QA Manager approval and an audit entry before it applies.",
      ],
      link: { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    },
  ],
  faq: [
    {
      id: "what-is-gauge-calibration-software",
      q: "What is gauge calibration software?",
      a: "Gauge calibration software keeps an inventory of gauges and measuring tools, tracks their due dates and records each calibration, including readings, tolerances, pass/fail and the reference standards used.",
    },
    {
      id: "gauge-or-gage",
      q: "Is it gauge calibration or gage calibration?",
      a: "Both spellings mean the same thing. Gauge is the standard English spelling. Gage is common in US manufacturing and quality documents, as in Gage R&R.",
    },
    {
      id: "how-often-calibrate-gauges",
      q: "How often should gauges be calibrated?",
      a: "There is no single interval. It depends on how often and how hard the gauge is used, how critical its measurements are, the manufacturer's recommendation and its calibration history. Many teams start with a fixed interval and adjust it from As Found results.",
    },
    {
      id: "calibration-vs-gage-r-and-r",
      q: "What is the difference between gauge calibration and Gage R&R?",
      a: "Calibration compares a gauge with a traceable reference to confirm it reads correctly. Gage R&R measures how much variation comes from the gauge and from the operators when measuring real parts. Calibration comes first.",
    },
    {
      id: "calibrate-gauges-in-house",
      q: "Can we calibrate our own gauges in-house?",
      a: "Yes, if you have documented procedures, reference standards with traceable calibrations, trained staff and controlled records. metquay.ai supports in-house labs with worksheets, traceability to reference assets and an audit trail.",
    },
  ],
  related: [
    { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    { label: "Equipment calibration software", href: "/equipment-calibration-software" },
    { label: "Measurement System Analysis (MSA)", href: "/glossary#msa" },
    { label: "Calibration management software", href: "/calibration-management-software" },
  ],
} satisfies LandingPage;
