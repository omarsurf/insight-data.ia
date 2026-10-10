/**
 * common.ts — Contenu français commun à plusieurs pages.
 * Texte repris tel quel des sections 05 et 11 de SOURCE.md ; les titres
 * sont les traductions validées au lot 1.
 */
import type { CtaContent, ReadinessContent } from '../types';

export const ctaBanner: CtaContent = {
  title: 'Prêt à révéler le potentiel de vos données ?',
  paragraphs: [
    'Vous souhaitez structurer vos données, améliorer la visibilité sur vos performances, mieux comprendre vos résultats, anticiper certains événements ou automatiser vos processus ?',
    'Commençons par comprendre votre situation et identifier les opportunités les plus pertinentes pour votre entreprise.',
    'Découvrez comment vos données peuvent devenir un véritable levier de performance.',
  ],
  cta: 'Demander un diagnostic gratuit',
};

/** Maturité des données : résumée sur l'accueil, détaillée sur la page Méthodologie. */
export const readiness: ReadinessContent = {
  label: 'Maturité des données et faisabilité',
  title: 'La bonne solution commence par de bonnes fondations',
  paragraphs: [
    'Les possibilités offertes par la Data Science et l’intelligence artificielle dépendent du problème étudié, des données disponibles et des conditions dans lesquelles la solution devra fonctionner.',
    'Nous évaluons ces éléments avant de recommander une technologie avancée.',
  ],
  cases: [
    {
      stroke: 'solid',
      title: 'Quand vos données sont prêtes',
      text: 'Lorsque les données sont suffisamment adaptées à la problématique, nous pouvons étudier le développement d’analyses avancées, de modèles prédictifs ou d’applications d’intelligence artificielle.',
    },
    {
      stroke: 'dashed',
      title: 'Quand vos données doivent être améliorées',
      text: 'Lorsque les données sont dispersées, incomplètes ou insuffisantes, nous pouvons proposer une première phase de structuration, de validation ou d’amélioration de la collecte.',
    },
    {
      stroke: 'short',
      title: 'Quand une solution plus simple convient mieux',
      text: 'Certaines problématiques peuvent être résolues plus efficacement par un tableau de bord, une analyse statistique ou une automatisation fondée sur des règles, sans développer de modèle complexe.',
    },
  ],
};
