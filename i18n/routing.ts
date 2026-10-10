/**
 * routing.ts — Configuration des langues et des URL.
 * Une seule source pour les langues, la langue par défaut et la traduction
 * des chemins (PRD, sections 5.1 et 6.1). Les noms internes des routes sont
 * en anglais ; chaque langue a son propre chemin public.
 */
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  // Chaque URL porte son préfixe de langue (règle L1).
  localePrefix: 'always',
  // Aucun cookie de préférence de langue (règle L2).
  localeCookie: false,
  // Les alternatives de langue sont posées dans les métadonnées de chaque
  // page, car les slugs des solutions diffèrent d'une langue à l'autre.
  alternateLinks: false,
  pathnames: {
    '/': '/',
    '/solutions': '/solutions',
    '/solutions/[slug]': '/solutions/[slug]',
    '/methodology': { fr: '/methodologie', en: '/methodology' },
    '/industries': { fr: '/secteurs', en: '/industries' },
    '/engagement-models': { fr: '/collaboration', en: '/engagement-models' },
    '/about': { fr: '/a-propos', en: '/about' },
    '/assessment': { fr: '/diagnostic', en: '/assessment' },
    '/contact': '/contact',
    '/legal-notice': { fr: '/mentions-legales', en: '/legal-notice' },
    '/privacy': { fr: '/confidentialite', en: '/privacy' },
  },
});

export type Locale = (typeof routing.locales)[number];
