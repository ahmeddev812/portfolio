export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Styling' | 'Tools';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
