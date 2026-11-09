import type { LandingPage } from "./types";

export default {
  slug: "calibration-software-erp-integration",
  keyword: "Calibration Software ERP Integration",
  group: "Integrations & migration",
  eyebrow: "Odoo · NetSuite · QuickBooks · Dynamics 365 · Business Central · Xero",
  title: "Calibration Software ERP Integration Without Double Entry",
  metaTitle: "Calibration Software ERP Integration: Odoo, NetSuite & More",
  metaDescription:
    "How metquay.ai syncs customers, assets, invoices and payments with Odoo, NetSuite, QuickBooks, Dynamics 365, Business Central and Xero: what flows which way.",
  summary:
    "metquay.ai integrates calibration software with your ERP so nothing is keyed twice. It syncs customers and assets both ways, pushes invoices to the ERP when a work is approved, and pulls payments back, with prebuilt connectors for Odoo, Oracle NetSuite, QuickBooks, Microsoft Dynamics 365, Business Central and Xero, plus a REST API and webhooks for anything else.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Why calibration labs connect their ERP",
      body: [
        "An ERP runs sales, accounting and inventory, but it is not built to manage calibration procedures, uncertainty or ISO/IEC 17025 records. Calibration software is. Without a connection, someone re-enters each order in the calibration system and then re-enters each completed job in the ERP to invoice it.",
        "Every re-keyed field is a chance for a wrong customer, a missed line item or a job that is finished but never billed. Integration removes that step.",
      ],
    },
    {
      heading: "What flows which way",
      body: [
        "Once connected, metquay.ai keeps four kinds of record in step with the ERP. The sync engine maps fields, removes duplicates and resolves conflicts deterministically, running both in real time and on a schedule.",
      ],
      points: [
        "Customers and contacts: bidirectional",
        "Assets and items: bidirectional",
        "Invoices: pushed to the ERP the moment a work is approved",
        "Payments: pulled back into metquay.ai",
      ],
      link: { label: "See the ERP sync table", href: "/ecosystem#erp" },
    },
    {
      heading: "Supported ERP and accounting systems",
      body: [
        "metquay.ai has prebuilt connectors for Odoo, Oracle NetSuite, QuickBooks Online and Desktop, Microsoft Dynamics 365, Business Central and Xero. For other systems, a versioned REST API reads and writes works, assets, worksheets and certificates, and signed webhooks fire on events such as work.completed and certificate.issued.",
        "Metquay's Odoo write-up describes one common pattern: a sales order that needs calibration creates a work order in metquay.ai through the API, the status flows back as the job progresses, and the ERP is notified when the certificate is issued so shipping and invoicing can proceed.",
      ],
      link: { label: "REST API and webhooks", href: "/ecosystem#api" },
    },
    {
      heading: "Decide who owns which data first",
      body: [
        "Most integration problems are decided before any code runs. Agree which system is the record for each object. A common split is that the ERP owns asset master data, such as equipment numbers, cost centers and plant assignments, while the calibration system owns procedures, tolerances, results, certificates and due dates.",
        "Agree a shared identifier for each instrument too, ideally the ERP's equipment number, stored in the calibration record through custom field mapping. Then test end to end with a representative sample of real records, not dummy data.",
      ],
      link: {
        label: "ERP integration best practices",
        href: "/blog/calibrated-to-connect-erp-integration-best-practices-for-modern-calibration-labs",
      },
    },
    {
      heading: "Field maps and go-live",
      body: [
        "The ERP & Accounting Integration Playbook covers field maps and go-live steps for each supported system, including multi-subsidiary configurations for labs that run more than one entity.",
      ],
      link: { label: "Request the ERP integration playbook", href: "/resources#3-erp" },
    },
  ],
  faq: [
    {
      id: "which-erp",
      q: "Which ERP systems integrate with metquay.ai?",
      a: "Odoo, Oracle NetSuite, QuickBooks Online and Desktop, Microsoft Dynamics 365, Business Central and Xero have prebuilt connectors. A REST API and webhooks cover custom or unlisted systems.",
    },
    {
      id: "data-direction",
      q: "What data syncs between calibration software and the ERP?",
      a: "Customers and contacts sync both ways, as do assets and items. Invoices push from metquay.ai to the ERP when a work is approved, and payments pull back from the ERP into metquay.ai.",
    },
    {
      id: "invoice-timing",
      q: "When is a calibration job invoiced in the ERP?",
      a: "metquay.ai pushes the invoice to the connected ERP as soon as the work is approved, so completed jobs do not wait for someone to key them into accounting.",
    },
    {
      id: "quickbooks",
      q: "Does the QuickBooks integration work with QuickBooks Desktop?",
      a: "Yes. metquay.ai integrates with both QuickBooks Online and QuickBooks Desktop.",
    },
    {
      id: "custom-erp",
      q: "Can we connect an ERP that is not on the list?",
      a: "Yes, through the API. The versioned REST API uses scoped, per-workspace API keys, and signed webhook deliveries with retries let your ERP react to events such as work.completed or certificate.issued.",
    },
  ],
  related: [
    { label: "All integrations", href: "/ecosystem" },
    { label: "Fluke MET/CAL integration", href: "/fluke-met-cal-integration" },
    { label: "Calibration software migration", href: "/calibration-software-migration" },
    {
      label: "Metquay and Odoo",
      href: "/blog/metquay-and-odoo-the-dynamic-duo-for-efficient-calibration-lab-management",
    },
  ],
} satisfies LandingPage;
