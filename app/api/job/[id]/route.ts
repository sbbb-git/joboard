import { NextResponse } from 'next/server';
import { jobById } from '@/lib/jobs';

export const dynamic = 'force-static';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const job = jobById(params.id);
  if (!job) return new NextResponse('Not found', { status: 404 });
  return NextResponse.json(job, {
    headers: {
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
