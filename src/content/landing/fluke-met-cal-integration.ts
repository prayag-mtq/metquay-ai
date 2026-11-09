import type { LandingPage } from "./types";

export default {
  slug: "fluke-met-cal-integration",
  keyword: "Fluke MET/CAL Integration",
  group: "Integrations & migration",
  eyebrow: "Fluke MET/CAL® · MET/CONNECT® · metrology.net",
  title: "Fluke MET/CAL Integration Through MET/CONNECT",
  metaTitle: "Fluke MET/CAL Integration via MET/CONNECT | metquay.ai",
  metaDescription:
    "Import Fluke MET/CAL® procedure runs into metquay.ai through MET/CONNECT®, report uncertainty within your CMC, and pull calibration orders from metrology.net.",
  summary:
    "metquay.ai integrates with Fluke MET/CAL® through MET/CONNECT®, Fluke's protocol for passing MET/CAL results to other software. Automated procedure runs are imported into metquay.ai worksheets without re-keying, where the lab can apply its CMC-based uncertainty, consistent formats and resolution rules before the certificate is issued. Calibration orders can also be pulled from metrology.net.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Why MET/CAL labs need a calibration management system",
      body: [
        "Many electrical and temperature calibration labs use Fluke MET/CAL® to automate procedures on the bench. MET/CAL runs the calibration well, but it does not manage the rest of the lab: customers, due dates, scheduling, review, certificates and invoicing.",
        "MET/CAL also leaves accredited labs with specific reporting problems. Its procedures are based on manufacturer specifications, but an accredited lab cannot report an uncertainty smaller than its own CMC. Each procedure has its own output format, which multiplies as the procedure library grows. And reported results have to match the resolution of the instrument, which can change across ranges.",
      ],
    },
    {
      heading: "How MET/CONNECT links MET/CAL to metquay.ai",
      body: [
        "MET/CONNECT® is the protocol Fluke provides for software to receive data from MET/CAL. metquay.ai acts as that receiving system: it imports MET/CAL runs into the work, so results and job details are not typed in twice.",
      ],
      points: [
        "MET/CAL® results: imported from procedure runs",
        "Procedures: mapped between MET/CAL and metquay.ai",
        "metrology.net orders: pulled into metquay.ai",
      ],
      link: { label: "See the metrology integrations", href: "/ecosystem#fluke" },
    },
    {
      heading: "What happens to MET/CAL results in metquay.ai",
      body: [
        "Once a run is in a metquay.ai worksheet, the lab controls how it is reported. Uncertainties can be adjusted to the lab's CMC budgets, results from different procedures are consolidated into consistent certificate formats, and rounding rules bring each result to the resolution required. Live charts show the readings visually, which MET/CAL does not provide on its own.",
        "From there the work follows the normal metquay.ai path: review with re-authenticated signatures, a PDF/A certificate generated on approval, and delivery to the customer portal.",
      ],
      link: { label: "How worksheet uncertainty is calculated", href: "/measurement-uncertainty-software" },
    },
    {
      heading: "Closing the loop with metrology.net",
      body: [
        "metquay.ai pulls calibration orders from metrology.net, so the job exists in the system before the instrument reaches the bench. The metrology.net & Fluke MET/CAL® Playbook covers the full loop: orders in, MET/CAL execution, results captured and certificates delivered.",
      ],
      link: { label: "Request the MET/CAL playbook", href: "/resources#4-equipment" },
    },
  ],
  faq: [
    {
      id: "what-is-met-connect",
      q: "What is MET/CONNECT?",
      a: "MET/CONNECT® is a Fluke protocol that lets other software receive calibration data from MET/CAL®. metquay.ai uses it to import MET/CAL procedure runs into its worksheets.",
    },
    {
      id: "replace-metcal",
      q: "Does metquay.ai replace Fluke MET/CAL?",
      a: "No. MET/CAL keeps running automated procedures on the bench. metquay.ai receives the results through MET/CONNECT and manages the rest of the work: scheduling, review, uncertainty reporting, certificates and invoicing.",
    },
    {
      id: "cmc-uncertainty",
      q: "Can we report MET/CAL uncertainties within our CMC?",
      a: "Yes. MET/CAL uncertainties come from manufacturer specifications, but accredited labs must report within their CMC. In metquay.ai the imported results can be adjusted against the lab's CMC budgets before the certificate is issued.",
    },
    {
      id: "procedures",
      q: "How are MET/CAL procedures handled in the integration?",
      a: "Procedures are mapped between MET/CAL and metquay.ai as part of setting up the integration. The metrology.net & Fluke MET/CAL Playbook walks through the setup.",
    },
    {
      id: "metrology-net",
      q: "Does metquay.ai integrate with metrology.net?",
      a: "Yes. metquay.ai pulls calibration orders from metrology.net, so job details do not have to be re-keyed.",
    },
  ],
  related: [
    { label: "Calibration software ERP integration", href: "/calibration-software-erp-integration" },
    { label: "Measurement uncertainty software", href: "/measurement-uncertainty-software" },
    { label: "MET/CAL challenges and solutions", href: "/blog/met-cal-challenges-and-solutions" },
    { label: "Talk to an integration expert", href: "/contact?intent=expert" },
  ],
} satisfies LandingPage;
