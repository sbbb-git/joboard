#!/usr/bin/env tsx
// Local equivalent of /api/cron/scrape. Writes data/jobs.json directly to disk.
// Hardened so a single source failure can never wipe the index: if the scrape
// gathers strictly fewer than HEALTHY_FLOOR jobs (catastrophic upstream
// outage), the previous data/jobs.json is preserved.

import fs from 'node:fs';
import path from 'node:path';
import { runAllScrapers } from '../lib/scrapers';
import { dedupe } from '../lib/dedupe';
import { filterActive } from '../lib/filters';
import { decodeEntities, slugify } from '../lib/normalize';
import type { JobNormalized, JobsFile } from '../lib/types';

// Feeds vary in whether they HTML-encode plain text fields. Each adapter
// decodes its own description via stripHtml, but company and title were left
// encoded, so "&amp;" leaked into headings, structured data and URL slugs.
// Normalising here covers every source at once.
function decodeTextFields(job: JobNormalized): JobNormalized {
  const company = decodeEntities(job.company);
  return {
    ...job,
    company,
    companySlug: company === job.company ? job.companySlug : slugify(company),
    title: decodeEntities(job.title),
  };
}

const MAX_JOBS = 5000;
const HEALTHY_FLOOR = 50; // refuse to write below this; index would lose 80%+ of content

async function main() {
  const started = Date.now();
  const outPath = path.join(process.cwd(), 'data', 'jobs.json');

  let results;
  try {
    results = await runAllScrapers();
  } catch (err) {
    console.error('runAllScrapers threw unexpectedly:', err);
    console.error('Refusing to touch data/jobs.json.');
    process.exit(0); // soft exit so CI does not fail
  }

  for (const r of results) {
    console.log(`${r.ok ? 'OK ' : 'ERR'} ${r.source.padEnd(16)} ${r.count} jobs ${r.error ?? ''}`);
  }

  const raw = results.flatMap((r) => r.jobs).map(decodeTextFields);
  const filtered = filterActive(raw);
  const deduped = dedupe(filtered).slice(0, MAX_JOBS);

  if (deduped.length < HEALTHY_FLOOR) {
    console.warn(
      `\nScraped only ${deduped.length} jobs (floor=${HEALTHY_FLOOR}). Probable upstream outage.`,
    );
    console.warn('Preserving existing data/jobs.json instead of overwriting with a near-empty file.');
    process.exit(0);
  }

  const out: JobsFile = {
    generatedAt: new Date().toISOString(),
    count: deduped.length,
    jobs: deduped,
  };

  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
  console.log(
    `\nWrote ${deduped.length} jobs to ${outPath} in ${Date.now() - started}ms (raw=${raw.length}, filtered=${filtered.length})`,
  );
}

main().catch((err) => {
  console.error('Unhandled error in scrape_local:', err);
  // Soft exit so CI does not mark the day red on a transient upstream issue.
  process.exit(0);
});
