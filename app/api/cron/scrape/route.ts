import { NextResponse } from 'next/server';
import { runAllScrapers } from '@/lib/scrapers';
import { dedupe } from '@/lib/dedupe';
import { filterActive } from '@/lib/filters';
import { commitJobsFile } from '@/lib/github';
import { readJobs } from '@/lib/jobs';
import type { JobsFile } from '@/lib/types';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;
export const runtime = 'nodejs';

const MAX_JOBS = 5000;

export async function GET(req: Request) {
  const auth = req.headers.get('authorization');
  const expected = process.env.CRON_SECRET;
  if (!expected || auth !== `Bearer ${expected}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const started = Date.now();
  const results = await runAllScrapers();
  const raw = results.flatMap((r) => r.jobs);
  const filtered = filterActive(raw);
  const deduped = dedupe(filtered).slice(0, MAX_JOBS);

  const file: JobsFile = {
    generatedAt: new Date().toISOString(),
    count: deduped.length,
    jobs: deduped,
  };

  const prev = readJobs();
  const commit = await commitJobsFile(file, prev);

  return NextResponse.json({
    ok: true,
    durationMs: Date.now() - started,
    sources: results.map((r) => ({
      source: r.source,
      ok: r.ok,
      count: r.count,
      error: r.error,
    })),
    totals: {
      raw: raw.length,
      filtered: filtered.length,
      deduped: deduped.length,
    },
    commit,
  });
}
