# SEO and answer-engine playbook

## Keyword map

Each guide in `src/content/landing/` owns one keyword (its `keyword` field) and one URL. `/guides` lists them all. Before adding a page, check that no existing guide already targets the same intent; two pages competing for one query rank worse than one.

| Group | Keywords |
| --- | --- |
| Platform | calibration management software, calibration software, calibration lab software, equipment calibration software, gauge calibration software, cloud calibration software, Excel calibration tracking alternative |
| Workflow | calibration tracking, calibration scheduling, measurement uncertainty, calibration certificate, onsite calibration software |
| Compliance | ISO 17025 calibration software, 21 CFR Part 11 calibration software |
| Integrations & migration | calibration software ERP integration, Fluke MET/CAL integration, calibration software migration |

Supporting content: the glossary (`src/content/glossary.ts`) and 97 blog posts. Every post links to the guide for its topic (`src/lib/guides.ts`), and each guide lists up to three of those posts.

## What the build guarantees

- `npm run audit:seo` (runs in CI after the build) fails on a missing title, a description outside 50–160 characters, not exactly one `<h1>`, a missing canonical link, a missing `og:image`, missing JSON-LD, a missing `llms.txt` link, an image without `alt`, or a duplicate title or description. Titles over 70 characters are warnings.
- `llms.txt`, `llms-full.txt` and a Markdown copy of every guide, the glossary and every post (`<url>.md`) are regenerated on every build.
- `npm run indexnow` submits every sitemap URL to Bing, Yandex and the other IndexNow engines. Run it after each production deploy, and only once www.metquay.com serves this site.

## Monthly loop

1. **Search Console → Performance → Queries.** Find queries with impressions but position 8–20. Strengthen the guide that owns the query (a section that answers it, a FAQ entry, internal links from related posts) or add a guide if none owns it.
2. **Pages with impressions but a low click-through rate.** Rewrite the `metaTitle` and `metaDescription`; for posts, the `seoTitle` front-matter field.
3. **Freshness.** When a guide changes, bump its `updated` date (it feeds the sitemap, the page and the JSON-LD).
4. **New posts.** Give each a description of 160 characters or fewer, an `seoTitle` if the title is over 60 characters, and make sure `guideForPost` routes it to the right guide.
5. **Answer engines.** Ask ChatGPT, Perplexity, Claude and Google AI Overviews the target queries and note whether metquay.ai is cited. Pages that are not cited usually need a clearer answer in their `summary` or first section.
6. **Run `npm run audit:seo`** and fix the warnings.
