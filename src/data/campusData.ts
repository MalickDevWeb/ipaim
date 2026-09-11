import { Testimonial, Partner, CampusFeature } from '../types';

export const CAMPUS_STATS = [
  { label: 'Années d\'expérience', value: '18+', detail: 'Depuis 2006 à Thiès' },
  { label: 'Insertion professionnelle', value: '94%', detail: 'Sous 6 mois après diplôme' },
  { label: 'Lauréats formés', value: '3 500+', detail: 'Cadres & techniciens actifs' },
  { label: 'Entreprises partenaires', value: '45+', detail: 'Stages & opportunités d\'emploi' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fatimetou Gueye',
    role: 'Major Nationale du Sénégal • BTS d\'État',
    company: 'Secteur Bancaire & Assurances (Dakar / Thiès)',
    program: 'BTS Banque Finance & Assurance',
    promoYear: 'Lauréate 1ère du Sénégal',
    avatar: '/students/fatimetou.jpg',
    highlight: 'Classée 1ère du Sénégal au BTS d\'État grâce à la rigueur des formateurs de l\'IPAIM.',
    quote: 'L\'encadrement personnalisé et la qualité des travaux dirigés à l\'IPAIM Thiès m\'ont permis de maîtriser les mécanismes financiers et de décrocher la première place nationale à l\'examen officiel d\'État.'
  },
  {
    id: '2',
    name: 'Zakaria Oubah',
    role: '1er du Jury 1 (Mention Assez Bien)',
    company: 'Direction Commerciale & Marketing',
    program: 'BTS Marketing & Action Commerciale',
    promoYear: 'Session Officielle BTS',
    avatar: '/students/zakaria.jpg',
    highlight: 'Premier du jury 1 au BTS d\'État avec une solide formation pratique.',
    quote: 'À l\'IPAIM, nous étions directement préparés aux exigences réelles du marché du travail et aux épreuves écrites et orales de l\'examen d\'État. Cette méthode porte ses fruits chaque année.'
  },
  {
    id: '3',
    name: 'Atou Ndiaye',
    role: 'Major de Promotion & Cadre Gestion',
    company: 'Entreprise de Commerce International',
    program: 'BTS Commerce International',
    promoYear: 'Lauréate IPAIM',
    avatar: '/students/atou.jpg',
    highlight: 'Une formation concrète avec accès direct aux opérations de douane et de logistique.',
    quote: 'Les professeurs de l\'IPAIM sont des professionnels en activité qui partagent leurs expériences vécues sur le terrain. Cela nous donne un avantage décisif lors des entretiens de recrutement.'
  },
  {
    id: '4',
    name: 'Khayatou Dabo',
    role: 'Spécialiste Finance & Contrôle de Gestion',
    company: 'Cabinet d\'Expertise & Audit',
    program: 'BTS & Licence Finance Comptabilité',
    promoYear: 'Lauréate Nationale',
    avatar: '/students/khayatou.jpg',
    highlight: 'Un taux de réussite exceptionnel et un esprit de famille stimulant.',
    quote: 'Étudier et réussir à Thiès n\'est pas un simple slogan à l\'IPAIM, c\'est une réalité quotidienne soutenue par une équipe pédagogique dévouée et disponible.'
  }
];

