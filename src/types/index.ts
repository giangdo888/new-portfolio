export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string; // Optional path to company logo
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  logo?: string; // Optional path to institution logo
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
