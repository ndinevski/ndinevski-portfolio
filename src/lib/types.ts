export type AchievementsEntry = {
name: string;
    period: string;
    description?: string;
};

export type EducationEntry = {
    degree: string;
    school: string;
    period: string;
    description?: string;
};

export type ExperienceEntry = {
    company: string;
    role: string;
    period: string;
    description: string;
};

export type ProjectsEntry = {
    backgroundImage: string;
    title: string;
    technologies: string[];
    description: string;
    linkToProject: string;
};