import { XMLParser } from 'fast-xml-parser';
import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

const FEEDS = [
  'https://weworkremotely.com/categories/remote-programming-jobs.rss',
  'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss',
  'https://weworkremotely.com/categories/remote-product-jobs.rss',
  'https://weworkremotely.com/categories/remote-design-jobs.rss',
];

interface RssItem {
  title: string;
  link: string;
  description?: string;
  pubDate?: string;
  region?: string;
  guid?: string | { '#text': string };
}

export async function scrapeWeWorkRemotely(): Promise<JobNormalized[]> {
  const parser = new XMLParser({ ignoreAttributes: false, processEntities: false });
  const all: JobNormalized[] = [];
  for (const feed of FEEDS) {
    try {
      const res = await fetch(feed, {
        headers: { 'User-Agent': 'remotedev.work-bot/1.0' },
        next: { revalidate: 0 },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) continue;
      const text = await res.text();
      const parsed = parser.parse(text) as {
        rss: { channel: { item: RssItem[] | RssItem } };
      };
      const items = parsed.rss?.channel?.item;
      const arr = Array.isArray(items) ? items : items ? [items] : [];
      for (const item of arr) {
        all.push(mapItem(item));
      }
    } catch {
      continue;
    }
  }
  return all;
}

function mapItem(item: RssItem): JobNormalized {
  // WWR puts "Company: Title" in title
  const raw = item.title || '';
  const sep = raw.indexOf(':');
  const company = sep > 0 ? raw.slice(0, sep).trim() : 'Unknown';
  const title = sep > 0 ? raw.slice(sep + 1).trim() : raw;
  const loc = normalizeLocation(item.region || 'Worldwide');
  const description = stripHtml(item.description || '');
  const postedAt = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();
  return {
    id: jobHash({ title, company, location: loc.location }),
    title,
    company,
    companySlug: slugify(company),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(title),
    seniority: detectSeniority(title),
    remote: 'full',
    employmentType: 'FULL_TIME',
    url: item.link,
    source: 'weworkremotely',
    postedAt,
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description,
  };
}
