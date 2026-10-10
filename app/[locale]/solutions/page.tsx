/**
 * page.tsx — Page « Solutions ».
 * Introduction de l'offre et six cartes, une par domaine (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { CtaBanner } from '@/components/cta-banner';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { SolutionCard } from '@/components/solutions/solution-card';
import { getCtaContent, getSolutionsContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import { hrefFor, type PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/solutions' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('solutions'));
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const content = getSolutionsContent(locale);
  const cta = getCtaContent(locale);
  const t = await getTranslations();

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('pages.solutions')} />
      </PageShell>
    );
  }

  return (
    <PageShell route={route}>
      <PageBody label={content.intro.label} title={content.intro.title}>
        {content.intro.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="t-lead max-w-[68ch]">{paragraph}</p>
        ))}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {content.items.map((item) => (
            <SolutionCard
              key={item.id}
              id={item.id}
              href={hrefFor({ solutionId: item.id }, locale)}
              name={t(`solutions.${item.id}`)}
              hook={item.hook}
              action={content.labels.discover}
            />
          ))}
        </div>
      </PageBody>
      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
