import * as React from "react";
import { motion as m } from "framer-motion";
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
        <aside className="flex justify-between items-center gap-6 w-full mb-20">
            <section style={{ width: "calc(50% - 20px)", aspectRatio: 2600 / 3840 }}>
                <Text data={data} openDetails={() => openDetails(data)} />
            </section>

            <section className="flex flex-col items-end justify-center" style={{ width: "calc(50% - 20px)" }}>
                <AnimatedImageOnView
                    containerStyles={{
                        width: "100%",
                        borderRadius: 5,
                        aspectRatio: 2600 / 3840,
                        cursor: "pointer",
                    }}
                    containerClass="shadow-lg dark:shadow-none shadow-grayShadow"
                    imageProps={{
                        priority: true,
                        alt: "project inmg",
                        height: data.coverImage.resolution.h,
                        width: data.coverImage.resolution.w,
                        src: data.coverImage.src,
                        placeholder: "blur",
                        style: {
                            width: "100%",
                            transition: ".5s ease-in-out",
                        },
                    }}
                    actions={{ onMouseEnter: setMouseDetails, onMouseLeave: setMouseDefault, onClick: () => openDetails(data) }}
                />
                <h1
                    onMouseEnter={setMouseDetails}
                    onMouseLeave={setMouseDefault}
                    onClick={() => openDetails(data)}
                    className="text-2xl mt-2 cursor-pointer">
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
        <aside className="flex flex-col sticky top-20 w-full">
            <div onMouseEnter={setMouseDetails} onMouseLeave={setMouseDefault} onClick={openDetails} className="mb-9 cursor-pointer">
                {companyNameWords.map((word, idx) => {
                    return <AnimateWordOnView fontSize={110} wordToAnimate={word} underline key={idx} />;
                })}
            </div>

            <AnimateWordOnView fontSize={36} wordToAnimate={data.role} />
        </aside>
    );
}

export default DesktopWorkSection;
