// Tipos TypeScript para los datos del portafolio (Atomic Design)

export interface Language {
  name: string;
  level: number; // 0-100
  flag?: string;
}

export interface ProgrammingLanguage {
  name: string;
  level: number; // 0-100
  color: string;
}

export interface ExtraSkill {
  label: string;
}

export interface ContactInfo {
  city: string;
  phone: string;
  email: string;
  age: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // nombre del icono de Iconify
}

export interface KnowledgeItem {
  title: string;
  description: string;
  icon: string; // nombre del icono de Iconify
  color: string; // color de acento de la card
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  type: "university" | "certification" | "course";
  ongoing?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string; // color de fondo del placeholder
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  year: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  fullName: string;
  tagline: string;
  bio: string;
  roles: string[];
  contact: ContactInfo;
  social: SocialLink[];
  languages: Language[];
  programmingLanguages: ProgrammingLanguage[];
  extraSkills: ExtraSkill[];
  knowledge: KnowledgeItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}
