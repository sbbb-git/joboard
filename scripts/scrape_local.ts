#!/usr/bin/env tsx
// Local equivalent of /api/cron/scrape. Writes data/jobs.json directly to disk.
// Use during development to avoid hitting the live cron endpoint.

import fs from 'node:fs';
import path from 'node:path';
import { runAllScrapers } from '../lib/scrapers';
import { dedupe } from '../lib/dedupe';
import { filterActive } from '../lib/filters';
import type { JobsFile } from '../lib/types';

const MAX_JOBS = 5000;

async function main() {
  const started = Date.now();
  const results = await runAllScrapers();
  for (const r of results) {
    console.log(`${r.ok ? 'OK ' : 'ERR'} ${r.source.padEnd(16)} ${r.count} jobs ${r.error ?? ''}`);
  }
  const raw = results.flatMap((r) => r.jobs);
  const filtered = filterActive(raw);
  const deduped = dedupe(filtered).slice(0, MAX_JOBS);

  const out: JobsFile = {
    generatedAt: new Date().toISOString(),
    count: deduped.length,
    jobs: deduped,
  };

  const outPath = path.join(process.cwd(), 'data', 'jobs.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
  console.log(
    `\nWrote ${deduped.length} jobs to ${outPath} in ${Date.now() - started}ms (raw=${raw.length}, filtered=${filtered.length})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
