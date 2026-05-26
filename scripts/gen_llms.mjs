#!/usr/bin/env node
// Generate llms.txt (index) and llms-full.txt (full content) at the site root
// for AI assistants and language models that want a low-friction way to
// understand and cite the site without crawling thousands of pages.
// Format ref: https://llmstxt.org/

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://slateremote.com';

async function readTs(rel) {
  return readFile(join(ROOT, rel), 'utf-8');
}

// Inline parsers (avoid bundling: read the TS files as text and extract data
// blocks we control). The objects are simple data, so a JSON-like extraction
// works without an actual ts loader.
function extractArray(src, exportName) {
  // Matches: export const NAME[: Type] = [ ... ];
  const re = new RegExp(`export const ${exportName}[^=]*=\\s*\\[`);
  const m = src.match(re);
  if (!m) return '';
  const start = m.index + m[0].length - 1; // include [
  let depth = 0;
  let end = start;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  let combined = src.slice(start, end);
  // Also pick up items appended via NAME.push( ... ) calls
  const pushRe = new RegExp(`${exportName}\\.push\\s*\\(`, 'g');
  let pm;
  while ((pm = pushRe.exec(src))) {
    const pStart = pm.index + pm[0].length - 1; // include (
    let pDepth = 0;
    let pEnd = pStart;
    for (let i = pStart; i < src.length; i++) {
      const c = src[i];
      if (c === '(') pDepth++;
      else if (c === ')') {
        pDepth--;
        if (pDepth === 0) {
          pEnd = i;
          break;
        }
      }
    }
    combined += src.slice(pStart + 1, pEnd);
  }
  return combined;
}

function objects(arrayText, fields) {
  // Naive object splitter: find { … } blocks at top depth
  const out = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < arrayText.length; i++) {
    const c = arrayText[i];
    if (c === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (c === '}') {
      depth--;
      if (depth === 0 && start >= 0) {
        const block = arrayText.slice(start, i + 1);
        const o = {};
        for (const f of fields) {
          const re = new RegExp(`${f}\\s*:\\s*('|"|\`)([\\s\\S]*?)\\1`, 'm');
          const mm = block.match(re);
          if (mm) o[f] = mm[2];
        }
        out.push(o);
        start = -1;
      }
    }
  }
  return out;
}

const guidesSrc = await readTs('lib/guides.ts');
const guides = objects(extractArray(guidesSrc, 'GUIDES'), [
  'slug',
  'title',
  'description',
  'category',
  'body',
]);

const citiesSrc = await readTs('lib/cities.ts');
const cities = objects(extractArray(citiesSrc, 'CITIES'), [
  'slug',
  'name',
  'country',
  'blurb',
  'bodyEn',
]);

const skillsSrc = await readTs('lib/skills.ts');
const skills = objects(extractArray(skillsSrc, 'SKILLS'), [
  'slug',
  'name',
  'category',
  'blurb',
  'bodyEn',
]);

const glossarySrc = await readTs('lib/glossary.ts');
const glossary = objects(extractArray(glossarySrc, 'GLOSSARY'), [
  'slug',
  'term',
  'category',
  'short',
  'long',
]);

const comparisonsSrc = await readTs('lib/comparisons.ts');
const comparisons = objects(extractArray(comparisonsSrc, 'COMPARISONS'), [
  'slug',
  'title',
  'description',
  'body',
]);

