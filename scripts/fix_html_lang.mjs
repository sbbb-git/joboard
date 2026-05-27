#!/usr/bin/env node
// Post-build pass: patch <html lang="en"> in every prerendered HTML page so
// it matches the actual page locale. Required because Next 14 static export
// forces a single lang in the root layout, but we publish in 7 locales and
// need each page's HTML lang to match its hreflang.

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'out');
const LOCALES = new Set(['en', 'fr', 'es', 'de', 'pt', 'it', 'pl']);

async function walk(dir) {
  const entries = await readdir(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      await walk(full);
    } else if (entry.endsWith('.html')) {
      await patch(full);
    }
  }
}

let patched = 0;
let skipped = 0;

async function patch(file) {
  const rel = file.slice(ROOT.length + 1);
  const seg = rel.split('/')[0];
  // Detect locale either from /{locale}/... structure OR from a file like en.html / fr.html
  let locale = null;
  if (LOCALES.has(seg)) {
    locale = seg;
  } else {
    const m = rel.match(/^(en|fr|es|de|pt|it|pl)\.html$/);
    if (m) locale = m[1];
  }
  if (!locale) {
    skipped++;
    return;
  }
  const html = await readFile(file, 'utf-8');
  const next = html.replace(/<html lang="en"/i, `<html lang="${locale}"`);
  if (next === html) {
    skipped++;
    return;
  }
  await writeFile(file, next);
  patched++;
}

await walk(ROOT);
console.log(`Patched ${patched} pages with localised lang, skipped ${skipped}.`);
