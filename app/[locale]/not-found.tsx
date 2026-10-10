/**
 * not-found.tsx — Page 404, dans la langue de l'URL.
 * Version provisoire ; la composition du design system (tracé interrompu)
 * arrive en phase 6.
 */
import { getTranslations } from 'next-intl/server';
import { PageShell } from '@/components/page-shell';
import { Link } from '@/components/app-link';

export default async function NotFound() {
  const t = await getTranslations('pages');

  return (
    <PageShell route={{ path: '/' }}>
      <section className="wrap grid gap-6 py-24 lg:py-40">
        <span className="label">404</span>
        <h1 className="t-h1">{t('notFound')}</h1>
        <p><Link href="/" className="underline decoration-accent underline-offset-4 hover:text-accent">{t('backHome')}</Link></p>
      </section>
    </PageShell>
  );
}
