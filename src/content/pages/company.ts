export const hero = {
  eyebrow: "Company · Who we are",
  title: "A world where every measurement is trusted",
  lead: "Metquay builds asset-centric, human-verified, AI-supercharged software for calibration labs — the platform behind tracefii. Built by a team that believes trustworthy measurement should be the default, not the exception.",
};

export const story = {
  eyebrow: "Our Story",
  title: "We build the system of record for calibration labs",
  paragraphs: [
    "Metquay makes lab-management software for the calibration and metrology industry — the platform behind tracefii. We replace spreadsheets, paper worksheets and disconnected tools with one connected, audit-ready system: assets, works, worksheets, certificates and traceability, end to end.",
    "Our approach is asset-centric and human-verified, supercharged by AI where it earns its place — adaptive calibration intervals, smarter scheduling, faster certificates — always with a person in the loop and an immutable trail behind every decision.",
    "One belief drives all of it: a world where every measurement is trusted.",
  ],
  stand: "Trustworthy, traceable, audit-ready. Every screen we ship should withstand an ISO 17025 assessment.",
  stats: [
    { value: "22", label: "people on the team" },
    { value: "1", label: "HQ · Bellevue, WA" },
    { value: "17025", label: "ISO/IEC — compliance-first" },
    { value: "100%", label: "focused on calibration" },
  ],
};

export type Person = { name: string; role: string; photo?: string };

const photo = (slug: string) => `/images/team/${slug}.webp`;

export const team: { title: string; people: Person[] }[] = [
  {
    title: "Leadership",
    people: [
      { name: "Sandeep Nair", role: "Chief Executive Officer", photo: photo("sandeep-nair") },
      { name: "Seby George Nelson", role: "Director of Quality" },
      { name: "Aravind Roy", role: "Product Owner & Technical Architect", photo: photo("aravind-roy") },
      { name: "Ethan Ring", role: "Business Development & Marketing", photo: photo("ethan-ring") },
    ],
  },
  {
    title: "Program & Design",
    people: [
      { name: "Anjum Fathima A", role: "Technical Program Manager", photo: photo("anjum-fathima-a") },
      { name: "Arun Raj", role: "Technical Program Manager", photo: photo("arun-raj") },
      { name: "Rhea Merin Thomas", role: "UI/UX Engineer", photo: photo("rhea-merin-thomas") },
    ],
  },
  {
    title: "Engineering",
    people: [
      "Adithya V",
      "Akhil Soman",
      "Binuja Biju",
      "Dilshad",
      "Don Thampy",
      "Geethika George",
      "Mohammed Shakkir",
      "Nayana Nagarajan",
      "Neerav",
      "Ponnu Prasannan",
      "Prayag T",
      "Rohan R",
      "Sreenadh S",
      "Sudhi S",
      "Vaishak C",
    ].map((name) => ({ name, role: "Engineer", photo: photo(name.toLowerCase().replace(/\s+/g, "-")) })),
  },
];

export const principles = {
  eyebrow: "How we work",
  title: "Our design methodology",
  lead: "We build the way the best product companies do, design-led and customer-obsessed. Four principles guide every release.",
  items: [
    {
      title: "Deep customer empathy",
      body: "We design from the lab floor out — shadowing technicians, auditors and quality managers — before a line of code is written.",
    },
    {
      title: "Go broad, then narrow",
      body: "We explore many ways to solve a problem, then converge hard on the one that’s simplest and clearest for the lab.",
    },
    {
      title: "Rapid experiments",
      body: "We ship small, put it in front of real labs early, and let evidence — not opinion — decide what stays.",
    },
    {
      title: "Trust by design",
      body: "Every decision is judged against one bar: would it withstand an ISO 17025 audit? Trust is a design requirement, not a feature.",
    },
  ],
};

export const milestones = {
  eyebrow: "Our Journey",
  title: "Milestones",
  items: [
    {
      year: "2018",
      title: "The inception",
      body: "Metquay is founded on one conviction — calibration labs deserve software built for how they actually work, not a generic tool bent to fit.",
    },
    {
      year: "2020",
      title: "Going global",
      body: "Expansion across Asia, Australia and Europe brings Metquay to labs on three continents.",
    },
    {
      year: "2022",
      title: "Into North America",
      body: "US & Canada expansion plants the flag in two of the world’s most demanding compliance markets.",
    },
    {
      year: "2023",
      title: "tracefii arrives",
      body: "The refined product brand launches — works, worksheets, certificates and traceability in one connected system.",
    },
    {
      year: "2025",
      title: "metquay.ai is born",
      body: "The AI-native era begins — adaptive intervals, smarter scheduling and faster certificates, with the audit trail still at the core.",
    },
    {
      year: "July 2026",
      title: "Market release",
      body: "metquay.ai goes to market — calibration management, supercharged, in the hands of labs worldwide.",
    },
  ],
};

export const hq = {
  eyebrow: "Headquarters",
  title: "Bellevue, Washington",
  body: "Our home base sits in the heart of the Pacific Northwest tech corridor — close to the customers, standards bodies and talent that shape modern metrology.",
  channels: [
    {
      title: "Press & media",
      body: "Writing about calibration, metrology or metquay.ai? We’re happy to help with facts, quotes and assets.",
    },
    {
      title: "General & sales",
      body: "Questions about the platform, pricing or a demo for your lab? Reach the team directly.",
    },
    {
      title: "Careers",
      body: "We’re a small team building software the calibration world relies on. If that sounds like your kind of problem, say hello.",
    },
  ],
};

export const cta = {
  title: "Build the future of trusted measurement with us",
  body: "Whether you want to run your lab on metquay.ai or help us build it, we’d love to talk.",
};
