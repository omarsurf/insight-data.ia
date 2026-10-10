/**
 * common.ts — Contenu français commun à plusieurs pages.
 * Texte repris tel quel des sections 02, 05, 08 et 11 de SOURCE.md ; les
 * titres sont les traductions validées au lot 1.
 */
import type { CtaContent, ReadinessContent, TitledText, VisionContent } from '../types';

export const ctaBanner: CtaContent = {
  title: 'Prêt à révéler le potentiel de vos données ?',
  paragraphs: [
    'Vous souhaitez structurer vos données, améliorer la visibilité sur vos performances, mieux comprendre vos résultats, anticiper certains événements ou automatiser vos processus ?',
    'Commençons par comprendre votre situation et identifier les opportunités les plus pertinentes pour votre entreprise.',
    'Découvrez comment vos données peuvent devenir un véritable levier de performance.',
  ],
  cta: 'Demander un diagnostic gratuit',
};

/** Maturité des données : résumée sur l'accueil, détaillée sur la page Méthodologie. */
export const readiness: ReadinessContent = {
  label: 'Maturité des données et faisabilité',
  title: 'La bonne solution commence par de bonnes fondations',
  paragraphs: [
    'Les possibilités offertes par la Data Science et l’intelligence artificielle dépendent du problème étudié, des données disponibles et des conditions dans lesquelles la solution devra fonctionner.',
    'Nous évaluons ces éléments avant de recommander une technologie avancée.',
  ],
  cases: [
    {
      stroke: 'solid',
      title: 'Quand vos données sont prêtes',
      text: 'Lorsque les données sont suffisamment adaptées à la problématique, nous pouvons étudier le développement d’analyses avancées, de modèles prédictifs ou d’applications d’intelligence artificielle.',
    },
    {
      stroke: 'dashed',
      title: 'Quand vos données doivent être améliorées',
      text: 'Lorsque les données sont dispersées, incomplètes ou insuffisantes, nous pouvons proposer une première phase de structuration, de validation ou d’amélioration de la collecte.',
    },
    {
      stroke: 'short',
      title: 'Quand une solution plus simple convient mieux',
      text: 'Certaines problématiques peuvent être résolues plus efficacement par un tableau de bord, une analyse statistique ou une automatisation fondée sur des règles, sans développer de modèle complexe.',
    },
  ],
};

/** La vision : résumée par la scène de l'accueil, reprise en entier sur la page À propos. */
export const vision: VisionContent = {
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
};

/** Les sept arguments : titres seuls sur l'accueil, titres et textes sur la page À propos. */
export const whyItems: TitledText[] = [
  {
    title: 'Une approche orientée métier',
    text: 'Nous commençons par comprendre les besoins opérationnels avant de choisir les technologies.',
  },
  {
    title: 'Des compétences de bout en bout',
    text: 'Nous pouvons intervenir de la collecte et de l’organisation des données jusqu’à l’analyse, à l’automatisation et au développement d’applications intelligentes.',
  },
  {
    title: 'Des décisions fondées sur les données',
    text: 'Nous combinons Business Intelligence, statistiques, analyse causale et Machine Learning lorsque ces méthodes sont adaptées à la problématique.',
  },
  {
    title: 'Une infrastructure flexible',
    text: 'Nous étudions les architectures locales, cloud ou hybrides selon les besoins et les contraintes de chaque entreprise.',
  },
  {
    title: 'La faisabilité avant la complexité',
    text: 'Nous évaluons les prérequis et les possibilités de réalisation avant d’engager un développement avancé.',
  },
  {
    title: 'Des solutions évolutives',
    text: 'Nous privilégions des approches progressives qui évoluent avec les besoins et les ressources de chaque entreprise.',
  },
  {
    title: 'Sécurité et confidentialité',
    text: 'Nous prenons en compte la confidentialité, la gestion des accès et les exigences de sécurité dans la conception des projets.',
  },
];
