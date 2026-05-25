#!/usr/bin/env node
// Ping IndexNow with a list of URLs. Run after each successful scrape commit
// or after a manual content push.
//
// Usage:
//   INDEXNOW_KEY=xxx SITE_URL=https://remotedev.work node scripts/ping_indexnow.mjs url1 url2 ...
//   echo "url1\nurl2" | node scripts/ping_indexnow.mjs

const key = process.env.INDEXNOW_KEY;
const siteUrl = process.env.SITE_URL;

if (!key || !siteUrl) {
  console.error('Missing INDEXNOW_KEY or SITE_URL env');
  process.exit(1);
}

const host = new URL(siteUrl).host;
const argUrls = process.argv.slice(2);
const stdinUrls = process.stdin.isTTY
  ? []
  : (await new Promise((resolve) => {
      let buf = '';
      process.stdin.on('data', (c) => (buf += c));
      process.stdin.on('end', () => resolve(buf));
    }))
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);

const urls = [...argUrls, ...stdinUrls];
if (urls.length === 0) {
  console.error('No URLs provided');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URLs`);
process.exit(res.ok ? 0 : 1);
