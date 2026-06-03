# Reddit posts

Each subreddit has its own culture. Spam = ban. Each post below adds
value first and mentions the site as part of the answer, not the pitch.

## /r/forhire

Not a great fit (it's for individual gigs), skip.

## /r/remotework

**Title**:
```
Built a free remote tech job aggregator pulling from 8 APIs — no signup, what's missing?
```

**Body**:
```
I run slateremote.com — it pulls remote tech jobs from the public APIs of
eight boards (Remotive, RemoteOK, WWR, Arbeitnow, Himalayas, Jobicy,
The Muse, HN Who's Hiring) and indexes them once a day.

Built it because every other aggregator I used wanted my email before
showing me listings, then sold the list to recruiters. This one is just
a static site, no auth, no resume parsing.

Two questions for this sub:
1. Which job boards covering remote tech do you actually use that aren't
   in the 8 above? I'd like to add more sources.
2. What's the one filter you wish remote job aggregators had and never do?

(Mods: not selling anything, no affiliate links to job applications. Happy
to remove if not appropriate.)
```

## /r/digitalnomad

**Title**:
```
Free aggregator of remote tech jobs + nomad-friendly cities — what city data would help most?
```

**Body**:
```
I built slateremote.com to scratch my own itch — a free, no-signup
aggregator of remote tech jobs. Alongside the jobs, I added 50 nomad
city profiles with cost of living, internet speed, timezone and visa
flags, because that's the context the jobs are missing.

For this sub specifically: what city-level data would actually change
your decision when picking a basecamp? Cost of living is obvious; I'm
considering also adding cafe density, EU-style health-insurance
availability, and "tax-friendly for foreigners" flags. Other ideas?
```

## /r/cscareerquestions (use sparingly, mods strict)

**Title**:
```
Compiled remote tech salary bands from current job listings — happy to share data
```

**Body**:
```
Side project: I scraped/aggregated the salary bands from current remote
tech listings on eight job boards and computed median/p25/p75 by role
and currency. There are 12 role pages
(developer/frontend/backend/fullstack/mobile/data/ml-ai/devops/security/qa/product/design)
and the underlying data updates daily.

If anyone here wants the raw numbers for a specific role/currency for
salary research or a side analysis, happy to share. Site is slateremote.com
(/salaries/<role>) — free, no signup.
```

## /r/webdev

**Title**:
```
6,800-page static remote job board with Next.js export + Cloudflare Pages — tradeoffs
```

**Body**:
```
I built slateremote.com to learn the limits of Next.js static export at
scale. Some numbers:
- 6,800 prerendered HTML pages from a single `next export` build
- 7 locales with proper hreflang annotations
- Cloudflare Pages serves the static output, daily GH Action re-scrapes
  + rebuilds in ~6 minutes
- No DB, no auth, no backend — the site is a daily snapshot

A few things I learned the hard way:
- generateStaticParams() with 6k+ entries works but you have to filter
  out expired data aggressively or the build slows
- RSC `.txt` payloads get heavily crawled by AI bots — needed
  X-Robots-Tag noindex + edge caching to stop wasted origin hits
- Cloudflare Pages doesn't cache HTML by default; needed `_headers` with
  s-maxage to lift cache hit ratio from 0% to 90%+

AMA on the stack if interesting.
```

## /r/SideProject

**Title**:
```
slateremote.com — Free remote tech job aggregator, 6 months in
```

**Body**:
```
TL;DR: pulled remote tech jobs from 8 public APIs, prerendered into a
static site, deployed on CF Pages. Six months later it has 6,800 pages,
7 locales, ~21k unique visitors / 56k pageviews per week.

Tech stack: Next.js 14 export, TypeScript, Tailwind, Cloudflare Pages,
GitHub Actions for the daily cron. Affiliate links on a few guide pages
cover domain + CDN cost; everything else is free forever.

Three things I learned:
1. Cache headers on static sites still need configuration. Default CF
   Pages serves with no-cache. Adding _headers lifted hit ratio from
   ~0% to ~90%.
2. SEO compounds. The first three months were dead. Around month four,
   organic started showing up daily. The 53 long-form guides did the
   heavy lifting; the job pages alone barely ranked.
3. Affiliate revenue beats ad revenue at this scale, by a lot. One
   well-placed Beehiiv/AppSumo/Fiverr link pays more than a month of
   display ads.

Happy to answer anything.
```

## Posting rules

- Space posts 5-7 days apart between subreddits
- Reply to every comment in the first 24h
- If a mod removes a post, ask why before reposting — never repost without contacting them
- Never link the same UTM URL twice — use different `utm_content` values per subreddit
