/**
 * page.tsx — Page « Collaboration ».
 * Les quatre modalités de collaboration et les formes d'engagement (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { CtaBanner } from '@/components/cta-banner';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { TitledList } from '@/components/titled-list';
import { getCollaborationContent, getCtaContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/engagement-models' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('collaboration'));
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const content = getCollaborationContent(locale);
  const cta = getCtaContent(locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    const t = await getTranslations('pages');
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('collaboration')} />
      </PageShell>
    );
  }

  return (
    <PageShell route={route}>
      <PageBody label={content.intro.label} title={content.intro.title}>
        <div className="grid gap-6">
          {content.intro.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="t-lead max-w-[68ch]">{paragraph}</p>
          ))}
        </div>
        <TitledList items={content.items} headingLevel={2} />
        <div className="grid gap-6">
          {content.outro.map((paragraph) => (
            <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>
          ))}
        </div>
      </PageBody>
      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
