/**
 * page.tsx — Page d'accueil.
 * Résume l'offre en huit sections et renvoie vers les pages détaillées
 * (PRD, section 6.3).
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { CtaBanner } from '@/components/cta-banner';
import { Hero } from '@/components/home/hero';
import { AssessmentPreview, MethodPreview, WhyUs } from '@/components/home/sections';
import { Scene } from '@/components/home/scene';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { Readiness } from '@/components/readiness';
import { Section } from '@/components/section';
import { getHomeContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('home'));
}

export default async function Page() {
  const content = getHomeContent((await getLocale()) as Locale);

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    const t = await getTranslations('pages');
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('home')} />
      </PageShell>
    );
  }

  return (
    <PageShell route={route}>
      <Hero content={content.hero} />
      <Section intro={content.problem} id="problem-title" />
      <Section intro={content.vision} id="vision-title" />
      <Scene stations={content.vision.stations} note={content.vision.note} labelledBy="vision-title" />
      <MethodPreview content={content.method} />
      <Readiness content={content.readiness} />
      <WhyUs content={content.why} />
      <AssessmentPreview content={content.assessment} />
      <CtaBanner {...content.closing} />
    </PageShell>
  );
}
