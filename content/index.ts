/**
 * index.ts — Point d'accès au contenu des pages, par langue.
 * La version anglaise arrive en phase 5 : d'ici là, une page sans contenu
 * dans une langue affiche son titre provisoire.
 */
import type { Locale } from '@/i18n/routing';
import { home as homeFr } from './fr/home';
import type { HomeContent } from './types';

const homeByLocale: Partial<Record<Locale, HomeContent>> = { fr: homeFr };

/** Contenu de l'accueil dans la langue demandée, s'il existe déjà. */
export function getHomeContent(locale: Locale): HomeContent | undefined {
  return homeByLocale[locale];
}
