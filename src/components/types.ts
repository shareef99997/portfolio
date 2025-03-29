export type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    demoUrl?: string;
    features: string[];
    impact?: string[];
    stats?: {
        users?: number;
        performance?: string;
        rating?: number;
    };
}; 