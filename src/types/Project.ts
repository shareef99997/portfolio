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