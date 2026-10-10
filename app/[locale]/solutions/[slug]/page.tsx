/**
 * page.tsx — Page d'un domaine de solutions (gabarit commun aux six).
 * Provisoire en phase 1 : numéro et nom du domaine. Le slug de l'URL est
 * propre à chaque langue ; l'identifiant du domaine relie les deux.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import { findSolutionBySlug, solutions } from '@/lib/solutions';

type Props = PageProps<'/[locale]/solutions/[slug]'>;

/** Les six slugs de la langue en cours. */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  return solutions.map((solution) => ({ slug: solution.slug[params.locale as Locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = findSolutionBySlug(slug, locale as Locale);
  if (!solution) return {};

  const t = await getTranslations('solutions');
  return buildMetadata({ solutionId: solution.id }, locale as Locale, t(solution.id));
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const solution = findSolutionBySlug(slug, locale as Locale);
  if (!solution) notFound();

  const t = await getTranslations('solutions');

  return (
    <PageShell route={{ solutionId: solution.id }}>
      <PagePlaceholder label={solution.id} title={t(solution.id)} />
    </PageShell>
  );
}
