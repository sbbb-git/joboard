import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') || 'Remote tech jobs').slice(0, 120);
  const subtitle = (searchParams.get('subtitle') || 'refreshed daily').slice(0, 80);
  const tag = (searchParams.get('tag') || '').slice(0, 30);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background: '#fafaf8',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: '#1f7a4d',
            }}
          />
          <span style={{ fontSize: 28, color: '#111113', fontWeight: 600 }}>
            slateremote<span style={{ color: '#1f7a4d' }}>.com</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {tag && (
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#1f7a4d',
                background: '#e6f3ec',
                alignSelf: 'flex-start',
                padding: '6px 14px',
                borderRadius: 999,
              }}
            >
              {tag}
            </div>
          )}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#111113',
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, color: '#5b5b63' }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, color: '#5b5b63' }}>
          <span>Remote tech jobs · refreshed every day</span>
          <span>slateremote.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
