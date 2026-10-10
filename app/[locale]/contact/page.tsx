/**
 * page.tsx — Page « Contact ».
 * Texte de la section 11 du texte source, coordonnées et formulaire court
 * (PRD, section 6.3). Les coordonnées attendent le fondateur ; le
 * formulaire arrive en phase 4.
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { FormPlaceholder } from '@/components/form-placeholder';
import { PageBody } from '@/components/page-header';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { getContactContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/contact' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('contact'));
}

export default async function Page() {
  const content = getContactContent((await getLocale()) as Locale);
  const t = await getTranslations('pages');

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('contact')} />
      </PageShell>
    );
  }

  return (
    <PageShell route={route}>
      <PageBody label={content.label} title={content.title}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid content-start gap-6">
            {content.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 't-lead' : 'text-ink-muted'}>{paragraph}</p>
            ))}
          </div>
          <FormPlaceholder title={t('formContact')} />
        </div>
      </PageBody>
    </PageShell>
  );
}
