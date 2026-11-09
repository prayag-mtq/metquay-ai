import type { LandingPage } from "./types";

export default {
  slug: "calibration-software-migration",
  keyword: "Calibration Software Migration",
  group: "Integrations & migration",
  eyebrow: "Qualer · GagePack · IndySoft · MET/TEAM",
  title: "Calibration Software Migration Without Losing Compliance",
  metaTitle: "Calibration Software Migration: Qualer, GagePack, IndySoft",
  metaDescription:
    "Move from Qualer, GagePack, IndySoft or MET/TEAM to metquay.ai in 10–20 weeks with a parallel-run migration that keeps records intact.",
  summary:
    "Calibration software migration to metquay.ai takes most labs 10 to 20 weeks. Metquay runs a structured, parallel-run migration rather than a big-bang cutover, with per-platform playbooks for Qualer, GagePack, IndySoft and MET/TEAM, so asset history, certificates and compliance continuity carry over intact.",
  updated: "2026-11-07",
  sections: [
    {
      heading: "Why labs switch",
      body: [
        "Labs move when their current tool can no longer keep up: certificates take half a day, technicians cannot work offline, ERP data is keyed twice, or audit preparation means rebuilding evidence from spreadsheets. metquay.ai brings those steps into one connected, audit-ready system.",
      ],
    },
    {
      heading: "A parallel run, not a big-bang cutover",
      body: [
        "The old and new systems run side by side while data is migrated and verified. Nothing is switched off until the lab has confirmed that assets, history and certificates match, which protects compliance continuity through the move.",
      ],
      points: [
        "Plan: scope, data mapping and the per-platform playbook",
        "Migrate: assets, calibration history, procedures and customers",
        "Verify: parallel run with side-by-side checks",
        "Go live: cut over once the records match",
      ],
    },
    {
      heading: "Supported source systems",
      body: [
        "Metquay has per-platform playbooks for Qualer, GagePack, IndySoft and MET/TEAM®. For a single-site lab, GagePack to metquay.ai can be completed in about 10 weeks.",
      ],
      link: { label: "Request the Master Migration Playbook", href: "/resources#2-migrate" },
    },
    {
      heading: "Connect the rest of your stack",
      body: [
        "During migration, metquay.ai is connected to your ERP and metrology tools, so invoices, customers and Fluke MET/CAL® runs flow automatically from day one.",
      ],
      link: { label: "See integrations", href: "/ecosystem" },
    },
  ],
  faq: [
    {
      id: "how-long",
      q: "How long does a calibration software migration take?",
      a: "Most labs go live in 10 to 20 weeks with a structured, parallel-run migration. Smaller single-site labs moving from GagePack can finish in about 10 weeks.",
    },
    {
      id: "history",
      q: "Will we keep our calibration history and certificates?",
      a: "Yes. Asset records, calibration history and certificates are migrated and verified during the parallel run, so compliance continuity is maintained and nothing is switched off until the records match.",
    },
    {
      id: "sources",
      q: "Which systems can we migrate from?",
      a: "Metquay supports migrations from Qualer, GagePack, IndySoft and MET/TEAM with per-platform playbooks. Other sources, including spreadsheets, can be mapped during planning.",
    },
    {
      id: "downtime",
      q: "Does the lab have to stop work during the move?",
      a: "No. Because the old and new systems run in parallel, technicians keep working while data is migrated and verified, and cutover happens only after the lab signs off.",
    },
    {
      id: "multi-site",
      q: "Can multi-site labs migrate in stages?",
      a: "Yes. The migration playbook handles multi-site parallel runs, and metquay.ai's multi-workspace architecture gives every site independence with consolidated visibility for the portfolio.",
    },
  ],
  related: [
    { label: "Calibration management software", href: "/calibration-management-software" },
    { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
    { label: "All implementation playbooks", href: "/resources" },
    { label: "Talk to a migration expert", href: "/contact?intent=expert" },
  ],
} satisfies LandingPage;
