import type { LandingPage } from "./types";

export default {
  slug: "onsite-calibration-software",
  keyword: "Onsite Calibration Software",
  group: "Workflow",
  eyebrow: "Field service · Offline-first PWA",
  title: "Onsite Calibration Software That Works Without a Connection",
  metaTitle: "Onsite Calibration Software for Field Technicians",
  metaDescription:
    "Onsite calibration software for technicians at customer sites: offline worksheets, barcode lookup, photos and an outbox that syncs with conflict resolution.",
  summary:
    "metquay.ai is onsite calibration software for technicians who calibrate at customer sites. It runs as an offline-first PWA: worksheets, assets and procedures are stored on the device, readings and photos are captured with no connection, and an outbox syncs everything with deterministic conflict resolution once the technician is back online.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "What changes when calibration happens on site",
      body: [
        "In the lab, the bench, the reference standards and the network are all under your control. At a customer site, the technician may be in a plant room, a shielded bay or a remote facility with no signal, working through dozens of instruments in one visit.",
        "Onsite calibration software has to let that technician record the same traceable data they would record in the lab: the instrument, the reference standards used, the procedure, As Found and As Left readings, and who did the work. If it only works online, technicians fall back to paper and re-key the results later.",
      ],
    },
    {
      heading: "Offline-first, not offline as an afterthought",
      body: [
        "metquay.ai is a progressive web app built to work offline from the start. Worksheets, assets and procedures are stored locally, so the technician opens the job, captures readings and photos, and changes status without a connection.",
      ],
      points: [
        "Full data entry on the floor with zero connection",
        "Changes queue in an outbox and sync automatically on reconnect",
        "Deterministic conflict resolution, so nothing captured offline is lost",
        "Offline data encrypted on the device and synced over TLS",
      ],
      link: { label: "See offline capture in the workflow", href: "/solutions#step-05" },
    },
    {
      heading: "Finding the right instrument on site",
      body: [
        "Barcode and QR lookup brings up any work order or asset from a phone camera or a hardware scanner, across every workspace the technician can access. QR-coded calibration labels link back to the live asset record, so the next visit starts from the instrument's full history.",
      ],
    },
    {
      heading: "Traceability in the field",
      body: [
        "Each worksheet links the calibration to the reference assets used. Reference standards carry their own calibration status, so a technician can see an expired standard before using it on a customer's instrument. Procedures are version-pinned to each work, and readings auto-save as they are entered.",
        "The worksheet calculates unit conversion, uncertainty and pass/fail on the spot, so an out-of-tolerance result is visible while the technician is still at the instrument.",
      ],
      link: { label: "How the worksheet calculates uncertainty", href: "/measurement-uncertainty-software" },
    },
    {
      heading: "From the customer site to the certificate",
      body: [
        "Once the work syncs, it moves into review. An Approved Signatory approves it with a re-authenticated digital signature, and the PDF/A certificate and QR-coded label are generated on approval and delivered to the customer portal or by email.",
      ],
      link: { label: "Certificates generated on approval", href: "/solutions#step-07" },
    },
  ],
  faq: [
    {
      id: "what-is",
      q: "What is onsite calibration software?",
      a: "Onsite calibration software lets technicians record calibrations at a customer's location instead of in the lab. It needs to capture readings, reference standards and procedures with full traceability, often without a reliable internet connection.",
    },
    {
      id: "offline",
      q: "Can technicians calibrate without internet access?",
      a: "Yes. metquay.ai is an offline-first PWA. Worksheets, assets and procedures are stored locally, and changes queue in an outbox that syncs automatically with conflict resolution when connectivity returns.",
    },
    {
      id: "sync-conflicts",
      q: "What happens if two people edit the same record offline?",
      a: "metquay.ai resolves sync conflicts deterministically when the devices reconnect, so data captured offline is not lost. Every change is recorded in the audit trail with who made it and when.",
    },
    {
      id: "offline-security",
      q: "Is calibration data on a field device secure?",
      a: "Data cached for offline field work is encrypted on the device and synced over TLS 1.2 or higher when the device is back online.",
    },
    {
      id: "barcode",
      q: "Can technicians scan instruments at the customer site?",
      a: "Yes. Barcode and QR lookup opens any work order or asset from a phone camera or a hardware scanner, and QR-coded calibration labels link back to the live asset record.",
    },
  ],
  related: [
    { label: "Calibration scheduling software", href: "/calibration-scheduling-software" },
    { label: "Calibration certificate software", href: "/calibration-certificate-software" },
    { label: "Cloud calibration software", href: "/cloud-calibration-software" },
    {
      label: "Choosing onsite calibration software",
      href: "/blog/tips-to-choose-the-right-onsite-calibration-software",
    },
  ],
} satisfies LandingPage;
