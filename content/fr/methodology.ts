/**
 * methodology.ts — Contenu français de la page Méthodologie.
 * Texte repris tel quel des sections 04 et 05 de SOURCE.md (règle E1).
 * Les titres sont les traductions validées au lot 1 ; « Notre engagement »
 * traduit « Our Commitment » (lot 3).
 */
import type { MethodologyContent } from '../types';
import { readiness } from './common';

export const methodology: MethodologyContent = {
  intro: {
    label: 'Notre méthodologie',
    title: 'Partir du problème, pas de la technologie.',
    paragraphs: [
      'Chaque entreprise possède ses propres contraintes, objectifs et ressources. Nous adaptons notre intervention à son contexte plutôt que d’imposer une architecture ou une technologie prédéfinie.',
      'Notre approche repose sur cinq étapes.',
    ],
  },
  stepLabel: 'Étape',
  steps: [
    {
      name: 'Découvrir',
      paragraphs: [
        'Nous échangeons avec les équipes pour comprendre l’activité, les processus, les difficultés opérationnelles et les résultats recherchés.',
      ],
    },
    {
      name: 'Évaluer',
      paragraphs: [
        'Nous évaluons les systèmes existants, la disponibilité des données, leur qualité et les contraintes techniques et opérationnelles.',
      ],
    },
    {
      name: 'Concevoir',
      paragraphs: [
        'Nous définissons l’approche appropriée, les indicateurs de réussite, les ressources nécessaires et une feuille de route adaptée.',
      ],
    },
    {
      name: 'Réaliser',
      paragraphs: [
        'Nous développons, intégrons et testons les solutions retenues.',
        'Pour les projets complexes ou incertains, nous pouvons commencer par un prototype ou une preuve de concept afin d’évaluer la faisabilité avant un déploiement complet.',
      ],
    },
    {
      name: 'Améliorer',
      paragraphs: [
        'Nous suivons les résultats, identifions les améliorations nécessaires et faisons évoluer les solutions selon les besoins.',
      ],
    },
  ],
  outro:
    'Cette démarche permet de progresser étape par étape, de valider les choix importants et de mieux maîtriser les investissements.',
  readiness,
  commitment: {
    label: 'Faisabilité technique',
    title: 'Notre engagement',
    opening: 'Nous privilégions les solutions adaptées aux besoins et aux ressources de l’entreprise.',
    condition:
      'Nous ne garantissons pas à l’avance qu’un modèle atteindra une précision déterminée ni qu’une technologie produira un résultat donné. Les performances doivent être évaluées à partir de données adaptées et selon des critères de réussite définis avec le client.',
    conditionLabel: 'Faisabilité',
    closing: 'Notre rôle est d’identifier ce qui est réalisable, pertinent et utile pour votre activité.',
  },
};
