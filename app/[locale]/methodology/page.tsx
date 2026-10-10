/**
 * page.tsx — Page « Méthodologie ».
 * Les cinq étapes en frise, puis la maturité des données et l'engagement
 * de faisabilité (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { ConditionNote } from '@/components/blocks';
import { CtaBanner } from '@/components/cta-banner';
import { MethodTimeline } from '@/components/method-timeline';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { Readiness } from '@/components/readiness';
import { Section } from '@/components/section';
import { getCtaContent, getMethodologyContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/methodology' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('methodology'));
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const content = getMethodologyContent(locale);
  const cta = getCtaContent(locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    const t = await getTranslations('pages');
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('methodology')} />
      </PageShell>
    );
  }

  const { commitment } = content;

  return (
    <PageShell route={route}>
      <PageBody label={content.intro.label} title={content.intro.title}>
        <div className="grid gap-6">
          {content.intro.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="t-lead max-w-[68ch]">{paragraph}</p>
          ))}
        </div>
        <MethodTimeline steps={content.steps} stepLabel={content.stepLabel} />
        <p className="max-w-[68ch] text-ink-muted">{content.outro}</p>
      </PageBody>

      <Readiness content={content.readiness} />

      <Section intro={{ label: commitment.label, title: commitment.title }} id="commitment-title">
        <div className="grid gap-8">
          <p className="t-lead max-w-[68ch]">{commitment.opening}</p>
          <ConditionNote label={commitment.conditionLabel} text={commitment.condition} />
          <p className="max-w-[68ch]">{commitment.closing}</p>
        </div>
      </Section>

      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
