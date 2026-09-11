import { Program } from '../types';

export const PROGRAMS: Program[] = [
  {
    id: 'art-licence',
    code: 'LIC-ART',
    title: 'Administration des Réseaux et Télécoms',
    degree: 'Licence',
    category: 'informatique',
    duration: '3 ans (Système LMD)',
    shortDesc: 'Conception, déploiement et sécurisation des infrastructures réseaux, serveurs et télécoms modernes.',
    fullDesc: 'La Licence Professionnelle en Administration des Réseaux et Télécommunications forme des spécialistes hautement qualifiés capables d\'installer, configurer, administrer et sécuriser les réseaux informatiques et de télécommunications d\'entreprise (Cisco, Linux, Windows Server, Cloud et VoIP).',
    prerequisites: 'Baccalauréat Scientifique (S1, S2, S3), Technique (T1, T2) ou équivalent.',
    careerOpportunities: [
      'Administrateur Systèmes & Réseaux',
      'Ingénieur Support & Télécoms',
      'Responsable Sécurité Informatique Junior',
      'Technicien Déploiement Fibre & VoIP',
      'Architecte Infrastructure Cloud Junior'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Fondations Technologiques',
        modules: [
          'Architecture des ordinateurs et OS',
          'Réseaux locaux et modèle OSI (Cisco CCNA 1)',
          'Algorithmique et initiation programmation C/Python',
          'Électronique et transmission du signal',
          'Mathématiques appliquées à l\'informatique',
          'Anglais technique & Communication professionnelle'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Spécialisation Réseaux & Systèmes',
        modules: [
          'Routage et commutation avancée (Cisco CCNA 2 & 3)',
          'Administration Linux (Debian, RedHat) & Scripts Bash',
          'Administration Windows Server & Active Directory',
          'Bases de données relationnelles (MySQL/PostgreSQL)',
          'Téléphonie sur IP (VoIP) et Asterisk',
          'Stage d\'immersion professionnelle en entreprise'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Sécurité, Cloud & Projet de Fin d\'Études',
        modules: [
          'Cybersécurité et pare-feu (Fortinet, pfSense)',
          'Virtualisation et Cloud Computing (VMware, AWS/GCP)',
          'Supervision de réseaux (Nagios, Zabbix)',
          'Gestion de projet informatique (Méthodes Agiles)',
          'Droit des TIC et éthique numérique',
          'Stage de fin d\'études (3 mois) & Mémoire de soutenance'
        ]
      }
    ],
    tuition: {
      inscription: 85000,
      monthly: 55000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Laboratoire Cisco & Switchs physiques dédiés',
    popular: true,
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/administration-r%C3%A9seau-IPAIM.jpg'
  },
  {
    id: 'genie-logiciel',
    code: 'LIC-GL',
    title: 'Génie Logiciel & Développement Web/Mobile',
    degree: 'Licence',
    category: 'informatique',
    duration: '3 ans (Système LMD)',
    shortDesc: 'Création d\'applications web, mobiles et d\'architectures logicielles modernes pour les entreprises.',
    fullDesc: 'Formation d\'excellence préparant aux métiers du développement logiciel full-stack, mobile (Android/Flutter) et à l\'intégration de solutions logicielles d\'entreprise adaptées à l\'écosystème numérique africain et mondial.',
    prerequisites: 'Baccalauréat Scientifique (S) ou Technique (T, STEG) avec intérêt marqué pour la programmation.',
    careerOpportunities: [
      'Développeur Web Full-Stack (React, Node, Python)',
      'Développeur d\'Applications Mobiles',
      'Analyste Programmeur d\'Applications Métiers',
      'Concepteur de Bases de Données',
      'Scrum Master & Chef de Projet Digital Junior'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Algorithmique & Développement Web',
        modules: [
          'Algorithmique avancée et structures de données',
          'Développement Web (HTML5, CSS3, JavaScript moderne)',
          'Bases de données relationnelles et SQL',
          'Programmation Orientée Objet (Python / Java)',
          'Méthodologie de développement et Git/GitHub'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Architectures Logicielles & Frameworks',
        modules: [
          'Frameworks modernes (React.js, Node.js / Express)',
          'Développement Mobile (Flutter & Dart)',
          'Génie Logiciel et modélisation UML',
          'API RESTful et Web Services',
          'Stage pratique en entreprise (2 mois)'
        ]
      },
      {
        title: 'Semestre 5 & 6 : DevOps, IA & Soutenance de Projet',
        modules: [
          'Conteneurs Docker et initiation DevOps',
          'Introduction à l\'Intelligence Artificielle et Data Science',
          'Sécurité applicative et OWASP',
          'Entrepreneuriat Tech et Lean Startup',
          'Projet intégrateur & Soutenance devant jury d\'experts'
        ]
      }
    ],
    tuition: {
      inscription: 85000,
      monthly: 55000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Projets réels et hackathons étudiants annuels',
    popular: true,
    image: 'https://www.ipaim.sn/wp-content/uploads/2019/04/header2.jpg'
  },
  {
    id: 'finance-comptabilite',
    code: 'LIC-FC',
    title: 'Finance & Comptabilité',
    degree: 'Licence',
    category: 'gestion',
    duration: '3 ans (Système LMD / Option BTS 2 ans)',
    shortDesc: 'Maîtrise du SYSCOHADA révisé, de la gestion comptable, financière, fiscale et de l\'audit.',
    fullDesc: 'La filière Finance-Comptabilité de l\'IPAIM prépare des collaborateurs d\'entreprise et de cabinets d\'expertise capables d\'assurer la tenue rigoureuse des comptes, l\'élaboration des états financiers, la gestion de trésorerie et le reporting conforme aux normes OHADA.',
    prerequisites: 'Baccalauréat G, S, L2 avec bon niveau en mathématiques ou équivalent.',
    careerOpportunities: [
      'Comptable d\'Entreprise ou de Cabinet',
      'Auditeur Financier Junior',
      'Gestionnaire de Trésorerie',
      'Assistant Contrôleur de Gestion',
      'Fiscaliste d\'Entreprise'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Principes Comptables & Droit des Affaires',
        modules: [
          'Comptabilité générale (SYSCOHADA révisé)',
          'Mathématiques financières et statistiques',
          'Microéconomie et organisation de l\'entreprise',
          'Droit commercial et droit du travail au Sénégal',
          'Outils bureautiques appliqués (Excel avancé)'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Fiscalité & Comptabilité des Sociétés',
        modules: [
          'Comptabilité analytique d\'exploitation (CAE)',
          'Fiscalité sénégalaise (TVA, BRS, IS, IPRES/CSS)',
          'Comptabilité des sociétés commerciales',
          'Logiciels comptables (Sage Saari Compta & Paie)',
          'Stage professionnel obligatoire (2 mois)'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Diagnostic Financier & Audit',
        modules: [
          'Analyse et diagnostic financier approfondi',
          'Gestion budgétaire et tableaux de bord',
          'Audit comptable et financier',
          'Normes IFRS et consolidation des comptes',
          'Mémoire de fin de cycle & Soutenance'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Préparation intensive aux épreuves du BTS d\'État',
    popular: true,
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/finance.compta.ipaim-3.jpg'
  },
  {
    id: 'banque-finance-assurance',
    code: 'LIC-BFA',
    title: 'Banque, Finance & Assurance',
    degree: 'Licence',
    category: 'gestion',
    duration: '3 ans (Système LMD)',
    shortDesc: 'Opérations bancaires, analyse des risques de crédit, marchés financiers et gestion des polices d\'assurance.',
    fullDesc: 'Ce cursus vise à former des professionnels immédiatement opérationnels dans les banques commerciales, les institutions de microfinance (IMF) et les compagnies d\'assurance du Sénégal et de la zone UEMOA.',
    prerequisites: 'Baccalauréat G, S, ou L avec mention.',
    careerOpportunities: [
      'Chargé de Clientèle Particuliers / Professionnels',
      'Analyste Crédit & Risques en Banque ou Microfinance',
      'Souscripteur / Gestionnaire de Sinistres Assurance',
      'Agent d\'Opérations Back-Office Bancaire',
      'Conseiller en Gestion de Patrimoine'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Environnement Bancaire & Monétaire',
        modules: [
          'Économie monétaire et institutions financières UEMOA',
          'Techniques bancaires et tenue de comptes',
          'Droit bancaire et garanties de crédit',
          'Mathématiques financières appliquées',
          'Communication commerciale & Négociation'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Analyse des Crédits & Assurances',
        modules: [
          'Techniques d\'analyse du risque crédit PME/PMI',
          'Droit et pratique des assurances (Code CIMA)',
          'Microfinance et inclusion financière en Afrique',
          'Logiciels de gestion bancaire (Core Banking basics)',
          'Stage pratique en banque ou agence d\'assurance'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Marchés Financiers & Conformité',
        modules: [
          'Marchés financiers et Bourse Régionale (BRVM)',
          'Conformité bancaire (Anti-blanchiment / LAB-CFT)',
          'Marketing bancaire et digitalisation des services',
          'Projet professionnel et stage de fin d\'études'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Partenariats stages avec les institutions de Thiès',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/Banque.finance.ipaim_.jpg'
  },
  {
    id: 'commerce-international',
    code: 'LIC-CI',
    title: 'Commerce International',
    degree: 'Licence',
    category: 'commerce',
    duration: '3 ans (Système LMD / Option BTS)',
    shortDesc: 'Procédures import-export, douanes sénégalaises, négociations mondiales et incoterms.',
    fullDesc: 'Une formation stratégique pour maîtriser les rouages du commerce mondial, les techniques de négociation internationale, les procédures de dédouanement (système GAINDE au Sénégal) et la logistique maritime, aérienne et terrestre.',
    prerequisites: 'Baccalauréat toutes séries (L, S, G).',
    careerOpportunities: [
      'Gestionnaire Import-Export',
      'Négociateur Acheteur International',
      'Assistant Commercial Grands Comptes',
      'Collaborateur en Agence de Transit & Dédouanement',
      'Chargé de Développement Commercial International'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Fondamentaux du Commerce Mondial',
        modules: [
          'Géopolitique et flux du commerce international',
          'Incoterms 2020 et contrats de vente internationale',
          'Paiements internationaux (Crédit documentaire, Remdoc)',
          'Anglais des affaires approfondi (Business English)',
          'Techniques de vente et prospection'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Procédures Douanières & Transit',
        modules: [
          'Réglementation douanière sénégalaise et tarif douanier',
          'Pratique du système GAINDE et formalités portuaires',
          'Transport international et assurances maritimes',
          'Marketing international et études de marché',
          'Stage professionnel en transit / import-export'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Stratégie Internationale & Soutenance',
        modules: [
          'Stratégie de pénétration des marchés africains (ZLECAf)',
          'Gestion de la chaîne logistique internationale (Supply Chain)',
          'Négociation interculturelle',
          'Stage de fin de cycle & Soutenance de mémoire'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Accès direct aux métiers du Port Autonome de Dakar',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/commerce-international.png'
  },
  {
    id: 'transport-logistique',
    code: 'LIC-TL',
    title: 'Transport & Logistique',
    degree: 'Licence',
    category: 'commerce',
    duration: '3 ans (Système LMD / Option BTS)',
    shortDesc: 'Gestion de flotte, optimisation de la chaîne logistique, entreposage et chaîne du froid.',
    fullDesc: 'Formation au cœur des enjeux économiques du Sénégal : gestion des plateformes logistiques, optimisation des flux de transport de marchandises, gestion des stocks, chaîne d\'approvisionnement et infrastructures portuaires/ferroviaires de Thiès et Dakar.',
    prerequisites: 'Baccalauréat G, S, ou L.',
    careerOpportunities: [
      'Responsable d\'Exploitation Transport',
      'Gestionnaire de Plateforme Logistique & Entrepôt',
      'Coordonnateur Supply Chain',
      'Agent de Transit et d\'Affrètement',
      'Gestionnaire de Parc Automobile'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Chaîne Logistique & Modes de Transport',
        modules: [
          'Introduction à la logistique et gestion des flux',
          'Modes de transport (routier, ferroviaire, maritime, aérien)',
          'Gestion des approvisionnements et des stocks',
          'Droit des transports et responsabilités des transporteurs',
          'Bureautique et logiciels de calcul appliqués'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Exploitation & Gestion d\'Entrepôts',
        modules: [
          'Aménagement des entrepôts et manutention',
          'Gestion de flotte et optimisation des tournées',
          'Normes d\'hygiène, sécurité et gestion des risques (HSE)',
          'Logiciels de gestion de stock (WMS/ERP)',
          'Stage pratique en entreprise de transport'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Stratégie Supply Chain & Mémoire',
        modules: [
          'Management stratégique de la Supply Chain',
          'Logistique durable et verte',
          'Indicateurs de performance logistique (KPI)',
          'Stage professionnel de fin d\'études & Soutenance'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Thiès, carrefour stratégique ferroviaire et autoroutier',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/Transport..Logistique.ipaim_.jpg'
  },
  {
    id: 'marketing-communication',
    code: 'LIC-MAC',
    title: 'Marketing & Action Communication',
    degree: 'Licence',
    category: 'commerce',
    duration: '3 ans (Système LMD)',
    shortDesc: 'Marketing digital, stratégies de marque, relations publiques et publicité omnicanale.',
    fullDesc: 'Ce cursus forme des professionnels créatifs et stratèges capables de concevoir et piloter des plans marketing, gérer l\'image de marque d\'entreprises, animer les réseaux sociaux et créer des campagnes publicitaires percutantes.',
    prerequisites: 'Baccalauréat toutes séries (L, G, S).',
    careerOpportunities: [
      'Responsable Marketing Digital & Social Media',
      'Chargé de Communication d\'Entreprise',
      'Chef de Produit / Brand Manager Junior',
      'Community Manager & Créateur de Contenu',
      'Chargé de Relations Presse et Événementiel'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Fondements du Marketing & Médias',
        modules: [
          'Principes du marketing fondamental',
          'Théories de la communication et sémiologie de l\'image',
          'Comportement du consommateur',
          'Création graphique assistée par ordinateur (Photoshop/Canva)',
          'Techniques rédactionnelles et storytelling'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Marketing Digital & Événementiel',
        modules: [
          'Marketing digital, SEO, SEA et publicité en ligne',
          'Gestion des réseaux sociaux et influence marketing',
          'Organisation d\'événements professionnels',
          'Études de marché qualitatives et quantitatives',
          'Stage pratique en agence ou service comm'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Stratégie de Marque & Soutenance',
        modules: [
          'Communication de crise et e-réputation',
          'Stratégie de branding et identité visuelle',
          'Gestion de budget marketing et ROI',
          'Stage de fin de cycle & Soutenance'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Ateliers pratiques de production de contenu digital',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/media.communication.tree_.strategy.mix_.jpg.png'
  },
  {
    id: 'grh-licence',
    code: 'LIC-GRH',
    title: 'Gestion des Ressources Humaines (GRH)',
    degree: 'Licence',
    category: 'gestion',
    duration: '3 ans (Système LMD)',
    shortDesc: 'Recrutement, gestion des carrières, droit social sénégalais, paie et climat social.',
    fullDesc: 'Formation destinée à doter les futurs gestionnaires RH des compétences administratives, juridiques et humaines nécessaires pour accompagner le développement du capital humain au sein des entreprises sénégalaises et ouest-africaines.',
    prerequisites: 'Baccalauréat L, G, S ou diplôme admis en équivalence.',
    careerOpportunities: [
      'Assistant / Gestionnaire des Ressources Humaines',
      'Chargé de Recrutement et de la Formation',
      'Gestionnaire de la Paie et Administration du Personnel',
      'Conseiller en Insertion Professionnelle',
      'Consultant RH Junior'
    ],
    semesters: [
      {
        title: 'Semestre 1 & 2 : Cadre Juridique & Organisationnel',
        modules: [
          'Introduction à la gestion des ressources humaines',
          'Droit du travail sénégalais et conventions collectives',
          'Sociologie des organisations et dynamique de groupe',
          'Gestion administrative du personnel',
          'Communication interpersonnelle et négociation'
        ]
      },
      {
        title: 'Semestre 3 & 4 : Outils RH & Ingénierie de Formation',
        modules: [
          'Gestion prévisionnelle des emplois et des compétences (GPEC)',
          'Techniques de recrutement et d\'évaluation',
          'Pratique de la paie et déclarations sociales (CSS, IPRES)',
          'Logiciels de paie et SIRH',
          'Stage professionnel en entreprise (2 mois)'
        ]
      },
      {
        title: 'Semestre 5 & 6 : Management des Talents & Soutenance',
        modules: [
          'Audit social et responsabilité sociétale des entreprises (RSE)',
          'Gestion des conflits et dialogue social',
          'Management de la diversité et du bien-être au travail',
          'Stage de fin d\'études & Mémoire professionnel'
        ]
      }
    ],
    tuition: {
      inscription: 75000,
      monthly: 50000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: 'Maîtrise approfondie du Code du Travail sénégalais',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/etudiants-ipaim-thies.png'
  },
  {
    id: 'assistance-gestion-pme',
    code: 'BTS-AG',
    title: 'Assistance de Gestion des PME - PMI',
    degree: 'BTS',
    category: 'gestion',
    duration: '2 ans (Préparation BTS d\'État)',
    shortDesc: 'Bras droit polyvalent du chef d\'entreprise : gestion administrative, commerciale et financière.',
    fullDesc: 'Le BTS Assistance de Gestion PME-PMI confère une polyvalence complète très recherchée par le tissu économique des PME au Sénégal. L\'assistant prend en charge la relation clients/fournisseurs, la trésorerie quotidienne et l\'organisation interne.',
    prerequisites: 'Baccalauréat G, L ou S.',
    careerOpportunities: [
      'Assistant de Direction Générale',
      'Collaborateur de Gestion en PME',
      'Secrétaire Administratif et Comptable',
      'Gestionnaire des Ventes et Suivi Facturation',
      'Responsable d\'Accueil et des Moyens Généraux'
    ],
    semesters: [
      {
        title: 'Année 1 : Polyvalence Bureautique & Administrative',
        modules: [
          'Gestion de la relation avec la clientèle et les fournisseurs',
          'Comptabilité d\'entreprise et trésorerie',
          'Techniques d\'expression et correspondance commerciale',
          'Bureautique avancée (Word, Excel, PowerPoint, Outlook)',
          'Droit civil et commercial'
        ]
      },
      {
        title: 'Année 2 : Gestion des Risques & Épreuves du BTS',
        modules: [
          'Administration du personnel et organisation du travail',
          'Gestion des risques financiers et informatiques en PME',
          'Pérennisation et développement de la PME',
          'Projets d\'actions professionnelles encadrées',
          'Stage en entreprise (8 semaines) & Préparation aux examens d\'État'
        ]
      }
    ],
    tuition: {
      inscription: 70000,
      monthly: 45000,
      monthsCount: 9,
      uniformAndAssurance: 25000
    },
    highlight: '100% axé sur les épreuves officielles du BTS d\'État',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/presentation-ipaim1.png'
  },
  {
    id: 'cybersecurite-certif',
    code: 'CERT-SEC',
    title: 'Cybersécurité & Audit des Systèmes',
    degree: 'Certification',
    category: 'informatique',
    duration: '6 mois (Formation Professionnelle Continue)',
    shortDesc: 'Défense réseau, tests d\'intrusion (pentesting), sécurité cloud et mise en conformité.',
    fullDesc: 'Programme intensif destiné aux professionnels, techniciens et étudiants désireux d\'acquérir des compétences de pointe en sécurité informatique : analyse de vulnérabilités, protection contre les ransomwares, durcissement de serveurs et conformité réglementaire (CDP Sénégal).',
    prerequisites: 'Niveau Bac +2 en informatique ou expérience équivalente en réseau/système.',
    careerOpportunities: [
      'Analyste SOC (Security Operations Center)',
      'Auditeur Sécurité Informatique Junior',
      'Consultant en Protection des Données (DPO)',
      'Spécialiste Sécurisation Réseau'
    ],
    semesters: [
      {
        title: 'Module 1 : Fondamentaux de la Cybersécurité',
        modules: [
          'Concepts clés de la sécurité de l\'information (CID)',
          'Sécurité des systèmes Linux et Windows',
          'Cryptographie et gestion des certificats SSL/TLS',
          'Législation sur la protection des données personnelles (CDP)'
        ]
      },
      {
        title: 'Module 2 : Défense Réseau & Pentest Pratique',
        modules: [
          'Détection d\'intrusions (IDS/IPS, Snort, Suricata)',
          'Méthodologie de test d\'intrusion éthique (Kali Linux)',
          'Sécurisation des applications Web (OWASP Top 10)',
          'Gestion des incidents et plan de continuité d\'activité (PCA/PRA)'
        ]
      }
    ],
    tuition: {
      inscription: 60000,
      monthly: 60000,
      monthsCount: 6,
      uniformAndAssurance: 15000
    },
    highlight: 'Lab virtuel dédié & ateliers pratiques de simulation d\'attaques',
    image: 'https://www.ipaim.sn/wp-content/uploads/2018/10/administration-r%C3%A9seau-IPAIM.jpg'
  }
];
