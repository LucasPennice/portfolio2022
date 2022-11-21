import { ReactElement } from "react";
import {
    SiSass,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiTypescript,
    SiNextdotjs,
    SiV,
    SiWebpack,
    SiCplusplus,
    SiC,
    SiVite,
    SiTsnode,
    SiNodedotjs,
    SiJavascript,
    SiPostgresql,
    SiMongodb,
    SiPrisma,
    SiExpress,
    SiPassport,
    SiHtml5,
    SiCss3,
    SiDocker,
    SiThreedotjs,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { SiFramer } from "react-icons/si";
import { IoBuild } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { DiPython } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { StaticImageData } from "next/image";
//TrackerWallet Imports
import TrackerWalletCover from "./public/projectsScreenshots/trackerWallet/cover.png";
import TW_Dashboard1 from "./public/projectsScreenshots/trackerWallet/dashboard1.png";
import TW_Dashboard2 from "./public/projectsScreenshots/trackerWallet/dashboard2.png";
import TW_Map from "./public/projectsScreenshots/trackerWallet/map.png";
import TW_MapEditNode from "./public/projectsScreenshots/trackerWallet/mapeditnode.png";
import TW_MapFilterColor from "./public/projectsScreenshots/trackerWallet/mapfiltercolor.png";
import TW_MapTree from "./public/projectsScreenshots/trackerWallet/maptree.png";
import TW_Profile from "./public/projectsScreenshots/trackerWallet/profile.png";
//CreatorSet Imports
import CreatorSetCover from "./public/projectsScreenshots/creatorSet/cover.png";
import CS_CaptionTool from "./public/projectsScreenshots/creatorSet/captiontool.png";
import CS_CaptionToolPage from "./public/projectsScreenshots/creatorSet/captiontoolpage.png";
import CS_EditProfile from "./public/projectsScreenshots/creatorSet/editProfile.png";
import CS_Login from "./public/projectsScreenshots/creatorSet/login.png";
import CS_NewProduct from "./public/projectsScreenshots/creatorSet/newProduct.png";
import CS_ProfanityChecker from "./public/projectsScreenshots/creatorSet/profanitychecker.png";
import CS_Store from "./public/projectsScreenshots/creatorSet/store.png";
import CS_ThumbnailPreviewer from "./public/projectsScreenshots/creatorSet/thumbnailPreviewer.png";

export interface Tech {
    label: string;
    icon: ReactElement<any, any>;
}

export type ImageType = {
    src: string | StaticImageData;
    resolution: { w: number; h: number };
};

export interface WorkExperience {
    company: string;
    role: string;
    from: string;
    to: string;
    projectLink: false | string;
    youtubeDemoVideoId?: string;
    coverImage: ImageType;
    detailImages: ImageType[];
    techStack: Tech[];
    caseStudy: string;
}

export const workExperienceArr: WorkExperience[] = [
    {
        company: "Tracker Wallet",
        from: "2021",
        to: "2022",
        role: "Frontend developer",
        youtubeDemoVideoId: "dE-3igVicso",
        coverImage: { resolution: { w: 2600, h: 3840 }, src: TrackerWalletCover },
        detailImages: [
            { resolution: { w: 2560, h: 1358 }, src: TW_MapTree },
            { resolution: { w: 2560, h: 1358 }, src: TW_Map },
            { resolution: { w: 2560, h: 1358 }, src: TW_MapEditNode },
            { resolution: { w: 2560, h: 1358 }, src: TW_MapFilterColor },
            { resolution: { w: 2560, h: 1358 }, src: TW_Dashboard1 },
            { resolution: { w: 2560, h: 1358 }, src: TW_Dashboard2 },
            { resolution: { w: 2560, h: 1358 }, src: TW_Profile },
        ],
        projectLink: false,
        techStack: [
            { icon: <SiReact />, label: "ReactJs" },
            { icon: <SiTypescript />, label: "TypeScript" },
            { icon: <SiSass />, label: "Sass" },
            { icon: <SiNextdotjs />, label: "NextJs" },
            { icon: <BiGitBranch />, label: "Git" },
            { icon: <SiFramer />, label: "Framer Motion" },
            { icon: <SiV />, label: "VisJs" },
        ],
        caseStudy:
            "Chose the technologies for the project based on the desired functionality, designed types and interfaces for the current app’s components and future backend API’s, created a mock API to simulate intended behavior (with varying response times and success rates to simulate a real backend). Ensured persistence between reloads using local and session storage, achieved a more fluid experience following Apple’s user experience guidelines for animations and expected interface behavior. Wrote the source code according to Clean Code and Refactoring principles, used TypeScript as the main language to achieve type safety across the codebase.-BREAK-Implemented recursive algorithms to iterate through tree data structures, modified VisJs to help visualize said tree data structures in two different ways (network and tree) and the interaction between their nodes. Wrote functions to produce custom SVG code to render as the tree’s nodes and created a modal to implement those functions through an easier to understand UI. Developed the app based on Sigma designs provides by a designer, wrote functions to filter sub-trees from the main network depending on the chosen data span and desired amount of interactions. Created a component to render an account’s balance across a month, two weeks or a week, depending no the user’s preference.",
    },
    {
        company: "Creator Set",
        from: "2021",
        to: "2022",
        role: "Frontend Dev",
        coverImage: { resolution: { w: 2600, h: 3840 }, src: CreatorSetCover },
        detailImages: [
            { resolution: { w: 2560, h: 1358 }, src: CS_Login },
            { resolution: { w: 2560, h: 1358 }, src: CS_CaptionToolPage },
            { resolution: { w: 2560, h: 1358 }, src: CS_CaptionTool },
            { resolution: { w: 2560, h: 1358 }, src: CS_ProfanityChecker },
            { resolution: { w: 2560, h: 1358 }, src: CS_ThumbnailPreviewer },
            { resolution: { w: 2560, h: 1358 }, src: CS_EditProfile },
            { resolution: { w: 2560, h: 1358 }, src: CS_NewProduct },
            { resolution: { w: 2560, h: 1358 }, src: CS_Store },
        ],
        projectLink: false,
        techStack: [
            { icon: <SiReact />, label: "ReactJs" },
            { icon: <SiJavascript />, label: "JavaScript" },
            { icon: <SiTypescript />, label: "TypeScript" },
            { icon: <SiRedux />, label: "Redux" },
            { icon: <SiReactrouter />, label: "React-Router" },
            { icon: <SiSass />, label: "Sass" },
            { icon: <SiWebpack />, label: "Webpack" },
            { icon: <AiFillApi />, label: "API" },
            { icon: <BiGitBranch />, label: "Git" },
            { icon: <SiFramer />, label: "Framer Motion" },
            { icon: <IoBuild />, label: "EsBuild" },
        ],
        caseStudy:
            "Migration from MUI to custom components for complete UI overhaul, migrated from WebPack to EsBuild, partial migration from JavaScript to TypeScript, integration with backend API’s to send and receive data that is then rendered as React components. Created several forms with the option to upload images, videos and files. Implemented polling to check the processing state of uploaded files, created a component that allows the user to highlight individual frames of an uploaded video. Created a modal that allows the user to edit the subtitles (both text and timestamp) for an uploaded video, alongside a custom video player built from scratch, implemented WavesurferJs to visualize the uploaded video’s audio track, implemented undo and redo functionalities that track the whole modal state.-BREAK-Created a component to help users check how their YouTube thumbnail would look on the youtube’s home screen (both light and dark mode) for computer, tablet and mobile interfaces (based on their preference), worked with youtube’s api for channel name autocompletion on the edit profile page.",
    },
];

export enum SelectedTopic {
    Books = "Books",
    Courses = "Courses",
    Channels = "Channels",
    Talks = "Talks",
}

export type RecommendationsForDevs = {
    [key in SelectedTopic]: { text: string; link?: string; author?: string; description: string }[];
};

export const ResourcesForDevs: RecommendationsForDevs = {
    Books: [
        { text: "Clean Code", author: "Robert C. Martin", description: "Book about writing clean code " },
        { text: "The Clean Coder ", author: "Robert C. Martin", description: "Book about writing clean code " },
        { text: "Refactoring ", author: "Martin Fowler", description: "Book about writing clean code " },
        { text: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas", description: "Book about writing clean code " },
        { text: "Eloquent JavaScript", author: "Marijn Haverbeke", description: "Book about writing clean code " },
    ],
    Channels: [
        { text: "Jack Herrington", link: "skere", description: "React youtuber" },
        { text: "Traversy Media", link: "skere", description: "React youtuber" },
        { text: "Fireship", link: "skere", description: "React youtuber" },
        { text: "Theo - ping․gg", link: "skere", description: "React youtuber" },
        { text: "Michael Sambol", link: "skere", description: "React youtuber" },
    ],
    Courses: [
        {
            text: "Advanced CSS and Sass",
            link: "https://www.udemy.com/share/101Wkw3@nhguOCkAyYb91UExnLKeXG1gC22YuiUzJv8_UMr9U0p1GwhXdWaJZuq36D07H6IG2g==/",
            description: "React course",
        },
        {
            text: "Advanced CSS and Sass",
            link: "https://www.udemy.com/share/101WcY3@LvgBdxOm-ZWrvwGPhyzEnrmwW-GqTAV-8A5GOFUhTAeG_4OsVXzeD2vRZ_VVGOsswg==/",
            description: "React course",
        },
        {
            text: "Typescript: The Complete Developer's Guide",
            link: "https://www.udemy.com/share/101WXk3@fJ1K73aD_yLr6WXz_wrbYhz494NPnDP8cLzgrDqKyNXMsItmEX9a3rLFWkwUY13Pmw==/",
            description: "React course",
        },
        {
            text: "Object-oriented Programming in JavaScript",
            link: "https://www.udemy.com/share/101X8W3@yt2h2d-BeSDXkvWt-QA4iIQFMKv2kwrGManPR9iZu3zpTPS98FuL7xukIZ-93x7uuw==/",
            description: "React course",
        },
        {
            text: "Building Web Applications with React",
            link: "https://app.pluralsight.com/paths/skill/building-web-applications-with-react",
            description: "React course",
        },
        {
            text: "Working with REST APIs in JavaScript",
            link: "https://app.pluralsight.com/paths/skill/working-with-rest-apis-in-javascript",
            description: "React course",
        },
    ],
    Talks: [
        {
            text: "Clean Code",
            author: "Robert C. Martin",
            link: "https://www.youtube.com/watch?v=7EmboKQH8lM&list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj&ab_channel=UnityCoin",
            description: "clean code talk",
        },
        {
            text: "React-spring: on animations and hooks",
            author: "Alec Larson",
            link: "https://www.youtube.com/watch?v=5QCYBiANRYs&t=986s&ab_channel=ReactEurope",
            description: "clean code talk",
        },
        {
            text: "5 Years of Building React Table",
            author: "Tanner Linsley",
            link: "https://www.youtube.com/watch?v=O4IWJcafX8c&ab_channel=ReactConferencesbyGitNation",
            description: "clean code talk",
        },
        {
            text: "Designing Fluid Interfaces",
            link: "https://developer.apple.com/videos/play/wwdc2018/803/",
            description:
                "Discover the techniques used to create the fluid gestural interface of iPhone X. Learn how to design with gestures and motion that feel intuitive and natural, making your app a delight to use.",
        },
        {
            text: "Design app experiences with charts",
            link: "https://developer.apple.com/videos/play/wwdc2022/110342/",
            description:
                "Learn how you can enhance your app with charts to communicate data with more clarity and appeal. We'll show you when to use charts, how to use them and how they work together in a chart design system.",
        },
        {
            text: "Design an effective chart",
            link: "https://developer.apple.com/videos/play/wwdc2022/110340/",
            description:
                "Learn how to design focused, approachable, and accessible charts. We'll show you how to design great charts with clear marks, axes, descriptions, interaction, and color and help you create useful experiences for everyone.",
        },
        {
            text: "Discoverable design",
            link: "https://developer.apple.com/videos/play/wwdc2021/10126/",
            description:
                "Discover how you can create interactive, memorable experiences to onboard people into your app. We'll take you through discoverable design practices and learn how you can craft explorable, fun interfaces that help people grasp the possibilities of your app at a glance. We'll also show you how to apply this methodology to personalize your content and make your app easy to customize.",
        },
    ],
};

export const ABOUT_SECTION_DATA = {
    textArray: [
        "My name is Lucas Pennice, I’m a FullStack developer with most of my experience working with React and TypeScript",
        "I’m always learning, and looking for the next challenge. Some of my main interests are creating useful, responsive applications, improving my team-working skills, learning to write better code and keep discovering new technologies and methodologies to work with",
        "I began my coding journey in high school when I took three years of C, mostly based on solving algorithmic problems. After finishing high-school I enrolled into System Engineering and started to learn web development, in 2022 I finished a programming and data structures micro bachelors at NYUx",
    ],
    workExperienceTech: [
        { icon: <SiReact />, label: "ReactJs" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <SiSass />, label: "Sass" },
        { icon: <SiNextdotjs />, label: "NextJs" },
        { icon: <BiGitBranch />, label: "Git" },
        { icon: <SiFramer />, label: "Framer Motion" },
        { icon: <SiV />, label: "VisJs" },
        { icon: <SiRedux />, label: "Redux" },
        { icon: <SiReactrouter />, label: "React-Router" },
        { icon: <SiWebpack />, label: "Webpack" },
        { icon: <IoBuild />, label: "EsBuild" },
        { icon: <SiTsnode />, label: "TsNodeJs" },
        { icon: <SiNodedotjs />, label: "NodeJs" },
        { icon: <SiPostgresql />, label: "PostGresql" },
        { icon: <SiExpress />, label: "ExpressJs" },
        { icon: <SiHtml5 />, label: "HTML" },
        { icon: <SiCss3 />, label: "CSS" },
        { icon: <SiDocker />, label: "Docker" },
    ],
    haveUsedBeforeTech: [
        { icon: <DiPython />, label: "Python" },
        { icon: <SiCplusplus />, label: "C++" },
        { icon: <SiC />, label: "C" },
        { icon: <SiVite />, label: "Vite" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiPrisma />, label: "Prisma" },
        { icon: <SiPassport />, label: "PassportJs" },
        { icon: <TbBrandReactNative />, label: "ReactNative" },
        { icon: <SiThreedotjs />, label: "ThreeJs" },
    ],
};

export const LETTER_SIZE_AT_10 = {
    A: 6.67,
    B: 6.67,
    C: 7.23,
    D: 7.23,
    E: 6.67,
    F: 6.11,
    G: 7.78,
    H: 7.23,
    I: 2.78,
    J: 5,
    K: 6.67,
    L: 5.56,
    M: 8.34,
    N: 7.23,
    O: 7.78,
    P: 6.67,
    Q: 7.78,
    R: 7.23,
    S: 6.67,
    T: 6.11,
    U: 7.23,
    V: 6.67,
    W: 9.45,
    X: 6.67,
    Y: 6.67,
    Z: 6.11,
    AT: 10.16,
    DOT: 2.78,
    SPACE: 5.56,
};
