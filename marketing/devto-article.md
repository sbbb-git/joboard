# DEV.to article draft

DEV.to articles index quickly, drive traffic, and the canonical URL
backlink to your site is a clean DA-90 signal. Keep the article
genuinely useful — DEV's algorithm penalises thin content.

## Title

```
How I built a 6,800-page static remote job board with Next.js export + Cloudflare Pages
```

## Tags

```
#nextjs #cloudflare #seo #showdev
```

## Canonical URL

Use a canonical_url meta pointing back to slateremote.com so search
engines credit the original site if you cross-post:

```
canonical_url: https://slateremote.com/blog/building-a-static-remote-job-board
```

(If you don't have a /blog yet on the site, omit canonical_url for now
and host the post solely on DEV.to.)

## Article body (markdown, ~1500 words)

```markdown
# How I built a 6,800-page static remote job board with Next.js export + Cloudflare Pages

I run [slateremote.com](https://slateremote.com), a free aggregator of
remote tech jobs pulled from eight public job board APIs. Six months in
the site has 6,800 prerendered pages, 7 locales, and serves around 56k
pageviews a week from a single static export.

Everything below is what worked, what didn't, and the SEO knobs that
moved the needle.

## The stack

- **Next.js 14** with `output: 'export'` (full static export, no SSR)
- **TypeScript** + Tailwind for everything
- **Cloudflare Pages** to host the static output
- **GitHub Actions** for the daily scrape + rebuild + redeploy cron
- **No database**, **no auth**, **no client-side fetching** of job data

The build runs once a day. Everything between deploys is static HTML
served from CDN.

## The scrape

Eight sources, each with its own API shape. A normaliser in
`lib/scrapers/` converts every response into a single `JobNormalized`
type:

```ts
interface JobNormalized {
  id: string;
  title: string;
  company: string;
  companySlug: string;
  role: Role;
  seniority: 'junior' | 'mid' | 'senior' | 'staff';
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN';
  remote: 'full' | 'partial' | 'office';
  location: string;
  locationCountry?: string;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  description: string;
  url: string;
  source: string;
  postedAt: string;
  expiresAt?: string;
}
```

Role and seniority are inferred from the title via regex heuristics
because no two boards classify them the same way.

## The build

`next export` with 6,800 entries is mostly fine, but a few things bite:

1. **`generateStaticParams()` for `/job/[id]`** returns one entry per
   active job × 7 locales. Easy to balloon. I filter expired jobs up
   front so the build only generates pages I want indexed.

2. **Sitemap size**. `app/sitemap.ts` returns a flat array. Originally
   I emitted one entry per locale per page; Google saw them as 6,188
   competing pages. Refactored to one entry per logical page with
   `alternates.languages` listing all locale variants. Now 994 entries
   with 7,952 `xhtml:link rel=alternate` annotations, and the hreflang
   signal in `<head>` and sitemap.xml match.

3. **RSC `.txt` payloads**. Next.js export emits a `.txt` companion for
   every HTML page (the React Server Components streaming payload).
   Bots crawl these hard — I was seeing 30k requests/day on `.txt`
   URLs that don't render anything human-readable. Fix: `_headers`
   with `X-Robots-Tag: noindex, nofollow` on `*.txt` plus aggressive
   edge caching so the crawl traffic hits cache instead of origin.

## The hosting + caching

Cloudflare Pages serves static assets but by default it sends
`Cache-Control: public, max-age=0, must-revalidate` on HTML — which
forces revalidation against the origin every request. My first month
of analytics showed 96% of responses with `cacheStatus=dynamic`. For a
fully-static site that's free money on the table.

Fix: a `public/_headers` file shipped with the build.

```
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=2592000

/*.txt
  Cache-Control: public, max-age=21600, s-maxage=86400
  X-Robots-Tag: noindex, nofollow

/*
  Cache-Control: public, max-age=300, s-maxage=86400, stale-while-revalidate=86400
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

Result: cache hit ratio jumped from ~0% to ~90% within a few days.

## The i18n

7 locales via the `app/[lang]/` segment. Translations live in:

- `lib/i18n.ts` — short UI strings (`Record<Locale, Dict>`)
- `lib/page-i18n.ts` — page-level copy with interpolation
- `lib/guides-i18n.ts` — translated guide titles and descriptions
- `lib/guide-bodies/<lang>.ts` — translated full guide bodies and FAQs

The `hreflang` annotations are emitted both in each page's `<head>`
(via Next's `metadata.alternates.languages`) and in `sitemap.xml`.
Submitting the sitemap to GSC after that change dropped a lot of
"duplicate page without canonical" warnings.

## The SEO that compounded

For the first three months, organic was effectively zero. Around
month four it started showing up daily. What moved the needle:

1. **Long-form guides**, not job pages. 53 guides averaging 350 words
   each, each in 7 locales, brought in evergreen organic traffic that
   the job pages alone never did. The job pages are too thin to rank
   for queries broader than the exact job title.

2. **JobPosting JSON-LD on every listing**. Google's enhanced job
   results show structured snippets directly in SERP. Make sure
   `baseSalary` is always populated — if the source doesn't disclose
   a salary, fall back to your own aggregated p25/p75 from the index.

3. **hreflang done right**. Pre-fix, the seven locales were competing
   with each other for the same queries. Post-fix (alternates in both
   `<head>` and sitemap), they rank as the same logical page in
   different languages.

## The economics

The site is free forever. A few guide pages carry affiliate links
(Wise, AppSumo, Fiverr, Beehiiv) marked `rel="nofollow sponsored"`.
That covers the $5 a month CF Pages + domain costs and a bit more.
Display ads at this scale would earn pennies; well-placed affiliate
links earn meaningfully more, with no UX penalty if you keep the
density low.

## What I'd do differently

- **Start the guides on day one**, not month three. Static job-board
  content barely ranks; the guides are what brings durable traffic.
- **Pick a niche posture earlier**. "Remote tech jobs aggregator" is a
  crowded category. I should have leaned into one of *all eight
  boards in one search*, *opinionated job filtering*, or *salary
  transparency* harder, sooner.
- **Wire the analytics earlier**. I shipped without Cloudflare Web
  Analytics for the first month and lost the ability to correlate
  organic patterns with site changes.

---

The site itself: https://slateremote.com  
Happy to answer anything technical in the comments.
```

## Posting checklist

- [ ] Add a single high-quality cover image (Unsplash or a screenshot)
- [ ] Schedule for Tuesday or Wednesday, 09:00–11:00 ET (best DEV traffic window)
- [ ] After publish, share the DEV.to URL once on X/LinkedIn with a 1-sentence tease
- [ ] Reply to every comment in the first 48h
