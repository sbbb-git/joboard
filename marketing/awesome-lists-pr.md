# GitHub awesome-list PRs

Awesome lists are the highest-ROI backlinks: DA 90-95, immediate
indexing, evergreen. Open each PR with the same care you'd use for code.

## Target lists (in priority order)

| Repo | Stars | Section to add to |
|------|-------|-------------------|
| [`lukasz-madon/awesome-remote-job`](https://github.com/lukasz-madon/awesome-remote-job) | ~33k | `Job Boards` |
| [`jessicard/remote-jobs`](https://github.com/jessicard/remote-jobs) | ~30k | This is companies, not boards — skip unless you also want to list as company |
| [`remoteintech/remote-jobs`](https://github.com/remoteintech/remote-jobs) | ~30k | Same as above — companies list |
| [`abhisheknaiidu/awesome-remote-jobs`](https://github.com/abhisheknaiidu/awesome-remote-jobs) | ~600 | `Job Boards` section |
| [`yanirs/established-remote`](https://github.com/yanirs/established-remote) | ~3k | Established remote companies list — skip |

For your case (job aggregator, not a remote company), the realistic
targets are `lukasz-madon/awesome-remote-job` and
`abhisheknaiidu/awesome-remote-jobs`.

## Standard PR workflow

1. Fork the target repo
2. Create a branch: `add-slateremote-com`
3. Edit `README.md` — add one alphabetised line in the right section
4. Commit with a single-line message: `Add slateremote.com to Job Boards`
5. Open PR with the description below

## README line (alphabetical placement)

For `lukasz-madon/awesome-remote-job`:

```markdown
* [slateremote.com](https://slateremote.com/) - Remote tech jobs aggregated from eight public job board APIs, refreshed daily. Free, no signup. Filters by role, country, seniority, employment type and salary. Available in 7 languages.
```

For `abhisheknaiidu/awesome-remote-jobs`:

```markdown
- **[slateremote.com](https://slateremote.com/?utm_source=github-awesome&utm_medium=referral&utm_campaign=2026-launch)** - Remote tech jobs from 8 sources, refreshed daily. 7 languages, no signup.
```

(Check the existing rows for exact formatting — `*` vs `-`, presence of
trailing colon, link style — before submitting. Consistency matters to
maintainers.)

## PR description (paste into PR body)

```markdown
## What

Add slateremote.com to the Job Boards section.

## What it is

slateremote.com is a static, free, no-signup remote tech job board that
indexes listings from eight public job board APIs:

- Remotive
- RemoteOK
- We Work Remotely
- Arbeitnow
- Himalayas
- Jobicy
- The Muse
- Hacker News Who's Hiring

The full index is regenerated once a day from these public APIs and
served as a static export on Cloudflare Pages. Filter by role, country,
seniority, employment type, and salary band — all client-side, no
account required.

Available in 7 languages: English, French, Spanish, German, Portuguese,
Italian, Polish.

## Why include it

- Genuinely free, no email/signup wall ahead of any listing
- Aggregates rather than competes with the sources (each listing links
  to the original applicant tracking system)
- Updated daily
- No tracking beyond a first-party privacy-friendly analytics beacon
- Open-source-friendly stack (Next.js, Cloudflare Pages, GitHub Actions)

## Notes

- The link in the README line uses no UTM params (consistent with how
  most entries in the list are formatted).
- I'm the maintainer; happy to update or remove anything that doesn't
  fit the list's criteria.
```

## After merge

Confirm the link is live on the awesome list's hosted README. Within a
week, Google should index the new backlink — verify in Search Console
under External Links.
