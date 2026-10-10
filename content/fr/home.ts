/**
 * home.ts — Contenu français de la page d'accueil.
 * Le texte courant est repris tel quel de SOURCE.md (règle E1), par
 * sélection de phrases entières ; seule la typographie est normalisée.
 * Les titres sont les traductions du lot 1, validées par le fondateur.
 */
import type { HomeContent } from '../types';
import { ctaBanner, readiness } from './common';

export const home: HomeContent = {
  hero: {
    sloganLines: ['Révélez les', 'informations cachées', 'dans vos données.'],
    subtitle: 'Votre partenaire en transformation digitale, Data Science et Intelligence Artificielle.',
    intro:
      'Nous accompagnons les entreprises dans l’organisation de leurs données, l’amélioration de leurs performances et le développement de solutions intelligentes adaptées à leurs besoins.',
    primaryCta: 'Demander un diagnostic gratuit',
    secondaryCta: 'Découvrir nos solutions',
  },

  problem: {
    label: 'Qui sommes-nous ?',
    title: 'Des données à l’intelligence. De l’intelligence à la performance.',
    paragraphs: [
      'Aujourd’hui, les entreprises produisent et utilisent des informations provenant de nombreuses sources : ERP, fichiers Excel, bases de données, logiciels métier, documents et systèmes opérationnels.',
      'Pourtant, ces données ne sont pas toujours organisées, connectées ou exploitées efficacement.',
      'Nous ne commençons pas par imposer une technologie. Nous commençons par comprendre comment les données peuvent aider l’entreprise à mieux fonctionner.',
    ],
  },

  vision: {
    label: 'Notre vision',
    title: 'Des données dispersées à l’intelligence opérationnelle',
    paragraphs: [
      'Chaque entreprise dispose d’informations qui peuvent contribuer à améliorer ses performances : ventes, achats, production, coûts, stocks, qualité, maintenance, logistique ou relation client.',
      'Notre vision consiste à rendre ces informations plus utiles grâce à une démarche progressive.',
    ],
    stations: [
      {
        id: '01',
        name: 'Connecter',
        title: 'Organiser et connecter les données',
        text: 'Rassembler les informations pertinentes issues des systèmes existants et construire une base fiable pour leur exploitation.',
      },
      {
        id: '02',
        name: 'Visualiser',
        title: 'Rendre les performances visibles',
        text: 'Transformer les données en indicateurs, tableaux de bord et rapports compréhensibles.',
      },
      {
        id: '03',
        name: 'Comprendre',
        title: 'Comprendre les résultats',
        text: 'Analyser les performances, identifier les tendances et étudier les facteurs susceptibles d’influencer les résultats.',
      },
      {
        id: '04',
        name: 'Prévoir',
        title: 'Anticiper certains événements',
        text: 'Développer des méthodes statistiques et des modèles prédictifs lorsque les données permettent d’obtenir des résultats suffisamment fiables.',
      },
      {
        id: '05',
        name: 'Automatiser',
        title: 'Simplifier les opérations',
        text: 'Automatiser les tâches répétitives, les rapports, les alertes et certains processus métier.',
      },
      {
        id: '06',
        name: 'Innover',
        title: 'Développer de nouvelles capacités',
        text: 'Étudier et intégrer des solutions avancées de Machine Learning, de vision par ordinateur et d’intelligence artificielle générative lorsque leur utilisation est pertinente.',
      },
    ],
    note: 'Cette progression représente une démarche de développement, et non un parcours obligatoire. Une entreprise peut commencer par n’importe quelle étape si ses données, son infrastructure et ses besoins le permettent.',
  },

  method: {
    label: 'Notre méthodologie',
    title: 'Partir du problème, pas de la technologie.',
    paragraphs: ['Notre approche repose sur cinq étapes.'],
    stepLabel: 'Étape',
    steps: [
      {
        name: 'Découvrir',
        text: 'Nous échangeons avec les équipes pour comprendre l’activité, les processus, les difficultés opérationnelles et les résultats recherchés.',
      },
      {
        name: 'Évaluer',
        text: 'Nous évaluons les systèmes existants, la disponibilité des données, leur qualité et les contraintes techniques et opérationnelles.',
      },
      {
        name: 'Concevoir',
        text: 'Nous définissons l’approche appropriée, les indicateurs de réussite, les ressources nécessaires et une feuille de route adaptée.',
      },
      { name: 'Réaliser', text: 'Nous développons, intégrons et testons les solutions retenues.' },
      {
        name: 'Améliorer',
        text: 'Nous suivons les résultats, identifions les améliorations nécessaires et faisons évoluer les solutions selon les besoins.',
      },
    ],
    link: 'Voir la méthodologie',
  },

  readiness,

  why: {
    label: 'Pourquoi Insight Data & AI ?',
    title: 'La technologie au service d’un objectif clair',
    items: [
      'Une approche orientée métier',
      'Des compétences de bout en bout',
      'Des décisions fondées sur les données',
      'Une infrastructure flexible',
      'La faisabilité avant la complexité',
      'Des solutions évolutives',
      'Sécurité et confidentialité',
    ],
    link: 'En savoir plus sur nous',
  },

  assessment: {
    label: 'Diagnostic gratuit',
    title: 'Découvrez le potentiel numérique de votre entreprise',
    paragraphs: [
      'Vous souhaitez mieux exploiter vos données, améliorer vos performances ou explorer les possibilités de l’intelligence artificielle, mais vous ne savez pas par où commencer ?',
      'Nous proposons un premier diagnostic gratuit et sans engagement pour identifier les opportunités et les premières pistes d’amélioration.',
    ],
    includesTitle: 'Que comprend le diagnostic ?',
    items: [
      {
        title: 'Évaluation de l’infrastructure de données',
        text: 'Premier examen de l’organisation des données et des systèmes existants.',
      },
      {
        title: 'Contrôle de la qualité des données',
        text: 'Évaluation ciblée de la disponibilité et de la qualité des données à partir d’un échantillon convenu, lorsque cela est possible.',
      },
      {
        title: 'Évaluation de la maturité numérique',
        text: 'Identification des principaux besoins en matière de digitalisation et d’organisation des informations.',
      },
      {
        title: 'Évaluation de la faisabilité IA',
        text: 'Identification des applications potentielles de Data Science, de Machine Learning, de Computer Vision et d’intelligence artificielle.',
      },
      {
        title: 'Identification des opportunités métier',
        text: 'Priorisation des opportunités selon leur intérêt potentiel, leur faisabilité et les ressources nécessaires.',
      },
    ],
    cta: 'Demander un diagnostic gratuit',
  },

  closing: ctaBanner,
};
