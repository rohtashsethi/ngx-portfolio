export interface Intro {
  name: string;
  profession: string;
  email: string;
  phoneNo: number;
  bio: string[];
  avatarImage: string;
}

export interface Skill {
  name: string;
  profociency: number;
}

export interface WorkEx {
  company: string;
  designation: string;
  startDate: string;
  endDate: string;
  logoImage: string;
  summary: string[];
}

export interface Hobby {
  name: string;
  description: string;
  logoImage: string;
}

type Technology = 'Angular' | 'React' | 'Vue' | 'TypeScript' | 'JavaScript' | 'HTML' | 'SCSS' | 'Responsive';

export interface Project {
  name: string;
  description: string;
  logoImage: string;
  tags: Technology[];
}

export interface Portfolio {
  intro: Intro;
  skills: Skill[];
  workExperience: WorkEx[];
  hobbies: Hobby[];
  projects: Project[];
}
