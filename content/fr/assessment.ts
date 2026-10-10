/**
 * assessment.ts — Contenu français de la page Diagnostic gratuit.
 * Texte repris tel quel de la section 09 de SOURCE.md (règle E1). Les
 * titres rédigés en anglais dans la source sont les traductions du lot 5.
 * Le formulaire lui-même arrive en phase 4.
 */
import type { AssessmentContent } from '../types';
import { assessmentIntro } from './common';

export const assessment: AssessmentContent = {
  intro: assessmentIntro,
  receive: {
    title: 'Que recevrez-vous ?',
    intro: 'À l’issue du diagnostic initial, l’entreprise reçoit une synthèse comprenant :',
    items: [
      'Les principaux constats.',
      'Les difficultés identifiées.',
      'Les opportunités d’amélioration.',
      'Les solutions envisageables.',
      'Une première appréciation de faisabilité.',
      'Les données ou ressources complémentaires éventuellement nécessaires.',
      'Une proposition de feuille de route.',
    ],
  },
  process: {
    title: 'Comment cela se passe-t-il ?',
    steps: [
      {
        title: 'Parlez-nous de votre activité',
        text: 'Décrivez votre activité, vos outils et les principaux défis que vous souhaitez résoudre.',
      },
      { title: 'Identifier vos priorités', text: 'Nous étudions les opportunités qui correspondent à vos besoins.' },
      {
        title: 'Évaluer la faisabilité initiale',
        text: 'Nous examinons les premières conditions de réalisation à partir des informations disponibles.',
      },
      {
        title: 'Recevoir votre première feuille de route',
        text: 'Vous recevez une synthèse des solutions envisageables et des prochaines étapes recommandées.',
      },
    ],
  },
  scope: {
    label: 'Périmètre',
    text: 'Le diagnostic gratuit porte sur un périmètre initial défini conjointement. Les analyses approfondies, les intégrations complexes, les prototypes et les développements font l’objet d’une mission distincte.',
  },
  closing: 'Commencez par un diagnostic gratuit de maturité Data & AI.',
};
