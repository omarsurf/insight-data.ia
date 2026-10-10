/**
 * about.ts — Contenu français de la page À propos.
 * Texte repris tel quel de SOURCE.md (règle E1) : l'introduction qui suit
 * le slogan, puis les sections 01, 02, 08 et 10. Les titres sont les
 * traductions des lots 1 et 4, validées par le fondateur.
 */
import type { AboutContent } from '../types';
import { vision, whyItems } from './common';

export const about: AboutContent = {
  label: 'Qui sommes-nous ?',
  title: 'Bâtir des entreprises plus intelligentes, pilotées par la donnée',
  intro: [
    'Nous accompagnons les entreprises dans l’organisation de leurs données, l’amélioration de leurs performances et le développement de solutions intelligentes adaptées à leurs besoins.',
    'De la centralisation des données aux tableaux de bord, des analyses statistiques aux modèles prédictifs, de l’automatisation aux applications d’intelligence artificielle, nous construisons des solutions qui évoluent avec les besoins et la maturité numérique de chaque entreprise.',
    'Notre approche commence par les fondations : des données structurées, fiables et accessibles. Elle peut ensuite évoluer vers des outils d’analyse, de prédiction et d’automatisation lorsque les objectifs et les conditions de réalisation le permettent.',
    'Notre principe : partir des données, comprendre les besoins et choisir les technologies capables de créer une valeur concrète.',
  ],
  who: {
    paragraphs: [
      'Insight Data & AI accompagne les entreprises dans la transformation de leurs données en outils de pilotage, d’analyse et d’aide à la décision.',
      'Aujourd’hui, les entreprises produisent et utilisent des informations provenant de nombreuses sources : ERP, fichiers Excel, bases de données, logiciels métier, documents et systèmes opérationnels.',
      'Pourtant, ces données ne sont pas toujours organisées, connectées ou exploitées efficacement.',
      'Notre mission est de faciliter cette transformation en proposant des solutions adaptées à chaque entreprise, depuis la structuration de ses données jusqu’au développement d’applications avancées de Data Science et d’intelligence artificielle.',
    ],
    cycleIntro: 'Nous intervenons sur l’ensemble du cycle de la donnée :',
    cycle: [
      'Collecte, organisation et intégration.',
      'Centralisation et fiabilisation des informations.',
      'Visualisation et suivi des performances.',
      'Analyse statistique et aide à la décision.',
      'Prévision et Machine Learning.',
      'Automatisation des processus.',
      'Développement d’applications d’intelligence artificielle.',
    ],
    closing: [
      'Nous travaillons avec des entreprises issues de différents secteurs d’activité. Nos interventions dépendent de la nature des besoins, des données disponibles, de leur qualité, des infrastructures existantes et des objectifs recherchés.',
      'Nous ne commençons pas par imposer une technologie. Nous commençons par comprendre comment les données peuvent aider l’entreprise à mieux fonctionner.',
    ],
  },
  vision,
  ambition:
    'Notre ambition est de construire des solutions utiles, évolutives et adaptées à la réalité opérationnelle de chaque entreprise.',
  why: {
    label: 'Pourquoi Insight Data & AI ?',
    title: 'La technologie au service d’un objectif clair',
    items: whyItems,
  },
  engagement: {
    label: 'Notre engagement',
    title: 'Des solutions concrètes. Des progrès mesurables.',
    paragraphs: [
      'Nous considérons la digitalisation et l’intelligence artificielle comme des moyens d’améliorer les performances, et non comme des objectifs en soi.',
      'Notre priorité est de comprendre les besoins, d’évaluer les possibilités et de développer des solutions adaptées aux réalités de chaque entreprise.',
    ],
    listIntro: 'Nous privilégions :',
    items: [
      'Des problématiques clairement définies.',
      'Des données évaluées avant leur exploitation avancée.',
      'Des objectifs de réussite convenus avec le client.',
      'Des investissements progressifs.',
      'Des résultats évalués selon des critères définis.',
      'Des solutions capables d’évoluer avec les besoins.',
    ],
    closing:
      'Nous ne recommandons pas une technologie simplement parce qu’elle existe. Nous l’étudions lorsqu’elle apporte une réponse pertinente et que les conditions de sa mise en œuvre sont réunies.',
  },
};
