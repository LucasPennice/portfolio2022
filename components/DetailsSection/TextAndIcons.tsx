import { WorkExperience } from "../../data";
import { motion as m } from "framer-motion";

function TextAndIcons({ selectedDetails }: { selectedDetails: WorkExperience }) {
    const caseStudyParagraphs = selectedDetails.caseStudy.split("-BREAK-");

    const animation = {
        whileInView: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: 50 },
    };

    const screenTransitionDuration = 0.7;

    return (
        <div className="w-full xl:w-1/2 text-xl xl:text-2xl flex flex-col h-auto xl:h-full justify-start xl:gap-0 gap-10" style={{ maxWidth: 1000 }}>
            <m.aside
                {...animation}
                transition={{ easings: "cubic-bezier(0.83, 0, 0.17, 1)", delay: screenTransitionDuration }}
                className="flex-1 flex justify-center items-start flex-col gap-7"
                style={{ fontSize: "clamp(16px,1.3vw,22px)" }}>
                {caseStudyParagraphs.map((text, idx) => (
                    <p key={idx}>{text}</p>
                ))}
            </m.aside>
            <m.aside
                {...animation}
                transition={{ easings: "cubic-bezier(0.83, 0, 0.17, 1)", delay: screenTransitionDuration + 0.1 }}
                className="flex-1 flex flex-wrap justify-center items-center gap-5">
                {selectedDetails.techStack.map((tech, idx) => {
                    return (
                        <div key={idx} className="flex-1 flex flex-col justify-start items-center gap-1">
                            <aside
                                className="w-16 h-16 flex justify-center items-center rounded-sm"
                                style={{ fontSize: 40, color: "#F0EEEC", backgroundColor: "#12100E" }}>
                                {tech.icon}
                            </aside>
                            <p className="text-base text-center" style={{ height: 36 }}>
                                {tech.label}
                            </p>
                        </div>
                    );
                })}
            </m.aside>
            <m.aside
                {...animation}
                transition={{ easings: "cubic-bezier(0.83, 0, 0.17, 1)", delay: screenTransitionDuration + 0.2 }}
                className="flex-1 flex justify-center items-end flex-col">
                <h1
                    className="py-5 w-full flex items-center justify-between"
                    style={{ borderStyle: "solid none", borderWidth: 1, borderColor: "717C89" }}>
                    <p>Role</p>
                    <p>{selectedDetails.role}</p>
                </h1>

                {/* <h1
                    className="py-5 w-full flex items-center justify-between"
                    style={{ borderStyle: "none none solid none", borderWidth: 1, borderColor: "717C89" }}>
                    <p>Year</p>
                    <p>
                        {selectedDetails.from} - {selectedDetails.to}
                    </p>
                </h1> */}
            </m.aside>
        </div>
    );
}
export default TextAndIcons;
