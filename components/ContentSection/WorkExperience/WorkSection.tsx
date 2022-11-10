import * as React from "react";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
const MobileWork = dynamic(() => import("./Mobile"), {
    ssr: false,
});
const DesktopWorkSection = dynamic(() => import("./Desktop/DesktopWorkSection"), {
    ssr: false,
});
export interface WorkExperience {
    company: string;
    role: string;
    from: string;
    to: string;
}

const workExperienceArr: WorkExperience[] = [
    { company: "Creator Set", from: "2021", to: "2022", role: "Front End Dev" },
    { company: "Tracker Wallet", from: "2021", to: "2022", role: "Front End Dev" },
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
