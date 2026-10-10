/**
 * industries.ts — Contenu français de la page Secteurs.
 * Texte repris tel quel de la section 06 de SOURCE.md (règle E1). Les
 * titres sont les traductions du lot 4, validées par le fondateur ;
 * « Data & AI » y reste tel quel, à sa demande.
 */
import type { IndustriesContent } from '../types';

export const industries: IndustriesContent = {
  intro: {
    label: 'Nos secteurs d’intervention',
    title: 'Des solutions Data & AI pour différents secteurs',
    paragraphs: [
      'Nous pouvons accompagner des entreprises issues de différents secteurs d’activité dès lors que leurs besoins, leurs données et leurs infrastructures permettent d’étudier et de mettre en œuvre une solution pertinente.',
      'Notre champ d’intervention n’est pas limité à une industrie particulière. Nous adaptons nos méthodes aux caractéristiques des données et aux objectifs de chaque entreprise.',
    ],
  },
  listIntro: 'Nos interventions peuvent notamment concerner :',
  items: [
    {
      title: 'Opérations et production',
      text: 'Suivi des performances, analyse des processus, contrôle qualité et étude de solutions prédictives.',
    },
    {
      title: 'Chaîne d’approvisionnement et logistique',
      text: 'Structuration des données logistiques, suivi des stocks, analyse des flux et étude des prévisions.',
    },
    {
      title: 'Ventes et activité commerciale',
      text: 'Analyse des ventes, segmentation, suivi des indicateurs commerciaux et prévision de la demande.',
    },
    {
      title: 'Finance et maîtrise des coûts',
      text: 'Analyse des coûts, reporting, suivi des indicateurs financiers et étude de détection d’anomalies.',
    },
    { title: 'Qualité et inspection', text: 'Analyse des défauts, contrôle visuel et exploitation des données de qualité.' },
    {
      title: 'Connaissances et administration',
      text: 'Automatisation des tâches, recherche documentaire intelligente et assistants internes.',
    },
  ],
  condition: {
    label: 'Faisabilité',
    text: 'Ces exemples illustrent des possibilités d’application. La faisabilité de chaque projet est évaluée selon les données disponibles, les objectifs et les contraintes spécifiques.',
  },
  closing: 'Des secteurs différents. Des défis différents. Une même approche fondée sur les données.',
};
