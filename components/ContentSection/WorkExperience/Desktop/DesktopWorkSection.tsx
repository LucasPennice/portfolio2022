import * as React from "react";
import { useEffect } from "react";
import { motion as m, useScroll } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { MouseModes, updateMouseModeContext } from "../../../../pages";
import { WorkExperience } from "../../../../data";
import Image from "next/image";
import { appearTextAnimation, appearTextUnderlineAnimation } from "../../../../utils/animations";

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
                {companyNameWords.map((word, wordIdx) => {
                    return (
                        <div
                            key={word}
                            className="relative overflow-x-hidden overflow-y-hidden flex justify-start hoverUnderlineDiv"
                            style={{ height: 130, width: word.length * LETTER_WIDTH }}>
                            {word.split("").map((letter, idx) => {
                                const calculateLetterDelay = () => {
                                    return idx / 20;
                                };

                                return (
                                    <m.h1
                                        className="absolute"
                                        {...appearTextAnimation(calculateLetterDelay(), 130)}
                                        style={{ left: LETTER_WIDTH * idx, fontSize: 115 }}
                                        key={`${wordIdx}${idx}`}>
                                        {letter.toUpperCase()}
                                    </m.h1>
                                );
                            })}
                            <Underline delay={companyNameWords.length / 3} />
                        </div>
                    );
                })}
            </div>

            <div className="relative overflow-x-hidden overflow-y-hidden flex justify-start mt-10" style={{ height: 50 }}>
                {data.role.split("").map((letter, idx) => {
                    const calculateLetterDelay = () => {
                        return idx / 40;
                    };

                    return (
                        <m.h1
                            className="absolute"
                            {...appearTextAnimation(calculateLetterDelay() + 0.5, 50)}
                            style={{ left: 30 * idx, fontSize: 40 }}
                            key={`${letter}${idx}`}>
                            {letter.toUpperCase()}
                        </m.h1>
                    );
                })}
            </div>
        </aside>
    );
}

function Underline({ delay }: { delay: number }) {
    return <m.div {...appearTextUnderlineAnimation(delay)} style={{ height: 7 }} className="w-full absolute bottom-0 left-0 bg-black"></m.div>;
}
export default DesktopWorkSection;
