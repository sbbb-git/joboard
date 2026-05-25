import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LOCALES, isLocale } from '@/lib/i18n';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  return (
    <>
      <Header locale={params.lang} path={`/${params.lang}`} />
      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
      <Footer locale={params.lang} />
    </>
  );
}
