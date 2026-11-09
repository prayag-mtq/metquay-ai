import type { LandingPage } from "./types";

export default {
  slug: "calibration-excel-alternative",
  keyword: "Excel Calibration Tracking Alternative",
  group: "Platform",
  eyebrow: "Spreadsheets · Data integrity · ALCOA+",
  title: "An Excel Calibration Tracking Alternative for Growing Labs",
  metaTitle: "Excel Calibration Tracking Alternative | metquay.ai",
  metaDescription:
    "When Excel stops working for calibration records: the data integrity, audit trail and uncertainty risks of spreadsheets, and how to move your lab to metquay.ai.",
  summary:
    "metquay.ai is an alternative to tracking calibration in Excel. It replaces spreadsheets of due dates, readings and uncertainty budgets with one system that sends due alerts, calculates uncertainty in smart worksheets, and records every change in an immutable audit trail. Existing calibration spreadsheets can be converted into worksheets, with AI help and human review.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Why labs start in Excel",
      body: [
        "Excel is the obvious first tool. It is already installed, everyone knows it, and a list of instruments with a due-date column works well for a few dozen assets and one person keeping it up to date.",
        "The trouble starts as the program grows: more instruments, more technicians, more customers and an accreditation assessment on the calendar. The spreadsheet that worked for one person becomes several copies, each slightly different, with no record of who changed what.",
      ],
    },
    {
      heading: "Where spreadsheets put calibration records at risk",
      body: [
        "The risks are rarely dramatic. They are small errors that are hard to see until an assessor or a customer finds them.",
      ],
      points: [
        "No audit trail: a changed reading or due date leaves no record of who changed it, when or why",
        "Formula drift: a copied or overwritten cell silently breaks an uncertainty calculation",
        "Transcription: readings typed from paper into the sheet, then again into the certificate",
        "Version sprawl: several copies of the same file, with no single record of truth",
        "Missed due dates: nothing reminds anyone unless someone opens the file",
      ],
    },
    {
      heading: "What data integrity requires",
      body: [
        "Regulators and assessors judge calibration records against ALCOA+: data must be Attributable, Legible, Contemporaneous, Original and Accurate, as well as Complete, Consistent, Enduring and Available. A shared spreadsheet struggles with the first and fourth of those. It cannot show who entered a value, and it cannot prove the value is the original one.",
        "For FDA-regulated sites, 21 CFR Part 11 adds requirements for secure, time-stamped audit trails and electronic signatures linked to their records, which a spreadsheet is not designed to provide.",
      ],
      link: {
        label: "ALCOA+ and calibration data integrity",
        href: "/blog/achieving-calibration-data-integrity-with-alcoa-alcoa-principles",
      },
    },
    {
      heading: "What changes in metquay.ai",
      body: [
        "Each spreadsheet job moves to a part of the system built for it. Due dates become tiered alerts at 30 days, 7 days and overdue. Readings go into smart worksheets that handle unit conversion, validation, uncertainty and pass/fail. Approved records are locked, every change is logged with who, when and why, and certificates are generated from the approved data instead of retyped.",
      ],
      link: { label: "How worksheets calculate uncertainty", href: "/measurement-uncertainty-software" },
    },
    {
      heading: "How to move off Excel",
      body: [
        "Start with the asset list and its calibration history, because that is what due alerts and traceability depend on. Spreadsheet sources can be mapped during migration planning, the same way records from other calibration systems are.",
        "Then convert worksheets one procedure at a time. AI can turn an existing calibration spreadsheet into a metquay.ai worksheet, and its output is always shown for human review before it is saved. The Digital Transformation Playbook sets out the decision framework for going from spreadsheets and paper to a fully digital lab.",
      ],
      link: { label: "Request the Digital Transformation Playbook", href: "/resources#1-decide" },
    },
  ],
  faq: [
    {
      id: "excel-ok",
      q: "Is Excel acceptable for calibration records?",
      a: "Excel can hold calibration data, but on its own it does not keep an audit trail, lock approved records or link signatures to records. That makes it hard to demonstrate ISO/IEC 17025 control of data or meet 21 CFR Part 11.",
    },
    {
      id: "when-switch",
      q: "When should a lab move from spreadsheets to calibration software?",
      a: "Common signs are several copies of the same spreadsheet, missed due dates, uncertainty formulas no one wants to touch, and audit preparation that means rebuilding evidence by hand.",
    },
    {
      id: "import",
      q: "Can we import our existing calibration spreadsheets?",
      a: "Yes. Spreadsheet records can be mapped during migration planning, and AI can convert an existing calibration spreadsheet into a metquay.ai worksheet. Its output is always shown for human review before it is saved.",
    },
    {
      id: "uncertainty-excel",
      q: "What is wrong with calculating uncertainty in Excel?",
      a: "The calculation itself can be correct, but formulas are easy to overwrite or copy wrongly, and results are often retyped into the certificate. metquay.ai calculates uncertainty in the worksheet and generates the certificate from the approved data.",
    },
    {
      id: "spreadsheet-security",
      q: "Is uploaded spreadsheet data kept secure?",
      a: "Yes. Uploaded spreadsheets are encrypted at rest with AES-256, and AI features process only the data needed for the task you start. AI features can be disabled per account by an administrator.",
    },
  ],
  related: [
    { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    { label: "Calibration software migration", href: "/calibration-software-migration" },
    {
      label: "Why labs switch from Excel",
      href: "/blog/is-your-calibration-lab-still-using-excel-here-s-why-it-s-time-to-make-the-switch-in-2024",
    },
    { label: "ALCOA+ glossary entry", href: "/glossary#alcoa-plus" },
  ],
} satisfies LandingPage;
