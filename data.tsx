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
import TrackerWalletMobileCover from "./public/projectsScreenshots/trackerWallet/mobileCover.png";
import TW_Dashboard1 from "./public/projectsScreenshots/trackerWallet/dashboard1.png";
import TW_Dashboard2 from "./public/projectsScreenshots/trackerWallet/dashboard2.png";
import TW_Map from "./public/projectsScreenshots/trackerWallet/map.png";
import TW_MapEditNode from "./public/projectsScreenshots/trackerWallet/mapeditnode.png";
import TW_MapFilterColor from "./public/projectsScreenshots/trackerWallet/mapfiltercolor.png";
import TW_MapTree from "./public/projectsScreenshots/trackerWallet/maptree.png";
import TW_Profile from "./public/projectsScreenshots/trackerWallet/profile.png";
//CreatorSet Imports
import CreatorSetCover from "./public/projectsScreenshots/creatorSet/cover.png";
import CreatorSetMobileCover from "./public/projectsScreenshots/creatorSet/mobileCover.png";
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
    mobileCoverImage: ImageType;
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
        mobileCoverImage: { resolution: { w: 2000, h: 1000 }, src: TrackerWalletMobileCover },
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
        mobileCoverImage: { resolution: { w: 2000, h: 1000 }, src: CreatorSetMobileCover },
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
            "Migration from MUI to custom components for complete UI overhaul, migrated from WebPack to EsBuild, partial migration from JavaScript to TypeScript, integration with backend API’s to send and receive data that is then rendered as React components. Created several forms with the option to upload images, videos and files. -BREAK-Implemented polling to check the processing state of uploaded files, created a component that allows the user to highlight individual frames of an uploaded video. Created a modal that allows the user to edit the subtitles (both text and timestamp) for an uploaded video, alongside a custom video player built from scratch, implemented WavesurferJs to visualize the uploaded video’s audio track, implemented undo and redo functionalities that track the whole modal state.-BREAK-Created a component to help users check how their YouTube thumbnail would look on the youtube’s home screen (both light and dark mode) for computer, tablet and mobile interfaces (based on their preference), worked with youtube’s api for channel name autocompletion on the edit profile page.",
    },
];

export enum SelectedTopic {
    Books = "Books",
    Courses = "Courses",
    Channels = "Channels",
    Talks = "Talks",
}

export type RecommendationsForDevs = {
    [key in SelectedTopic]: { text: string; link?: string; author?: string; description?: string }[];
};

export const ResourcesForDevs: RecommendationsForDevs = {
    Books: [
        { text: "Clean Code", author: "Robert C. Martin" },
        { text: "The Clean Coder ", author: "Robert C. Martin" },
        { text: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas" },
        { text: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    ],
    Channels: [
        { text: "Jack Herrington", link: "https://www.youtube.com/@jherr" },
        { text: "Traversy Media", link: "https://www.youtube.com/@TraversyMedia" },
        { text: "Fireship", link: "https://www.youtube.com/@Fireship" },
        { text: "Theo - ping․gg", link: "https://www.youtube.com/@t3dotgg" },
        { text: "Michael Sambol", link: "https://www.youtube.com/@MichaelSambol" },
    ],
    Courses: [
        {
            text: "Advanced CSS and Sass",
            link: "https://www.udemy.com/share/101Wkw3@nhguOCkAyYb91UExnLKeXG1gC22YuiUzJv8_UMr9U0p1GwhXdWaJZuq36D07H6IG2g==/",
        },
        {
            text: "Advanced CSS and Sass",
            link: "https://www.udemy.com/share/101WcY3@LvgBdxOm-ZWrvwGPhyzEnrmwW-GqTAV-8A5GOFUhTAeG_4OsVXzeD2vRZ_VVGOsswg==/",
        },
        {
            text: "Typescript: The Complete Developer's Guide",
            link: "https://www.udemy.com/share/101WXk3@fJ1K73aD_yLr6WXz_wrbYhz494NPnDP8cLzgrDqKyNXMsItmEX9a3rLFWkwUY13Pmw==/",
        },
        {
            text: "Object-oriented Programming in JavaScript",
            link: "https://www.udemy.com/share/101X8W3@yt2h2d-BeSDXkvWt-QA4iIQFMKv2kwrGManPR9iZu3zpTPS98FuL7xukIZ-93x7uuw==/",
        },
        {
            text: "Building Web Applications with React",
            link: "https://app.pluralsight.com/paths/skill/building-web-applications-with-react",
        },
        {
            text: "Working with REST APIs in JavaScript",
            link: "https://app.pluralsight.com/paths/skill/working-with-rest-apis-in-javascript",
        },
    ],
    Talks: [
        {
            text: "Clean Code",
            author: "Robert C. Martin",
            link: "https://www.youtube.com/watch?v=7EmboKQH8lM&list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj&ab_channel=UnityCoin",
        },
        {
            text: "React-spring: on animations and hooks",
            author: "Alec Larson",
            link: "https://www.youtube.com/watch?v=5QCYBiANRYs&t=986s&ab_channel=ReactEurope",
        },
        {
            text: "5 Years of Building React Table",
            author: "Tanner Linsley",
            link: "https://www.youtube.com/watch?v=O4IWJcafX8c&ab_channel=ReactConferencesbyGitNation",
        },
        {
            text: "Designing Fluid Interfaces",
            link: "https://developer.apple.com/videos/play/wwdc2018/803/",
        },
        {
            text: "Design app experiences with charts",
            link: "https://developer.apple.com/videos/play/wwdc2022/110342/",
        },
        {
            text: "Design an effective chart",
            link: "https://developer.apple.com/videos/play/wwdc2022/110340/",
        },
        {
            text: "Discoverable design",
            link: "https://developer.apple.com/videos/play/wwdc2021/10126/",
        },
    ],
};

export const ABOUT_SECTION_DATA = {
    textArray: [
        "My name is Lucas Pennice, I’m a FullStack developer with most of my experience working with React and TypeScript",
        "I’m always learning, and looking for the next challenge. Some of my main interests are creating useful, responsive applications, improving my team-working skills, learning to write better code and keep discovering new technologies and methodologies to work with",
        "I began my coding journey in high school when I took three years of C, mostly based on solving algorithmic problems. After finishing high-school I enrolled into System Engineering and started to learn web development, in 2022 I finished a programming and data structures micro bachelors at NYU (New York University)",
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
