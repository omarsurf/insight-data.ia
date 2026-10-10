/**
 * contact.ts — Contenu français de la page Contact.
 * Texte repris tel quel de la section 11 de SOURCE.md (règle E1) ; les
 * titres sont les traductions des lots 1 et 5. Les coordonnées et le
 * formulaire arrivent respectivement avec les informations du fondateur
 * et en phase 4.
 */
import type { ContactContent } from '../types';
import { ctaBanner } from './common';

export const contact: ContactContent = {
  label: 'Construisons votre avenir piloté par la donnée',
  title: ctaBanner.title,
  paragraphs: ctaBanner.paragraphs,
};
