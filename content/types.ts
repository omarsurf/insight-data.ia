/**
 * types.ts — Forme du contenu des pages, commune aux deux langues.
 * Chaque langue fournit un objet de ces types : une traduction incomplète
 * fait échouer la compilation (PRD, section 9.2).
 */
import type { SolutionId } from '@/lib/solutions';

/** En-tête d'une section : étiquette mono, titre, paragraphes d'introduction. */
export interface SectionIntro {
  label: string;
  title: string;
  paragraphs?: string[];
}

export interface TitledText {
  title: string;
  text: string;
}

export interface HomeContent {
  hero: {
    /** Le slogan, découpé en lignes d'affichage. */
    sloganLines: string[];
    subtitle: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: SectionIntro;
  vision: SectionIntro & {
    stations: { id: SolutionId; name: string; title: string; text: string }[];
    note: string;
  };
  method: SectionIntro & {
    stepLabel: string;
    steps: { name: string; text: string }[];
    link: string;
  };
  readiness: SectionIntro & {
    /** Trois situations, chacune avec son type de trait d'en-tête. */
    cases: (TitledText & { stroke: 'solid' | 'dashed' | 'short' })[];
  };
  why: SectionIntro & { items: string[]; link: string };
  assessment: SectionIntro & { includesTitle: string; items: TitledText[]; cta: string };
  closing: { title: string; paragraphs: string[]; cta: string };
}
