import * as React from "react";
import { motion as m } from "framer-motion";
import { MouseModes, updateMouseModeContext } from "../../../../pages";
import { WorkExperience } from "../../../../data";
import Image from "next/image";
import AnimateWordOnView from "../../../AnimateWordOnView";

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

            <m.section
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-end justify-center"
                style={{ width: "calc(50% - 20px)", height: "calc(100vh - 100px)", perspective: 1000 }}>
                <div style={{ width: "auto", height: "100%", borderRadius: 5 }} className="overflow-x-hidden overflow-y-hidden">
                    <Image
                        onMouseEnter={setMouseDetails}
                        onMouseLeave={setMouseDefault}
                        onClick={() => openDetails(data)}
                        className="scale-125 hover:scale-110"
                        src="/drill-monkey-01_2x3.webp"
                        style={{
                            width: "auto",
                            height: "100%",
                            borderRadius: 5,
                            transition: ".5s ease-in-out",
                        }}
                        alt="Project img"
                        width={1920}
                        height={1080}
                    />
                </div>
                <h1 onMouseEnter={setMouseDetails} onMouseLeave={setMouseDefault} onClick={() => openDetails(data)} className="text-2xl mt-2">
                    More Details
                </h1>
            </m.section>
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
