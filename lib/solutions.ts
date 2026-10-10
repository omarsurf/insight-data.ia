/**
 * solutions.ts — Les six domaines de solutions : identifiant et slugs.
 * L'identifiant stable (01 à 06) relie les deux slugs d'un même domaine ;
 * le sélecteur de langue s'en sert (PRD, section 9.2).
 */
import type { Locale } from '@/i18n/routing';

export type SolutionId = '01' | '02' | '03' | '04' | '05' | '06';

export interface Solution {
  id: SolutionId;
  slug: Record<Locale, string>;
}

export const solutions: readonly Solution[] = [
  { id: '01', slug: { fr: 'organiser-connecter-donnees', en: 'organize-connect-data' } },
  { id: '02', slug: { fr: 'visualiser-piloter-performance', en: 'visualize-monitor-performance' } },
  { id: '03', slug: { fr: 'analyser-comprendre', en: 'analyze-understand' } },
  { id: '04', slug: { fr: 'prevoir-anticiper', en: 'predict-anticipate' } },
  { id: '05', slug: { fr: 'automatiser-integrer', en: 'automate-integrate' } },
  { id: '06', slug: { fr: 'innover-intelligence-artificielle', en: 'innovate-with-ai' } },
];

/** Retrouve un domaine par son slug dans une langue donnée. */
export function findSolutionBySlug(slug: string, locale: Locale): Solution | undefined {
  return solutions.find((solution) => solution.slug[locale] === slug);
}
