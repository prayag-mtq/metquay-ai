import type { LandingPage } from "./types";

export default {
  slug: "calibration-software",
  keyword: "Calibration Software",
  group: "Platform",
  eyebrow: "Calibration software",
  title: "Calibration Software: Types, Features and How to Choose",
  metaTitle: "Calibration Software: Types, Features & How to Choose",
  metaDescription:
    "What calibration software does, how bench tools, lab management systems and asset trackers differ, and what to check before you choose one for your lab.",
  summary:
    "Calibration software is any system that records, controls or reports the calibration of measuring instruments. metquay.ai is calibration software for commercial and in-house labs that covers the whole job in one audit-ready system: asset tracking and due alerts, scheduling, smart worksheets with uncertainty, approval with e-signatures, certificates and labels, and shipping.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What calibration software is",
      body: [
        "The term covers a wide range of tools. Some run a single procedure on the bench, some only remember when each instrument is due, and some run an entire calibration lab. What they share is a job: keeping a reliable record that each instrument was compared against a traceable reference, by a defined method, with a known result.",
        "Paper forms and spreadsheets can hold that record for a while. They stop working when the number of instruments grows, when an assessor asks how a result was calculated, or when two people edit the same file.",
      ],
    },
    {
      heading: "Three types of calibration software",
      body: [
        "Most products fall into one of three groups. Knowing which one you need saves time in evaluation, because the groups solve different problems.",
      ],
      points: [
        "Bench and procedure tools: run or automate a calibration procedure on a specific instrument and capture the readings",
        "Asset and gauge tracking tools: keep an inventory of instruments, their due dates and their certificates, usually for companies that send calibration out",
        "Calibration lab management software: runs the lab itself, from request and receiving through worksheets, approval, certificates, shipping and invoicing",
      ],
      link: {
        label: "Why asset tracking and calibration management differ",
        href: "/blog/google-thinks-calibration-management-software-and-asset-management-software-are-the-same",
      },
    },
    {
      heading: "What to look for",
      body: [
        "Start with the evidence an accredited lab has to produce, then check the daily workflow. A tool that looks simple in a demo but cannot show how a certificate was built will cost more at the next assessment.",
      ],
      points: [
        "Traceability from each result back to the reference standards used",
        "Measurement uncertainty calculated with the readings, not in a separate file",
        "An audit trail and electronic signatures that hold up under ISO/IEC 17025 and, if you are regulated, 21 CFR Part 11",
        "Certificates generated from the recorded data rather than retyped",
        "Scheduling that accounts for technician capacity, not only due dates",
        "Integrations with your ERP and calibration equipment, plus a migration path for your existing records",
      ],
      link: { label: "Calibration management software in detail", href: "/calibration-management-software" },
    },
    {
      heading: "Where metquay.ai fits",
      body: [
        "metquay.ai is calibration lab management software. It is asset-centric: every instrument has a live record that the due alerts, worksheets, certificates and labels all draw from. Work moves through receiving, scheduling, calibration, review, certificate and shipping in one system, and technicians can capture readings offline.",
        "It also connects to the bench tools labs already use. Fluke MET/CAL® runs import through MET/CONNECT®, and ERP systems such as Odoo, NetSuite and QuickBooks receive invoices when work is approved.",
      ],
      link: { label: "Follow the end-to-end workflow", href: "/solutions" },
    },
    {
      heading: "Questions to ask in a demo",
      body: [
        "Ask each vendor to run a calibration on one of your own instruments and procedures. Then ask them to open the finished certificate and trace it back to the readings, the reference standards, the procedure version and the approval behind it. Ask what happens when a technician loses connection mid-job, and how your current records will be moved across.",
      ],
      link: { label: "See metquay.ai on your own data", href: "/contact?intent=expert" },
    },
  ],
  faq: [
    {
      id: "what-is-calibration-software",
      q: "What is calibration software?",
      a: "Calibration software records, controls or reports the calibration of measuring instruments. Depending on the product, it may run procedures on the bench, track due dates and certificates, or manage the whole calibration lab workflow.",
    },
    {
      id: "calibration-vs-asset-management",
      q: "What is the difference between calibration software and asset management software?",
      a: "Asset management software tracks instruments, due dates and stored certificates for companies that send calibration out. Calibration lab software also runs the calibration itself: receiving, scheduling, worksheets, uncertainty, approval, certificates and invoicing.",
    },
    {
      id: "excel-as-calibration-software",
      q: "Can I use Excel as calibration software?",
      a: "Many labs start with Excel, but spreadsheets lack an audit trail, locked records and controlled formulas, and they get harder to keep consistent as the instrument count grows. Most labs replace them once an assessor or customer asks for stronger evidence.",
    },
    {
      id: "who-needs-calibration-software",
      q: "Who needs calibration software?",
      a: "Commercial calibration labs, in-house labs at manufacturers and life-science sites, and quality teams that own measuring equipment. metquay.ai is built for commercial and in-house labs, from single sites to multi-site portfolios.",
    },
    {
      id: "is-metquay-cloud-based",
      q: "Is metquay.ai cloud-based?",
      a: "Yes. metquay.ai runs on AWS with data stored in the United States by default, EU and Asia-Pacific regions on request, and dedicated or private-cloud deployments for enterprise customers. An offline-first app covers work without a connection.",
    },
  ],
  related: [
    { label: "Calibration management software", href: "/calibration-management-software" },
    { label: "Calibration lab software", href: "/calibration-lab-software" },
    { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    { label: "Replacing Excel for calibration", href: "/calibration-excel-alternative" },
  ],
} satisfies LandingPage;
