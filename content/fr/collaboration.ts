/**
 * collaboration.ts — Contenu français de la page Collaboration.
 * Texte repris tel quel de la section 07 de SOURCE.md (règle E1). Les
 * titres sont les traductions du lot 4, validées par le fondateur ;
 * « Data & AI » y reste tel quel, à sa demande.
 */
import type { CollaborationContent } from '../types';

export const collaboration: CollaborationContent = {
  intro: {
    label: 'Nos modalités de collaboration',
    title: 'Des services flexibles. Des solutions évolutives.',
    paragraphs: [
      'Nous collaborons avec des entreprises ayant des besoins et des niveaux de maturité numérique différents.',
      'Nous pouvons intervenir sur un projet précis, accompagner une transformation progressive ou développer une plateforme intégrée.',
    ],
  },
  items: [
    {
      title: 'Conseil Data & AI',
      text: 'Diagnostic, études de faisabilité, analyse des données et accompagnement dans la définition des priorités.',
    },
    {
      title: 'Développement de projets sur mesure',
      text: 'Conception et développement de solutions répondant à une problématique particulière.',
    },
    {
      title: 'Plateformes Data & AI intégrées',
      text: 'Développement de plateformes réunissant intégration de données, tableaux de bord, analyses, automatisations et applications d’intelligence artificielle.',
    },
    {
      title: 'Accompagnement continu et évolution',
      text: 'Maintenance, supervision, amélioration et évolution des solutions déployées.',
    },
  ],
  outro: [
    'Les modalités de collaboration peuvent prendre la forme d’un projet ponctuel, de plusieurs phases successives ou d’un abonnement de services.',
    'Nos solutions peuvent évoluer à mesure que les besoins changent, que les données s’améliorent et que de nouvelles possibilités apparaissent.',
  ],
};
