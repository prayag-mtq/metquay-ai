export const hero = {
  eyebrow: "Asset-centric · Human-verified · AI-supercharged",
  title: "Calibration Management, built for every detail and any scale",
  lead: "One platform for the full calibration process, from customer portal to shipping. ISO/IEC 17025 compliant calibration management software, offline-capable, with AI built in.",
  note: "No credit card. No-risk setup.",
};

export type WorkflowIcon = "portal" | "sales" | "scheduler" | "assignment" | "data" | "certificate" | "shipping";

export const workflow: { label: string; icon: WorkflowIcon; href: string }[] = [
  { label: "Customer Portal", icon: "portal", href: "/solutions#step-02" },
  { label: "Sales", icon: "sales", href: "/solutions#step-02" },
  { label: "Scheduler", icon: "scheduler", href: "/solutions#step-03" },
  { label: "Work Assignment", icon: "assignment", href: "/solutions#step-03" },
  { label: "Data Capture & Uncertainty", icon: "data", href: "/solutions#step-04" },
  { label: "Certificate & Label", icon: "certificate", href: "/solutions#step-07" },
  { label: "Packing & Shipping", icon: "shipping", href: "/solutions#step-08" },
];

export const compliance = ["ISO 17025", "21 CFR Part 11", "GAMP-5"];

export const integrations = ["Odoo", "NetSuite", "QuickBooks", "Dynamics", "Fluke", "Metrology.net"];

export type RoleIcon = "managers" | "quality" | "technicians" | "it" | "portfolio";

