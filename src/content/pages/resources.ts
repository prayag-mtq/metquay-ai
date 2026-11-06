export const hero = {
  eyebrow: "Resources · The complete implementation library",
  title: "Everything you need to implement, integrate, and scale",
  lead: "From your first audit checklist to a 50-lab enterprise deployment, we’ve documented every step. Seven free playbooks written by practitioners, for practitioners. No email required to browse.",
  facts: [
    "7 Playbooks",
    "ISO/IEC 17025:2017",
    "FDA 21 CFR Part 11",
    "Free to Download",
    "Written for Calibration Labs",
  ],
};

export const intro = {
  title: "We’ve thought of every stage. So you don’t have to.",
  paragraphs: [
    "Most calibration software vendors sell you a licence and hand you a user manual. We asked a different question: what does a lab actually need to go from where they are today to a fully digital, fully compliant, fully scaled operation?",
    "The answer turned out to be seven things. And we wrote them all down — whether you’re a single-lab quality manager preparing for your first ISO 17025 assessment, an IT lead connecting metquay.ai to your ERP, a regulated facility validating under FDA 21 CFR Part 11, or a portfolio director standardising across fifteen sites.",
    "Not generic advice. Specific steps, checklists, field mappings, timelines, and decision frameworks — for calibration labs.",
  ],
};

export type Playbook = {
  id: string;
  short: string;
  stage: string;
  title: string;
  body: string;
  audience: string[];
  length: string;
};

export const playbooks: Playbook[] = [
  {
    id: "1-decide",
    short: "Decide",
    stage: "Stage 1 · Decide & Plan",
    title: "Digital Transformation Playbook",
    body: "Go from spreadsheets & paper to a fully integrated digital lab — the complete decision framework.",
    audience: ["Lab Director", "Quality Manager", "Operations"],
    length: "42 pages · 28 min",
  },
  {
    id: "2-migrate",
    short: "Migrate",
    stage: "Stage 2 · Move From Legacy",
    title: "Master Migration Playbook",
    body: "From Qualer, GagePack, IndySoft or MET/TEAM® to metquay.ai in 10–20 weeks, data intact.",
    audience: ["IT", "QA"],
    length: "52 pages · 33 min",
  },
  {
    id: "3-erp",
    short: "ERP",
    stage: "Stage 3 · Connect Systems",
    title: "ERP & Accounting Integration Playbook",
    body: "Connect to Odoo, NetSuite, QuickBooks, Dynamics, Business Central & Xero — field maps and go-live.",
    audience: ["IT", "Finance"],
    length: "48 pages · 30 min",
  },
  {
    id: "4-equipment",
    short: "Equipment",
    stage: "Stage 4 · Connect Equipment",
    title: "metrology.net & Fluke MET/CAL® Playbook",
    body: "Close the loop: orders in, MET/CAL® execution, results captured, certificates delivered out.",
    audience: ["Lab Manager", "Technician"],
    length: "40 pages · 26 min",
  },
  {
    id: "5-validate",
    short: "Validate",
    stage: "Stage 5 · Satisfy Regulators",
    title: "FDA Validation Playbook (IQ/OQ/PQ)",
    body: "The full validation protocol aligned to 21 CFR Part 11, EU Annex 11 and GAMP 5.",
    audience: ["QA", "Regulatory Affairs"],
    length: "62 pages · 40 min",
  },
  {
    id: "6-audit",
    short: "Audit",
    stage: "Stage 6 · Pass Your Audit",
    title: "ISO/IEC 17025:2017 Audit Prep Playbook",
    body: "Clause-by-clause preparation, a 5-phase timeline, and the 10 most common findings to prevent.",
    audience: ["Quality Manager", "Lab Director"],
    length: "56 pages · 35 min",
  },
  {
    id: "7-market",
    short: "Market",
    stage: "Stage 7 · Win Stakeholders",
    title: "Digital Marketing Playbook",
    body: "Build a digital marketing engine for a calibration business — strategy, channels, and a 90-day plan.",
    audience: ["Marketing", "Founder", "Sales"],
    length: "38 pages · 24 min",
  },
];

export const why = {
  eyebrow: "Why we wrote all seven",
  paragraphs: [
    "Most calibration software vendors stop at the product. You get a licence, an onboarding call, and a user manual. What you don't get is the answer to the question every serious buyer is really asking: what does it actually take to go from where we are today to where we want to be?",
    "That question has seven answers, and they depend entirely on where you're starting. We wrote seven playbooks because we have seven types of customer — and every one of them deserves a complete answer, not a sales deck. The playbooks are free because a customer who goes in with eyes open makes a better long-term partner than one who was oversold and undersupported.",
  ],
  sizes: [
    {
      title: "Running a single-site lab?",
      body: "These playbooks are sized for you. The ISO 17025 checklist works whether you have 3 technicians or 30, and the migration guide covers the fastest path — GagePack to metquay.ai in 10 weeks — because your team doesn’t have six months to spare.",
    },
    {
      title: "Managing multiple sites?",
      body: "The Implementation Hub maps to enterprise rollout. The ERP playbook covers multi-subsidiary configurations, the migration playbook handles multi-site parallel runs, and metquay.ai's multi-workspace architecture gives every site independence with consolidated visibility from the top.",
    },
  ],
};

export const more = {
  eyebrow: "More resources",
  title: "Beyond the playbooks",
  items: [
    {
      title: "Calibration Knowledge Hub",
      body: "Articles and how-tos on calibration management, traceability, uncertainty and compliance.",
      label: "Read the blog",
      href: "/blog",
    },
    {
      title: "Webinars & Demos",
      body: "Live and on-demand sessions on ISO 17025, migration, and AI interval optimization.",
      label: "Watch now",
      href: "https://www.youtube.com/@metquay-calibrationmanagem67",
    },
    {
      title: "Customer case studies",
      body: "How labs cut audit prep by 70% and migrated in weeks - real numbers from real teams.",
      label: "See the stories",
      href: "/#testimonials",
    },
  ],
};

export const consult = {
  title: "Still not sure where to start?",
  body: "Talk to an implementation specialist. They’ve guided labs from single-site startups to multi-site enterprises through every stage in these playbooks — and they’ll tell you exactly which ones apply to your situation.",
  label: "Book a Free Consultation",
};
