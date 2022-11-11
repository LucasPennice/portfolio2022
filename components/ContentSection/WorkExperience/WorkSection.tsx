import * as React from "react";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
const MobileWork = dynamic(() => import("./Mobile"), {
    ssr: false,
});
const DesktopWorkSection = dynamic(() => import("./Desktop/DesktopWorkSection"), {
    ssr: false,
});

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

const workExperienceArr: WorkExperience[] = [
    {
        company: "Creator Set",
        from: "2021",
        to: "2022",
        role: "Front End Dev",
        coverImage: "no",
        detailImages: ["no"],
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.",
    },
    {
        company: "Tracker Wallet",
        from: "2021",
        to: "2022",
        role: "Front End Dev",
        coverImage: "no",
        detailImages: ["no"],
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.-BREAK-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem vitae dolorum amet deserunt optio quia facilis iure. Fuga eveniet earum in placeat labore repellat quo itaque nesciunt ratione magni.",
    },
];

interface Props {
    reference: React.MutableRefObject<any>;
    openDetails: (workExperience: WorkExperience) => void;
}
const WorkSection = ({ openDetails, reference }: Props) => {
    const isMobile = useIsMobile(1280);

    return (
        <div style={{ minHeight: "110vh" }} ref={reference} id="workSection">
            <div style={{ maxWidth: 2500, margin: "0 auto", minHeight: "110vh" }} className="w-full flex-col justify-start items-center">
                {!isMobile && <DesktopWorkSection openDetails={openDetails} workExperienceArr={workExperienceArr} />}
                {isMobile && <MobileWork openDetails={openDetails} />}
            </div>
        </div>
    );
};

export default WorkSection;
