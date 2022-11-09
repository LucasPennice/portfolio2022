import * as React from "react";
import DesktopWorkSection from "./Desktop/DesktopWorkSection";

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
    return (
        <div style={{ minHeight: "110vh" }} ref={reference} id="workSection">
            <div style={{ maxWidth: 2500, margin: "0 auto", minHeight: "110vh" }} className="w-full flex-col justify-start items-center">
                <DesktopWorkSection openDetails={openDetails} workExperienceArr={workExperienceArr} />
                <MobileWork openDetails={openDetails} />
            </div>
        </div>
    );
};

function MobileWork({ openDetails }: { openDetails(workExperience: WorkExperience): void }) {
    return <div className="xl:hidden block">Mobile</div>;
}

export default WorkSection;
