export type DegreeType = 'BTS' | 'Licence' | 'Certification' | 'Tous';

export type CategoryType = 'all' | 'informatique' | 'gestion' | 'commerce';

export interface SemesterCourse {
  title: string;
  modules: string[];
}

export interface Program {
  id: string;
  code: string;
  title: string;
  degree: 'BTS' | 'Licence' | 'Certification';
  category: 'informatique' | 'gestion' | 'commerce';
  duration: string;
  shortDesc: string;
  fullDesc: string;
  prerequisites: string;
  careerOpportunities: string[];
  semesters: SemesterCourse[];
  tuition: {
    inscription: number; // in FCFA
    monthly: number;     // in FCFA
    monthsCount: number; // usually 9
    uniformAndAssurance: number; // in FCFA
  };
  highlight?: string;
  popular?: boolean;
  image?: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  gender: 'M' | 'F';
  birthDate: string;
  birthPlace: string;
  nationality: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  lastDiploma: string;
  lastSchool: string;
  programId: string;
  degreeType: 'BTS' | 'Licence' | 'Certification';
  sessionTime: 'jour' | 'soir';
  hasScholarshipOrHelp: boolean;
  notes: string;
}

export interface SubmittedApplication extends RegistrationFormData {
  dossierNumber: string;
  submissionDate: string;
  status: 'Reçu' | 'En cours d\'examen' | 'Admissible';
  programTitle: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  promoYear: string;
  avatar: string;
  quote: string;
  highlight: string;
}

export interface Partner {
  name: string;
  category: string;
  city: string;
}

export interface CampusFeature {
  title: string;
  desc: string;
  iconName: string;
  stats: string;
}
