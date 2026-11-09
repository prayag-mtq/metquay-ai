import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

import { absoluteUrl, site } from "../src/config/site";
import { glossary } from "../src/content/glossary";
import { landingPages } from "../src/content/landing";
import * as company from "../src/content/pages/company";
import * as ecosystem from "../src/content/pages/ecosystem";
import * as home from "../src/content/pages/home";
import * as resources from "../src/content/pages/resources";
import * as solutions from "../src/content/pages/solutions";
import { getAllPosts } from "../src/lib/blog";
import { getLegalPage } from "../src/lib/legal";

const link = (title: string, path: string, note?: string) =>
  `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

const SUMMARY =
  "metquay.ai is asset-centric calibration management software for ISO/IEC 17025 calibration labs, built by Metquay Inc. (Bellevue, WA). It runs the full calibration workflow, from customer portal and scheduling to smart worksheets, offline capture, approval, certificates and shipping, with FDA 21 CFR Part 11 controls, ERP integrations and AI interval optimization.";

export function buildLlmsTxt() {
  const posts = getAllPosts();
  const available = ecosystem.directory.items.filter((item) => item.available).map((item) => item.name);
  return [
    `# ${site.name}`,
    `> ${SUMMARY}`,
    [
      "Key facts:",
      "- Category: calibration management software / calibration lab management (LIMS for calibration labs)",
      "- Compliance: ISO/IEC 17025:2017, FDA 21 CFR Part 11, EU Annex 11, GAMP 5",
      "- Deployment: cloud on AWS (US, EU, Asia-Pacific regions), offline-first PWA for technicians",
      `- Contact: ${site.contactEmail}, ${site.phone}`,
    ].join("\n"),
    [
      "## Guides",
      ...landingPages.map((p) => link(p.title, `/${p.slug}`, p.summary)),
      link(
        "Calibration & metrology glossary",
        "/glossary",
        "Definitions of TUR, uncertainty, traceability, coverage factor and more",
      ),
    ].join("\n"),
    [
      "## Product",
      link("Home", "/", "Platform overview, dashboards, smart worksheets, certificates & labels, FAQ"),
      ...home.platform.features.map((f) => link(f.label, `/#${f.id}`, f.title)),
    ].join("\n"),
    [
      "## Solutions",
      link("End-to-end calibration workflow", "/solutions", solutions.hero.title),
      ...solutions.steps.map((s) => link(s.label, `/solutions#${s.id}`, s.title)),
    ].join("\n"),
    [
      "## Integrations",
      link("Ecosystem & integrations", "/ecosystem", `Available: ${available.join(", ")}`),
      link("REST API & webhooks", "/ecosystem#api", ecosystem.api.title),
    ].join("\n"),
    [
      "## Compliance",
      link(
        "Security",
        "/security",
        "Hosting, encryption, backups, access control, 21 CFR Part 11 and ISO/IEC 17025 controls",
      ),
      link("Privacy Policy", "/privacy"),
      link("Terms of Service", "/terms"),
    ].join("\n"),
    [
      "## Company",
      link("About Metquay", "/company", company.hero.lead),
      link("Resources & playbooks", "/resources", resources.hero.lead),
      link("Contact", "/contact", "Free trial, demo requests and questions"),
    ].join("\n"),
    ["## Blog", ...posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description))].join("\n"),
  ].join("\n\n");
}

const section = (title: string, path: string, body: string[]) =>
  [`# ${title}`, `URL: ${absoluteUrl(path)}`, ...body].join("\n\n");

const bullets = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export function buildLlmsFull() {
  return [
    `# ${site.name} — full site text\n\n> ${SUMMARY}`,
    section(home.hero.title, "/", [
      home.hero.lead,
      `## ${home.roles.title}`,
      ...home.roles.items.map((r) => `### ${r.label}: ${r.headline}\n${bullets(r.points)}`),
      `## ${home.platform.title}`,
      ...home.platform.features.map((f) => `### ${f.title}\n${f.body}\n${bullets(f.points)}`),
      `## ${home.reasons.title}`,
      ...home.reasons.items.map((r) => `### ${r.title}\n${r.body}`),
      `## ${home.faq.title}`,
      ...home.faq.items.map((f) => `### ${f.q}\n${f.a}`),
    ]),
    ...landingPages.map((p) =>
      section(p.title, `/${p.slug}`, [
        p.summary,
        ...p.sections.map((s) => `## ${s.heading}\n${s.body.join("\n\n")}${s.points ? `\n${bullets(s.points)}` : ""}`),
        ...p.faq.map((f) => `### ${f.q}\n${f.a}`),
      ]),
    ),
    section(
      "Calibration & metrology glossary",
      "/glossary",
      glossary.map((t) => `## ${t.term}\n${t.definition}`),
    ),
    section(solutions.hero.title, "/solutions", [
      solutions.hero.lead,
      ...solutions.steps.map((s) => `## ${s.label}: ${s.title}\n${s.body}\n${bullets(s.points)}`),
    ]),
    section(ecosystem.hero.title, "/ecosystem", [
      ecosystem.hero.lead,
      ...[ecosystem.erp, ecosystem.metrology].map(
        (block) => `## ${block.title}\n${block.body}\n${bullets(block.rows.map((r) => `${r.what}: ${r.direction}`))}`,
      ),
      `## ${ecosystem.directory.title}\n${bullets(
        ecosystem.directory.items.map(
          (i) => `${i.name} (${i.category}) — ${i.available ? "available" : "coming soon"}`,
        ),
      )}`,
      `## ${ecosystem.api.title}\n${ecosystem.api.body}\n${bullets(ecosystem.api.points)}`,
    ]),
    section(resources.hero.title, "/resources", [
      resources.hero.lead,
      ...resources.playbooks.map((p) => `## ${p.title}\n${p.stage}. ${p.body} (${p.pages} pages · ${p.minutes} min)`),
    ]),
    section(company.hero.title, "/company", [
      company.hero.lead,
      ...company.story.paragraphs,
      `## ${company.milestones.title}\n${bullets(company.milestones.items.map((m) => `${m.year}: ${m.title} — ${m.body}`))}`,
    ]),
    ...(["security", "privacy", "terms"] as const).map((slug) => {
      const page = getLegalPage(slug);
      return section(page.title, `/${slug}`, [page.body.trim()]);
    }),
  ].join("\n\n---\n\n");
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  writeFileSync("public/llms.txt", `${buildLlmsTxt()}\n`);
  writeFileSync("public/llms-full.txt", `${buildLlmsFull()}\n`);
  console.log("wrote public/llms.txt and public/llms-full.txt");
}
