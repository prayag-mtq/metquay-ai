# metquay.com rebuild: design

Date: 2026-11-06
Owner: Prayag

## 1. Intent

metquay.com is built in Framer. It looks polished at first glance, but it breaks down in use and barely shows up in search. We are rebuilding it in React (Next.js) for three reasons:

1. **UI/UX:** fix the broken, inconsistent and oversized parts that real users hit.
2. **SEO:** rank for "calibration software", "calibration management software" and our own headline. Today we rank for none of these.
3. **AI and agent discoverability:** be easy for LLM crawlers and assistants (ChatGPT, Claude, Perplexity, Google AI Overviews) to read, so we come up when someone asks for the best calibration software.

Success is a site that keeps the current content and visual identity (dark, Manrope, lime-green and purple accents), fixes every item in the issue list in §4, and measurably beats the Framer site on Lighthouse and indexability.

## 2. Goals, non-goals, anti-goals

**Goals**
- Recreate every page in the crawl (§5) with the same content, cleaned up.
- One consistent design system: type scale, spacing, button sizes, card styles, animation presets.
- Every page pre-rendered to static HTML, readable with JavaScript disabled.
- Complete technical SEO and AI-discoverability layer (§7).
- Deploy as static files to AWS S3 + CloudFront.

**Non-goals**
- No redesign of brand or copy direction. Copy is carried over. Only obvious errors get fixed (e.g. the Security page's `<title>` reads "Terms of Service" and its meta description mentions "Clario", a Framer template leftover).
- No CMS or visual editor in v1 (see §6).
- No Hindi or other locales. `/hi` is retired.
- No server-side runtime (no Next.js server, no Lambda@Edge SSR).

**Anti-goals** (failure even if it technically works)
- A client-only React SPA whose HTML is an empty shell. That repeats the AI-crawler problem.
- Buttons, cards or images that look clickable but aren't, or links that 404.
- Text and buttons that are "unwantedly huge", or a type scale that varies by page.
- Mixed animation styles: each interaction type gets one behaviour, used everywhere.
- Slower than the current site.

## 3. Constraints and decided stack

Decided with Prayag in conversation:

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + React + TypeScript, `output: 'export'` (fully static) |
| Styling | Tailwind CSS with design tokens defined once (colors, type scale, radii, spacing) |
| Animation | Motion (`motion/react`) only. No GSAP in v1. GSAP may be added later for one specific pinned/scrubbed sequence if one is designed. |
| Hosting | AWS S3 (private bucket) + CloudFront (OAC). A CloudFront Function handles clean URLs (`/company` → `/company/index.html` or `company.html`) and 301 redirects. |

Builder's call, within these: package manager, linting, testing tools, folder layout, the CI/CD mechanism (GitHub Actions to S3 is the suggested default), and whether infra is written as code (CDK/Terraform) or documented manual steps.

**Source material:** `metquay-website-assets/metquay-public-assets/` holds the full crawl (107 HTML pages in `pages/`, 272 images, inline SVGs, fonts, 2 PDFs, `assets.csv` mapping original URLs to local files). All copy and blog content is extracted from these files. The 99 MB dump stays out of git (add to `.gitignore`). Only assets actually used get copied into `public/`, renamed meaningfully and optimised.

## 4. Issues the rebuild must fix

From Prayag's review of the live site. Each must be visibly resolved.

| # | Issue | Required outcome |
|---|---|---|
| 1 | No consistent font pattern. From Resources onward, fonts, FAQs, blog cards, links, footer, buttons and icons are oversized. | Single type scale and component size set (§8) used on every page. |
| 2 | "The Platform" section: only the first feature block has scroll-reveal; Smart Worksheets, Certificate & Labels etc. don't. First block lacks the highlight label pill the others have. | Every platform feature block uses the same reveal and has the same label pill. |
| 3 | Workflow tiles (Customer Portal … Packing & Shipping) look clickable but aren't, and "Packing & Shipping" is highlighted for no reason. | Each tile links to its step on `/solutions` (`#step-0N`). No tile is permanently highlighted. Hover state shows it's a link. |
| 4 | "Get Started" and "Talk to an Expert" don't work. | Every CTA goes to a real destination (§9). |
| 5 | Blog section/cards are oversized and bleed off the page. | Blog cards sit inside the content container at every breakpoint. |
| 6 | Clicking a blog image doesn't open the post; only "Read more" does. | Whole card is one link. |
| 7 | Blog posts are poorly formatted. | Shared article typography (headings, lists, quotes, figures, code). |
| 8 | Tables inside posts are badly laid out. | Styled, horizontally scrollable tables on mobile. |
| 9 | Blog cover images use hard-to-read fonts (AI-generated art). | Use real app screenshots. Until those arrive, use a clean, generated cover template (title + category on brand background). See §6. |
| 10 | Role tabs (Lab Managers, Quality & Compliance, Technicians, IT & Admin, Portfolio Operations) each animate differently. | One tab transition for all. |
| 11 | No transition between pages. | Subtle shared page-enter transition. |
| 12 | Blog images badly cropped. | Fixed aspect ratio (16:9) with `object-fit: cover` and a sensible focal point. |
| 13 | "metquay.ai" vs "metquay.com" naming and different logos. | One brand name and one logo used everywhere (§9: open decision). |
| 14 | Not found for "calibration software" / "calibration management software". | §7 SEO work, plus target keywords in titles, H1s and copy. |
| 15 | `/hi` Hindi pages still indexed. | `/hi` and `/hi/*` return 301 to the English equivalent. |
| 16 | Not optimised for LLM crawlers. No `llms.txt`, weak `robots.txt`. | §7. |
| 17 | Navbar doesn't show the current page. | Active nav state (including for `/blog/*` under its parent). |
| 18 | Footer "Contact" goes to `/company`, plus other broken footer links. | Every footer link verified by an automated link check. |
| 19 | Buttons and fonts too large on several pages. | Covered by #1. |
| 20 | Contact page too big, not user-friendly. | Compact contact page: form + contact details above the fold on desktop, FAQ below. |
| 21 | Carousel moves too fast and can't be paused. | Pauses on hover and focus. Slower speed. Respects `prefers-reduced-motion`. |
| 22 | Doesn't rank for own headline "Calibration Management, built for every detail and any scale". | Headline rendered once as the page H1 in static HTML (Framer currently outputs it three times for breakpoints). |
| 23 | Hero section disorganised. | Rebuilt hero: eyebrow, H1, subhead, two CTAs, trust line, then the workflow strip, with a clear hierarchy. |

## 5. Pages and URLs

All existing URLs are kept, so no rankings or backlinks are lost:

- `/` Home
- `/solutions` with step anchors `#step-01` … `#step-08`
- `/ecosystem` with anchors `#integrations`, `#fluke`, `#api`
- `/resources`
- `/company`
- `/contact`
- `/security`, `/privacy`, `/terms`
- `/blog` (index) and `/blog/[slug]` for all 97 posts, with slugs unchanged
- `404` page

Trailing-slash behaviour: no trailing slash, to match the current URLs. The builder configures this consistently across Next.js export and the CloudFront Function, with canonical URLs to match.

## 6. Blog content

**Decision (Claude's call, Prayag didn't specify):** posts live as MDX files in the repo (`content/blog/<slug>.mdx`) with front-matter: title, description, date, updated, category, author, cover, tags. A migration script converts the 97 crawled posts to MDX once. The script and its output are reviewed. Hand-fix posts it can't convert cleanly.

Publishing a new post means adding an MDX file and merging, which triggers a deploy. If non-technical people need to publish, a git-backed CMS (e.g. Keystatic or Decap) can sit on these same files later without changing the site. That is out of scope for v1.

Blog index: category filter, newest first, paginated or "load more". Each post shows reading time, date, category, related posts, and previous/next links.

Covers (#9): real screenshots from app.metquay.ai will be provided by the Metquay team. Until then, each post gets a generated cover (title + category on a brand background, built at build time), so no post ships with the old AI-generated art. Existing inline images inside post bodies are kept unless unreadable.

## 7. SEO and AI discoverability

- Per-page `<title>`, meta description, canonical, Open Graph and Twitter cards (OG image per page; per-post OG image generated from the cover template).
- One H1 per page, logical heading order, semantic landmarks (`header`, `nav`, `main`, `footer`, `article`).
- JSON-LD: `Organization` (logo, sameAs LinkedIn/YouTube, Bellevue WA), `WebSite`, `SoftwareApplication` (category BusinessApplication, calibration management), `BreadcrumbList`, `BlogPosting` per post, `FAQPage` where FAQs appear (Contact, Home if present).
- `sitemap.xml` with lastmod, and `robots.txt` that allows all and explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, plus the sitemap reference.
- `llms.txt` at the root: what Metquay is, who it's for, key capabilities, compliance, integrations, links to main pages and top posts. Also `llms-full.txt` with plain-text versions of the main pages.
- Redirects: `/hi`, `/hi/*` → English equivalents (301). Any other legacy URLs found during the build → 301.
- Performance: self-hosted Manrope (and Urbanist only if still needed) via `next/font` with subsetting; images pre-optimised at build time (WebP/AVIF, explicit sizes, since static export has no image server); no layout shift.
- Keyword placement for "calibration management software", "calibration software" and "ISO 17025 calibration software" in home title, H1/subhead and solutions copy, without rewriting the voice.
- After launch (not code, but listed so it isn't forgotten): submit the sitemap in Google Search Console and Bing Webmaster Tools, request removal of `/hi` URLs, verify the domain.

**Acceptance:** Lighthouse (mobile) Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100 on Home, Solutions, a blog post and the blog index. Rich Results Test passes for each JSON-LD type. All pages render their main content with JavaScript disabled.

## 8. Design system

Carried over from the current site: dark background (near-black #050505/#0D0D0D, card #171717), white text with greys (#CCC, #999, #888), lime accent (rgb 140,255,46) for CTAs and eyebrows, purple accent for icons and active tabs. Manrope is the main font. Exact tokens are the builder's call, sampled from the crawl.

Fixed rules:
- **Type scale:** one scale (e.g. 12/14/16/18/20/24/32/40/56 px desktop, smaller on mobile). H1 on inner pages no larger than the home H1. Body 16–18 px. No page-specific font sizes.
- **Buttons:** two sizes (default and small), two variants (primary lime, secondary outline). Height ~44 px default. No oversized buttons.
- **Content width:** one max container (~1200 px), plus a narrower reading width (~720 px) for blog posts and legal pages.
- **Clickability:** anything with a hover lift or pointer cursor is a link or button, and anything that isn't gets neither.
- **Animation presets** (Motion), the only ones allowed: `reveal` (fade + 16 px rise on enter, once), `stagger` for lists/grids, `tabSwap` (crossfade) for all tab groups, `pageEnter` for route changes. All disabled under `prefers-reduced-motion`.
- **Accessibility:** WCAG 2.1 AA contrast, visible focus rings, keyboard-operable tabs/carousel/menus, alt text on images.
- Responsive from 360 px to 1440 px+. Mobile nav is a sheet/drawer.

## 9. Brand and CTAs

- **Name and logo (#13):** one name and one logo across title tags, nav, footer, structured data and copy. *Open: which name.* Current usage mixes "metquay.ai" (product, page titles), "Metquay" (company) and the metquay.com domain. See open questions.
- **CTAs:** "Start Free Trial" / "Get Started" and "Talk to an Expert" currently link to `/contact#contact`. *Open: real destinations.* Until answered, the builder points all of them at `/contact` with a query param (`?intent=trial` / `?intent=expert`) that preselects the form's topic, so each works and is distinguishable.
- **Contact form:** static site, so the form posts to an external endpoint. *Open: where submissions go* (see open questions). Includes basic spam protection (honeypot; captcha only if the endpoint supports it).

## 10. Left to the builder

- Code structure, component breakdown, naming.
- Exact token values, sampled from the crawl.
- How the migration script parses Framer HTML.
- Test approach. At minimum: build succeeds, link checker passes (internal links + anchors), Lighthouse CI on key pages, no-JS render check.
- Which crawled images are reused vs dropped (dropping the AI-generated blog covers per #9).
- Infra-as-code vs documented setup for S3/CloudFront.

## 11. Calls made by Claude (check these)

- **Canonical host is `https://www.metquay.com`**, matching the current canonicals and sitemap. The apex `metquay.com` 301s to `www`.
- **Blog storage is MDX in the repo** (§6). Prayag didn't specify who publishes posts.
- **Legacy URLs:** the crawl contains old `/post/...` links. Each one gets a 301 to its `/blog/...` equivalent, along with `/hi/*`.
- **Rollout:** deploy first to the CloudFront default domain (`*.cloudfront.net`, `noindex`) as staging. Prayag reviews it there. Cutover is a DNS switch, and rollback means pointing DNS back to Framer, so keep the Framer site live until the new one has been stable for a week. The DNS/ACM steps are written as a runbook, because who controls DNS and AWS is not yet known.

## 12. Deferred decisions (Prayag will answer later, so build with placeholders)

Prayag (2026-11-06): "We just need to replicate it fully now. We can answer those later and then add it." v1 replicates the current site. Each item below is built behind one config value, so the later answer is a one-line change. Tracked in `docs/OPEN-ITEMS.md`.

| # | Question | v1 placeholder |
|---|---|---|
| 1 | Where do contact-form submissions go? (HubSpot is already in use for meetings.) | Form UI fully built. Submit goes to a single `CONTACT_ENDPOINT` config value; unset means it shows a "mail us at …" fallback. |
| 2 | One brand name and logo? | Keep the current site's usage as-is ("metquay.ai" in titles, the current nav logo). Name lives in one `site.name` constant. |
| 3 | Real CTA destinations (trial URL, expert booking)? | Same as the live site: `/contact`. URLs live in one `site.ctas` config. |
| 4 | Analytics and cookie banner? | None in v1. |
| 5 | Broken links found in the crawl (footer Contact → /company etc.) | Replicate the structure, but point links to the correct existing page. Every one that was wrong is logged in `docs/OPEN-ITEMS.md`. |

**Design-direction note:** the visual identity is replicated, not reinvented. Generic "distinctive design" advice (e.g. the frontend-design skill's push away from dark + acid-green) is overridden by this brief: keep the current look, fix the issues in §4.
