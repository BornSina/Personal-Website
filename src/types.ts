export interface traitsConfigObj {
  [key: string]: {
    color: string;
    content: string[];
    skills: string[];
    font?: string;
  };
}

export interface logoConfigObj {
  [name: string]: {
    height: string;
    width: string;
    margin: string;
  };
}

export interface techStackProps {
  techStack: logoConfigObj;
}

export type navBarProps = {
  menuStatus: boolean;
  menu: {
    open: Function;
    close: Function;
    toggle: Function;
  };
};

export interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
}

export interface ProjectProps {
  project: Repo;
}

export interface ProjectTech {
  [project: string]: string[];
}

export interface SectionHeadProps {
  title: string;
}

export interface timelineItem {
  role: string;
  organization: string;
  timePeriod: string;
  Achievements: string[];
}

export interface TraitModalProps {
  title: string;
  color: string;
  content: string[];
  skills: string[];
  font: string;
}
