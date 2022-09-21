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


export interface Portfolio {
  intro: Intro;
  skills: Skill[];
  workExperience: WorkEx[];
}
