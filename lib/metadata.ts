/**
 * metadata.ts — Métadonnées communes à toutes les pages.
 * Pose le titre, l'URL canonique et les alternatives de langue, dont
 * x-default vers le français (règle L7).
 */
import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { hrefFor, type PageRoute } from './routes';

/** Adresse publique du site ; provisoire tant que le domaine n'est pas choisi. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

/**
 * Construit les métadonnées d'une page.
 * @param route Page concernée.
 * @param locale Langue de la page.
 * @param title Titre de la page, sans le nom du site.
 */
export function buildMetadata(route: PageRoute, locale: Locale, title: string): Metadata {
  const urlIn = (target: Locale) => getPathname({ href: hrefFor(route, target), locale: target });
  const languages = Object.fromEntries(routing.locales.map((target) => [target, urlIn(target)]));

  return {
    title,
    alternates: {
      canonical: urlIn(locale),
      languages: { ...languages, 'x-default': urlIn(routing.defaultLocale) },
    },
  };
}
