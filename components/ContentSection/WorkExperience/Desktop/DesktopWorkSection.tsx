import * as React from "react";
import { useEffect } from "react";
import { motion as m } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { WorkExperience } from "../WorkSection";

function DesktopWorkSection({
    openDetails,
    workExperienceArr,
}: {
    openDetails(workExperience: WorkExperience): void;
    workExperienceArr: WorkExperience[];
}) {
    return (
        <m.div className="hidden xl:block">
            {workExperienceArr.map((workExperience) => {
                return <Job_Desktop key={workExperience.company} openDetails={openDetails} data={workExperience} />;
            })}
        </m.div>
    );
}

const appearTextAnimation = (idx: number) => {
    return {
        whileInView: { top: 0 },
        initial: { top: 100 },
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
    const tilt = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!tilt.current) return;
        VanillaTilt.init(tilt.current, {
            scale: 1.2,
            speed: 500,
            max: 10,
            reverse: true,
            "full-page-listening": true,
        });
    }, []);

    return (
        <aside className="flex justify-evenly items-center gap-6 w-full h-screen mb-80">
            <section style={{ width: "45%", height: "80%" }}>
                <Text data={data} />
            </section>

            <m.section
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center"
                style={{ width: "45%", height: "70%" }}>
                <div
                    ref={tilt}
                    style={{
                        width: "80%",
                        height: "100%",
                        background: 'url("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg") center',
                        backgroundSize: "cover",
                    }}
                    className="aspect-video bg-green-300 shadow-xl shadow-gray-400"
                    onClick={() => openDetails(data)}></div>
            </m.section>
        </aside>
    );
}

function Text({ data }: { data: WorkExperience }) {
    const LETTER_WIDTH = 61.687;
    const companyNameWords = data.company.split(" ");
    return (
        <aside className="flex flex-col sticky top-20 cursor-default">
            {companyNameWords.map((word, idx) => {
                return (
                    <div key={word} className="relative overflow-clip hoverUnderlineDiv" style={{ height: 100, width: word.length * LETTER_WIDTH }}>
                        <m.h1 style={{ fontSize: 90 }} className="absolute" {...appearTextAnimation(idx)}>
                            {word.toUpperCase()}
                        </m.h1>
                        <Underline idx={idx} />
                    </div>
                );
            })}
            <div className="relative overflow-clip mt-5" style={{ height: 100, width: 500 }}>
                <m.h1 style={{ fontSize: 50 }} className="absolute" {...appearTextAnimation(companyNameWords.length)}>
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
