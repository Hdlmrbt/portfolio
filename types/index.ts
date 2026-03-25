export interface SocialLink {
  label: string;
  href:  string;
  icon:  string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface SkillCategory {
  title:  string;
  color:  'pink' | 'beige' | 'rose' | 'mauve';
  skills: Skill[];
}

export interface Skill {
  name:        string;
  level:       number; // 0-100
  years?:      number;
}

export interface Experience {
  id:          string;
  role:        string;
  company:     string;
  type:        string;
  period:      string;
  startDate:   string;
  endDate?:    string;
  location:    string;
  description: string[];
  tags:        string[];
  current?:    boolean;
}

export interface Education {
  id:          string;
  degree:      string;
  institution: string;
  period:      string;
  location:    string;
  description?: string;
}

export interface Project {
  id:          string;
  title:       string;
  description: string;
  longDesc?:   string;
  tags:        string[];
  github?:     string;
  demo?:       string;
  image?:      string;
  featured:    boolean;
  category:    string;
}

export interface GitHubStats {
  username:      string;
  name:          string;
  bio:           string | null;
  avatarUrl:     string;
  publicRepos:   number;
  followers:     number;
  following:     number;
  createdAt:     string;
  repos:         GitHubRepo[];
}

export interface GitHubRepo {
  id:           number;
  name:         string;
  description:  string | null;
  language:     string | null;
  stars:        number;
  forks:        number;
  url:          string;
  homepage:     string | null;
  topics:       string[];
  updatedAt:    string;
}

export interface NavItem {
  label: string;
  href:  string;
}

export interface ContactInfo {
  email:    string;
  phone:    string;
  location: string;
}
