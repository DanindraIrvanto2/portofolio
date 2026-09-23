export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'broadcast' | 'fullstack';
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  featured: boolean;
  metrics?: string;
  roleDescription?: string;
  additionalLinks?: { label: string; url: string }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  highlights: string[];
  skills: string[];
  category: 'it' | 'broadcast' | 'creative';
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'broadcast_creative' | 'tools';
  iconName?: string;
  proficiency?: number;
  highlight?: string;
}

export interface MediaShowcaseItem {
  id: string;
  title: string;
  type: 'broadcast' | 'promo' | 'talkshow' | 'event';
  role: string;
  year: string;
  thumbnail: string;
  embedVideoUrl?: string;
  description: string;
  clientOrOrg: string;
}
