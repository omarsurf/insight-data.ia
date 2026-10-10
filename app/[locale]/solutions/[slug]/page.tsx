/**
 * page.tsx — Page d'un domaine de solutions (gabarit commun aux six).
 * Fil d'Ariane, titre, accroche, présentation, capacités, exemple, objectif
 * et navigation entre domaines (PRD, section 6.3). Le slug de l'URL est
 * propre à chaque langue ; l'identifiant du domaine relie les deux.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { ConditionNote, ExampleBlock, Goal } from '@/components/blocks';
import { CtaBanner } from '@/components/cta-banner';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { TraceBreadcrumb } from '@/components/solutions/breadcrumb';
import { CapabilityList } from '@/components/solutions/capability-list';
import { SolutionNav } from '@/components/solutions/solution-nav';
import { getCtaContent, getSolutionsContent } from '@/content';
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
  const name = t(solution.id);
  const route = { solutionId: solution.id };
  const content = getSolutionsContent(locale as Locale);
  const item = content?.items.find((entry) => entry.id === solution.id);
  const cta = getCtaContent(locale as Locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content || !item) {
    return (
      <PageShell route={route}>
        <PagePlaceholder label={solution.id} title={name} />
      </PageShell>
    );
  }

  const { labels } = content;

  return (
    <PageShell route={route}>
      <PageBody label={solution.id} title={name}>
        <TraceBreadcrumb current={solution.id} label={labels.breadcrumb} />

        <div className="grid gap-6">
          <p className="t-h2 font-bold">{item.title}</p>
          <p className="t-lead max-w-[68ch]">{item.hook}</p>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-[68ch] text-ink-muted">{paragraph}</p>
          ))}
        </div>

        {item.capabilityGroups.map((group) => (
          <CapabilityList key={group.label} group={group} conditionLabel={labels.feasibility} />
        ))}

        <ExampleBlock label={labels.example} paragraphs={item.example} />
        <Goal text={item.goal} />

        {item.feasibility && (
          <div className="grid gap-6">
            <h2 className="t-h2">{item.feasibility.title}</h2>
            {item.feasibility.intro.map((paragraph) => <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>)}
            <ul className="bullets grid gap-1">
              {item.feasibility.items.map((entry) => <li key={entry}>{entry}</li>)}
            </ul>
            <ConditionNote label={labels.feasibility} text={item.feasibility.condition} />
          </div>
        )}

        <SolutionNav current={solution.id} previousLabel={labels.previous} nextLabel={labels.next} />
      </PageBody>
      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
