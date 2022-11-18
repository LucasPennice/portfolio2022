import * as React from "react";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
import { WorkExperience, workExperienceArr } from "../../../data";
const Carousel = dynamic(() => import("../../Carousel"), {
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
        <div ref={reference} id="workSection" className="xl:pt-28 xl:mt-20">
            <div
                style={{ maxWidth: 2500, margin: "0 auto", minHeight: isMobile ? "auto" : "110vh" }}
                className="w-full flex-col justify-start items-center xl:pb-0 pb-10 xl:px-20 px-4">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl mb-10 xl:mb-20">
                    <h1>.01</h1>
                    <h1>Work Experience</h1>
                </header>
                {!isMobile && <DesktopWorkSection openDetails={openDetails} workExperienceArr={workExperienceArr} />}
                {isMobile && <Carousel onClick={openDetails} workExperienceArr={workExperienceArr} />}
            </div>
        </div>
    );
};

export default WorkSection;
