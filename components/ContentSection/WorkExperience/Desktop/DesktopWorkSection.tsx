import * as React from "react";
import { motion as m, useInView } from "framer-motion";
import { MouseModes, updateMouseModeContext } from "../../../../pages";
import { WorkExperience } from "../../../../data";
import AnimateWordOnView from "../../../AnimateWordOnView";
import AnimatedImageOnView from "../../../AnimatedImageOnView";

function DesktopWorkSection({
    openDetails,
    workExperienceArr,
}: {
    openDetails(workExperience: WorkExperience): void;
    workExperienceArr: WorkExperience[];
}) {
    return (
        <m.div className="hidden xl:block ">
            {workExperienceArr.map((workExperience) => {
                return <Job_Desktop key={workExperience.company} openDetails={openDetails} data={workExperience} />;
            })}
        </m.div>
    );
}

function Job_Desktop({ openDetails, data }: { openDetails(workExperience: WorkExperience): void; data: WorkExperience }) {
    const updateMouseMode = React.useContext(updateMouseModeContext);

    const setMouseDetails = () => updateMouseMode(MouseModes.ClickForDetails);
    const setMouseDefault = () => updateMouseMode(MouseModes.Default);

    return (
        <aside className="flex justify-between items-center gap-6 w-full h-screen mb-20">
            <section style={{ width: "calc(50% - 20px)", height: "100%" }}>
                <Text data={data} openDetails={() => openDetails(data)} />
            </section>

            <section className="flex flex-col items-end justify-center" style={{ width: "calc(50% - 20px)", height: "calc(100vh - 100px)" }}>
                <AnimatedImageOnView
                    containerStyles={{
                        height: "100%",
                        borderRadius: 5,
                        aspectRatio: 2600 / 3840,
                        boxShadow: "1px 2px 9px gray",
                    }}
                    imageProps={{
                        priority: true,
                        alt: "project inmg",
                        height: data.coverImage.resolution.h,
                        width: data.coverImage.resolution.w,
                        src: data.coverImage.src,
                        placeholder: "blur",
                        style: {
                            width: "100%",
                            height: "100%",
                            transition: ".5s ease-in-out",
                        },
                    }}
                    actions={{ onMouseEnter: setMouseDetails, onMouseLeave: setMouseDefault, onClick: () => openDetails(data) }}
                />
                <h1 onMouseEnter={setMouseDetails} onMouseLeave={setMouseDefault} onClick={() => openDetails(data)} className="text-2xl mt-2">
                    More Details
                </h1>
            </section>
        </aside>
    );
}

function Text({ data, openDetails }: { data: WorkExperience; openDetails: () => void }) {
    const updateMouseMode = React.useContext(updateMouseModeContext);
    const companyNameWords = data.company.split(" ");

    const setMouseDetails = () => updateMouseMode(MouseModes.ClickForDetails);
    const setMouseDefault = () => updateMouseMode(MouseModes.Default);

    return (
        <aside className="flex flex-col sticky top-20 cursor-default w-full">
            <div onMouseEnter={setMouseDetails} onMouseLeave={setMouseDefault} onClick={openDetails} className="mb-9">
                {companyNameWords.map((word, idx) => {
                    return <AnimateWordOnView fontSize={110} wordToAnimate={word} underline key={idx} />;
                })}
            </div>

            <AnimateWordOnView fontSize={36} wordToAnimate={data.role} />
        </aside>
    );
}

export default DesktopWorkSection;
