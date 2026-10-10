/**
 * index.ts — Point d'accès au contenu des pages, par langue.
 * La version anglaise arrive en phase 5 : d'ici là, une page sans contenu
 * dans une langue affiche son titre provisoire.
 */
import type { Locale } from '@/i18n/routing';
import { about as aboutFr } from './fr/about';
import { collaboration as collaborationFr } from './fr/collaboration';
import { ctaBanner as ctaBannerFr } from './fr/common';
import { home as homeFr } from './fr/home';
import { industries as industriesFr } from './fr/industries';
import { methodology as methodologyFr } from './fr/methodology';
import { solutions as solutionsFr } from './fr/solutions';
import type {
  AboutContent,
  CollaborationContent,
  CtaContent,
  HomeContent,
  IndustriesContent,
  MethodologyContent,
  SolutionsContent,
} from './types';

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

const methodologyByLocale: Partial<Record<Locale, MethodologyContent>> = { fr: methodologyFr };

/** Contenu de la page Méthodologie, s'il existe déjà. */
export function getMethodologyContent(locale: Locale): MethodologyContent | undefined {
  return methodologyByLocale[locale];
}

const industriesByLocale: Partial<Record<Locale, IndustriesContent>> = { fr: industriesFr };
const collaborationByLocale: Partial<Record<Locale, CollaborationContent>> = { fr: collaborationFr };
const aboutByLocale: Partial<Record<Locale, AboutContent>> = { fr: aboutFr };

/** Contenu de la page Secteurs, s'il existe déjà. */
export function getIndustriesContent(locale: Locale): IndustriesContent | undefined {
  return industriesByLocale[locale];
}

/** Contenu de la page Collaboration, s'il existe déjà. */
export function getCollaborationContent(locale: Locale): CollaborationContent | undefined {
  return collaborationByLocale[locale];
}

/** Contenu de la page À propos, s'il existe déjà. */
export function getAboutContent(locale: Locale): AboutContent | undefined {
  return aboutByLocale[locale];
}
