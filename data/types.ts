export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  isFeatured?: boolean;
  pipelineStages?: {
    id: string;
    title: string;
    description: string;
    badge?: string;
  }[];
  highlights?: string[];
  howItWorks?: string[];
  keyOutcome?: string;
  githubUrl?: string;
  demoUrl?: string;
}


export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period?: string;
  projectName: string;
  pfaSubtitle?: string;
  description: string;
  technologies: string[];
  highlights: string[];
  providerNote?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    tag: string;
    isPrimary?: boolean;
  }[];
}

export interface FocusColumn {
  number: string;
  title: string;
  items: string[];
}

export interface ProgressionStep {
  step: string;
  title: string;
  subtitle: string;
  focus: string[];
  technologies?: string[];
  isAdvanced?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  badgeTag: string;
  certificateUrl?: string;
}

export interface Activity {
  title: string;
  role: string;
  organization: string;
}

export interface CVCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  viewUrl: string;
  downloadUrl: string;
  downloadFileName?: string;
  lang: string;
}