export const CAMPUS_FEATURES: CampusFeature[] = [
  {
    title: 'Laboratoires Réseaux & Informatique',
    desc: 'Deux salles machines climatisées équipées de switchs, routeurs Cisco réels, serveurs Linux/Windows et fibre optique haut débit dédiée.',
    iconName: 'Server',
    stats: '60+ postes connectés'
  },
  {
    title: 'Corps Professoral Mixte Universitaire & Pro',
    desc: 'Enseignants chevronnés issus des universités d\'État sénégalaises et cadres dirigeants d\'entreprises (DSI, experts-comptables, transitaires).',
    iconName: 'GraduationCap',
    stats: '100% praticiens certifiés'
  },
  {
    title: 'Cellule d\'Insertion & Suivi des Stages',
    desc: 'Accompagnement personnalisé dès la 2ème année : rédaction de CV, simulations d\'entretiens et conventions de stages garantis.',
    iconName: 'Briefcase',
    stats: 'Stage garanti 2e année'
  },
  {
    title: 'Bibliothèque Numérique & E-learning',
    desc: 'Accès 24/7 aux ressources pédagogiques en ligne, supports de cours polycopiés, annales d\'examens d\'État et mémoires des promotions antérieures.',
    iconName: 'BookOpen',
    stats: '1500+ ouvrages & cours'
  },
  {
    title: 'BDE & Vie Associative Dynamique',
    desc: 'Bureau des Étudiants actif : journées d\'intégration, tournois sportifs inter-instituts, clubs d\'anglais, hackathons et actions caritatives.',
    iconName: 'Users',
    stats: '5 clubs actifs'
  },
  {
    title: 'Double Cursus & Horaires Aménagés',
    desc: 'Cours du Jour (8h - 14h) et Cours du Soir (17h - 21h) conçus pour permettre aux professionnels et travailleurs de se former en continu.',
    iconName: 'Clock',
    stats: 'Jour & Soir disponibles'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Sonatel Orange', category: 'Télécoms & Tech', city: 'Thiès / Dakar' },
  { name: 'CBAO Groupe Attijariwafa', category: 'Banque & Finance', city: 'Thiès' },
  { name: 'Port Autonome de Dakar', category: 'Logistique & Transit', city: 'Dakar' },
  { name: 'Ecobank Sénégal', category: 'Banque & Assurance', city: 'Thiès' },
  { name: 'Cabinet d\'Audit SenAudit', category: 'Expertise Comptable', city: 'Dakar' },
  { name: 'Bolloré / AGL Logistics', category: 'Transport International', city: 'Thiès' },
  { name: 'Industries Chimiques du Sénégal (ICS)', category: 'Industrie & Maintenance', city: 'Mboro / Thiès' },
  { name: 'Expresso Sénégal', category: 'Télécommunications', city: 'Thiès' }
];

export const FAQ_ITEMS = [
  {
    question: 'L\'IPAIM est-il officiellement agréé par l\'État du Sénégal ?',
    answer: 'Oui, l\'IPAIM bénéficie de l\'Agrément Définitif délivré par le Ministère de l\'Enseignement Supérieur, de la Recherche et de l\'Innovation (MESRI) du Sénégal (Arrêté Ministériel n° 003884). Tous nos diplômes de BTS sont des diplômes d\'État sénégalais et nos Licences Professionnelles respectent scrupuleusement le système LMD (Licence-Master-Doctorat).'
  },
  {
    question: 'Quelles sont les conditions d\'admission en BTS ou en Licence 1 ?',
    answer: 'Pour intégrer le cycle BTS ou la Licence 1, vous devez être titulaire d\'un Baccalauréat sénégalais ou étranger reconnu équivalent (Séries L, S, G, STEG ou T selon la filière choisie). Les admissions se font sur étude de dossier et entretien de motivation. Une admission sur attestation provisoire de réussite au Bac est possible pour les nouveaux bacheliers.'
  },
  {
    question: 'Comment fonctionnent les modalités et facilités de paiement des frais ?',
    answer: 'L\'IPAIM propose des facilités de paiement souples adaptées aux réalités des familles : les frais de scolarité sont échelonnés en mensualités sur 9 mois (d\'octobre à juin). Une réduction de 5% est accordée en cas de règlement comptant de l\'année complète, et des remises spéciales sont accordées en cas d\'inscription de fratries.'
  },
  {
    question: 'Les étudiants peuvent-ils bénéficier de bourses ou aides de l\'État ?',
    answer: 'Oui, en tant qu\'établissement d\'enseignement supérieur privé agréé par l\'État du Sénégal, nos étudiants peuvent être orientés ou bénéficier des subventions/allocations étatiques, des bourses de formation professionnelle (3FPT / FONDEF) ainsi que de partenariats institutionnels.'
  },
  {
    question: 'Existe-t-il des cours du soir pour les professionnels en activité ?',
    answer: 'Absolument. Nous proposons pour la majorité de nos filières (Informatique Réseaux, Gestion, Comptabilité, Commerce) une session de cours du soir de 17h30 à 21h00, ainsi que des samedis pédagogiques, permettant aux travailleurs et entrepreneurs de concilier études et vie professionnelle.'
  },
  {
    question: 'Comment se déroule l\'obtention des stages en entreprise ?',
    answer: 'Notre cellule des stages et relations entreprises accompagne chaque étudiant dès la deuxième année dans la recherche et la concrétisation de son stage obligatoire. Grâce à notre réseau de plus de 45 entreprises partenaires à Thiès et Dakar, plus de 90% de nos étudiants effectuent un stage directement formateur débouchant souvent sur une embauche.'
  }
];
