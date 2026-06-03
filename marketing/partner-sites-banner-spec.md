# Sponsored banner spec — partner sites prompt

Self-contained prompt to paste into Claude Code on a sister site
(slowmadly.com, ai-by-job.com, or any future partner site) so it ships
locale-aware sponsored banner placements matching the slateremote.com
inventory.

---

## PROMPT TO COPY-PASTE (everything below this line)

I want you to add a system of sponsored banner placements across this
site that monetises traffic through affiliate links. The site is part of
a 3-site network (slateremote.com, slowmadly.com, ai-by-job.com) and
the design and UX must match the conventions across the network. Do not
break existing pages or layouts. Read the codebase first to understand
the existing component patterns before writing anything.

## What to build

### 1. An affiliate registry (single source of truth)

Create `lib/affiliates.ts` (or extend if it already exists). One entry
per program with these fields: `slug`, `name`, `url`, `blurb`, `cta`,
`category`. Use these exact affiliate URLs (do not invent any):

| Slug      | Name      | URL                                                                                    | Category |
|-----------|-----------|----------------------------------------------------------------------------------------|----------|
| fiverr    | Fiverr    | https://go.fiverr.com/visit/?bta=1169210&brand=fiverrmarketplace                       | talent   |
| appsumo   | AppSumo   | https://appsumo.8odi.net/gRgbDg                                                        | shopping |
| beehiiv   | Beehiiv   | https://www.beehiiv.com/?via=sacha-bitoun                                              | newsletter |
| wise-eur  | Wise      | https://wise.prf.hn/click/camref:1100l5KwDi                                            | banking  |
| wise-usd  | Wise      | https://wise.prf.hn/click/camref:1100l5KwDm                                            | banking  |
| wise-gbp  | Wise      | https://wise.prf.hn/click/camref:1100l5KwDj                                            | banking  |
| revolut   | Revolut   | https://revolut.com/referral/?referral-code=sacha5bp%21MAY2-26-AR-TR5DDH1-H1&geo-redirect | banking |
| safetywing| SafetyWing| https://safetywing.com/?referenceID=26533496&utm_source=26533496&utm_medium=Ambassador | insurance |
| nordvpn   | NordVPN   | https://refer-nordvpn.com/duxeAtWzEDy                                                  | privacy  |
| claude    | Claude    | https://claude.ai/referral/zUyyYBl9ZQ                                                  | ai       |
| mercor    | Mercor    | https://t.mercor.com/sk2JJ                                                             | talent   |
| skool     | Skool     | https://www.skool.com/signup?ref=ed047124b59a477596ccc32e3c786ee7                      | community |

Add a `wiseForLocale(locale)` helper that returns the Wise URL matching
the visitor's currency:
- `en` → `wise-usd`
- `fr`, `es`, `de`, `pt`, `it`, `pl` (and any other EU locale) → `wise-eur`
- `gb` / `en-GB` → `wise-gbp`
- fallback → `wise-usd`

### 2. Banner components

Build 4 React (or framework-equivalent) components, each accepting a
`locale` prop and rendering translated copy from a `Record<Locale, Copy>`
map inside the component file. Match the design language of the host
site (typography, colour palette, border radius) — do not import a
foreign style system.

| Component       | Affiliate | Brand colour hint     |
|-----------------|-----------|-----------------------|
| `FiverrCTA`     | fiverr    | green                 |
| `AppSumoCTA`    | appsumo   | amber / yellow        |
| `BeehiivCTA`    | beehiiv   | terracotta / orange   |
| `WiseCTA`       | wise (locale-resolved) | teal       |

Each component renders a single `<section>` with:
- Eyebrow line (10-11px uppercase) naming the affiliate category
- H2 headline (display font, 20-28px)
- One-paragraph body (14-16px)
- One CTA button (pill shape) pointing to the affiliate URL

Translate all visible text into the locales the host site supports
(read its existing i18n file to enumerate them). Required minimum
locale set across the network: `en, fr, es, de, pt, it, pl`. Add any
others the host site already uses.

### 3. Placement rules

Place the CTAs contextually, not site-wide. Aim for one CTA per
long-form page, two maximum on very long pages. Never two of the same
CTA on the same page.

| Page type                  | Component(s) to render                                  |
|----------------------------|---------------------------------------------------------|
| Freelancing / sidehustle / earning content | `FiverrCTA`                            |
| Tool, productivity, deal, comparison content | `AppSumoCTA`                         |
| Newsletter, writing, content monetisation | `BeehiivCTA`                           |
| Banking, multi-currency, tax, nomad finance | `WiseCTA`                            |
| Visa, residency, country guides | `WiseCTA` (or `SafetyWing` if you add it as a 5th) |
| Homepage                   | One rotating slot; pick the most relevant per visit     |

Render the CTA at the END of the page body, just before related-content
or footer. Never at the top above the user's intended content.

### 4. Mandatory attributes on every affiliate link

```html
<a href="..."
   target="_blank"
   rel="nofollow noopener sponsored">
```

All three rel tokens are required:
- `nofollow` so search engines do not pass link equity
- `noopener` for tab-isolation security
- `sponsored` per Google's official guideline for monetised links

### 5. UTM tagging (append to the affiliate URL only if the affiliate's
program does not already include its own tracking parameters)

Wise, Beehiiv, Mercor, NordVPN already carry their own affiliate
parameters. Do NOT append UTMs to those.

Fiverr and AppSumo URLs above already include the program's tracking.
Do NOT append UTMs to them either.

Skip UTM additions across the board to avoid breaking affiliate
attribution.

### 6. Disclosure page

Add or update `/disclosure` (or equivalent route) with a paragraph
disclosing the affiliate relationship. Required wording:

> This site uses affiliate links. When you sign up for a service via
> one of our links, we may receive a small commission at no extra cost
> to you. Affiliate links are marked with `rel="sponsored"`. Pricing
> and product features are identical whether you use our link or not.

Link to the disclosure page from the footer and from the first CTA
shown on every long-form page (small `text-xs` link under the CTA
button or in the eyebrow).

### 7. Footer placement

Add a footer link to `/disclosure` in the existing footer column
labelled "Site" / "Site map" / equivalent. Translate the label.

### 8. Acceptance criteria

Before opening a PR:
- [ ] `npx tsc --noEmit` (or the host's typecheck) is clean
- [ ] Production build (`npm run build` or equivalent) succeeds with
      no new warnings
- [ ] Each banner component renders correctly in every locale the host
      site supports (visit one page per locale, confirm copy renders)
- [ ] Every affiliate `<a>` element has all three `rel` tokens
- [ ] `/disclosure` page exists and is reachable from the footer
- [ ] No em-dashes anywhere in the new copy (use commas, parentheses
      or colons instead)
- [ ] Lighthouse Performance score does not regress more than 2 points
      on the home and one guide page

### 9. Things NOT to do

- Do not add Google AdSense, Mediavine, or any display-ad network
- Do not add cookie banners (these affiliate links do not set tracking
  cookies on our domain)
- Do not pop modals or interstitials
- Do not add the CTA in the middle of the article body
- Do not add more than 2 affiliate CTAs on the same page
- Do not put affiliate URLs in any commit message, comment, or doc page

### 10. Deliverables

A single PR titled `feat: sponsored banner placements across the site`
with:
- The affiliate registry
- The 4 banner components with full locale coverage
- Placements wired into the relevant page templates
- `/disclosure` page (or update)
- Footer link to disclosure
- A short note in the PR description listing every page type now
  rendering each CTA

Open the PR. Do not merge.

---

END OF PROMPT (everything above is what you copy-paste)
