import { getCategories } from "./blog";
import { slugify } from "./slugify";

export const categorySlug = slugify;

export const categoryFromSlug = (slug: string) => getCategories().find((c) => categorySlug(c) === slug) ?? null;

export const categoryIntros: Record<string, string> = {
  "AI in calibration":
    "How AI is changing calibration and metrology: governance, agent-native automation, interval optimization and where human judgement still matters.",
  "Digital Transformation":
    "Moving calibration labs from spreadsheets and paper to connected, audit-ready digital operations: strategy, change management and ISO 17025.",
  "ERP Integrations":
    "Connecting calibration management software to ERP and accounting systems such as Odoo, NetSuite and QuickBooks without double entry.",
  "Efficient Approaches":
    "Practical methods for calibration labs: measurement uncertainty, TUR, Gage R&R, interpolation, lean operations and profitability.",
  "Future of Calibration":
    "Where calibration and metrology are heading: platforms, talent, remote calibration, data integrity and the industry's next decade.",
};
