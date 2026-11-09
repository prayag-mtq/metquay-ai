import { getLandingPage, type LandingPage } from "@/content/landing";

import type { Post } from "./post";

const TOPICS: [slug: string, pattern: RegExp][] = [
  ["calibration-software-migration", /migrat|switch/i],
  ["21-cfr-part-11-calibration-software", /21 CFR|ALCOA|data integrity|FDA|validat/i],
  ["iso-17025-calibration-software", /17025|accredit/i],
  ["measurement-uncertainty-software", /uncertainty|TUR|TAR|k-value|monte carlo|interpolation|precision|accuracy/i],
  ["gauge-calibration-software", /gage|gauge|measurement system analysis|MSA/i],
  ["fluke-met-cal-integration", /MET\/CAL|MET\/CONNECT|calibrators/i],
  ["calibration-software-erp-integration", /ERP|Odoo|NetSuite|QuickBooks|integrat/i],
  ["calibration-excel-alternative", /excel|spreadsheet/i],
  ["onsite-calibration-software", /onsite|on-site|remote calibration|offline/i],
  ["cloud-calibration-software", /cloud/i],
  ["calibration-certificate-software", /certificat|label/i],
  ["equipment-calibration-software", /asset|equipment|instrument/i],
  ["calibration-scheduling-software", /schedul|workflow|automat/i],
  ["calibration-lab-software", /\blabs?\b|laborator/i],
];

export function guideForPost(post: Pick<Post, "title" | "description">): LandingPage {
  const text = `${post.title} ${post.description}`;
  for (const [slug, pattern] of TOPICS) {
    const page = pattern.test(text) && getLandingPage(slug);
    if (page) return page;
  }
  return getLandingPage("calibration-management-software")!;
}
