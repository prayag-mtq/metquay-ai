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
    id: "accreditation-body",
    term: "Accreditation body",
    definition:
      "An organization that assesses laboratories against ISO/IEC 17025 and formally recognizes their competence for a defined scope, such as A2LA, ANAB, UKAS or NABL. Accreditation bodies themselves operate to ISO/IEC 17011.",
    page: "/iso-17025-calibration-software",
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
    id: "audit-trail",
    term: "Audit trail",
    definition:
      "A secure, computer-generated, time-stamped record of who created, changed or deleted a record, when, and why, kept without overwriting the previous values. 21 CFR Part 11 and EU Annex 11 require audit trails for regulated electronic records.",
    page: "/21-cfr-part-11-calibration-software",
  },
  {
    id: "bias",
    term: "Bias",
    definition:
      "An estimate of the systematic error of a measurement, usually the difference between the average of repeated readings and a reference value. Once known, bias can be corrected; the uncertainty of the correction remains in the uncertainty budget.",
    post: "knowing-what-you-are-doing-with-errors-can-help-you-take-better-measurements",
  },
  {
    id: "calibration",
    term: "Calibration",
    definition:
      "The operation that compares the readings of an instrument with a reference standard of known accuracy, under specified conditions, to establish the relationship between them and the measurement uncertainty of the result.",
  },
  {
    id: "calibration-certificate",
    term: "Calibration certificate",
    definition:
      "The document a laboratory issues to report calibration results: the measured values, their measurement uncertainty, a traceability statement, the conditions of calibration and the identification of the item. ISO/IEC 17025 clause 7.8 sets its required content.",
    page: "/calibration-certificate-software",
  },
  {
    id: "calibration-interval",
    term: "Calibration interval",
    definition:
      "The period between successive calibrations of an instrument. Intervals are set from manufacturer guidance, usage and historical As Found results, and can be adjusted when the data shows drift or stability.",
    page: "/calibration-scheduling-software",
  },
  {
    id: "calibration-label",
    term: "Calibration label",
    definition:
      "A sticker or tag fixed to an instrument that shows its calibration status, typically the asset ID, calibration date, due date and who performed the work. ISO/IEC 17025 requires the calibration status of equipment to be readily identifiable.",
    post: "revolutionize-your-calibration-labelling-create-diy-calibration-labels-stickers-in-metquay",
  },
  {
    id: "calibration-management-software",
    term: "Calibration management software",
    definition:
      "Software that runs a calibration program end to end: asset records, due-date tracking, scheduling, worksheets, uncertainty calculation, certificates, traceability and audit trails, replacing spreadsheets and paper records.",
    page: "/calibration-management-software",
  },
  {
    id: "calibration-procedure",
    term: "Calibration procedure",
    definition:
      "A documented method for calibrating a type of instrument, specifying the test points, reference standards, environmental conditions, acceptance criteria and how results and uncertainty are recorded. ISO/IEC 17025 requires labs to use validated or verified methods.",
  },
  {
    id: "calibration-recall",
    term: "Calibration recall",
    definition:
      "The process of identifying instruments that are approaching or past their calibration due date and withdrawing them from use until they are calibrated. A recall system sends notices to owners ahead of each due date.",
    page: "/calibration-tracking-software",
  },
  {
    id: "cmc",
    term: "Calibration and Measurement Capability (CMC)",
    definition:
      "The smallest measurement uncertainty an accredited laboratory can achieve for a given quantity and range under normal conditions. A lab's CMCs are listed on its scope of accreditation.",
  },
  {
    id: "combined-standard-uncertainty",
    term: "Combined standard uncertainty",
    definition:
      "The standard uncertainty of a measurement result obtained by combining the standard uncertainties of all input quantities, usually as the root sum of squares weighted by sensitivity coefficients. It is written as u_c and is expressed at one standard deviation.",
    page: "/measurement-uncertainty-software",
  },
  {
    id: "coverage-factor",
    term: "Coverage factor (k)",
    definition:
      "The number by which combined standard uncertainty is multiplied to obtain expanded uncertainty. A coverage factor of k = 2 gives a coverage probability of approximately 95 % for a normal distribution.",
    post: "the-k-value-a-quick-primer-on-accuracy-uncertainty-specifications-for-measuring-tools",
  },
  {
    id: "decision-rule",
    term: "Decision rule",
    definition:
      "A rule that describes how measurement uncertainty is taken into account when stating whether a result conforms to a specification. ISO/IEC 17025:2017 requires the lab to agree the decision rule with the customer before reporting pass or fail.",
    page: "/iso-17025-calibration-software",
  },
  {
    id: "electronic-signature",
    term: "Electronic signature",
    definition:
      "Computer data adopted by a person as the legally binding equivalent of a handwritten signature. Under 21 CFR Part 11, it must show the signer's name, the date and time and the meaning of the signature, and be permanently linked to its record.",
    page: "/21-cfr-part-11-calibration-software",
  },
  {
    id: "eu-annex-11",
    term: "EU Annex 11",
    definition:
      "The annex to the EU Good Manufacturing Practice guidelines that covers computerized systems, including risk management, validation, data integrity, audit trails, electronic signatures and security. It is the European counterpart to 21 CFR Part 11.",
  },
  {
    id: "expanded-uncertainty",
    term: "Expanded uncertainty",
    definition:
      "The combined standard uncertainty multiplied by a coverage factor k, giving an interval expected to contain a large fraction of the values that could reasonably be attributed to the measured quantity. Calibration certificates usually report it at k = 2, about 95 % coverage.",
    page: "/measurement-uncertainty-software",
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
    id: "guard-band",
    term: "Guard band",
    definition:
      "A margin between a tolerance limit and the acceptance limit used for a pass/fail decision, usually sized from the expanded uncertainty. Guard bands reduce the risk of accepting an instrument that is actually out of tolerance.",
  },
  {
    id: "gum",
    term: "GUM",
    definition:
      "The Guide to the Expression of Uncertainty in Measurement (JCGM 100:2008), the internationally accepted method for evaluating and reporting measurement uncertainty. Accredited calibration labs base their uncertainty budgets on it.",
    page: "/measurement-uncertainty-software",
  },
  {
    id: "ilac-mra",
    term: "ILAC MRA",
    definition:
      "The International Laboratory Accreditation Cooperation Mutual Recognition Arrangement, under which signatory accreditation bodies recognize each other's accreditations. Calibration certificates from a lab accredited by one signatory are accepted in the other signatory economies.",
  },
  {
    id: "intermediate-checks",
    term: "Intermediate checks",
    definition:
      "Checks performed on equipment between scheduled calibrations to confirm it is still within its calibration status, such as measuring a check standard. ISO/IEC 17025 requires them when they are needed to maintain confidence in the equipment's performance.",
  },
  {
    id: "iq-oq-pq",
    term: "IQ/OQ/PQ",
    definition:
      "Installation, Operational and Performance Qualification: the documented stages of validating equipment or a computerized system. They verify that it is installed correctly, operates to specification across its range and performs consistently in routine use.",
    post: "validating-calibration-software",
  },
  {
    id: "iso-iec-17025",
    term: "ISO/IEC 17025",
    definition:
      "The international standard that sets general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories. Accreditation bodies assess labs against its 2017 edition.",
    page: "/iso-17025-calibration-software",
  },
  {
    id: "lims",
    term: "Laboratory Information Management System (LIMS)",
    definition:
      "Software that manages a laboratory's samples or items, work orders, test results, reports and records. Calibration labs use a LIMS or dedicated calibration management software to handle instruments, worksheets and certificates.",
    page: "/calibration-lab-software",
  },
  {
    id: "linear-interpolation",
    term: "Linear interpolation",
    definition:
      "A method of estimating a value between two known data points by assuming a straight line between them. Labs use it to derive corrections or uncertainties between calibrated points.",
    post: "linear-interpolation-made-simple-with-metquay",
  },
  {
    id: "measurement-error",
    term: "Measurement error",
    definition:
      "The measured value minus a reference value of the quantity. It has a systematic component, which can be estimated as bias and corrected, and a random component, which varies from reading to reading.",
    post: "knowing-what-you-are-doing-with-errors-can-help-you-take-better-measurements",
  },
  {
    id: "measurement-uncertainty",
    term: "Measurement uncertainty",
    definition:
      "A non-negative parameter that characterizes the dispersion of values that could reasonably be attributed to the measured quantity. ISO/IEC 17025 requires labs to evaluate and report it for calibration results.",
    post: "how-to-adjust-the-precision-of-your-measurement-uncertainty-based-on-the-uut-resolution",
    page: "/measurement-uncertainty-software",
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
    id: "nist-traceability",
    term: "NIST traceability",
    definition:
      "Metrological traceability of a measurement result to SI units as realized by the US National Institute of Standards and Technology. NIST does not certify it; the lab must document the unbroken calibration chain and its uncertainties.",
  },
  {
    id: "nominal-value",
    term: "Nominal value",
    definition:
      "The rounded or stated value that identifies an instrument, standard or test point, such as 100 Ω marked on a resistor or 1 kg on a mass. Calibration determines how far the actual value differs from it.",
  },
  {
    id: "out-of-tolerance",
    term: "Out-of-tolerance (OOT)",
    definition:
      "The condition in which an instrument's As Found reading falls outside its tolerance limits. An OOT result calls for adjustment or repair and an assessment of how it affected measurements made since the last good calibration.",
  },
  {
    id: "precision",
    term: "Precision",
    definition:
      "How closely repeated measurements of the same item agree with each other under specified conditions, usually expressed as a standard deviation. A precise instrument is not necessarily accurate, because precision says nothing about bias.",
    post: "confused-about-precision-accuracy-and-resolution-here-s-how-to-tell-them-apart",
  },
  {
    id: "proficiency-testing",
    term: "Proficiency testing",
    definition:
      "An evaluation of a laboratory's performance by interlaboratory comparison, in which several labs measure the same artifact and their results are compared against set criteria, often using the En number. ISO/IEC 17025 requires labs to take part where available.",
  },
  {
    id: "reference-standard",
    term: "Reference standard",
    definition:
      "A measurement standard with known, traceable values and uncertainty that a lab uses to calibrate other instruments. Its own calibration status forms a link in the traceability chain.",
  },
  {
    id: "repeatability",
    term: "Repeatability",
    definition:
      "The precision of measurements made with the same procedure, operator, measuring system, conditions and location over a short period. It is usually evaluated from the standard deviation of repeated readings.",
  },
  {
    id: "reproducibility",
    term: "Reproducibility",
    definition:
      "The precision of measurements of the same item when conditions change, such as different operators, measuring systems, locations or times. It shows how much results vary across the setups in which a measurement is actually made.",
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
    id: "tolerance",
    term: "Tolerance",
    definition:
      "The permitted limits within which an instrument's error must fall to pass calibration, often taken from the manufacturer's specification or maximum permissible error. Tolerance is a requirement, while uncertainty describes the quality of a measurement.",
  },
  {
    id: "tur",
    term: "Test Uncertainty Ratio (TUR)",
    definition:
      "The ratio of the tolerance of the unit under test to the expanded measurement uncertainty of the calibration process. A TUR of at least 4:1 is a common target for reliable pass/fail decisions.",
    post: "exploring-the-concept-of-test-accuracy-ratio-tar-and-test-uncertainty-ratio-tur",
  },
  {
    id: "type-a-evaluation",
    term: "Type A evaluation",
    definition:
      "Evaluation of an uncertainty component by statistical analysis of a series of observations, such as the standard deviation of the mean of repeated readings. It is one of the two GUM methods for evaluating uncertainty.",
    page: "/measurement-uncertainty-software",
  },
  {
    id: "type-b-evaluation",
    term: "Type B evaluation",
    definition:
      "Evaluation of an uncertainty component by means other than statistical analysis of repeated observations, using sources such as calibration certificates, manufacturer specifications, resolution and reference data, each with an assumed probability distribution.",
    page: "/measurement-uncertainty-software",
  },
  {
    id: "uncertainty-budget",
    term: "Uncertainty budget",
    definition:
      "A table that lists each source of uncertainty in a measurement with its value, probability distribution, divisor, sensitivity coefficient and standard uncertainty, and combines them into the combined and expanded uncertainty.",
    page: "/measurement-uncertainty-software",
  },
  {
    id: "uut",
    term: "Unit Under Test (UUT)",
    definition:
      "The instrument being calibrated or tested. Its readings are compared with the reference standard, and its resolution and stability feed into the measurement uncertainty.",
  },
];

export const glossary = [...terms].sort((a, b) => a.term.localeCompare(b.term));
