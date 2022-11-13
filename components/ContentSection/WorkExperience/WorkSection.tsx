import * as React from "react";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
import { WorkExperience, workExperienceArr } from "../../../data";
const MobileWork = dynamic(() => import("./Mobile"), {
    ssr: false,
});
const DesktopWorkSection = dynamic(() => import("./Desktop/DesktopWorkSection"), {
    ssr: false,
});

interface Props {
    reference: React.MutableRefObject<any>;
    openDetails: (workExperience: WorkExperience) => void;
}
const WorkSection = ({ openDetails, reference }: Props) => {
    const isMobile = useIsMobile(1280);

    return (
        <div ref={reference} id="workSection">
            <div
                style={{ maxWidth: 2500, margin: "0 auto", minHeight: isMobile ? "auto" : "110vh" }}
                className="w-full flex-col justify-start items-center xl:pb-0 pb-40">
                {!isMobile && <DesktopWorkSection openDetails={openDetails} workExperienceArr={workExperienceArr} />}
                {isMobile && <MobileWork openDetails={openDetails} workExperienceArr={workExperienceArr} />}
            </div>
        </div>
    );
};

export default WorkSection;
