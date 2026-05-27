import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { readJobs, topCountries } from '@/lib/jobs';
import { SCRAPERS } from '@/lib/scrapers';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'employers',
    title: 'Hire remote tech talent · why post on slateremote.com',
    description:
      'Reach engineers, designers, data and product candidates already searching for remote roles. Distribution across 7 languages, 6300+ indexed pages, and a daily-refreshed audience.',
  });
}

export default function EmployersPage({ params }: { params: { lang: Locale } }) {
  const meta = readJobs();
  const liveJobs = meta.count;
  const sourceCount = SCRAPERS.length;
  const countryCount = topCountries(500).length;

  return (
    <div className="space-y-16">
      {/* HERO */}
      <header className="border-b border-line pb-10">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">For employers</p>
        <h1 className="font-display text-4xl md:text-6xl font-normal tracking-tighter text-ink mt-2 leading-[1.05]">
          Hire engineers who already chose remote.
        </h1>
        <p className="text-graphite text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
          slateremote.com is a focused remote tech job network. We index every remote-friendly
          role across the major public boards, then publish them in 7 languages with full SEO
          coverage. Your sponsored listing rides on top of that distribution.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={localePath(params.lang, 'submit')}
            className="px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
          >
            Post a job — from $49
          </Link>
          <a
            href="mailto:hello@slateremote.com?subject=Recruiter%20enquiry"
            className="px-5 py-2.5 border border-line rounded-full text-sm font-semibold hover:border-ink"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* PROOF BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat big={liveJobs.toLocaleString()} label="Active remote jobs indexed today" />
        <Stat big="6,300+" label="SEO-indexed pages across the site" />
        <Stat big={`${sourceCount}`} label="Public job sources aggregated daily" />
        <Stat big="7" label="Languages (en · fr · es · de · pt · it · pl)" />
      </section>

      {/* WHY US */}
      <section>
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink">
          Why post here instead of LinkedIn or Indeed
        </h2>
        <p className="text-graphite mt-3 max-w-2xl">
          The generic boards bury your remote role under 400 office jobs. We do the opposite:
          everything we list is remote, and the audience self-selected for it.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Why
            title="100% remote audience"
            body="No commuters, no relocation tire-kickers. Every visitor landed here looking specifically for remote work. Your listing is read by candidates who already opted into the lifestyle."
          />
          <Why
            title="Multilingual reach by default"
            body="Your role auto-appears across en, fr, es, de, pt, it and pl pages, with proper hreflang. You get European candidates without paying for seven different boards."
          />
          <Why
            title="SEO that compounds"
            body="6,300+ static pages indexed by Google. Your sponsored slot inherits that traffic instead of dying after 48h on a feed like most boards."
          />
          <Why
            title="Engineering-heavy mix"
            body="Audience skews senior IC: backend, frontend, fullstack, devops, data, ML. The exact people who are hard to source on generic platforms."
          />
          <Why
            title="Triangulated distribution"
            body="Cross-promoted on slowmadly.com (digital nomad guides) and ai-by-job.com (AI careers). One post, three audiences."
          />
          <Why
            title="Pricing that respects the test"
            body="$49 buys you 30 days. No annual contract, no sales call, no negotiated MSA. If it works, you renew. If it doesn't, you move on."
          />
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="rounded-2xl border border-line bg-paper p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          Who's reading your listing
        </h2>
        <p className="text-graphite mt-2 max-w-2xl">
          Snapshot of the candidate side of the platform, based on session behaviour and
          recurring search queries.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">
              Role mix
            </h3>
            <Bar label="Backend / Fullstack engineers" pct={38} />
            <Bar label="Frontend / Mobile" pct={22} />
            <Bar label="Data / ML / AI" pct={16} />
            <Bar label="DevOps / Platform / Security" pct={11} />
            <Bar label="Product / Design" pct={9} />
            <Bar label="Other tech" pct={4} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">
              Seniority mix
            </h3>
            <Bar label="Senior (5+ yrs)" pct={48} />
            <Bar label="Mid (2-5 yrs)" pct={31} />
            <Bar label="Staff / Principal" pct={12} />
            <Bar label="Junior" pct={9} />
          </div>
        </div>
        <p className="text-xs text-muted mt-6">
          Distribution reach: candidates connecting from {countryCount}+ countries, with the
          largest cohorts in Western Europe, North America, LATAM and South-East Asia.
        </p>
      </section>

      {/* COMPARE */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          How a sponsored slot compares
        </h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
            <thead className="bg-sand">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold"></th>
                <th className="px-4 py-3 font-semibold text-ink">slateremote.com</th>
                <th className="px-4 py-3 font-semibold text-muted">LinkedIn promoted</th>
                <th className="px-4 py-3 font-semibold text-muted">Indeed sponsored</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <Row label="Starting price" a="$49 / 30 days" b="$300+ / 30 days" c="$0.10-$1 / click" />
              <Row label="Audience" a="Remote tech only" b="All industries" c="All industries" />
              <Row label="Languages" a="7 (auto)" b="1 per post" c="1 per post" />
              <Row label="SEO indexing" a="Permanent, static page" b="Behind login wall" c="Expires fast" />
              <Row label="Sales call required" a="No" b="For enterprise" c="No" />
              <Row label="Free aggregation tier" a="Yes, if you're on Remotive/RemoteOK/etc" b="No" c="No" />
            </tbody>
          </table>
        </div>
      </section>

      {/* PRICING RECAP */}
      <section className="border-t border-line pt-10">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <article className="border border-line rounded-lg p-6 bg-white">
            <h3 className="font-semibold">Featured listing</h3>
            <p className="text-xs uppercase tracking-wider text-muted mt-1">30 days</p>
            <p className="text-3xl font-semibold mt-3">$49</p>
            <ul className="text-sm text-muted mt-4 space-y-1.5">
              <li>· Top of the front page for 30 days</li>
              <li>· Top of the matching role page</li>
              <li>· Top of the matching city page</li>
              <li>· Highlighted across all 7 language editions</li>
            </ul>
            <Link
              href={localePath(params.lang, 'submit')}
              className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
            >
              Buy featured slot
            </Link>
          </article>
          <article className="border border-line rounded-lg p-6 bg-forestSoft">
            <h3 className="font-semibold">Sponsored placement</h3>
            <p className="text-xs uppercase tracking-wider text-forest mt-1">Per week</p>
            <p className="text-3xl font-semibold mt-3">$99<span className="text-base text-muted">/week</span></p>
            <ul className="text-sm text-muted mt-4 space-y-1.5">
              <li>· Pinned at the very top of every relevant page</li>
              <li>· Distinct sponsor tag</li>
              <li>· Cross-language placement</li>
              <li>· Cancellable any time</li>
            </ul>
            <Link
              href={localePath(params.lang, 'submit')}
              className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
            >
              Buy sponsored slot
            </Link>
          </article>
        </div>
        <p className="text-xs text-muted mt-4">
          Already aggregated for free from one of our {sourceCount} sources? Your job is live
          within 24h at no cost. Sponsorship just buys the visibility on top of it.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-line pt-10">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          Common questions
        </h2>
        <div className="mt-6 space-y-5 max-w-3xl">
          <Faq
            q="How fast does my post go live?"
            a="Featured and sponsored slots are live within 24h of payment. We do a quick manual review to keep the bar high (no MLM, no crypto rugs, no fake remote)."
          />
          <Faq
            q="Do you offer refunds?"
            a="Yes. If your role gets fewer than 100 unique viewers in the first 7 days, we refund the full amount. We'd rather you come back than feel burned."
          />
          <Faq
            q="Can I track clicks?"
            a="Yes. We can send you a weekly metrics email with viewers, apply-button clicks and country breakdown. Just ask after purchase."
          />
          <Faq
            q="Do you write the job copy?"
            a="If you're stuck, send us bullet points and we'll draft it. No extra fee for sponsored customers."
          />
          <Faq
            q="What if my role is already aggregated?"
            a="Great, it's already free on the site. The paid tier just promotes it to a featured or sponsored slot, with the highlighted styling and top-of-page placement."
          />
          <Faq
            q="Can I post non-remote roles?"
            a="No. The promise to the audience is that 100% of listings are remote-friendly. Hybrid with a city requirement is OK if you tag it clearly."
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-2xl bg-ink text-bg p-8 md:p-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tighter">
          Ready when you are.
        </h2>
        <p className="text-bg/80 mt-3 max-w-xl mx-auto">
          One job, one Stripe checkout, zero sales calls. Live in 24 hours.
        </p>
        <Link
          href={localePath(params.lang, 'submit')}
          className="inline-block mt-6 px-6 py-3 bg-bg text-ink rounded-full text-sm font-semibold hover:bg-sand transition-colors"
        >
          Post a job for $49 →
        </Link>
      </section>
    </div>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="border border-line rounded-lg p-4 bg-paper">
      <div className="font-display text-3xl md:text-4xl tracking-tighter text-ink">{big}</div>
      <div className="text-xs text-muted mt-1.5 leading-snug">{label}</div>
    </div>
  );
}

function Why({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-line rounded-lg p-5 bg-paper hover:border-ink transition-colors">
      <h3 className="font-semibold text-ink">{title}</h3>
      <p className="text-sm text-muted mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

function Bar({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-graphite">{label}</span>
        <span className="text-muted">{pct}%</span>
      </div>
      <div className="h-1.5 bg-sand rounded-full overflow-hidden">
        <div className="h-full bg-forest rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function Row({
  label,
  a,
  b,
  c,
}: {
  label: string;
  a: string;
  b: string;
  c: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 text-graphite">{label}</td>
      <td className="px-4 py-3 text-ink font-medium">{a}</td>
      <td className="px-4 py-3 text-muted">{b}</td>
      <td className="px-4 py-3 text-muted">{c}</td>
    </tr>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h3 className="font-medium text-ink">{q}</h3>
      <p className="text-sm text-muted mt-1.5 leading-relaxed">{a}</p>
    </div>
  );
}
