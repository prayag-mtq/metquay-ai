# Open items

Decisions deferred by Prayag (spec §12) and findings from the Framer crawl. Each deferred item is a single value in `src/config/site.ts`.

## Deferred decisions

| # | Question | v1 placeholder | Where |
|---|---|---|---|
| 1 | Where do contact-form submissions go? | No endpoint: the form opens a prefilled email to consulting@metquay.com | `site.contactEndpoint` |
| 2 | One brand name and logo? | "metquay.ai" in titles, current nav logo | `site.name` |
| 3 | Real CTA destinations (trial signup, expert booking)? | `/contact?intent=trial`, `/contact?intent=expert` | `site.ctas` |
| 4 | Analytics and cookie banner? | None | — |

## Broken links found in the Framer site (fixed in the rebuild)

- Footer (tablet/mobile variants): "Resources", "Blog" and "Contact" linked to `/company`. They now link to `/resources`, `/blog`, `/contact`.
- Home blog teaser: the 4th card's "Read More" linked to `/contact#contact`. It now links to its post.
- Security page: `<title>` was "Terms of Service" and the meta description mentioned "Clario" (template leftover).
- `mailto:consluting@metquay.com` (typo) in the post "Say goodbye to disconnected systems". Fixed to consulting@.
- All 97 blog posts had no `<h1>`. The post title is now the H1.
- Home hero lead now reads "ISO/IEC 17025 compliant calibration management software" (spec §7 keyword placement). Needs Prayag's sign-off.
- Blog category typo "Efficient Approches" corrected to "Efficient Approaches".
- Legacy links inside posts: `/faq` → `/contact#faq`, `/metconnect/` → `/ecosystem#fluke`, `/blog/hashtags/*` unlinked (pages don't exist).
- All old blog banner images (AI-generated art) dropped; every post uses the generated cover until real app screenshots are supplied (#9).
- Solutions step 04 copy typo "I real expression engine" fixed to "A real expression engine".
- Resources: the 7 playbook "Download Free" buttons had no target on the live site and the crawl has no playbook PDFs. Each is now "Request this playbook" → contact form (topic preselected). Supply the PDFs to switch these to direct downloads.
- Ecosystem: "Read the API docs" had no target on the live site. Pointed at the contact form (expert) until a docs URL exists.
- Legal pages contain drafting placeholders copied from the live site, which need legal review: Privacy "[e.g., Google Analytics / HubSpot]", "[metquay.ai/subprocessors]", "[confirm vendor terms and retention]"; Security "[a validation package / IQ-OQ documentation]"; Terms "[30]".
- Legal tables (Privacy: data categories, purposes, subprocessors; Security: controls, compliance) were Framer link-grids. Rebuilt as real tables. Repeated cells the crawl collapsed were restored by row position: two "Legitimate interests" rows, subprocessor locations "US", ISO/IEC 27001 "Planned". Please verify.
- Company: Seby George has no photo on the live site (initials shown).

## SEO: actions outside the code

The site now has keyword landing pages, a glossary, category hubs, an RSS feed, per-post OG images, complete structured data, `llms.txt` and a sitemap. Rankings also depend on things code can't do:

1. **Search Console + Bing**: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel, redeploy, verify, submit `/sitemap.xml`, and request removal of `/hi` URLs.
2. **Domain**: point `www.metquay.com` at the new deployment. Rankings follow the canonical domain, so nothing ranks from `*.vercel.app`.
3. **Backlinks and mentions**: listings on G2, Capterra, Software Advice and GetApp (category "Calibration Management Software"), NCSLI / A2LA / ANAB partner directories, Odoo Apps, and the Fluke/metrology.net partner pages. LLMs recommend products they see cited on third-party sites.
4. **Brand name**: pick one ("metquay.ai" vs "Metquay"). Inconsistent naming splits entity signals (deferred item 2).
5. **Fresh content**: publish regularly (the blog's last posts drive "freshness"), and update the guide pages' `updated` date when content changes.
6. **Review the new copy**: `src/content/landing.ts` and `src/content/glossary.ts` were written from facts already on the site plus standard metrology definitions. Have a domain expert check them before launch.
