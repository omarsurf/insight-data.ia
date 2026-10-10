/**
 * page.tsx — Page « Solutions ».
 * Provisoire en phase 1 : titre seul. Le contenu arrive en phase 2.
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/solutions' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('solutions'));
}

export default async function Page() {
  const t = await getTranslations('pages');

  return (
    <PageShell route={route}>
      <PagePlaceholder title={t('solutions')} />
    </PageShell>
  );
}