// llms.txt: the lightweight index
const indexParts = [
  '# slateremote.com',
  '',
  '> A curated index of remote tech jobs aggregated daily from eight public job board APIs, with salary data computed live, city profiles, and long-form guides for remote engineers.',
  '',
  'slateremote.com indexes engineering, data, design and product jobs that are explicitly remote. The index refreshes every day from Remotive, RemoteOK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse and the Hacker News "Who is hiring" thread. The site is free, has no signup, and links every listing directly to the employer\'s own application page. It is published in seven languages (English, French, Spanish, German, Portuguese, Italian, Polish) and is part of a small network with slowmadly.com (slow-travel country guides) and ai-by-job.com (AI tools curated by job role).',
  '',
  '## Primary indexes',
  '',
  `- [All remote tech jobs](${SITE}/en/jobs): full filterable list (role, country, seniority, contract type, minimum salary)`,
  `- [Salaries by role](${SITE}/en/salaries/developer): median and percentile salary bands computed live from posted ranges`,
  `- [Cities for remote tech workers](${SITE}/en/cities): ${cities.length} cities profiled with cost, internet, visa, timezone`,
  `- [Skills index](${SITE}/en/skills): ${skills.length} languages, frameworks, clouds, data, AI/ML, mobile and web3 tags`,
  `- [Companies](${SITE}/en/companies): every company currently posting remote tech jobs, grouped by active openings`,
  `- [Guides](${SITE}/en/guides): ${guides.length} long-form guides on finding remote work, salary, visas, taxes, lifestyle and tools`,
  `- [Compare](${SITE}/en/compare): ${comparisons.length} head-to-head comparisons (remote vs hybrid, Lisbon vs Barcelona, Portugal D8 vs Spain DNV, etc.)`,
  `- [Glossary](${SITE}/en/glossary): ${glossary.length} remote work terms (RTO, EOR, async, DNV, RSU, slowmad, etc.)`,
  '',
  '## Guides',
  '',
  ...guides.map((g) => `- [${g.title}](${SITE}/en/guides/${g.slug}): ${g.description}`),
  '',
  '## Cities',
  '',
  ...cities.map((c) => `- [${c.name}, ${c.country}](${SITE}/en/cities/${c.slug}): ${c.blurb}`),
  '',
  '## Comparisons',
  '',
  ...comparisons.map((c) => `- [${c.title}](${SITE}/en/compare/${c.slug}): ${c.description}`),
  '',
  '## Sister sites',
  '',
  '- [slowmadly.com](https://slowmadly.com): country guides for digital nomads who stay a while',
  '- [ai-by-job.com](https://ai-by-job.com): the best AI tools for every job, in seven languages',
  '',
  '## Optional',
  '',
  `- [Full content dump for ingestion](${SITE}/llms-full.txt): every guide, city profile, skill description, glossary entry and comparison concatenated as plain text`,
  `- [Sitemap](${SITE}/sitemap.xml): machine-readable list of all URLs`,
  `- [RSS feed (jobs)](${SITE}/feed.xml): jobs feed if available`,
  `- [About the site](${SITE}/en/about): methodology, data sources, and update cadence`,
  '',
];

await writeFile(join(ROOT, 'public', 'llms.txt'), indexParts.join('\n'));
console.log('Wrote public/llms.txt');

// llms-full.txt: ingestion-friendly dump with full bodies
function unescape(s) {
  return s ? s.replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`') : '';
}

const fullParts = [
  '# slateremote.com · full content for language model ingestion',
  '',
  '> This is the long-form text body of every guide, city profile, skill description, glossary entry and comparison published on slateremote.com. The data is the same the human-facing pages render, concatenated here as plain text so language models can ingest it in a single document without crawling.',
  '',
  '---',
  '',
  '# Guides',
  '',
];

for (const g of guides) {
  fullParts.push(`## ${g.title}`);
  fullParts.push('');
  fullParts.push(`*${g.description}* — category: ${g.category}`);
  fullParts.push('');
  fullParts.push(unescape(g.body));
  fullParts.push('');
  fullParts.push(`Source: ${SITE}/en/guides/${g.slug}`);
  fullParts.push('');
  fullParts.push('---');
  fullParts.push('');
}

fullParts.push('# City profiles');
fullParts.push('');
for (const c of cities) {
  fullParts.push(`## ${c.name}, ${c.country}`);
  fullParts.push('');
  fullParts.push(`*${c.blurb}*`);
  fullParts.push('');
  fullParts.push(unescape(c.bodyEn));
  fullParts.push('');
  fullParts.push(`Source: ${SITE}/en/cities/${c.slug}`);
  fullParts.push('');
  fullParts.push('---');
  fullParts.push('');
}

fullParts.push('# Skill briefings');
fullParts.push('');
for (const s of skills) {
  fullParts.push(`## ${s.name} (${s.category})`);
  fullParts.push('');
  fullParts.push(`*${s.blurb}*`);
  fullParts.push('');
  fullParts.push(unescape(s.bodyEn));
  fullParts.push('');
  fullParts.push(`Source: ${SITE}/en/skills/${s.slug}`);
  fullParts.push('');
  fullParts.push('---');
  fullParts.push('');
}

fullParts.push('# Comparisons');
fullParts.push('');
for (const c of comparisons) {
  fullParts.push(`## ${c.title}`);
  fullParts.push('');
  fullParts.push(`*${c.description}*`);
  fullParts.push('');
  fullParts.push(unescape(c.body));
  fullParts.push('');
  fullParts.push(`Source: ${SITE}/en/compare/${c.slug}`);
  fullParts.push('');
  fullParts.push('---');
  fullParts.push('');
}

fullParts.push('# Glossary');
fullParts.push('');
for (const g of glossary) {
  fullParts.push(`## ${g.term}`);
  fullParts.push('');
  fullParts.push(`${g.short}`);
  fullParts.push('');
  fullParts.push(unescape(g.long));
  fullParts.push('');
  fullParts.push(`Source: ${SITE}/en/glossary#${g.slug}`);
  fullParts.push('');
}

await writeFile(join(ROOT, 'public', 'llms-full.txt'), fullParts.join('\n'));
console.log('Wrote public/llms-full.txt');
console.log(
  `  ${guides.length} guides · ${cities.length} cities · ${skills.length} skills · ${comparisons.length} comparisons · ${glossary.length} glossary terms`,
);
