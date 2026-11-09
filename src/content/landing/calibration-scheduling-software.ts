import type { LandingPage } from "./types";

export default {
  slug: "calibration-scheduling-software",
  keyword: "Calibration Scheduling Software",
  group: "Workflow",
  eyebrow: "Receiving · Work orders · Capacity",
  title: "Calibration Scheduling Software Built on Technician Capacity",
  metaTitle: "Calibration Scheduling Software: Capacity & Work Orders",
  metaDescription:
    "Schedule calibration work against technician capacity and due dates: barcode receiving, drag-and-drop planning by bench, priority routing and at-risk flags.",
  summary:
    "Calibration scheduling software plans calibration work against due dates and the people and equipment available to do it. metquay.ai schedules each job against real technician capacity and the customer's due date, with barcode receiving, drag-and-drop scheduling by technician and test bench, priority routing and early flags on jobs at risk of running late.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Why a due-date calendar is not a schedule",
      body: [
        "A list of due dates tells you what needs doing, not whether the lab can do it. Real scheduling also depends on which technicians are qualified for each discipline, which benches and reference standards are free, how long each procedure takes, and which jobs are already late.",
        "When those constraints live in someone's head or a whiteboard, the schedule breaks the first time a technician is out or a rush job arrives.",
      ],
    },
    {
      heading: "Receiving feeds the schedule",
      body: [
        "In metquay.ai, instruments are checked in and barcoded the moment they arrive, with an intake and condition check. Nothing sits on a shelf unlogged, so every instrument is visible to the person planning the week.",
      ],
      link: { label: "Receiving and scheduling", href: "/solutions#step-03" },
    },
    {
      heading: "Scheduling against capacity",
      body: [
        "Lab managers schedule by drag and drop across technicians and test benches. Capacity-aware routing weighs the work against each technician's real capacity and the customer's due date, and flags at-risk jobs early enough to act.",
      ],
      points: [
        "Bulk and ad-hoc work creation with priority and due-date routing",
        "Critical, High, Medium and Low priority levels",
        "Technician performance and capacity monitoring for supervisors",
      ],
    },
    {
      heading: "In the lab and onsite",
      body: [
        "Onsite calibration adds travel, batches of instruments at one customer location and, often, no reliable connection. metquay.ai's offline-first app stores worksheets, assets and procedures on the device, queues changes in an outbox and syncs with conflict resolution when the technician is back online.",
      ],
      link: { label: "Onsite calibration software", href: "/onsite-calibration-software" },
    },
    {
      heading: "Seeing the plan as it runs",
      body: [
        "The role-aware dashboard shows urgent jobs, overdue assignments, pending approvals and completion rates in real time. Each user arranges their own drag-and-drop widgets, so a lab manager and a technician each see the part of the schedule they act on.",
      ],
    },
  ],
  faq: [
    {
      id: "what-is-calibration-scheduling-software",
      q: "What is calibration scheduling software?",
      a: "Calibration scheduling software plans calibration jobs against due dates, technician availability, benches and priorities, and tracks each job until it is complete.",
    },
    {
      id: "how-to-schedule-calibrations",
      q: "How should a calibration lab schedule its work?",
      a: "Log every instrument at receiving, then plan against technician capacity, qualifications, bench availability and the customer's due date rather than due dates alone. Review at-risk jobs daily and adjust priorities before they run late.",
    },
    {
      id: "calibration-work-order",
      q: "What is a calibration work order?",
      a: "A work order is the record of one calibration job: the instrument, the customer, the procedure, the assigned technician, the due date and the status. In metquay.ai each work carries through to the worksheet, certificate, label and invoice.",
    },
    {
      id: "schedule-onsite-calibration",
      q: "Can the same software schedule onsite and in-lab calibrations?",
      a: "Yes. metquay.ai schedules works by technician regardless of location, and its offline-first app lets technicians capture readings at customer sites without a connection and sync when they reconnect.",
    },
    {
      id: "customer-calibration-requests",
      q: "Can customers request calibrations online?",
      a: "Yes. Customers raise requests and approve quotes in metquay.ai's branded customer portal, then follow live status from intake to certificate.",
    },
  ],
  related: [
    { label: "Calibration tracking software", href: "/calibration-tracking-software" },
    { label: "Onsite calibration software", href: "/onsite-calibration-software" },
    { label: "Calibration lab software", href: "/calibration-lab-software" },
    { label: "Calibration management software", href: "/calibration-management-software" },
  ],
} satisfies LandingPage;
