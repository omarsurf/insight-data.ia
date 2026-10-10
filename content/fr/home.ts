/**
 * home.ts — Contenu français de la page d'accueil.
 * Le texte courant est repris tel quel de SOURCE.md (règle E1), par
 * sélection de phrases entières ; seule la typographie est normalisée.
 * Les titres sont les traductions du lot 1, validées par le fondateur.
 */
import type { HomeContent } from '../types';
import { assessmentIntro, ctaBanner, readiness, vision, whyItems } from './common';

export const home: HomeContent = {
  hero: {
    sloganLines: ['Révélez les', 'informations cachées', 'dans vos données.'],
    subtitle: 'Votre partenaire en transformation digitale, Data Science et Intelligence Artificielle.',
    intro:
      'Nous accompagnons les entreprises dans l’organisation de leurs données, l’amélioration de leurs performances et le développement de solutions intelligentes adaptées à leurs besoins.',
    primaryCta: 'Demander un diagnostic gratuit',
    secondaryCta: 'Découvrir nos solutions',
  },

  problem: {
    label: 'Qui sommes-nous ?',
    title: 'Des données à l’intelligence. De l’intelligence à la performance.',
    paragraphs: [
      'Aujourd’hui, les entreprises produisent et utilisent des informations provenant de nombreuses sources : ERP, fichiers Excel, bases de données, logiciels métier, documents et systèmes opérationnels.',
      'Pourtant, ces données ne sont pas toujours organisées, connectées ou exploitées efficacement.',
      'Nous ne commençons pas par imposer une technologie. Nous commençons par comprendre comment les données peuvent aider l’entreprise à mieux fonctionner.',
    ],
  },

  vision,

  method: {
    label: 'Notre méthodologie',
    title: 'Partir du problème, pas de la technologie.',
    paragraphs: ['Notre approche repose sur cinq étapes.'],
    stepLabel: 'Étape',
    steps: [
      {
        name: 'Découvrir',
        text: 'Nous échangeons avec les équipes pour comprendre l’activité, les processus, les difficultés opérationnelles et les résultats recherchés.',
      },
      {
        name: 'Évaluer',
        text: 'Nous évaluons les systèmes existants, la disponibilité des données, leur qualité et les contraintes techniques et opérationnelles.',
      },
      {
        name: 'Concevoir',
        text: 'Nous définissons l’approche appropriée, les indicateurs de réussite, les ressources nécessaires et une feuille de route adaptée.',
      },
      { name: 'Réaliser', text: 'Nous développons, intégrons et testons les solutions retenues.' },
      {
        name: 'Améliorer',
        text: 'Nous suivons les résultats, identifions les améliorations nécessaires et faisons évoluer les solutions selon les besoins.',
      },
    ],
    link: 'Voir la méthodologie',
  },

  readiness,

  why: {
    label: 'Pourquoi Insight Data & AI ?',
    title: 'La technologie au service d’un objectif clair',
    items: whyItems.map((item) => item.title),
    link: 'En savoir plus sur nous',
  },

  assessment: { ...assessmentIntro, cta: ctaBanner.cta },


  closing: ctaBanner,
};
