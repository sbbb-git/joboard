# Show HN draft

## Title (under 80 chars, no emoji, no marketing)

```
Show HN: slateremote.com – Remote tech jobs aggregated from 8 APIs, refreshed daily
```

Backup variants:
- `Show HN: I built a remote tech job aggregator with 6,800 indexed pages and 0 trackers`
- `Show HN: A static Next.js remote-jobs site with 7-locale i18n on Cloudflare Pages`

## URL

```
https://slateremote.com/?utm_source=hn&utm_medium=launch&utm_campaign=2026-launch
```

(Or use plain `https://slateremote.com` if you want a cleaner URL in the title — Show HN doesn't preserve UTMs on the headline link.)

## Best posting window

Tuesday, Wednesday or Thursday, **13:00–16:00 UTC** (9-12 ET, 14-17 Paris).
Avoid Mondays (HN is slower), avoid weekends (front-page churn faster).

## First comment (post immediately after submitting)

```
Hey HN, builder here. Quick context:

- slateremote.com indexes remote tech jobs from the public APIs of eight
  job boards (Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas,
  Jobicy, The Muse, HN Who's Hiring). Cron pulls run once a day.
- Stack: Next.js 14 static export, Cloudflare Pages, 7 locales (en, fr,
  es, de, pt, it, pl), ~6,900 prerendered pages, no client-side database.
  hreflang + JobPosting JSON-LD on every job page.
- It's free, forever. No signup, no resume parsing, no "freemium" wall.
  I pay a few dollars in CF + domain costs and the affiliate links on
  the guides cover that.

Things I'd love feedback on:
1. The filtering UX on /jobs (combines role / country / seniority / type
   / salary, all client-side).
2. The seniority and remote-degree heuristics in lib/filters.ts — I
   normalise wildly different posting formats into one shape and I'm
   sure some classifications miss.
3. The .txt RSC payloads Next.js emits for SPA navigation get crawled
   by bots heavily; I just deindexed them via X-Robots-Tag — open to
   smarter approaches.

Happy to answer anything about the scraper, the i18n setup, or the SEO
tradeoffs of a 6k-page static site.
```

## Follow-up comment templates (for common questions)

**"Why not use indeed/linkedin?"**
```
Aggregating linkedin/indeed requires either scraping (against ToS, fragile)
or paid APIs (expensive for a free site). The eight sources I use publish
public APIs designed to be consumed. Coverage is narrower but signal is
much higher: every job links straight to the company ATS, no recruiter
middlemen.
```

**"How do you handle expired listings?"**
```
Each source includes an expiresAt or a postedAt. Anything past 60 days
is marked expired and serves with index=false in metadata and a sticky
"expired" banner. They stay accessible at the same URL (for the SEO
weight they already carry) but Google deindexes them within a few
crawl cycles.
```

**"Stack details / how was this built"**
```
Next.js 14 with output: 'export'. All ~6900 pages are prerendered at
build time. Static HTML + a tiny client-side bundle for the filter UI.
Cloudflare Pages serves the build directly from R2. Daily GitHub Action
re-scrapes, rebuilds, and redeploys.
```
