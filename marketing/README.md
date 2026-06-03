# Marketing & launch assets

This folder holds copy-paste-ready launch material for slateremote.com.
Pick the channel, copy the file, post.

## Suggested launch sequence (4 weeks, low-effort)

| Week | Day | Channel | File | Goal |
|------|-----|---------|------|------|
| 1 | Tue/Wed | Hacker News (Show HN) | [`show-hn.md`](./show-hn.md) | Burst of qualified traffic + 1 DA-90 backlink |
| 1 | Thu | DEV.to article | [`devto-article.md`](./devto-article.md) | 1 DA-90 backlink + dev community awareness |
| 2 | Mon-Wed | GitHub awesome lists (4 PRs) | [`awesome-lists-pr.md`](./awesome-lists-pr.md) | 4 DA-95 backlinks |
| 2 | Thu | ProductHunt launch | [`producthunt.md`](./producthunt.md) | Daily-leaderboard exposure + DA-91 backlink |
| 3 | Spread | Reddit (5 subreddits) | [`reddit-posts.md`](./reddit-posts.md) | Communities + Reddit DA-91 backlinks |
| 4 | Spread | Directories | [`directories.md`](./directories.md) | Long-tail DA-60-80 backlinks |

## Asset rules (so the launch lands)

1. **Never spam**. Each post mentions the site once, surrounded by useful context. Reddit moderators ban for less.
2. **Reply to every comment in the first 24h**. HN, PH and Reddit reward responsiveness with algorithmic visibility.
3. **Time it**. HN: Tue-Thu, 13-16 UTC. PH: Sun-Tue launch, EU timezone. Reddit: when the subreddit is most active (check subredditstats.com).
4. **Don't ask for upvotes**. PH allows shoutouts, HN does not, Reddit shadowbans for it.
5. **Track**. Use UTM params for each channel (already wired below).

## UTM params (use these)

```
utm_source=<channel>&utm_medium=launch&utm_campaign=2026-launch
```

Suggested values:
- `utm_source=hn` for Hacker News
- `utm_source=producthunt`
- `utm_source=reddit&utm_content=<subreddit>`
- `utm_source=devto`
- `utm_source=github-awesome&utm_content=<repo-name>`
