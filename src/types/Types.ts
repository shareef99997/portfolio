export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    screenshots: string[];
    category: string;
    categoryIcon: string;
    technologies: string[];
    features: string[];
    impact: string[];
    completionDate: string;
    githubUrl?: string;
} 

export type ImageTechnology = {
    name: string;
    image: string;
};

export type IconTechnology = {
    name: string;
    icon: JSX.Element;
};

export type Technology = ImageTechnology | IconTechnology;

export type SkillCategory = {
    title: string;
    icon: JSX.Element;
    description: string;
    technologies: Technology[];
};

export type ProfessionalSkills = {
    title: string;
    icon: JSX.Element;
    description: string;
    technologies: IconTechnology[];
};



