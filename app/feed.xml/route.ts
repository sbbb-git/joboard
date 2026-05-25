import { NextResponse } from 'next/server';
import { allJobs } from '@/lib/jobs';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { isExpired } from '@/lib/filters';

export const dynamic = 'force-static';
export const revalidate = false;

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const jobs = allJobs()
    .filter((j) => !isExpired(j))
    .slice(0, 200);
  const built = new Date().toUTCString();
  const items = jobs
    .map((j) => {
      const url = `${SITE_URL}/en/job/${j.id}`;
      const desc = j.description.slice(0, 800).replace(/\s+/g, ' ');
      return `    <item>
      <title>${esc(j.title)} at ${esc(j.company)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(j.postedAt).toUTCString()}</pubDate>
      <description>${esc(desc)}</description>
      <category>${esc(j.role)}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} · Remote tech jobs</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>The latest remote tech jobs aggregated from public job board APIs.</description>
    <language>en</language>
    <lastBuildDate>${built}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
