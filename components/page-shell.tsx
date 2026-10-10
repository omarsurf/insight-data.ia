/**
 * page-shell.tsx — Enveloppe commune à toutes les pages.
 * Lien d'évitement, en-tête, contenu principal et pied de page. Chaque page
 * lui indique sa route, ce qui permet au sélecteur de langue de mener à la
 * page équivalente.
 */
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import type { PageRoute } from '@/lib/routes';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export async function PageShell({ route, children }: { route: PageRoute; children: ReactNode }) {
  const t = await getTranslations('site');

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-base focus:bg-accent focus:px-4 focus:py-3 focus:font-medium focus:text-canvas"
      >
        {t('skip')}
      </a>
      <SiteHeader route={route} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter route={route} />
    </>
  );
}
