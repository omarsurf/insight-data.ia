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
  vision: VisionContent;
  method: SectionIntro & {
    stepLabel: string;
    steps: { name: string; text: string }[];
    link: string;
  };
  readiness: ReadinessContent;
  why: SectionIntro & { items: string[]; link: string };
  assessment: AssessmentIntro & { cta: string };
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

/** Maturité des données : trois situations, chacune avec son type de trait d'en-tête. */
export interface ReadinessContent extends SectionIntro {
  cases: (TitledText & { stroke: 'solid' | 'dashed' | 'short' })[];
}

/** Contenu de la page Méthodologie. */
export interface MethodologyContent {
  intro: SectionIntro;
  stepLabel: string;
  steps: { name: string; paragraphs: string[] }[];
  outro: string;
  readiness: ReadinessContent;
  commitment: {
    label: string;
    title: string;
    opening: string;
    /** Phrase de non-garantie, affichée en note conditionnelle. */
    condition: string;
    conditionLabel: string;
    closing: string;
  };
}

/** La vision : le parcours en six stations et la mention qui l'accompagne. */
export interface VisionContent extends SectionIntro {
  stations: { id: SolutionId; name: string; title: string; text: string }[];
  note: string;
}

/** Contenu de la page Secteurs. */
export interface IndustriesContent {
  intro: SectionIntro;
  listIntro: string;
  items: TitledText[];
  /** Avertissement de faisabilité, affiché en note conditionnelle. */
  condition: { label: string; text: string };
  closing: string;
}

/** Contenu de la page Collaboration. */
export interface CollaborationContent {
  intro: SectionIntro;
  items: TitledText[];
  outro: string[];
}

/** Contenu de la page À propos. */
export interface AboutContent {
  label: string;
  title: string;
  /** Les quatre paragraphes qui suivent le slogan dans le texte source. */
  intro: string[];
  who: { paragraphs: string[]; cycleIntro: string; cycle: string[]; closing: string[] };
  vision: VisionContent;
  ambition: string;
  why: SectionIntro & { items: TitledText[] };
  engagement: SectionIntro & { listIntro: string; items: string[]; closing: string };
}

/** Présentation du diagnostic : introduction et ses cinq volets. */
export interface AssessmentIntro extends SectionIntro {
  includesTitle: string;
  items: TitledText[];
}

/** Contenu de la page Diagnostic gratuit, hors formulaire. */
export interface AssessmentContent {
  intro: AssessmentIntro;
  receive: { title: string; intro: string; items: string[] };
  process: { title: string; steps: TitledText[] };
  /** Périmètre du diagnostic, affiché en note conditionnelle. */
  scope: { label: string; text: string };
  closing: string;
}

/** Contenu de la page Contact, hors coordonnées et formulaire. */
export interface ContactContent {
  label: string;
  title: string;
  paragraphs: string[];
}
