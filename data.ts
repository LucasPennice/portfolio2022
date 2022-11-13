export interface Tech {
    name: string;
    icon: string;
}

export interface WorkExperience {
    company: string;
    role: string;
    from: string;
    to: string;
    projectLink: false | string;
    coverImage: string;
    detailImages: string[];
    techStack: Tech[];
    caseStudy: string;
}

export const workExperienceArr: WorkExperience[] = [
    {
        company: "Creator Set",
        from: "2021",
        to: "2022",
        role: "Front End Dev",
        coverImage: "no",
        detailImages: ["no", "no", "no", "no"],
        projectLink: false,
        techStack: [
            { icon: "", name: "TypeScript" },
            { icon: "", name: "ReactJs" },
            { icon: "", name: "Sass" },
            { icon: "", name: "React Router" },
            { icon: "", name: "Redux" },
            { icon: "", name: "Git" },
            { icon: "", name: "Webpack" },
            { icon: "", name: "EsBuild" },
            { icon: "", name: "Framer Motion" },
        ],
        caseStudy:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.",
    },
    {
        company: "Tracker Wallet",
        from: "2021",
        to: "2022",
        role: "Front End Dev",
        coverImage: "no",
        detailImages: ["no", "no", "no", "no"],
        projectLink: false,
        techStack: [
            { icon: "", name: "TypeScript" },
            { icon: "", name: "ReactJs" },
            { icon: "", name: "Sass" },
            { icon: "", name: "NextJs" },
            { icon: "", name: "Git" },
            { icon: "", name: "VisJs" },
            { icon: "", name: "Framer Motion" },
        ],
        caseStudy:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.",
    },
];

export enum SelectedTopic {
    Books = "Books",
    Courses = "Courses",
    Channels = "Channels",
    Talks = "Talks",
}

export type RecommendationsForDevs = {
    [key in SelectedTopic]: { text: string; link?: string; description: string }[];
};

export const ResourcesForDevs: RecommendationsForDevs = {
    Books: [
        { text: "Clean Code", description: "Book about writing clean code ", link: "comprarlinks" },
        { text: "Clean Coder", description: "Book about writing clean code " },
        { text: "Refactoring", description: "Book about writing clean code " },
    ],
    Channels: [{ text: "Jack Herrington", link: "skere", description: "React youtuber" }],
    Courses: [{ text: "gamer course", link: "skere", description: "React course" }],
    Talks: [{ text: "Clean code", link: "skere", description: "clean code talk" }],
};
