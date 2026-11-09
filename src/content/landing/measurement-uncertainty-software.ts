import type { LandingPage } from "./types";

export default {
  slug: "measurement-uncertainty-software",
  keyword: "Measurement Uncertainty Software",
  group: "Workflow",
  eyebrow: "Uncertainty budgets · TUR · Decision rules",
  title: "Measurement Uncertainty Software Inside the Calibration Worksheet",
  metaTitle: "Measurement Uncertainty Software for Calibration Labs",
  metaDescription:
    "How metquay.ai calculates measurement uncertainty in the calibration worksheet: expression engine, unit conversion, CMC limits, resolution rounding, pass/fail.",
  summary:
    "metquay.ai calculates measurement uncertainty inside the calibration worksheet, not in a separate spreadsheet. Its expression engine handles unit conversion, validation rules and the uncertainty of each reading, rounds results to the resolution of the unit under test, and shows a color-coded pass/fail beside every point, so the certificate reports exactly what the technician measured.",
  updated: "2026-11-09",
  sections: [
    {
      heading: "Why uncertainty belongs in the worksheet",
      body: [
        "ISO/IEC 17025 requires a calibration lab to evaluate measurement uncertainty and report it with the result. Many labs still build the uncertainty budget in a spreadsheet, then copy the result into a worksheet and again into the certificate. Each copy is a chance for a transcription error that an assessor will find.",
        "When the readings, the reference standard and the uncertainty calculation live on the same worksheet row, there is nothing to copy. The certificate is generated from the approved data, so the reported uncertainty is the one that was calculated.",
      ],
    },
    {
      heading: "The uncertainty budget, the GUM way",
      body: [
        "The Guide to the Expression of Uncertainty in Measurement (GUM) sets out the method most labs follow. Each contributor, such as the reference standard's calibration uncertainty, UUT resolution, repeatability and environmental effects, is evaluated as a Type A (statistical) or Type B (other information) standard uncertainty. They are combined as a root sum of squares, with sensitivity coefficients where needed, and multiplied by a coverage factor, usually k = 2 for roughly 95 % coverage.",
        "Where the analytical GUM approach is not adequate, the Monte Carlo method propagates the input distributions numerically instead.",
      ],
      link: { label: "Coverage factor (k) explained", href: "/glossary#coverage-factor" },
    },
    {
      heading: "What the metquay.ai worksheet calculates",
      body: [
        "Smart worksheets are built in a drag-and-drop template builder backed by an expression engine. A single expression can be reused across any number of calibration points or instruments, so the budget is set up once per procedure rather than once per job.",
      ],
      points: [
        "Unit conversion before every calculation, so a reading in mV and a nominal in V combine correctly",
        "Result and uncertainty rounded to the resolution of the unit under test, in whatever unit is reported",
        "Linear interpolation available as a ready-made function for corrections between calibrated points",
        "Reference assets linked to each work, with their own calibration status and traceability chain",
        "Version-pinned procedures, so the budget used on a job is the budget on record",
      ],
      link: { label: "See smart worksheets in the workflow", href: "/solutions#step-04" },
    },
    {
      heading: "Reporting within your CMC",
      body: [
        "An accredited lab cannot report an uncertainty smaller than the Calibration and Measurement Capability (CMC) on its scope of accreditation. metquay.ai applies CMC corrections so the uncertainty a lab reports is based on its published capability. This matters most for automated procedures, such as Fluke MET/CAL® runs, whose uncertainties come from manufacturer specifications rather than the lab's own budget.",
      ],
      link: { label: "How MET/CAL results are brought in", href: "/fluke-met-cal-integration" },
    },
    {
      heading: "TUR, decision rules and pass/fail",
      body: [
        "Test Uncertainty Ratio (TUR) compares the tolerance of the unit under test with the expanded uncertainty of the calibration process. A ratio of at least 4:1 is a common target. When the ratio is lower, the uncertainty takes up more of the tolerance and the risk of a false accept rises.",
        "ISO/IEC 17025 asks labs to agree a decision rule with the customer before issuing a statement of conformity, and ILAC-G8 describes how to account for uncertainty in that rule. In metquay.ai, pass/fail is calculated on every reading, color-coded and charted live, so the technician and the reviewer see the result and its uncertainty together before approval.",
      ],
      link: { label: "TUR defined", href: "/glossary#tur" },
    },
  ],
  faq: [
    {
      id: "what-is",
      q: "What is measurement uncertainty software?",
      a: "Measurement uncertainty software calculates the uncertainty of a calibration result from its contributors, such as the reference standard, resolution and repeatability. In metquay.ai this is done inside the calibration worksheet, so the uncertainty is recorded with the readings and carried to the certificate.",
    },
    {
      id: "replace-excel",
      q: "Can calibration software replace our Excel uncertainty budgets?",
      a: "Yes. metquay.ai worksheets use an expression engine for unit conversion, validation and uncertainty. AI can help convert an existing calibration spreadsheet into a worksheet, and the output is always shown for human review before it is saved.",
    },
    {
      id: "uut-resolution",
      q: "How do you round uncertainty to the resolution of the UUT?",
      a: "Convert the UUT resolution to the unit of the result, count its decimal places, and round the result to match. In a metquay.ai worksheet this is one expression that works for any unit and can be reused across calibration points.",
    },
    {
      id: "cmc",
      q: "Can a lab report uncertainty lower than its CMC?",
      a: "No. An accredited lab cannot report an uncertainty smaller than the CMC listed on its scope for that quantity and range. metquay.ai applies CMC corrections so reported uncertainties reflect the lab's published capability.",
    },
    {
      id: "tur-ratio",
      q: "What TUR ratio is acceptable for calibration?",
      a: "A TUR of at least 4:1 is a common target for reliable pass/fail decisions. Below that, the decision rule agreed with the customer should account for the larger share of the tolerance taken up by uncertainty.",
    },
  ],
  related: [
    { label: "ISO 17025 calibration software", href: "/iso-17025-calibration-software" },
    { label: "Moving off Excel calibration tracking", href: "/calibration-excel-alternative" },
    {
      label: "TAR and TUR explained",
      href: "/blog/exploring-the-concept-of-test-accuracy-ratio-tar-and-test-uncertainty-ratio-tur",
    },
    { label: "Measurement uncertainty glossary", href: "/glossary#measurement-uncertainty" },
  ],
} satisfies LandingPage;
