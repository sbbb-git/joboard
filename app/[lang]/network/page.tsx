import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { NETWORK_SITES, NETWORK_I18N, type NetworkSite } from '@/lib/network-sites';
import { Breadcrumb } from '@/components/Breadcrumb';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = NETWORK_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'network',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

const GROUP_ORDER: NetworkSite['category'][] = ['jobs', 'tools', 'business'];

export default function NetworkPage({ params }: { params: { lang: Locale } }) {
  const c = NETWORK_I18N[params.lang];

  const crumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: c.eyebrow, url: absoluteUrl(`/${params.lang}/network`) },
  ]);

  return (
    <div className="space-y-10 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <Breadcrumb
        items={[{ label: 'Home', href: localePath(params.lang) }, { label: c.eyebrow }]}
      />

      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl font-normal tracking-tighter text-ink mt-2 leading-tight">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-4">{c.intro}</p>
      </header>

      {GROUP_ORDER.map((group) => {
        const sites = NETWORK_SITES.filter((s) => s.category === group);
        if (sites.length === 0) return null;
        return (
          <section key={group} className="space-y-4">
            <h2 className="font-display text-2xl tracking-tighter text-ink">{c.groups[group]}</h2>
            <ul className="space-y-3">
              {sites.map((site) => (
                <li key={site.key}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener"
                    hrefLang={site.contentLang}
                    className="block rounded-2xl border border-line bg-paper p-5 hover-lift hover:border-ink"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-semibold text-ink">{site.name}</span>
                      <span className="text-xs text-muted">{site.domain}</span>
                      {site.contentLang === 'fr' && params.lang !== 'fr' && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand border border-line text-graphite">
                          {c.frenchOnly}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-graphite mt-2">{c.taglines[site.key]}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
