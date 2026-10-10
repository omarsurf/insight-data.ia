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
  closing: CtaContent;
}

/** Bandeau d'appel au diagnostic, commun à plusieurs pages. */
export interface CtaContent {
  title: string;
  paragraphs: string[];
  cta: string;
}

/** Une liste de capacités, avec son intitulé et, parfois, un titre et du texte autour. */
export interface CapabilityGroup {
  /** Titre de sous-section ; présent seulement sur la page du domaine 06. */
  title?: string;
  intro?: string[];
  label: string;
  items: string[];
  /** Paragraphes qui suivent la liste. */
  notes?: string[];
  /** Mise en garde de faisabilité, affichée en note conditionnelle. */
  condition?: string;
}

/** Contenu de la page d'un domaine de solutions. */
export interface SolutionContent {
  id: SolutionId;
  title: string;
  /** Question d'accroche. */
  hook: string;
  paragraphs: string[];
  capabilityGroups: CapabilityGroup[];
  example: string[];
  goal: string;
  /** Bloc sur l'approche de faisabilité ; page du domaine 04 seulement. */
  feasibility?: { title: string; intro: string[]; items: string[]; condition: string };
}

/** Contenu de la page Solutions et des six pages de domaine. */
export interface SolutionsContent {
  intro: SectionIntro;
  labels: {
    discover: string;
    example: string;
    feasibility: string;
    breadcrumb: string;
    previous: string;
    next: string;
  };
  items: SolutionContent[];
}
