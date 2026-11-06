export const hero = {
  eyebrow: "Solutions · The end-to-end workflow",
  title: "Follow an instrument from calibration due alert to delivery",
  lead: "Every instrument travels the same path through metquay.ai, from the due alert and the customer request to receiving, scheduling, calibration, offline capture, approval, certificate, and shipping — one connected, audit-ready system.",
};

export type Step = {
  id: string;
  short: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  quote: { text: string; by?: string };
  image: { src: string; width: number; height: number; alt: string };
};

const image = (n: number, height: number, alt: string) => ({
  src: `/images/solutions/step-0${n}.webp`,
  width: 1600,
  height,
  alt,
});

export const steps: Step[] = [
  {
    id: "step-01",
    short: "Due Alerts",
    label: "Calibration Due Alerts & Notifications",
    title: "It starts before the instrument is even due",
    body: "metquay.ai tracks every asset’s calibration due date and sends alerts in advance via email and in-app, so nothing ever lapses and the customer knows when it’s time to send their instruments in.",
    points: [
      "Automatic due-date tracking on every asset",
      "Tiered reminders: 30 days, 7 days & overdue escalation",
      "Email & in-app notifications to the lab and the customer",
    ],
    quote: {
      text: "We haven’t missed a due date since the system nudges us and the customer weeks ahead.",
      by: "Lena M., Quality Coordinator",
    },
    image: image(1, 1200, "Calibration due alerts screen with assets due in 30 days, 7 days and overdue"),
  },
  {
    id: "step-02",
    short: "Customer Portal",
    label: "Customer Portal",
    title: "The request arrives, no email required",
    body: "Customers raise calibration requests and quotes in a branded self-service portal, then track every job live and download accredited certificates the moment they’re ready.",
    points: [
      "Branded portal for every customer request",
      "Live status updates from intake to certificate",
      "Self-serve document downloads and quote approvals",
    ],
    quote: {
      text: "Our customers can see every request and certificate without chasing our team.",
      by: "Arun P., Operations Lead",
    },
    image: image(2, 1200, "Customer portal listing calibration requests with status and certificate downloads"),
  },
  {
    id: "step-03",
    short: "Receiving & Scheduling",
    label: "Receiving & Scheduling",
    title: "Logged on arrival, scheduled on capacity",
    body: "Instruments are checked in and barcoded the moment they arrive, then scheduled against real technician capacity and the customer’s due date — nothing sits unlogged.",
    points: [
      "Intake & condition check with barcode on receipt",
      "Drag-and-drop scheduling by technician and test bench",
      "Capacity-aware routing flags ‘at-risk’ jobs early",
    ],
    quote: {
      text: "It’s scanned in and on the calendar the same minute it lands on the dock.",
      by: "Tom B., Receiving Supervisor",
    },
    image: image(3, 1200, "Receiving and scheduling board showing technician capacity across the week"),
  },
  {
    id: "step-04",
    short: "Calibration",
    label: "Calibration · Smart Worksheets",
    title: "The technician captures, the worksheet does the math",
    body: "A real expression engine handles unit conversion, validation and uncertainty, with color-coded pass/fail and live charts — on the bench, online or off.",
    points: [
      "Reference-asset linking with full traceability chain",
      "As Found / As Left, auto-save, full offline capture",
      "Version-pinned procedures per work run",
    ],
    quote: {
      text: "No more spreadsheets, no more transcription errors — the math is just right.",
      by: "Priya N., Quality Manager",
    },
    image: image(4, 1200, "Pressure gauge worksheet with readings, tolerances, pass/fail results and an error curve"),
  },
  {
    id: "step-05",
    short: "Offline Capture",
    label: "Offline-first Mobile App",
    title: "Works anywhere — even with no connection",
    body: "Readings, photos, and status changes are captured on the floor and queued in an outbox that syncs automatically — with conflict resolution — the moment you’re back online.",
    points: [
      "Full data entry on the shop floor with zero connection",
      "Outbox queue with automatic sync on reconnect",
      "Deterministic conflict resolution — nothing is ever lost",
    ],
    quote: {
      text: "My techs work in a shielded bay with no signal — it all just syncs when they walk out.",
      by: "D. Reyes, Senior Technician",
    },
    image: image(5, 1088, "Offline mode banner with readings and photos queued for sync"),
  },
  {
    id: "step-06",
    short: "Review",
    label: "Review · Audit Trail & Traceability",
    title: "Approved Signatory approves — and every step is on the record",
    body: "Approval gates with re-authenticated digital signatures, and an immutable, version-pinned trail from reference standard to certificate that withstands any assessor.",
    points: [
      "Immutable, version-pinned records on every change",
      "ISO 17025, 21 CFR Part 11 & GAMP-5 controls",
      "Re-authenticated signatures & approval gates",
    ],
    quote: { text: "Our last ISO 17025 audit took two days instead of two weeks." },
    image: image(6, 1206, "Audit log listing approvals, signatures and procedure changes with timestamps"),
  },
  {
    id: "step-07",
    short: "Certificate",
    label: "Certificates & Labels",
    title: "The accredited certificate, generated on approval",
    body: "A data-bound PDF/A certificate and QR-coded label are produced the instant a work is approved — versioned, re-issued automatically and delivered to the customer’s portal.",
    points: [
      "Drag-and-drop certificate & label designers",
      "QR codes linking back to the live asset record",
      "Customer portal delivery & email in one click",
    ],
    quote: {
      text: "Certificates that used to take half a day are out the door in minutes.",
      by: "Dana R., Operations",
    },
    image: image(7, 1213, "Certificate of calibration designer with data-bound fields"),
  },
  {
    id: "step-08",
    short: "Shipping",
    label: "Shipping & Receiving Tracking",
    title: "Packed, shipped, and tracked all the way home",
    body: "Pack lists build themselves from completed works, dispatch captures carrier and tracking, and the customer watches it move — closing the loop with a clean chain of custody.",
    points: [
      "Auto-built pack lists & carrier tracking at dispatch",
      "Packed → Dispatched → In Transit → Delivered, live",
      "Every hand-off logged for chain of custody",
    ],
    quote: {
      text: "We can tell a customer exactly where their gear is without leaving the app.",
      by: "Raj K., Dispatch",
    },
    image: image(8, 1200, "Shipment tracker showing packed, dispatched, in transit and delivered stages"),
  },
];

export type AcrossIcon = "dashboard" | "workspace" | "erp";

export const across = {
  eyebrow: "Across every stage",
  title: "Three things that run end to end",
  items: [
    {
      icon: "dashboard",
      title: "Role-Aware Dashboard",
      body: "Every stage rolls up into real-time KPIs, urgent jobs and approvals — drag-and-drop widgets, saved per user.",
    },
    {
      icon: "workspace",
      title: "Multi-Workspace & Roles",
      body: "Standardize across sites with workspace switching and role-based permissions — one platform, every location.",
    },
    {
      icon: "erp",
      title: "ERP & Finance Sync",
      body: "Invoices from Odoo, NetSuite, QuickBooks, Dynamics, and Xero are pushed automatically at every step.",
    },
  ] satisfies { icon: AcrossIcon; title: string; body: string }[],
};

export const cta = {
  title: "Walk the whole journey on your own data",
  body: "From the customer's first request to the shipped certificate — see every stage running on your instruments and procedures.",
};
