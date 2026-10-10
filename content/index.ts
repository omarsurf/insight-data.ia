/**
 * index.ts — Point d'accès au contenu des pages, par langue.
 * La version anglaise arrive en phase 5 : d'ici là, une page sans contenu
 * dans une langue affiche son titre provisoire.
 */
import type { Locale } from '@/i18n/routing';
import { about as aboutFr } from './fr/about';
import { assessment as assessmentFr } from './fr/assessment';
import { collaboration as collaborationFr } from './fr/collaboration';
import { ctaBanner as ctaBannerFr } from './fr/common';
import { contact as contactFr } from './fr/contact';
import { home as homeFr } from './fr/home';
import { industries as industriesFr } from './fr/industries';
import { methodology as methodologyFr } from './fr/methodology';
import { solutions as solutionsFr } from './fr/solutions';
import type {
  AboutContent,
  AssessmentContent,
  CollaborationContent,
  ContactContent,
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

const assessmentByLocale: Partial<Record<Locale, AssessmentContent>> = { fr: assessmentFr };
const contactByLocale: Partial<Record<Locale, ContactContent>> = { fr: contactFr };

/** Contenu de la page Diagnostic gratuit, s'il existe déjà. */
export function getAssessmentContent(locale: Locale): AssessmentContent | undefined {
  return assessmentByLocale[locale];
}

/** Contenu de la page Contact, s'il existe déjà. */
export function getContactContent(locale: Locale): ContactContent | undefined {
  return contactByLocale[locale];
}
