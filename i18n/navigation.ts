/**
 * navigation.ts — Chemins traduits.
 * Donne l'URL publique d'une page dans une langue. Pour un lien, utiliser
 * le composant Link de components/app-link.tsx.
 */
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { getPathname } = createNavigation(routing);

/** Destination interne valide : un chemin connu, avec ses paramètres s'il en a. */
export type AppHref = Parameters<typeof getPathname>[0]['href'];
