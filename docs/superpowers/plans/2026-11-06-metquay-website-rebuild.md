# metquay.com Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replicate metquay.com (currently Framer) as a statically exported Next.js site that keeps the current content and look, fixes the 23 issues in the spec, and is fully crawlable by search engines and LLMs.

**Architecture:** Next.js App Router with `output: 'export'`. Every route is pre-rendered to `out/*.html` and served from S3 + CloudFront. One CloudFront Function (`infra/cloudfront-function.js`) does clean-URL rewrites and 301 redirects. The local preview server and the e2e tests reuse that same function, so tests exercise production routing. Marketing copy lives in typed content modules. Blog posts are MDX files generated once from the Framer crawl.

**Tech Stack:** Next.js (latest stable, App Router, static export), React, TypeScript (strict), Tailwind CSS v4, Motion (`motion/react`), MDX via `next-mdx-remote/rsc` + `remark-gfm`, `gray-matter`, Vitest + Testing Library, Playwright, `linkinator`, `@lhci/cli`, Node 22+, npm.

**Spec:** `docs/superpowers/specs/2026-11-06-metquay-website-rebuild-design.md`. Read it before starting any task. Issue numbers (#1–#23) below refer to its §4.

**Source crawl:** `metquay-website-assets/metquay-public-assets/` (read-only, gitignored).
- `pages/<name>.html` and `pages/blog__<slug>.html`: rendered Framer HTML. Framer duplicates every text node 2–4× (one per breakpoint), so de-duplicate.
- `other/searchIndex-*.json`: `{ "<path>": { title, description, h1..h6[], p[] } }` for all 107 pages. For blog posts, `p[0]` = category and `p[1]` = date (e.g. `"Oct 15, 2019"`).
- `assets.csv`: `url,status,local_path,...,pages`. It maps each framerusercontent URL to a local file.

**Installed project skills** (`.claude/skills/`): use them where tasks name them. `frontend-design`'s push away from dark + acid green is **overridden** by the spec: replicate the current look.

## Global Constraints

- Static export only: `output: 'export'`, `trailingSlash: false`, `images: { unoptimized: true }`. No route handlers that need a server, no middleware, no ISR.
- Canonical origin is `https://www.metquay.com`. All URLs in canonicals, the sitemap, JSON-LD and `llms.txt` are absolute on this origin, with no trailing slash (home is `https://www.metquay.com/`).
- All existing URLs are kept exactly: `/`, `/solutions`, `/ecosystem`, `/resources`, `/company`, `/contact`, `/security`, `/privacy`, `/terms`, `/blog`, `/blog/<slug>` (97 slugs from `crawled-pages.txt`, unchanged). Anchors kept: `/solutions#step-01`…`#step-08`, `/ecosystem#integrations|#fluke|#api`, `/#dashboard`, `/#worksheet`, `/company#about`.
- Brand name, CTA URLs and the contact endpoint come only from `src/config/site.ts`. No literal "metquay.ai", "/contact" CTA href or endpoint anywhere else (spec §12).
- Exactly one `<h1>` per page. Blog posts use the post title as the H1 (the crawl has none).
- Every page's main content is present and visible in the static HTML with JavaScript disabled. Animations may never leave content at `opacity: 0` without JS.
- Only these Motion presets, from `src/lib/motion.ts`: `reveal`, `stagger`, `tabSwap`, `pageEnter`. All are no-ops under `prefers-reduced-motion: reduce`.
- Type scale (px, desktop / mobile): display 56/36, h1 48/32, h2 40/28, h3 24/20, h4 20/18, body-lg 18/17, body 16/16, small 14/14, xs 12/12. No other font sizes. The inner-page H1 is never bigger than the home H1 (display).
- Buttons: sizes `md` (44px tall, 16px text) and `sm` (36px, 14px). Variants `primary` (lime bg, near-black text) and `secondary` (outline). No other button styles.
- Containers: `max-w-[1200px]` page, `max-w-[720px]` reading (blog posts, legal pages). Side padding 20px mobile, 32px desktop.
- Colors (sampled from the crawl): bg `#050505`, surface `#0D0D0D`, card `#171717`, border `#262626`, text `#FFFFFF`, text-muted `#CCCCCC`, text-subtle `#999999`, lime `rgb(140,255,46)` = `#8CFF2E`, lime-deep `#1E4841`, purple (icons, active tab) sampled from the crawl's inline SVGs. Contrast must meet WCAG 2.1 AA.
- Fonts: Manrope via `next/font/google` (self-hosted at build, `display: swap`, latin subset). Add Urbanist only if a replicated element visibly needs it.
- Anything with hover lift or a pointer cursor is an `<a>` or `<button>`. Nothing else gets either.
- The `metquay-website-assets/` dump is never committed and never imported at runtime. Assets used get copied into `public/` with meaningful names.

## Review Focus

1. **JS disabled / crawler view.** Reveal animations implemented as `initial={{opacity:0}}` hide content from no-JS crawlers and LLM bots. Expected: all text visible with JS off. Test in Task 3 (`motion presets render visible markup without JS`) and Task 13 (`no-js.spec.ts` over every route).
2. **Deep link into an anchor from another page** (`/solutions#step-05` from a home tile or the footer). Expected: the target heading isn't hidden under the sticky header. Test in Task 8 (`deep link lands below header`).
3. **Wide blog table on a 360px phone.** Expected: the table scrolls inside its own wrapper and the page never scrolls sideways. Test in Task 7 (`no horizontal page overflow at 360px`).
4. **Direct hit on a URL variant**: `/company/`, `/hi/blog/x`, `/post/x`, apex `metquay.com/...`, unknown `/foo`. Expected: 301 to the canonical page for the first four, and the 404 page **with status 404** for unknown. Test in Task 12 (CloudFront function unit tests) and Task 13 (links/e2e through the preview server).
5. **Reduced motion and keyboard.** A user with `prefers-reduced-motion` or using only the keyboard reaches a carousel that keeps moving or tabs that can't be arrowed through. Expected: the carousel is static under reduced motion and pauses on hover/focus; role tabs follow the WAI-ARIA tabs pattern (arrow keys, `aria-selected`). Tests in Task 5 (Tabs) and Task 6 (Carousel).

---

## File Structure

```
.gitignore                      # + metquay-website-assets/, out/, .next/, test-results/
next.config.ts                  # output export, trailingSlash false, mdx pageExtensions not needed
src/config/site.ts              # name, url, ctas, contactEndpoint, nav, footer, social
src/app/layout.tsx              # fonts, <Header/>, <Footer/>, Organization+WebSite JSON-LD
src/app/template.tsx            # pageEnter transition wrapper
src/app/not-found.tsx
src/app/page.tsx                # home
src/app/{solutions,ecosystem,resources,company,contact,security,privacy,terms}/page.tsx
src/app/blog/page.tsx, src/app/blog/[slug]/page.tsx
src/app/sitemap.ts, src/app/robots.ts
src/styles/globals.css          # Tailwind v4 @theme tokens, prose styles
src/lib/motion.ts               # 4 presets + <Reveal>, <Stagger>
src/lib/nav.ts                  # isActive()
src/lib/seo.ts                  # pageMetadata(), jsonLd builders
src/lib/blog.ts                 # getAllPosts(), getPost(), getRelated(), readingTime()
src/components/ui/              # Button, Container, Section, Pill, CardLink, Tabs, Carousel, Prose, JsonLd
src/components/layout/          # Header, MobileNav, Footer
src/components/home/            # Hero, WorkflowStrip, RoleTabs, PlatformFeature, FeatureGrid, Testimonials, PlaybooksTeaser, BlogTeaser, CtaBand
src/components/blog/            # PostCard, PostCover, CategoryFilter, PostNav
src/content/pages/*.ts          # typed copy per marketing page, extracted from crawl
content/blog/*.mdx              # 97 posts (generated, then committed)
public/images/..., public/blog/<slug>/...
public/llms.txt, public/llms-full.txt  # generated at build by scripts/gen-llms.ts
scripts/extract-text.ts         # crawl → docs/source-text/<page>.md (reference for copy)
scripts/migrate-blog.ts         # crawl → content/blog/*.mdx + images
scripts/gen-llms.ts
scripts/serve-out.mjs           # static server over out/ using infra/cloudfront-function.js
infra/cloudfront-function.js    # viewer-request: redirects + clean URLs
.github/workflows/deploy.yml
docs/DEPLOY.md, docs/OPEN-ITEMS.md
tests/unit/**, tests/e2e/**
```

---

### Task 1: Scaffold, config, repo hygiene

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `src/config/site.ts`, `src/app/layout.tsx` (minimal), `src/app/page.tsx` (placeholder), `vitest.config.ts`, `playwright.config.ts`, `tests/unit/site.test.ts`, `docs/OPEN-ITEMS.md`
- Modify: `.gitignore`

**Interfaces:**
- Produces:
  ```ts
  // src/config/site.ts
  export const site: {
    name: string;            // "metquay.ai" (spec §12 #2 placeholder)
    legalName: string;       // "Metquay Inc."
    url: "https://www.metquay.com";
    description: string;     // home meta description from crawl
    ctas: { trial: { label: "Start Free Trial"; href: string }; expert: { label: "Talk to an Expert"; href: string }; navCta: { label: "Get Free Trial"; href: string } };
    contactEndpoint: string | null;  // null in v1
    contactEmail: string;            // from crawl if present, else TODO in OPEN-ITEMS
    meetingUrl: "https://meetings-na2.hubspot.com/sandeep-nair/metquay-presentation";
    social: { linkedin: string; youtube: string };
    nav: { label: string; href: string }[];        // Product /, Solutions, Ecosystem, Resources, Company, Blog
    footer: { heading: string; links: { label: string; href: string; external?: boolean }[] }[]; // PRODUCT, SOLUTIONS, ECOSYSTEM, COMPANY, from crawl desktop variant
  };
  ```
  CTA hrefs in v1: `/contact?intent=trial`, `/contact?intent=expert`, `/contact`.

- [ ] **Step 1:** `npx create-next-app@latest . --ts --tailwind --app --src-dir --eslint --use-npm --no-turbopack --import-alias "@/*"` (run in `D:\metquay.com`; keep existing `docs/`, `.claude/`). Add `metquay-website-assets/`, `out/`, `test-results/`, `playwright-report/` to `.gitignore`. Install `motion gray-matter next-mdx-remote remark-gfm rehype-slug` and dev deps `vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom @playwright/test linkinator @lhci/cli tsx cheerio turndown turndown-plugin-gfm`.
- [ ] **Step 2:** Set `next.config.ts` to `output: 'export'`, `trailingSlash: false`, `images: { unoptimized: true }`.
- [ ] **Step 3: Write failing test** `tests/unit/site.test.ts`:
  - `site.url === "https://www.metquay.com"`
  - every `site.footer` link with a `href` starting with `/` has a path in the route list `["/","/solutions","/ecosystem","/resources","/company","/contact","/security","/privacy","/terms","/blog"]` (ignoring `#hash`/`?query`)
  - the footer link labelled `"Contact"` has `href` starting with `/contact` and `"Blog"` starts with `/blog` (#18)
- [ ] **Step 4:** Run `npx vitest run tests/unit/site.test.ts` and confirm it FAILs (module missing).
- [ ] **Step 5:** Write `src/config/site.ts` using the footer and nav structure from the crawl's desktop variant (the extraction output in this plan's notes: Dashboard `/#dashboard`, Worksheets `/#worksheet`, Works & Scheduling `/solutions#step-03`, …, Careers → LinkedIn). Fix the broken mobile/tablet variants (Resources/Blog/Contact → `/company`) to their real targets. Log each fix in `docs/OPEN-ITEMS.md`, along with the 4 deferred questions from spec §12 and the finding that the home "Read More" on the 4th blog card pointed to `/contact`.
- [ ] **Step 6:** Run `npx vitest run` (PASS) and `npm run build` (produces `out/index.html`).
- [ ] **Step 7:** Commit: `chore: scaffold Next.js static site with site config`.

### Task 2: Source-text extraction (reference copy for every later task)

**Files:**
- Create: `scripts/extract-text.ts`, `tests/unit/extract-text.test.ts`, output `docs/source-text/*.md` (committed)

**Interfaces:**
- Produces: `extractText(html: string): string[]` (ordered, de-duplicated visible text blocks, scripts/styles stripped, consecutive duplicates within a 6-block window removed) and CLI `npx tsx scripts/extract-text.ts` → `docs/source-text/{index,solutions,ecosystem,resources,company,contact,security,privacy,terms}.md`, with the headings marked `#`/`##`/`###` per source tag.

- [ ] **Step 1: Failing test:** `extractText('<h2>A</h2><h2>A</h2><p>B</p><script>x</script>')` deep-equals `["## A","B"]`. Running it on `pages/index.html` gives output that includes `"Calibration Management, built for every detail and any scale"` exactly once.
- [ ] **Step 2:** Run it and confirm FAIL. **Step 3:** Implement with `cheerio`. **Step 4:** Run it, confirm PASS, then run the CLI.
- [ ] **Step 5:** Commit: `chore: extract source copy from Framer crawl`.

Later tasks take copy **verbatim** from `docs/source-text/*.md`. The only edits allowed are the fixes in spec §2 (Security title/description) and §7 keyword placement.

### Task 3: Design tokens, fonts, motion presets, UI primitives

Use skills: `vercel-composition-patterns` for the primitives' APIs, `ui-ux-pro-max` to check the token set (contrast, scale).

**Files:**
- Create: `src/styles/globals.css`, `src/lib/motion.ts`, `src/components/ui/{Button,Container,Section,Pill,CardLink,JsonLd}.tsx`, `tests/unit/ui.test.tsx`, `tests/unit/motion.test.tsx`
- Modify: `src/app/layout.tsx` (Manrope via `next/font`, globals)

**Interfaces:**
- Produces:
  ```ts
  Button(props: { href?: string; size?: "md"|"sm"; variant?: "primary"|"secondary"; children; ...rest }) // <a> via next/link when href, else <button>
  Container(props: { width?: "page"|"reading"; className?; children })
  Section(props: { id?: string; className?; children })  // <section> with scroll-margin-top = header height
  Pill(props: { children })                               // the highlight label used above every platform feature (#2)
  CardLink(props: { href: string; className?; children }) // whole card is one <a>, hover lift lives here only (#3, #6)
  JsonLd(props: { data: object })                         // <script type="application/ld+json">
  // src/lib/motion.ts
  export const presets: { reveal; stagger; tabSwap; pageEnter }  // Motion variants
  export function Reveal(props: { children; delay?: number }): JSX.Element
  export function Stagger(props: { children; as?: keyof JSX.IntrinsicElements }): JSX.Element
  ```
  Tailwind `@theme` exposes the Global Constraints colors as `--color-bg|surface|card|border|text|muted|subtle|lime|lime-deep|purple` and the type scale as `text-display|h1|h2|h3|h4|body-lg|body|small|xs` (responsive via `clamp()` or breakpoint overrides).

- [ ] **Step 1: Failing tests:**
  - `Button` with `href="/contact"` renders an `<a href="/contact">`. Without `href` it renders a `<button>`. `size="sm"` has class `h-9` and `md` has `h-11`.
  - `CardLink` renders exactly one `<a>` wrapping all children.
  - `motion presets render visible markup without JS`: `renderToStaticMarkup(<Reveal>hi</Reveal>)` contains `hi` and does **not** contain `opacity:0`. Approach: render `initial={false}` on the server and start the animation only after mount, when the element is below the fold, using `whileInView` with `initial` set client-side via a `useHasMounted` gate.
  - Under a mocked `matchMedia('(prefers-reduced-motion: reduce)')` → `true`, `presets.reveal` resolves to no transform/opacity change (use Motion's `useReducedMotion`).
- [ ] **Step 2:** Run `npx vitest run tests/unit/ui.test.tsx tests/unit/motion.test.tsx` and confirm FAIL.
- [ ] **Step 3:** Implement the tokens, primitives and presets. Values: `reveal` = opacity 0→1, y 16→0, 0.5s easeOut, once, viewport amount 0.2. `stagger` = 0.08s children. `tabSwap` = crossfade 0.2s with `AnimatePresence mode="wait"`. `pageEnter` = opacity 0→1, y 8→0, 0.3s.
- [ ] **Step 4:** Run tests (PASS) and `npm run build`.
- [ ] **Step 5:** Commit: `feat: design tokens, motion presets, UI primitives`.

### Task 4: Header, mobile nav, footer, page transition, 404

**Files:**
- Create: `src/lib/nav.ts`, `src/components/layout/{Header,MobileNav,Footer}.tsx`, `src/app/template.tsx`, `src/app/not-found.tsx`, `tests/unit/nav.test.ts`, `tests/e2e/layout.spec.ts`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `site.nav`, `site.footer`, `site.ctas.navCta`, `presets.pageEnter`, `Button`, `Container`
- Produces: `isActive(pathname: string, href: string): boolean`

- [ ] **Step 1: Failing unit test** `isActive`:
  - `("/","/")` → true, `("/blog","/")` → false
  - `("/blog/foo","/blog")` → true, `("/blogger","/blog")` → false
  - `("/solutions","/solutions")` → true
- [ ] **Step 2: Failing e2e** (`layout.spec.ts`, against `scripts/serve-out.mjs`. Task 12 builds that server; until then point Playwright `webServer` at `npx serve out -c serve.json` with `cleanUrls: true` and switch in Task 12):
  - on `/solutions`, the nav link "Solutions" has `aria-current="page"` and no other nav link does (#17)
  - on `/blog/<any slug>`, "Blog" has `aria-current="page"`
  - at a 375px viewport, the menu button opens a dialog with all nav links, and Escape closes it, returning focus to the button
  - footer "Contact" navigates to `/contact` (#18)
  - `/does-not-exist` shows the 404 page heading
- [ ] **Step 3:** Run both and confirm FAIL. **Step 4:** Implement. Header is sticky with a solid/blurred bg once scrolled, `usePathname()` + `isActive` → `aria-current`, and an active style (lime underline). The logo is the current nav logo from the crawl (find via `assets.csv`, rows for `pages/index.html` in the header, SVG in `inline-svg/`). The footer is 4 columns from `site.footer`, plus social, plus copyright, all in type-scale `small`. `template.tsx` wraps children in `presets.pageEnter`.
- [ ] **Step 5:** Run tests (PASS). **Step 6:** Commit: `feat: header with active state, footer, page transitions, 404`.

### Task 5: Home, part 1: Hero, Workflow strip, Role tabs

Use skills: `frontend-design` (hierarchy only, not new aesthetics), `web-design-guidelines` review of the result.

**Files:**
- Create: `src/content/pages/home.ts`, `src/components/ui/Tabs.tsx`, `src/components/home/{Hero,WorkflowStrip,RoleTabs}.tsx`, `tests/unit/tabs.test.tsx`, `tests/e2e/home.spec.ts`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `site.ctas`, `Button`, `Pill`, `CardLink`, `Reveal`, `presets.tabSwap`
- Produces: `Tabs(props: { items: { id: string; label: string; icon?: ReactNode; panel: ReactNode }[]; label: string })`, used by RoleTabs, and reused on Ecosystem if needed.
- `home.ts` exports `hero`, `workflow` (7 tiles: label, icon id, `href: "/solutions#step-0N"`. Mapping: Customer Portal→02, Sales→02, Scheduler→03, Work Assignment→03, Data Capture & Uncertainty→04, Certificate & Label→07, Packing & Shipping→08), `trust` (ISO 17025, 21 CFR Part 11, GAMP-5), `integrations` (Odoo, NetSuite, QuickBooks, Dynamics, Fluke, Metrology.net), `roles` (5 tabs with their panel copy), and the content for Task 6 sections.

- [ ] **Step 1: Failing tests:**
  - Tabs: `role="tablist"`. ArrowRight from the first tab focuses and selects the second, End selects the last, and only the selected tab has `aria-selected="true"` and `tabIndex=0`. All panels exist in the DOM (hidden ones get the `hidden` attribute), so their text is in the static HTML.
  - e2e `home.spec.ts`:
    - the raw HTML of `/` (via `request.get`) contains `"Calibration Management, built for every detail and any scale"` exactly once, inside the only `<h1>` (#22)
    - every workflow tile is an `<a>` whose href matches `/solutions#step-0[1-8]`, and no tile carries a permanently highlighted/active class (#3)
    - "Start Free Trial" and "Talk to an Expert" hrefs equal `site.ctas.trial.href` / `site.ctas.expert.href` (#4)
- [ ] **Step 2:** Run and confirm FAIL. **Step 3:** Implement. Hero order (#23): Pill eyebrow ("Asset-centric · Human-verified · AI-supercharged"), H1, subhead, CTA row (primary trial + secondary expert), the "No credit card. No-risk setup." note, then the workflow card: tiles row, then a trust row ("Audit-ready" + 3 badges), then an integrations row with its label on the same baseline as the names (fixes the misaligned "INTEGRATES WITH" in the screenshot). The role tabs all switch with `tabSwap`, and the selected tab is purple (#10).
- [ ] **Step 4:** Run tests (PASS). **Step 5:** Commit: `feat(home): hero, linked workflow strip, accessible role tabs`.

### Task 6: Home, part 2: Platform features, feature grid, testimonials, playbooks, blog teaser, CTA band

**Files:**
- Create: `src/components/home/{PlatformFeature,FeatureGrid,Testimonials,PlaybooksTeaser,BlogTeaser,CtaBand}.tsx`, `src/components/ui/Carousel.tsx`, `tests/unit/carousel.test.tsx`, add cases to `tests/e2e/home.spec.ts`
- Modify: `src/app/page.tsx`, `src/content/pages/home.ts`
- Assets: copy the platform screenshots/mockups from the crawl into `public/images/home/` (use the `assets.csv` rows whose `pages` include the home page; keep the browser-frame mockups as they are today).

**Interfaces:**
- Consumes: `Reveal`, `Pill`, `Section`, `CardLink`, `getAllPosts()` from Task 7. Until Task 7 exists, BlogTeaser reads the four teaser posts from `home.ts`, and Task 7 Step 6 switches it to `getAllPosts().slice(0,4)`.
- Produces: `Carousel(props: { children: ReactNode[]; label: string; speed?: number })`, an infinite marquee.

- [ ] **Step 1: Failing tests:**
  - Carousel: it sets `data-paused="true"` on `mouseenter` and on `focusin`, and back to `"false"` on leave. Under reduced motion it renders a static, horizontally scrollable list (no animation class). The duplicate track copy has `aria-hidden="true"`, so screen readers read each testimonial once.
  - e2e: each `PlatformFeature` section (Dashboard `#dashboard`, Smart Worksheets `#worksheet`, Certificates & Labels, and the rest from the crawl) contains a `Pill` element and is wrapped in a `Reveal` (`data-reveal` attribute) (#2). Every blog teaser card is one `<a>` to `/blog/<slug>` (#6). With the viewport at 1280 and 360, `document.documentElement.scrollWidth <= innerWidth` (#5).
- [ ] **Step 2:** Run and confirm FAIL. **Step 3:** Implement. Copy comes from `docs/source-text/index.md`. The testimonials marquee is slower than Framer's (≈40s per loop) (#21). The blog teaser grid stays inside `Container` (#5), with covers at 16:9 and `object-cover` (#12).
- [ ] **Step 4:** Run tests (PASS). **Step 5:** Commit: `feat(home): platform features, testimonials carousel, teasers`.

### Task 7: Blog migration and blog pages

Use skills: `vercel-react-best-practices` (RSC data loading, no client JS for posts), `bencium-aeo` (answer-first descriptions; don't rewrite post bodies).

**Files:**
- Create: `scripts/migrate-blog.ts`, `tests/unit/migrate-blog.test.ts`, `tests/fixtures/blog-sample.html` (copied from one crawl post that has a table: `blog__linear-interpolation-made-simple-with-metquay.html`), `content/blog/*.mdx` (generated), `public/blog/<slug>/*`, `src/lib/blog.ts`, `tests/unit/blog.test.ts`, `src/components/blog/{PostCard,PostCover,CategoryFilter,PostNav}.tsx`, `src/components/ui/Prose.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `tests/e2e/blog.spec.ts`

**Interfaces:**
- Produces:
  ```ts
  // front-matter of every content/blog/<slug>.mdx
  { title: string; description: string; date: string /* ISO yyyy-mm-dd */; updated?: string; category: string; author?: string; cover?: string /* /blog/<slug>/cover.webp, absent = generated cover */; tags?: string[] }
  // src/lib/blog.ts
  type Post = { slug: string; title: string; description: string; date: string; updated?: string; category: string; author?: string; cover?: string; readingMinutes: number; body: string };
  getAllPosts(): Post[]                 // newest first
  getPost(slug: string): Post | null
  getRelated(slug: string, n = 3): Post[] // same category first, then newest
  getCategories(): string[]
  ```
- `migrateBlog(html: string, index: SearchIndexEntry, slug: string): { mdx: string; images: { src: string; dest: string }[] }`

- [ ] **Step 1: Failing migration tests** on the fixture:
  - front-matter `title` = searchIndex title with the `" | metquay.ai"` suffix removed. `category` = `p[0]`, and `date` = `p[1]` converted to ISO.
  - the body begins after the post's title block and ends before "Ready to modernize your calibration lab?" (site CTA) and the footer. It contains no `framer-` class names, no `style=` attributes, and no `<div>`.
  - the post title doesn't appear as a `##` heading in the body (it becomes the page H1).
  - the HTML `<table>` becomes a GFM table (`| --- |` row present) (#8).
  - images map through `assets.csv` to `/blog/<slug>/<n>.<ext>`, and every `images[].src` exists on disk.
  - the cover: if the crawl's cover image is AI-generated art (the post's first image in the header area), **drop** it (no `cover:` key) so the generated `PostCover` is used (#9). Keep in-body images.
- [ ] **Step 2:** Run and confirm FAIL. **Step 3:** Implement with `cheerio` + `turndown` + `turndown-plugin-gfm`. Locate the body as the `RichTextContainer` that holds the post's `h2`/`h3`/`p` sequence (first container whose text includes searchIndex `p[2]`). Take the first breakpoint variant only.
- [ ] **Step 4:** Run (PASS). Then run `npx tsx scripts/migrate-blog.ts` for all 97 posts. It prints a report of posts with warnings (no body found, unmapped image, raw HTML left). Fix those by hand in the MDX and list them in `docs/OPEN-ITEMS.md`.
- [ ] **Step 5: Failing tests** for `blog.ts`: `getAllPosts().length === 97`; sorted by date desc; `getRelated(x).every(p => p.slug !== x)`; `readingMinutes >= 1`.
- [ ] **Step 6:** Implement `blog.ts` and the pages. `/blog`: H1 + intro from crawl, `CategoryFilter` (client, filters in place, URL `?category=`; with JS off all posts show), and a grid of `PostCard` (whole card one link, 16:9 cover, category, title, date, ≤2-line description) (#5, #6, #12). Show 12 posts with a "Load more" button, and render all 97 in HTML (hidden beyond 12 via `hidden` toggled by JS, so crawlers see every link). `/blog/[slug]`: `generateStaticParams`, breadcrumb, H1 title, meta row (category · date · reading time), cover, `Prose` body (reading width; styled h2/h3, lists, blockquote, figure, code; tables wrapped in `<div class="overflow-x-auto">`) (#7, #8), PostNav prev/next, 3 related posts, CtaBand. `PostCover`: build-time HTML/SVG cover (category + title on brand background with a subtle grid pattern), 16:9, the same on cards and post pages. Switch the home BlogTeaser to `getAllPosts().slice(0,4)`.
- [ ] **Step 7: Failing e2e** `blog.spec.ts`, then make it pass:
  - `/blog` HTML contains 97 `href="/blog/` post links
  - clicking a card's image opens the post (#6)
  - `no horizontal page overflow at 360px` on `/blog/linear-interpolation-made-simple-with-metquay` (table post) (#8)
  - post page has exactly one `<h1>` equal to the front-matter title
- [ ] **Step 8:** Commit: `feat(blog): migrate 97 posts to MDX, blog index and post pages`.

### Task 8: Solutions page

**Files:** Create `src/content/pages/solutions.ts`, `src/app/solutions/page.tsx`, `src/components/solutions/StepNav.tsx`, `tests/e2e/solutions.spec.ts`

**Interfaces:** Consumes `Section` (scroll-margin), `Reveal`, `Pill`, `Button`. Produces sections with ids `step-01`…`step-08` (Due Alerts, Customer Portal, Receiving & Scheduling, Calibration, Offline Capture, Review, Certificate, Shipping).

- [ ] **Step 1: Failing e2e:**
  - all 8 ids exist
  - the sticky step nav highlights the step in view (`aria-current="step"`)
  - `deep link lands below header`: going to `/solutions#step-05` puts the `#step-05` heading's `getBoundingClientRect().top` ≥ the header height
- [ ] **Step 2:** Run (FAIL). **Step 3:** Implement from `docs/source-text/solutions.md` (each step: number, title, heading, body, bullets, quote). The step nav uses `IntersectionObserver`. **Step 4:** Run (PASS). **Step 5:** Commit: `feat: solutions page with linked workflow steps`.

### Task 9: Ecosystem and Resources pages

**Files:** Create `src/content/pages/{ecosystem,resources}.ts`, `src/app/{ecosystem,resources}/page.tsx`, `src/components/ecosystem/SyncTable.tsx`, `tests/e2e/ecosystem-resources.spec.ts`; copy logos/images used by these pages to `public/images/{ecosystem,resources}/`. PDFs from `documents/` are copied to `public/docs/` only if a Resources link points at them.

- [ ] **Step 1: Failing e2e:** `/ecosystem` has ids `integrations`, `fluke`, `api`. The "What syncs / Direction" tables are real `<table>`s with `<th scope="col">`. `/resources` lists all 7 playbooks, each with a working download/link target (or, if the crawl has no target, a disabled state logged in OPEN-ITEMS, not a dead link). The HubSpot meeting link uses `site.meetingUrl`. Font sizes on `/resources`: no computed `font-size` on `body *` exceeds 56px, and buttons have `offsetHeight ≤ 44` (#1, #19).
- [ ] **Step 2:** FAIL. **Step 3:** Implement from source text. **Step 4:** PASS. **Step 5:** Commit: `feat: ecosystem and resources pages`.

### Task 10: Company, Contact, legal pages

**Files:** Create `src/content/pages/{company,contact}.ts`, `src/app/{company,contact,security,privacy,terms}/page.tsx`, `src/components/contact/ContactForm.tsx`, `src/components/ui/Faq.tsx`, `tests/unit/contact-form.test.tsx`, `tests/e2e/pages.spec.ts`. Legal pages store copy as MDX in `content/legal/{security,privacy,terms}.mdx`, rendered with `Prose`.

**Interfaces:**
- `ContactForm(props: { endpoint: string | null; defaultIntent?: "trial"|"expert"|"general" })`. Fields: full name, email, phone (optional), topic (select: Free trial / Talk to an expert / General question), message, plus a hidden honeypot `company_website`. It reads `?intent=` on the client to preselect the topic.
- `Faq(props: { items: { q: string; a: string; id: string }[] })` uses `<details>/<summary>` (works without JS) and emits `FAQPage` JSON-LD via `JsonLd`.

- [ ] **Step 1: Failing tests:**
  - With `endpoint=null`, submit shows a message containing `site.contactEmail` and a `mailto:` link prefilled with the fields, and makes no fetch. With an endpoint, it POSTs JSON `{name,email,phone,topic,message}` and shows success/error states. Submitting with the honeypot filled makes no request. Required-field errors are announced via `aria-describedby`.
  - e2e: `/contact?intent=expert` preselects "Talk to an expert". On a 1280×800 viewport the form's submit button is within the first viewport (#20). `/security` `<title>` contains "Security" and no "Terms of Service". Its description contains no "Clario" (spec §2). `/company#about` exists.
- [ ] **Step 2:** FAIL. **Step 3:** Implement. The Contact layout is two columns on desktop (left: H1, one-line intro, email/address/meeting link; right: the form), with the 5-item FAQ below. Company: mission, story, values, stats (22 people, HQ Bellevue WA, 17025, 100%), leadership (photos from crawl). **Step 4:** PASS. **Step 5:** Commit: `feat: company, compact contact page with form, legal pages`.

### Task 11: SEO and AI-discoverability layer

Use skills: `bencium-aeo` (llms.txt content, FAQ answers 30–50 words, answer-first product overview), `vercel-react-best-practices`.

**Files:** Create `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `scripts/gen-llms.ts`, `tests/unit/seo.test.ts`, `tests/e2e/seo.spec.ts`. Modify every `page.tsx` to export `metadata`/`generateMetadata` via `pageMetadata()`. Add `"prebuild": "tsx scripts/gen-llms.ts"` to `package.json`.

**Interfaces:**
```ts
pageMetadata(o: { title: string; description: string; path: string; image?: string; type?: "website"|"article"; publishedTime?: string; modifiedTime?: string }): Metadata
// title template: "<title> | ${site.name}"; home title: "Calibration Management Software for ISO 17025 Labs | ${site.name}"
jsonLd.organization(): object; jsonLd.website(): object; jsonLd.softwareApplication(): object
jsonLd.breadcrumbs(items: { name: string; path: string }[]): object
jsonLd.blogPosting(p: Post): object; jsonLd.faqPage(items): object
```

- [ ] **Step 1: Failing unit tests:**
  - `pageMetadata({path:"/company",...}).alternates.canonical === "https://www.metquay.com/company"`. The home canonical is `"https://www.metquay.com/"`.
  - `jsonLd.softwareApplication()` has `@type: "SoftwareApplication"` and `applicationCategory: "BusinessApplication"`, and its `name` equals `site.name`.
  - the `sitemap()` result contains 9 static routes + 97 posts (106 entries). Posts use `updated ?? date` as `lastModified`.
  - `robots()` allows `/` for `*`, has explicit allow rules for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, and `sitemap === "https://www.metquay.com/sitemap.xml"`.
  - `gen-llms` output starts with `# ${site.name}`, followed by a `> ` one-paragraph summary, then `## Product`, `## Solutions`, `## Integrations`, `## Compliance`, `## Company`, `## Blog` (link list of all posts with descriptions), with every link absolute on the canonical origin. `llms-full.txt` contains the plain text of every marketing page.
- [ ] **Step 2:** FAIL. **Step 3:** Implement. Keyword placement (spec §7): the home `<title>` above. The home subhead gets "calibration management software" verbatim once (wording edit logged in OPEN-ITEMS for Prayag's sign-off). The Solutions H1 stays, and its meta description leads with "Calibration software that follows every instrument…". Root layout emits Organization + WebSite JSON-LD, the home page emits SoftwareApplication, posts emit BlogPosting + BreadcrumbList, and Contact/Home emit FAQPage via `Faq`. Static OG image: `public/og/default.png` (1200×630, logo + headline) for all pages. Per-post OG image is deferred, logged in OPEN-ITEMS.
- [ ] **Step 4: Failing → passing e2e** `seo.spec.ts` over every route in the sitemap: one `<h1>`; `<title>` and meta description present and unique across routes; canonical present; every `ld+json` block parses as JSON. `/robots.txt`, `/sitemap.xml`, `/llms.txt` return 200.
- [ ] **Step 5:** Commit: `feat: metadata, JSON-LD, sitemap, robots, llms.txt`.

### Task 12: CloudFront Function, preview server, deploy pipeline

**Files:** Create `infra/cloudfront-function.js`, `tests/unit/cloudfront-function.test.ts`, `scripts/serve-out.mjs`, `.github/workflows/deploy.yml`, `docs/DEPLOY.md`. Modify `playwright.config.ts` (`webServer: node scripts/serve-out.mjs`, port 4173).

**Interfaces:**
- `infra/cloudfront-function.js`: CloudFront Functions JS 2.0 runtime, `function handler(event)`, exported for tests via `if (typeof module !== 'undefined') module.exports = { handler }`.
- `scripts/serve-out.mjs`: Node `http` server over `out/` that builds a CloudFront-shaped `event` from each request, calls `handler`, and returns its redirect, or serves the rewritten URI. A missing file serves `out/404.html` with status 404.

- [ ] **Step 1: Failing unit tests** (`handler` given `{request:{uri, headers:{host:{value}}}}`):
  - host `metquay.com` → 301 `Location: https://www.metquay.com<uri>`
  - `/hi` → 301 `/`; `/hi/company` → 301 `/company`; `/hi/blog/x` → 301 `/blog/x`
  - `/post/x` → 301 `/blog/x`
  - `/company/` → 301 `/company`; `/` → uri `/index.html`; `/company` → uri `/company.html`; `/blog/x` → uri `/blog/x.html`; `/llms.txt` unchanged; `/_next/static/a.js` unchanged
- [ ] **Step 2:** FAIL. **Step 3:** Implement the function and the server. **Step 4:** PASS, and switch Playwright to `serve-out.mjs`. Re-run the full e2e suite (all green).
- [ ] **Step 5:** `deploy.yml`: on push to `main`, `npm ci && npm test && npm run build && npx playwright install --with-deps && npm run e2e`, then `aws s3 sync out/ s3://$BUCKET --delete` (HTML `Cache-Control: max-age=0, must-revalidate`; `_next/static` immutable 1y) and `aws cloudfront create-invalidation --paths "/*"`. AWS auth via GitHub OIDC role (`AWS_ROLE_ARN`, `BUCKET`, `DISTRIBUTION_ID` as repo vars). A staging job deploys the same build to a staging bucket/distribution with `X-Robots-Tag: noindex` (response headers policy).
- [ ] **Step 6:** `docs/DEPLOY.md` is a runbook: create the private S3 bucket, a CloudFront distribution with OAC, default root `index.html`, custom error response 403/404 → `/404.html` (404), attach the function (viewer request), an ACM cert in us-east-1 for `metquay.com` + `www.metquay.com`, the OIDC role, DNS cutover steps, rollback (point DNS back to Framer, and keep Framer live for 1 week), and post-launch steps (Search Console + Bing sitemap submit, `/hi` removal request).
- [ ] **Step 7:** Commit: `feat: CloudFront routing function, local prod-parity server, deploy pipeline`.

### Task 13: Quality gate

Use skills: `accesslint-accessibility-scan` (key pages), `accesslint-accessibility-fix` for findings, `web-design-guidelines` (review all `src/components`), `vercel-react-best-practices` (bundle check).

**Files:** Create `tests/e2e/no-js.spec.ts`, `tests/e2e/links.spec.ts`, `lighthouserc.json`. Modify `package.json` scripts: `test`, `e2e`, `lint:links`, `lhci`.

- [ ] **Step 1:** `no-js.spec.ts`: a Playwright project with `javaScriptEnabled: false`. For every sitemap route, the `<h1>` is visible, `main` text length > 200 chars, and no element inside `main` has computed opacity 0 (Review Focus 1).
- [ ] **Step 2:** `links.spec.ts` / `npm run lint:links`: run `linkinator http://localhost:4173 --recurse --skip "^(?!http://localhost)"`, and also check that every `#hash` link's target id exists on its page. Expected: 0 broken.
- [ ] **Step 3:** Lighthouse CI (mobile) on `/`, `/solutions`, `/blog`, `/blog/linear-interpolation-made-simple-with-metquay`. Assertions: performance ≥ 0.9, accessibility ≥ 0.95, best-practices ≥ 0.95, seo = 1. Run `npx lhci autorun` and fix until it passes. Record the scores in `docs/OPEN-ITEMS.md` next to a Lighthouse run of the live Framer site for comparison.
- [ ] **Step 4:** Run the accessibility scan on the same 4 pages plus `/contact`, then fix the findings. Run the web-design-guidelines review, then fix the findings.
- [ ] **Step 5:** Visual pass: screenshot each page at 360/768/1280/1440, compare with the live site, and check every spec §4 item off in `docs/OPEN-ITEMS.md` (#1–#23, with how each was verified).
- [ ] **Step 6:** Commit: `test: no-JS, link, Lighthouse and a11y quality gates`.
