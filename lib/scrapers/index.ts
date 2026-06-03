import type { JobNormalized } from '../types';
import { scrapeRemotive } from './remotive';
import { scrapeRemoteOk } from './remoteok';
import { scrapeArbeitnow } from './arbeitnow';
import { scrapeWeWorkRemotely } from './weworkremotely';
import { scrapeHimalayas } from './himalayas';
import { scrapeJobicy } from './jobicy';
import { scrapeTheMuse } from './themuse';
import { scrapeHackerNews } from './hackernews';
import { scrapeWorkingNomads } from './workingnomads';
import { scrapeJobspresso } from './jobspresso';
import { scrapeBraintrust } from './braintrust';

export interface ScraperResult {
  source: string;
  count: number;
  ok: boolean;
  error?: string;
  jobs: JobNormalized[];
}

export const SCRAPERS: Array<{ name: string; fn: () => Promise<JobNormalized[]> }> = [
  { name: 'remotive', fn: scrapeRemotive },
  { name: 'remoteok', fn: scrapeRemoteOk },
  { name: 'arbeitnow', fn: scrapeArbeitnow },
  { name: 'weworkremotely', fn: scrapeWeWorkRemotely },
  { name: 'himalayas', fn: scrapeHimalayas },
  { name: 'jobicy', fn: scrapeJobicy },
  { name: 'themuse', fn: scrapeTheMuse },
  { name: 'hackernews', fn: scrapeHackerNews },
  { name: 'workingnomads', fn: scrapeWorkingNomads },
  { name: 'jobspresso', fn: scrapeJobspresso },
  { name: 'braintrust', fn: scrapeBraintrust },
];

export async function runAllScrapers(): Promise<ScraperResult[]> {
  const results = await Promise.allSettled(
    SCRAPERS.map(async (s) => {
      const jobs = await s.fn();
      return { source: s.name, jobs };
    }),
  );
  return results.map((r, i): ScraperResult => {
    const name = SCRAPERS[i].name;
    if (r.status === 'fulfilled') {
      return { source: name, ok: true, count: r.value.jobs.length, jobs: r.value.jobs };
    }
    return {
      source: name,
      ok: false,
      count: 0,
      jobs: [],
      error: r.reason instanceof Error ? r.reason.message : String(r.reason),
    };
  });
}
