export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'Full-Stack' | 'Front-End' | 'Web3' | 'AI';
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'learning' | 'experience' | 'achievement';
}

export interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
