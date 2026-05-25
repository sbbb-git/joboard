import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink font-sans antialiased flex items-center justify-center px-5">
        <div className="max-w-md text-center space-y-5">
          <p className="text-xs uppercase tracking-wider text-muted">Error 404</p>
          <h1 className="text-3xl font-semibold">This page is not in our index.</h1>
          <p className="text-muted text-sm">
            The job posting may have expired, or the URL is mistyped. Our index refreshes every
            day from eight public job board APIs.
          </p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Link
              href="/en"
              className="px-4 py-2 bg-ink text-cream rounded text-sm hover:opacity-90"
            >
              Go to homepage
            </Link>
            <Link
              href="/en/jobs"
              className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
            >
              Browse all jobs
            </Link>
            <Link
              href="/en/skills"
              className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
            >
              By skill
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
