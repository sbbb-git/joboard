#!/usr/bin/env node
// Generate a slim search index from data/jobs.json for client-side filtering.
// Strips description (keeps ~50 char excerpt only) to keep payload manageable.
// Output: public/search-index.json (loaded on demand by JobSearch component).

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const data = JSON.parse(await readFile(join(root, 'data', 'jobs.json'), 'utf-8'));

const slim = data.jobs.map((j) => ({
  i: j.id,
  t: j.title,
  c: j.company,
  cs: j.companySlug,
  l: j.location,
  lc: j.locationCountry || null,
  r: j.role,
  s: j.seniority,
  e: j.employmentType,
  sn: j.salaryMin || null,
  sx: j.salaryMax || null,
  cu: j.currency || null,
  p: j.postedAt,
  tg: (j.tags || []).slice(0, 8),
  // 60-char teaser only; full description lives on the job page
  d: (j.description || '').slice(0, 160).replace(/\s+/g, ' '),
}));

const out = {
  generatedAt: data.generatedAt,
  count: slim.length,
  jobs: slim,
};

const dest = join(root, 'public', 'search-index.json');
await writeFile(dest, JSON.stringify(out));
console.log(`Wrote ${dest} (${slim.length} jobs, ${(JSON.stringify(out).length / 1024).toFixed(0)} KB)`);