export const roles = {
  eyebrow: "Solutions",
  title: "One platform, every role in the lab",
  lead: "One platform, tuned to how each person works, from the bench to the boardroom.",
  items: [
    {
      id: "lab-managers",
      label: "Lab Managers",
      icon: "managers",
      headline: "Run the whole lab from one view.",
      points: [
        "Live workload, urgent jobs, and overdue assignments at a glance",
        "Bulk + ad-hoc work creation with priority and due-date routing",
        "Technician performance and capacity monitoring",
      ],
    },
    {
      id: "quality",
      label: "Quality & Compliance",
      icon: "quality",
      headline: "Walk into any audit ready.",
      points: [
        "Immutable, version-pinned audit trail on every measurement",
        "ISO 17025, 21 CFR Part 11, GAMP-5 controls built in",
        "Re-authenticated digital signatures and approval gates",
      ],
    },
    {
      id: "technicians",
      label: "Technicians",
      icon: "technicians",
      headline: "Capture readings anywhere — even offline.",
      points: [
        "Smart worksheets that auto-calculate pass/fail and uncertainty",
        "Full offline PWA with auto-sync and conflict resolution",
        "Barcode / QR lookup for instant work and asset access",
      ],
    },
    {
      id: "it-admin",
      label: "IT & Admin",
      icon: "it",
      headline: "Standardize, secure, and connect.",
      points: [
        "Role-based permissions and multi-workspace switching",
        "Bidirectional ERP & finance sync (Odoo, NetSuite, QuickBooks…)",
        "REST APIs and webhooks for anything custom",
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio Operations",
      icon: "portfolio",
      headline: "See every site, on one pane.",
      points: [
        "Portfolio-level visibility across labs and locations",
        "Standardized procedures, templates, and certificates",
        "Cross-site benchmarking and rollup reporting",
      ],
    },
  ] satisfies { id: string; label: string; icon: RoleIcon; headline: string; points: string[] }[],
};

export const platform = {
  eyebrow: "The Platform",
  title: "Everything your calibration lab needs",
  features: [
    {
      id: "dashboard",
      label: "Dashboard & Widgets",
      title: "A dashboard that adapts to every role",
      body: "Drag-and-drop widgets, role-aware visibility, and real-time KPIs — urgent jobs, overdue assignments, pending approvals, and completion rates, all in one view.",
      points: [
        "iOS-style drag-and-drop layout, saved per user",
        "Technician performance monitoring for supervisors",
        "Critical / High / Medium / Low priority routing",
      ],
      image: {
        src: "/images/home/dashboard.webp",
        width: 2000,
        height: 1077,
        alt: "metquay.ai dashboard with overdue assignments, urgent works and priority breakdown widgets",
      },
    },
    {
      id: "worksheet",
      label: "Smart Worksheets",
      title: "Measurement capture that does the math",
      body: "A drag-and-drop template builder with a real expression engine — unit conversion, validation rules, color-coded pass/fail, and live charts. Built for ISO/IEC 17025 compliance and Traceability.",
      points: [
        "Reference-asset linking with traceability chain",
        "As Found / As Left, auto-save, full offline",
        "Version-pinned procedures per work run",
      ],
      image: {
        src: "/images/home/worksheet.webp",
        width: 1600,
        height: 1104,
        alt: "Calibration worksheet for a pressure indicator showing increasing and decreasing readings, uncertainty and pass results",
      },
    },
    {
      id: "certificates",
      label: "Certificates & Labels",
      title: "Accredited Certificates & Labels generated in seconds",
      body: "A visual builder for compliant PDF/A certificates and QR-coded labels — data-bound, versioned, and re-issued automatically on approval.",
      points: [
        "Drag-and-drop certificate & label designers",
        "QR codes linking back to the live asset record",
        "Customer portal delivery & email in one click",
      ],
      image: {
        src: "/images/home/certificate.webp",
        width: 1600,
        height: 1037,
        alt: "Certificate of calibration designer with header, body and signature blocks",
      },
    },
  ],
};

export type ReasonIcon = "ai" | "trace" | "offline" | "scan" | "erp" | "workspace";

export const reasons = {
  eyebrow: "Why Teams Switch",
  title: "Asset-centric. Human-verified. AI-supercharged.",
  items: [
    {
      icon: "ai",
      title: "AI Calibration Interval Optimization",
      body: "Adaptive calibration intervals from your own history, with QA approval and a full audit trail on every change.",
    },
    {
      icon: "trace",
      title: "Audit-Ready Traceability",
      body: "Immutable snapshots, version-pinned runs, and a traceability chain from reference standard to certificate.",
    },
    {
      icon: "offline",
      title: "Offline-First Mobile App",
      body: "Full data entry on the shop floor with no connection, an outbox queue syncs and resolves conflicts on reconnect.",
    },
    {
      icon: "scan",
      title: "Barcode & QR Scanning",
      body: "Look up any work order or asset instantly, camera or hardware scanner, across every workspace you can access.",
    },
    {
      icon: "erp",
      title: "ERP & Finance Sync",
      body: "Bidirectional sync with Odoo, NetSuite, QuickBooks, Dynamics, Business Central and Xero, invoices push automatically.",
    },
    {
      icon: "workspace",
      title: "Multi-Workspace & Roles",
      body: "Standardize across sites with workspace switching, role-based permissions, shared datasets across workspaces, and portfolio-level visibility.",
    },
  ] satisfies { icon: ReasonIcon; title: string; body: string }[],
};

export const testimonials = {
  eyebrow: "Trusted by Labs",
  title: "Built for the people who pass the audit",
  items: [
    {
      quote:
        "We've been the go-to source for backflow prevention parts and service for decades. Metquay modernized our calibration and testing workflows, bringing structure, traceability, and efficiency, and keeping our compliance requirements consistently met.",
      name: "Kris Munson",
      role: "Water Specialties Company",
    },
    {
      quote:
        "We serve over 3,500 customers across Indonesia, and calibration at that scale demands a platform that keeps up. Tracefii lets us deliver same-day certificates, track assets in real time, and give clients complete visibility, a cornerstone of going paperless.",
      name: "Jovan Pratama",
      role: "General Manager, Aequus Solutions (PT Mandiri Transforma Global)",
    },
    {
      quote:
        "In oil, gas and mining, the accuracy of every torque and tension measurement is non-negotiable. Metquay has streamlined our calibration records, asset tracking, and certificate management across our Australian and Canadian operations, a genuine game-changer for specialized tooling.",
      name: "Tam Nguyen",
      role: "Quality & Laboratory Manager, Marcem Australia",
    },
    {
      quote:
        "Metquay has been responsive from day one and genuinely committed to helping us manage pressure gauge, torque, relief valve, dimensional, and gas detector calibration. They've supported us every step of the way, and we look forward to growing with them across Australia.",
      name: "Chris Grayson",
      role: "QICR, Roma QLD",
    },
    {
      quote:
        "Pipette calibration across Metro Vancouver, Interior BC, and Calgary means high volumes and meticulous accuracy. Metquay has streamlined our records, certificates, and customer communication, bringing the same precision to our operations that we apply to every instrument.",
      name: "Rufino Cauzon",
      role: "Cubit Technical Services Inc., Vancouver, BC",
    },
    {
      quote:
        "Calibrating for industrial hygiene. Aerosols, gases, particles, sound, and vibration demand a platform as precise as our instruments. Tracefii gives clients real-time visibility into calibration status and certificates, so we deliver personalized service at scale.",
      name: "Pam Bittaker",
      role: "CIH Equipment, Clearwater, FL",
    },
  ],
};

export const playbooks = {
  eyebrow: "Resources",
  title: "Playbooks from the calibration knowledge hub",
  cta: { label: "View all playbooks", href: "/resources" },
  items: [
    {
      tag: "Migration",
      title: "From Qualer, GagePack & MET/TEAM to metquay.ai",
      body: "A step-by-step playbook for planning migration while maintaining compliance continuity.",
    },
    {
      tag: "Integrations",
      title: "Connect metquay.ai to your ERP in days",
      body: "Auth, field mapping and sync strategy for QuickBooks, NetSuite and more.",
    },
    {
      tag: "Compliance",
      title: "The ISO/IEC 17025:2017 readiness checklist",
      body: "Everything an assessor checks and how to be ready for all of it.",
    },
  ],
};

export const faq = {
  title: "Questions, answered",
  items: [
    {
      id: "compliance",
      q: "Is metquay.ai compliant with ISO 17025 and FDA 21 CFR Part 11?",
      a: "Yes. Every measurement, procedure version, signature and approval is captured in an immutable, version-pinned audit trail. Digital signatures require re-authentication for 21 CFR Part 11, and certificates output as accredited PDF/A.",
    },
    {
      id: "migration",
      q: "How long does migration from our current system take?",
      a: "Most labs go live in 10–20 weeks with a structured, parallel-run migration, never a big-bang cutover. We support Qualer, GagePack, IndySoft and MET/TEAM with per-platform playbooks and full compliance continuity.",
    },
    {
      id: "offline",
      q: "Can technicians really work fully offline?",
      a: "Yes. metquay.ai is an offline-first PWA. Worksheets, assets and procedures are stored locally; all changes queue in an outbox and sync automatically with conflict resolution when connectivity returns.",
    },
    {
      id: "integrations",
      q: "Which ERP and accounting systems do you integrate with?",
      a: "Odoo, Oracle NetSuite, QuickBooks (Online & Desktop), Microsoft Dynamics 365, Business Central and Xero, plus Fluke MET/CAL via MET/Connect and metrology.net for orders. REST APIs and webhooks cover anything custom.",
    },
    {
      id: "ai-intervals",
      q: "How does the AI interval optimization stay compliant?",
      a: "It rolls out in staged phases — observation, review, trial, then full activation. Every AI-driven interval change requires a recommendation report, risk assessment, QA Manager approval and an immutable audit entry.",
    },
  ],
};

export const blogTeaser = {
  eyebrow: "Blog",
  title: "Explore the blog",
  cta: { label: "View all posts", href: "/blog" },
};

export const ctaBand = {
  title: "Ready to modernize your calibration lab?",
  body: "A world where every measurement is trusted starts with one platform. See metquay.ai on your own data.",
};
