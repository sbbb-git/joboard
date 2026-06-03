import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-ink font-sans antialiased flex items-center justify-center px-5">
        <div className="max-w-md text-center space-y-5">
          <p className="text-xs uppercase tracking-wider text-muted">Error 404</p>
          <h1 className="text-3xl font-semibold">Page not found</h1>
          <p className="text-muted text-sm">
            This page does not exist. The job posting may have expired, or the URL is mistyped.
            Our index refreshes every day from eight public job board APIs.
          </p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Link
              href="/en"
              className="px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
            >
              Go home
            </Link>
            <Link
              href="/en/jobs"
              className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
            >
              Browse remote jobs
            </Link>
            <Link
              href="/en/guides"
              className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
            >
              Read guides
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
