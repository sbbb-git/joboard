import { XMLParser } from 'fast-xml-parser';
import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

const FEEDS = [
  'https://jobspresso.co/remote-work/feed/',
  'https://jobspresso.co/category/tech/feed/',
];

interface RssItem {
  title: string;
  link: string;
  description?: string;
  pubDate?: string;
  category?: string | string[];
}

export async function scrapeJobspresso(): Promise<JobNormalized[]> {
  const parser = new XMLParser({ ignoreAttributes: false, processEntities: false });
  const all: JobNormalized[] = [];
  const seen = new Set<string>();
  for (const feed of FEEDS) {
    try {
      const res = await fetch(feed, {
        headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
        next: { revalidate: 0 },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) continue;
      const text = await res.text();
      const parsed = parser.parse(text) as { rss?: { channel?: { item?: RssItem[] | RssItem } } };
      const items = parsed.rss?.channel?.item;
      const arr = Array.isArray(items) ? items : items ? [items] : [];
      for (const item of arr) {
        if (!item.title || !item.link) continue;
        if (seen.has(item.link)) continue;
        seen.add(item.link);
        all.push(mapItem(item));
      }
    } catch {
      continue;
    }
  }
  return all;
}

function mapItem(item: RssItem): JobNormalized {
  // Jobspresso title format: "Job Title at Company" or "Job Title (Company)"
  const raw = item.title || '';
  let title = raw;
  let company = 'Unknown';
  const m1 = raw.match(/^(.+?)\s+at\s+(.+?)(?:\s+\(.+\))?$/i);
  const m2 = raw.match(/^(.+?)\s+\((.+?)\)$/);
  if (m1) {
    title = m1[1].trim();
    company = m1[2].trim();
  } else if (m2) {
    title = m2[1].trim();
    company = m2[2].trim();
  }
  const categories = Array.isArray(item.category) ? item.category : item.category ? [item.category] : [];
  const tags = categories.map((c) => String(c)).slice(0, 8);
  const loc = normalizeLocation('Worldwide');
  return {
    id: jobHash({ title, company, location: loc.location }),
    title,
    company,
    companySlug: slugify(company),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(title, tags),
    seniority: detectSeniority(title),
    remote: 'full',
    employmentType: 'FULL_TIME',
    url: item.link,
    source: 'jobspresso',
    postedAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description: stripHtml(item.description || ''),
    tags,
  };
}
