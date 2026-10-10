/**
 * index.ts — Point d'accès au contenu des pages, par langue.
 * La version anglaise arrive en phase 5 : d'ici là, une page sans contenu
 * dans une langue affiche son titre provisoire.
 */
import type { Locale } from '@/i18n/routing';
import { ctaBanner as ctaBannerFr } from './fr/common';
import { home as homeFr } from './fr/home';
import { solutions as solutionsFr } from './fr/solutions';
import type { CtaContent, HomeContent, SolutionsContent } from './types';

const homeByLocale: Partial<Record<Locale, HomeContent>> = { fr: homeFr };

/** Contenu de l'accueil dans la langue demandée, s'il existe déjà. */
export function getHomeContent(locale: Locale): HomeContent | undefined {
  return homeByLocale[locale];
}

const solutionsByLocale: Partial<Record<Locale, SolutionsContent>> = { fr: solutionsFr };
const ctaByLocale: Partial<Record<Locale, CtaContent>> = { fr: ctaBannerFr };

/** Contenu de la page Solutions et des six domaines, s'il existe déjà. */
export function getSolutionsContent(locale: Locale): SolutionsContent | undefined {
  return solutionsByLocale[locale];
}

/** Contenu du bandeau d'appel au diagnostic, s'il existe déjà. */
export function getCtaContent(locale: Locale): CtaContent | undefined {
  return ctaByLocale[locale];
}
