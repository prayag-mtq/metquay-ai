export const hero = {
  eyebrow: "Ecosystem · Integrations & platform",
  title: "Connects to everything your lab runs on",
  lead: "metquay.ai plugs into your ERP, finance, metrology, and hardware stack. An open REST API plus webhooks cover anything custom. No data silos. No double entry.",
};

export type GroupIcon = "erp" | "metrology" | "hardware" | "developer";

export const groups: { icon: GroupIcon; title: string; meta: string; body: string; href: string }[] = [
  {
    icon: "erp",
    title: "ERP & Finance",
    meta: "6 systems",
    body: "Bidirectional sync for customers, invoices, payments and assets.",
    href: "#erp",
  },
  {
    icon: "metrology",
    title: "Metrology & Calibration",
    meta: "4 connectors",
    body: "Fluke MET/CAL®, MET/CONNECT® and metrology.net order flow.",
    href: "#fluke",
  },
  {
    icon: "hardware",
    title: "Hardware",
    meta: "4 device types",
    body: "Barcode/QR scanners, label printers and connected gauges.",
    href: "#directory",
  },
  {
    icon: "developer",
    title: "Developer platform",
    meta: "API + Webhooks",
    body: "REST API and webhooks to build anything custom.",
    href: "#api",
  },
];

export type SyncRow = { what: string; direction: string };

export const erp = {
  id: "erp",
  label: "ERP & Finance",
  title: "Your finance stack, always in step",
  body: "Connect once and metquay.ai keeps customers, assets, invoices and payments synced both ways, invoices push the moment a work is approved, no double entry.",
  rows: [
    { what: "Customers & contacts", direction: "⇄ Bidirectional" },
    { what: "Invoices", direction: "→ Push to ERP" },
    { what: "Payments", direction: "← Pull to Metquay" },
    { what: "Assets & items", direction: "⇄ Bidirectional" },
  ] satisfies SyncRow[],
};

export const metrology = {
  id: "fluke",
  label: "Metrology & Calibration",
  title: "Plug into the metrology tools you already use",
  body: "Import automated procedure runs from Fluke MET/CAL® through MET/CONNECT®, and pull calibration orders straight from metrology.net, no re-keying results or job details.",
  rows: [
    { what: "MET/CAL® results", direction: "← Import runs" },
    { what: "Procedures", direction: "⇄ Mapped" },
    { what: "metrology.net orders", direction: "← Pull to Metquay" },
  ] satisfies SyncRow[],
};

export type DirectoryItem = {
  name: string;
  mark: string;
  category: "ERP & Finance" | "Metrology" | "Hardware" | "Developer";
  available: boolean;
};

export const directory = {
  title: "Every integration, in one place",
  lead: "Filter by category. New connectors ship continuously; if anything is missing, the API has you covered.",
  categories: ["ERP & Finance", "Metrology", "Hardware", "Developer"] as const,
  items: [
    { name: "Odoo", mark: "O", category: "ERP & Finance", available: true },
    { name: "NetSuite", mark: "N", category: "ERP & Finance", available: true },
    { name: "QuickBooks", mark: "Q", category: "ERP & Finance", available: true },
    { name: "Dynamics 365", mark: "D365", category: "ERP & Finance", available: true },
    { name: "Business Central", mark: "BC", category: "ERP & Finance", available: true },
    { name: "Xero", mark: "X", category: "ERP & Finance", available: true },
    { name: "SAP", mark: "S", category: "ERP & Finance", available: false },
    { name: "Fluke MET/CAL®", mark: "F", category: "Metrology", available: true },
    { name: "MET/CONNECT®", mark: "M/C", category: "Metrology", available: true },
    { name: "metrology.net", mark: "m.net", category: "Metrology", available: true },
    { name: "Beamex", mark: "B", category: "Metrology", available: false },
    { name: "Barcode / QR scanners", mark: "QR", category: "Hardware", available: true },
    { name: "Zebra label printers", mark: "Z", category: "Hardware", available: true },
    { name: "Honeywell scanners", mark: "H", category: "Hardware", available: true },
    { name: "Bluetooth gauges", mark: "BT", category: "Hardware", available: false },
    { name: "REST API", mark: "</>", category: "Developer", available: true },
    { name: "Webhooks", mark: "WH", category: "Developer", available: true },
    { name: "Zapier", mark: "Z", category: "Developer", available: false },
  ] satisfies DirectoryItem[],
};

export const api = {
  label: "Developer platform",
  title: "A clean REST API and webhooks for everything else",
  body: "Read and write works, assets, worksheets and certificates over a versioned REST API, and subscribe to webhook events to drive your own automations.",
  points: [
    "Token-based auth, scoped API keys per workspace",
    "Versioned endpoints & predictable JSON",
    "Signed webhook deliveries with retries",
  ],
  events: ["work.created", "work.completed", "certificate.issued", "asset.due_soon", "shipment.delivered"],
};

export const syncFlow = {
  eyebrow: "How sync works",
  title: "Two-way, mapped, and conflict-safe",
  nodes: [
    { label: "Your systems", title: "ERP · Finance · Metrology", body: "Customers, invoices, orders & results." },
    {
      label: "metquay.ai sync engine",
      title: "Field mapping & conflict resolution",
      body: "Maps fields, dedupes, and resolves conflicts deterministically.",
    },
    { label: "Tracefii platform", title: "Works · Assets · Certificates", body: "One audit-ready source of truth." },
  ],
  links: ["real-time + scheduled", "webhooks + API"],
};

export const partners = {
  eyebrow: "Partner program",
  title: "Build on metquay.ai",
  body: "Whether you’re a software vendor, a reseller or a systems integrator, partner with us to connect your product to calibration labs worldwide.",
  types: [
    { title: "Technology partners", body: "Co-build a listed integration with API access & sandbox." },
    { title: "Solution & reseller partners", body: "Deliver and resell metquay.ai with margin & enablement." },
  ],
  stats: [
    { value: "17+", label: "live integrations" },
    { value: "REST", label: "+ webhooks API" },
    { value: "Sandbox", label: "free dev workspace" },
    { value: "Co-marketing", label: "listing & launch support" },
  ],
  cta: { label: "Become a Partner", href: "/contact?intent=partner" },
};

export const cta = {
  title: "Connect metquay.ai to your stack",
  body: "Start with a prebuilt integration or build your own on the API, we’ll help you wire it up.",
};
