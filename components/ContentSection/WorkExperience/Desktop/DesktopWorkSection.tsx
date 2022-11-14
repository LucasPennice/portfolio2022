import * as React from "react";
import { useEffect } from "react";
import { motion as m, useScroll } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { MouseModes, updateMouseModeContext } from "../../../../pages";
import { WorkExperience } from "../../../../data";
import Image from "next/image";

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

const appearTextAnimation = (idx: number) => {
    return {
        whileInView: { top: 0 },
        initial: { top: 130 },
        transition: { duration: 0.7, delay: parseFloat(`0.${idx * 3}`) },
        viewport: { once: true },
    };
};
const appearTextUnderlineAnimation = (idx: number) => {
    return {
        whileInView: { width: "100%" },
        initial: { width: 0 },
        transition: { duration: 0.7, delay: parseFloat(`0.${idx * 3}`) },
        viewport: { once: true },
    };
};

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
                style={{ width: "calc(50% - 20px)", height: "100%", perspective: 1000 }}>
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
    const LETTER_WIDTH = 82.25;
    const companyNameWords = data.company.split(" ");
    return (
        <aside className="flex flex-col sticky top-20 cursor-default w-full">
            <div
                onMouseEnter={() => {
                    updateMouseMode(MouseModes.ClickForDetails);
                }}
                onMouseLeave={() => {
                    updateMouseMode(MouseModes.Default);
                }}
                onClick={openDetails}>
                {companyNameWords.map((word, idx) => {
                    return (
                        <div
                            key={word}
                            className="relative overflow-x-hidden overflow-y-hidden hoverUnderlineDiv"
                            style={{ height: 130, width: word.length * LETTER_WIDTH }}>
                            <m.h1 style={{ fontSize: 120 }} className="absolute" {...appearTextAnimation(idx)}>
                                {word.toUpperCase()}
                            </m.h1>
                            <Underline idx={idx} />
                        </div>
                    );
                })}
            </div>
            <div className="relative overflow-x-hidden overflow-y-hidden mt-20 w-full flex justify-start" style={{ height: 140 }}>
                <m.h1 style={{ fontSize: 50 }} className="absolute left-0" {...appearTextAnimation(companyNameWords.length)}>
                    {data.role}
                </m.h1>
            </div>
        </aside>
    );
}

function Underline({ idx }: { idx: number }) {
    return <m.div {...appearTextUnderlineAnimation(idx)} style={{ height: 7 }} className="w-full absolute bottom-0 left-0 bg-black"></m.div>;
}
export default DesktopWorkSection;
