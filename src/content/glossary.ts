export type GlossaryTerm = { id: string; term: string; definition: string; post?: string; page?: string };

export const glossaryIntro =
  "Plain-language definitions of the calibration, metrology and compliance terms used across ISO/IEC 17025 labs and in metquay.ai.";

const terms: GlossaryTerm[] = [
  {
    id: "21-cfr-part-11",
    term: "21 CFR Part 11",
    definition:
      "The US FDA regulation that sets requirements for electronic records and electronic signatures, including audit trails, access controls, system validation and signatures linked to their records. It applies to calibration records kept for FDA-regulated products.",
    page: "/21-cfr-part-11-calibration-software",
  },
  {
    id: "accuracy",
    term: "Accuracy",
    definition:
      "How close a measured value is to the true value of the quantity being measured. Accuracy is a qualitative concept; it is expressed in practice through measurement error and measurement uncertainty.",
    post: "confused-about-precision-accuracy-and-resolution-here-s-how-to-tell-them-apart",
  },
  {
    id: "alcoa-plus",
    term: "ALCOA+",
    definition:
      "A data integrity framework: records must be Attributable, Legible, Contemporaneous, Original and Accurate, plus Complete, Consistent, Enduring and Available. Regulators apply it to calibration data and audit trails.",
    post: "achieving-calibration-data-integrity-with-alcoa-alcoa-principles",
  },
  {
    id: "as-found-as-left",
    term: "As Found / As Left",
    definition:
      "As Found data records an instrument's readings when it arrives for calibration, before any adjustment. As Left data records its readings after adjustment, showing the condition in which it returns to service.",
  },
  {
    id: "calibration",
    term: "Calibration",
    definition:
      "The operation that compares the readings of an instrument with a reference standard of known accuracy, under specified conditions, to establish the relationship between them and the measurement uncertainty of the result.",
  },
  {
    id: "calibration-interval",
    term: "Calibration interval",
    definition:
      "The period between successive calibrations of an instrument. Intervals are set from manufacturer guidance, usage and historical As Found results, and can be adjusted when the data shows drift or stability.",
  },
  {
    id: "calibration-management-software",
    term: "Calibration management software",
    definition:
      "Software that runs a calibration program end to end: asset records, due-date tracking, scheduling, worksheets, uncertainty calculation, certificates, traceability and audit trails, replacing spreadsheets and paper records.",
    page: "/calibration-management-software",
  },
  {
    id: "cmc",
    term: "Calibration and Measurement Capability (CMC)",
    definition:
      "The smallest measurement uncertainty an accredited laboratory can achieve for a given quantity and range under normal conditions. A lab's CMCs are listed on its scope of accreditation.",
  },
  {
    id: "coverage-factor",
    term: "Coverage factor (k)",
    definition:
      "The number by which combined standard uncertainty is multiplied to obtain expanded uncertainty. A coverage factor of k = 2 gives a coverage probability of approximately 95 % for a normal distribution.",
    post: "the-k-value-a-quick-primer-on-accuracy-uncertainty-specifications-for-measuring-tools",
  },
  {
    id: "gage-r-and-r",
    term: "Gage R&R",
    definition:
      "Gage repeatability and reproducibility: a study that measures how much of the observed variation comes from the measurement system itself, from the instrument (repeatability) and from the operators (reproducibility).",
    post: "introduction-to-gage-r-r",
  },
  {
    id: "gamp-5",
    term: "GAMP 5",
    definition:
      "Good Automated Manufacturing Practice guidance from ISPE for a risk-based approach to validating computerized systems in regulated life-science environments, including calibration management systems.",
  },
  {
    id: "iso-iec-17025",
    term: "ISO/IEC 17025",
    definition:
      "The international standard that sets general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories. Accreditation bodies assess labs against its 2017 edition.",
    page: "/iso-17025-calibration-software",
  },
  {
    id: "linear-interpolation",
    term: "Linear interpolation",
    definition:
      "A method of estimating a value between two known data points by assuming a straight line between them. Labs use it to derive corrections or uncertainties between calibrated points.",
    post: "linear-interpolation-made-simple-with-metquay",
  },
  {
    id: "measurement-uncertainty",
    term: "Measurement uncertainty",
    definition:
      "A non-negative parameter that characterizes the dispersion of values that could reasonably be attributed to the measured quantity. ISO/IEC 17025 requires labs to evaluate and report it for calibration results.",
    post: "how-to-adjust-the-precision-of-your-measurement-uncertainty-based-on-the-uut-resolution",
  },
  {
    id: "metrological-traceability",
    term: "Metrological traceability",
    definition:
      "The property of a measurement result whereby it can be related to a reference, usually the SI through national metrology institutes, through a documented unbroken chain of calibrations, each contributing to the uncertainty.",
  },
  {
    id: "monte-carlo-method",
    term: "Monte Carlo method",
    definition:
      "A numerical way to propagate measurement uncertainty by repeatedly sampling input quantities from their probability distributions, used when the analytical GUM approach is not adequate.",
    post: "monte-carlo-method",
  },
  {
    id: "msa",
    term: "Measurement System Analysis (MSA)",
    definition:
      "A set of studies, such as bias, linearity, stability and Gage R&R, that assess whether a measurement system is fit for its intended use before its data is used for decisions.",
    post: "mastering-the-art-of-measurement-system-analysis-msa-a-comprehensive-introduction-ver-2023",
  },
  {
    id: "reference-standard",
    term: "Reference standard",
    definition:
      "A measurement standard with known, traceable values and uncertainty that a lab uses to calibrate other instruments. Its own calibration status forms a link in the traceability chain.",
  },
  {
    id: "resolution",
    term: "Resolution",
    definition:
      "The smallest change in a measured quantity that causes a perceptible change in an instrument's indication. Resolution is one of the contributors in an uncertainty budget.",
    post: "confused-about-precision-accuracy-and-resolution-here-s-how-to-tell-them-apart",
  },
  {
    id: "tar",
    term: "Test Accuracy Ratio (TAR)",
    definition:
      "The ratio of the tolerance of the unit under test to the accuracy specification of the reference standard used to calibrate it. It is an older, simpler alternative to TUR.",
    post: "exploring-the-concept-of-test-accuracy-ratio-tar-and-test-uncertainty-ratio-tur",
  },
  {
    id: "tur",
    term: "Test Uncertainty Ratio (TUR)",
    definition:
      "The ratio of the tolerance of the unit under test to the expanded measurement uncertainty of the calibration process. A TUR of at least 4:1 is a common target for reliable pass/fail decisions.",
    post: "exploring-the-concept-of-test-accuracy-ratio-tar-and-test-uncertainty-ratio-tur",
  },
  {
    id: "uut",
    term: "Unit Under Test (UUT)",
    definition:
      "The instrument being calibrated or tested. Its readings are compared with the reference standard, and its resolution and stability feed into the measurement uncertainty.",
  },
];

export const glossary = [...terms].sort((a, b) => a.term.localeCompare(b.term));
