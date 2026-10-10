/**
 * page.tsx — Page « Secteurs ».
 * Les six secteurs d'intervention, l'avertissement de faisabilité et la phrase de conclusion (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { ConditionNote } from '@/components/blocks';
import { CtaBanner } from '@/components/cta-banner';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { TitledList } from '@/components/titled-list';
import { getCtaContent, getIndustriesContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/industries' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('industries'));
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const content = getIndustriesContent(locale);
  const cta = getCtaContent(locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    const t = await getTranslations('pages');
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('industries')} />
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
        <div className="grid gap-6">
          <p className="label">{content.listIntro}</p>
          <TitledList items={content.items} headingLevel={2} />
        </div>
        <ConditionNote label={content.condition.label} text={content.condition.text} />
        <p className="t-h2 font-bold">{content.closing}</p>
      </PageBody>
      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
