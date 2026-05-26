interface Faq {
  q: string;
  a: string;
}

const FAQS: Faq[] = [
  {
    q: 'How often is the index updated?',
    a: 'Every day at 04:00 UTC. A scheduled job pulls fresh listings from eight public job board APIs, dedupes them, removes spam and expired entries, and rebuilds the site.',
  },
  {
    q: 'Where do the jobs come from?',
    a: 'Eight public sources: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, and Hacker News "Who is hiring". We only pull from documented public APIs.',
  },
  {
    q: 'Is it free to browse?',
    a: 'Yes. Browsing every job, salary page, city profile and guide is free, with no signup required. Employers can pay for featured placement; candidates never pay.',
  },
  {
    q: 'How do you compute the salary numbers?',
    a: 'Live from postings that publish a salary range. Each posting contributes the midpoint of its band. Percentile values come from the sorted distribution. Currency conversion is not applied; each currency is computed in isolation.',
  },
  {
    q: 'How do I apply to a job?',
    a: 'Every listing links directly to the employer\'s own application page. We do not collect applications, do not intermediate, and never sell your data.',
  },
  {
    q: 'Can I get email alerts when matching jobs are posted?',
    a: 'Newsletter signup is live for weekly digests. Granular per-criteria email alerts (specific role, country, salary minimum) are in the roadmap.',
  },
  {
    q: 'How do I post a job?',
    a: 'If your job is already listed on any of the eight source boards, it lands here automatically within 24 hours at no cost. For featured placement, see the Post a job page.',
  },
];

export function HomeFaq() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">FAQ</p>
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink mt-1">
          Frequently asked questions
        </h2>
      </div>
      <div className="space-y-3">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="group rounded-xl border border-line bg-paper shadow-soft open:shadow-lift transition"
          >
            <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-semibold text-ink">
              <span>{f.q}</span>
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-line flex items-center justify-center text-[11px] text-muted group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="px-5 pb-4 text-sm text-graphite leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
