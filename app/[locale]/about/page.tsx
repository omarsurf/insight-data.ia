/**
 * page.tsx — Page « À propos ».
 * Introduction, qui sommes-nous, cycle de la donnée, vision et ses six stations, pourquoi nous, engagement (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { CtaBanner } from '@/components/cta-banner';
import { Trace } from '@/components/glyph';
import { Stations } from '@/components/home/stations';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { Section } from '@/components/section';
import { TitledList } from '@/components/titled-list';
import { getAboutContent, getCtaContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/about' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('about'));
}

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const content = getAboutContent(locale);
  const cta = getCtaContent(locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    const t = await getTranslations('pages');
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('about')} />
      </PageShell>
    );
  }

  const { who, engagement } = content;

  return (
    <PageShell route={route}>
      <PageBody label={content.label} title={content.title}>
        {/* Les quatre paragraphes d'introduction du texte source, en version intégrale */}
        <div className="grid gap-6">
          {content.intro.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 't-lead max-w-[68ch]' : 'max-w-[68ch] text-ink-muted'}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-6">
          {who.paragraphs.map((paragraph) => <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>)}
          <p className="max-w-[68ch]">{who.cycleIntro}</p>
          <ul className="bullets grid gap-1">
            {who.cycle.map((entry) => <li key={entry}>{entry}</li>)}
          </ul>
          {who.closing.map((paragraph) => <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>)}
        </div>
      </PageBody>

      <Section intro={content.vision} id="vision-title">
        <Trace />
        <Stations stations={content.vision.stations} note={content.vision.note} />
        <p className="t-lead max-w-[68ch]">{content.ambition}</p>
      </Section>

      <Section intro={content.why} id="why-title">
        <TitledList items={content.why.items} headingLevel={3} />
      </Section>

      <Section intro={engagement} id="engagement-title">
        <div className="grid gap-6">
          <p className="max-w-[68ch]">{engagement.listIntro}</p>
          <ul className="bullets grid gap-1">
            {engagement.items.map((entry) => <li key={entry}>{entry}</li>)}
          </ul>
          <p className="max-w-[68ch]">{engagement.closing}</p>
        </div>
      </Section>

      {cta && <CtaBanner {...cta} />}
    </PageShell>
  );
}
