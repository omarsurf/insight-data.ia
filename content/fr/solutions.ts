/**
 * solutions.ts — Contenu français de la page Solutions et des six domaines.
 * Le texte courant est repris tel quel de la section 03 de SOURCE.md
 * (règle E1). Les titres et les lignes de liste rédigés en anglais dans la
 * source sont les traductions du lot 2, validées par le fondateur ; trois
 * termes y restent en anglais à sa demande : Data Pipelines, Data
 * Warehousing et Predictive Insights.
 */
import type { SolutionsContent } from '../types';

export const solutions: SolutionsContent = {
  intro: {
    label: 'Nos solutions',
    title: 'Six façons de révéler le potentiel de vos données',
    paragraphs: [
      'Nous organisons notre offre autour de six domaines complémentaires. Chaque domaine répond à des besoins précis et peut être mobilisé indépendamment ou intégré dans une solution plus complète.',
    ],
  },

  labels: {
    discover: 'Découvrir',
    example: 'Exemple d’application',
    feasibility: 'Faisabilité',
    breadcrumb: 'Les six domaines du parcours',
    previous: 'Domaine précédent',
    next: 'Domaine suivant',
  },

  items: [
    {
      id: '01',
      title: 'Bâtir un socle de données fiable',
      hook: 'Vos données sont dispersées entre plusieurs fichiers et systèmes ?',
      paragraphs: [
        'Avant d’analyser les performances ou de développer des solutions prédictives, il est souvent nécessaire de structurer les données et de faciliter leur exploitation.',
        'Nous aidons les entreprises à organiser leurs informations, connecter leurs sources de données et mettre en place une infrastructure adaptée à leurs besoins.',
      ],
      capabilityGroups: [
        {
          label: 'Nos solutions',
          items: [
            'Intégration des ERP et logiciels métier',
            'Connexion des fichiers Excel et des bases de données',
            'Architecture de données et conception de bases de données',
            'Nettoyage des données et suivi de leur qualité',
            'Data Pipelines — ETL/ELT',
            'Centralisation et historisation des données',
            'Data Warehousing',
            'Solutions cloud, sur site et hybrides',
            'Gestion des accès et gouvernance des données',
            'Validation automatisée des informations',
          ],
        },
      ],
      example: [
        'Une entreprise utilise plusieurs fichiers Excel et un ERP pour gérer ses opérations. Nous étudions les possibilités de connecter ces sources, d’harmoniser les informations et de construire une base de données commune.',
        'Les utilisateurs autorisés peuvent ensuite exploiter les informations depuis des outils adaptés, avec un accès à distance lorsque l’architecture et les exigences de sécurité le permettent.',
      ],
      goal: 'Notre objectif : construire une base de données fiable, cohérente, sécurisée et évolutive.',
    },

    {
      id: '02',
      title: 'Transformer les données en visibilité opérationnelle',
      hook: 'Vous souhaitez mieux comprendre les performances de votre entreprise ?',
      paragraphs: [
        'Une fois les données structurées, nous les transformons en indicateurs de performance, tableaux de bord et rapports permettant de suivre les activités.',
        'Nous concevons des outils adaptés aux besoins des dirigeants, des responsables opérationnels et des équipes métier.',
      ],
      capabilityGroups: [
        {
          label: 'Nos solutions',
          items: [
            'Tableaux de bord interactifs',
            'Business Intelligence',
            'Conception et suivi des KPI',
            'Analyse de la performance de l’entreprise',
            'Analyse de la production et des coûts',
            'Analyse des stocks et de la chaîne logistique',
            'Reporting commercial et financier',
            'Visualisation de données',
            'Rapports automatisés',
            'Suivi de la performance opérationnelle',
          ],
        },
      ],
      example: [
        'Une entreprise souhaite suivre régulièrement son chiffre d’affaires, ses coûts, ses volumes d’activité et ses stocks.',
        'Nous pouvons concevoir un tableau de bord centralisant les indicateurs essentiels, comparer les performances entre différentes périodes et automatiser la génération de rapports.',
        'Dans une entreprise de production, cela peut également inclure le suivi des rendements, des pertes, du coût par unité produite et de la productivité.',
      ],
      goal: 'Notre objectif : rendre les performances visibles et faciliter le pilotage des activités à partir d’informations cohérentes et actualisées selon les sources disponibles.',
    },

    {
      id: '03',
      title: 'Découvrir ce qui détermine la performance',
      hook: 'Vous constatez des variations de performance sans en comprendre les facteurs ?',
      paragraphs: [
        'Les tableaux de bord montrent ce qui se passe. L’analyse statistique aide à approfondir la compréhension des phénomènes observés.',
        'Nous exploitons les données pour identifier les tendances, étudier les relations entre les variables, comparer des situations et évaluer certaines décisions.',
      ],
      capabilityGroups: [
        {
          label: 'Nos solutions',
          items: [
            'Analyse exploratoire des données — EDA',
            'Statistiques descriptives',
            'Statistiques inférentielles',
            'Tests d’hypothèses statistiques',
            'Analyse de régression',
            'Plans d’expériences',
            'A/B Testing',
            'Inférence causale',
            'Évaluation d’impact',
            'Analyse statistique des processus',
          ],
        },
      ],
      example: [
        'Une entreprise constate une augmentation de ses coûts ou une baisse de sa productivité.',
        'Nous pouvons étudier l’évolution des indicateurs, comparer les périodes et les groupes pertinents et analyser les facteurs associés aux variations observées.',
        'Lorsqu’il s’agit de déterminer si une action précise est réellement responsable d’une amélioration, nous étudions les possibilités d’expérimentation ou d’inférence causale adaptées au contexte.',
        'Une attention particulière est accordée à la distinction entre une association statistique et un effet causal identifiable.',
      ],
      goal: 'Notre objectif : aller au-delà de la simple observation des indicateurs pour mieux comprendre les phénomènes qui influencent les résultats.',
    },

    {
      id: '04',
      title: 'Transformer les données historiques en Predictive Insights',
      hook: 'Vous souhaitez anticiper la demande, améliorer vos prévisions ou détecter certains risques ?',
      paragraphs: [
        'Lorsque les données disponibles sont adaptées au problème, nous pouvons étudier et développer des modèles statistiques et de Machine Learning destinés à produire des estimations ou à anticiper certains événements.',
      ],
      capabilityGroups: [
        {
          label: 'Nos solutions',
          items: [
            'Modélisation prédictive',
            'Prévision de séries temporelles',
            'Modèles de régression',
            'Modèles de classification',
            'Détection d’anomalies',
            'Clustering et segmentation',
            'Prévision de la demande',
            'Prévision de la production',
            'Prédiction des rendements',
            'Maintenance prédictive',
          ],
        },
      ],
      example: [
        'Une entreprise souhaite mieux planifier ses stocks à partir de ses historiques de ventes, de commandes et d’approvisionnement.',
        'Nous évaluons la disponibilité et la qualité des historiques, les éventuels effets saisonniers et les autres facteurs pertinents avant de choisir une méthode de prévision.',
        'Selon le problème, une approche statistique simple peut être suffisante. Dans d’autres situations, un modèle de Machine Learning peut être pertinent.',
      ],
      goal: 'Notre objectif : développer des outils prédictifs qui améliorent la planification et l’anticipation lorsque les données et les conditions opérationnelles le permettent.',
      feasibility: {
        title: 'La faisabilité d’abord',
        intro: [
          'Nous ne présumons pas que toutes les entreprises disposent déjà des données nécessaires à la modélisation.',
          'Avant de développer un modèle, nous évaluons notamment :',
        ],
        items: [
          'La disponibilité des données nécessaires.',
          'Leur qualité et leur représentativité.',
          'L’existence d’un historique suffisant pour l’analyse envisagée.',
          'La pertinence des variables disponibles.',
          'Les performances requises pour l’utilisation prévue.',
          'Les possibilités de validation sur des données adaptées.',
        ],
        condition:
          'Si les données sont insuffisantes, nous pouvons étudier les moyens de les compléter, d’améliorer leur collecte ou de commencer par une solution analytique plus simple.',
      },
    },

    {
      id: '05',
      title: 'Réduire le travail manuel. Améliorer l’efficacité.',
      hook: 'Vos équipes consacrent trop de temps à des tâches répétitives ?',
      paragraphs: [
        'Nous concevons des solutions permettant d’automatiser certains traitements, de connecter les applications existantes et d’améliorer la circulation des informations.',
      ],
      capabilityGroups: [
        {
          label: 'Nos solutions',
          items: [
            'Automatisation des workflows',
            'Intégration des ERP et des applications',
            'Collecte automatisée des données',
            'Traitements de données planifiés',
            'Rapports Excel et PDF automatisés',
            'Automatisation des e-mails et des notifications',
            'Alertes sur la qualité des données',
            'Workflows de validation',
            'Intégrations par API',
            'Agents IA et intégration d’outils',
          ],
        },
      ],
      example: [
        'Une entreprise reçoit régulièrement des fichiers contenant des informations opérationnelles.',
        'Un workflow peut récupérer les fichiers autorisés, contrôler certains champs, alimenter une base de données, actualiser les indicateurs et générer un rapport.',
        'Si des informations sont manquantes, le système peut envoyer une notification au responsable concerné.',
        'Selon le processus, une automatisation fondée sur des règles peut suffire. Un agent IA peut être étudié lorsque le traitement nécessite davantage d’interprétation ou d’adaptation.',
      ],
      goal: 'Notre objectif : réduire les interventions manuelles, améliorer la traçabilité et rendre les processus plus fluides.',
    },

    {
      id: '06',
      title: 'Ouvrir de nouvelles possibilités grâce à l’IA',
      hook: 'Vous souhaitez exploiter de nouvelles possibilités grâce à la vision par ordinateur ou à l’intelligence artificielle générative ?',
      paragraphs: [
        'Nous étudions et développons des solutions avancées adaptées aux besoins de l’entreprise, à ses données et à ses contraintes opérationnelles.',
        'Ce domaine couvre notamment la vision par ordinateur, les assistants intelligents, les systèmes de recherche documentaire et les applications fondées sur des modèles de langage.',
      ],
      capabilityGroups: [
        {
          title: 'Vision par ordinateur industrielle',
          intro: ['Nous pouvons étudier le développement de systèmes capables d’exploiter des images et des vidéos.'],
          label: 'Nos compétences couvrent',
          items: [
            'Détection d’objets',
            'Classification d’images',
            'Segmentation d’instances et segmentation sémantique',
            'Suivi d’objets',
            'Estimation de pose',
            'Détection visuelle d’anomalies',
            'Traitement d’images',
            'Analyse vidéo industrielle',
          ],
          notes: [
            'Les applications possibles comprennent le comptage automatique, l’inspection visuelle, la détection de défauts et l’analyse de certaines opérations.',
            'Lorsque cela est nécessaire, le projet peut inclure la définition du dispositif de capture, la collecte des images, leur annotation, la préparation des datasets, l’entraînement et l’évaluation du modèle.',
          ],
          condition:
            'La faisabilité dépend notamment des conditions de capture, de la représentativité des images, de la nature du phénomène à détecter et des performances requises.',
        },
        {
          title: 'IA générative et systèmes de connaissance d’entreprise',
          intro: [
            'Nous développons également des applications permettant d’exploiter les documents, les connaissances et les informations internes d’une entreprise.',
          ],
          label: 'Nos solutions peuvent comprendre',
          items: [
            'Assistants IA d’entreprise',
            'Génération augmentée par la recherche — RAG',
            'Recherche documentaire intelligente',
            'Bases de connaissances d’entreprise',
            'Extraction d’informations dans les documents',
            'Interrogation des données en langage naturel',
            'Rapports assistés par l’IA',
            'Applications LLM sur mesure',
            'Fine-Tuning de LLM lorsque nécessaire',
            'Évaluation et suivi des systèmes d’IA',
          ],
        },
      ],
      example: [
        'Une entreprise souhaite faciliter la recherche d’informations dans ses procédures internes, ses documents techniques ou ses rapports.',
        'Nous pouvons étudier la création d’un assistant documentaire qui recherche des informations dans des sources autorisées et fournit des réponses fondées sur les documents disponibles.',
        'La fiabilité des sources, la confidentialité, la gestion des accès et l’évaluation des réponses font partie de la conception.',
      ],
      goal: 'Notre objectif : développer des applications d’intelligence artificielle qui répondent à des usages professionnels précis et dont la pertinence peut être évaluée.',
    },
  ],
};
