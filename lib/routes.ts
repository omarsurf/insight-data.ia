/**
 * routes.ts — Description d'une page du site, indépendante de la langue.
 * Sert à calculer le lien de la même page dans l'autre langue et les
 * alternatives de langue des métadonnées.
 */
import type { AppHref } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { solutions, type SolutionId } from './solutions';

/** Chemins internes des pages sans paramètre. */
export type StaticPath =
  | '/'
  | '/solutions'
  | '/methodology'
  | '/industries'
  | '/engagement-models'
  | '/about'
  | '/assessment'
  | '/contact'
  | '/legal-notice'
  | '/privacy';

/** Une page : soit un chemin fixe, soit la page d'un domaine de solutions. */
export type PageRoute = { path: StaticPath } | { solutionId: SolutionId };

/** Donne la destination d'une page dans la langue demandée. */
export function hrefFor(route: PageRoute, locale: Locale): AppHref {
  if ('path' in route) return route.path;
  const solution = solutions.find((item) => item.id === route.solutionId)!;
  return { pathname: '/solutions/[slug]', params: { slug: solution.slug[locale] } };
}
