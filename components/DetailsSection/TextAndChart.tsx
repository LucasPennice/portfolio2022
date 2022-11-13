import { useRef, useState } from "react";
import "vis-network/styles/vis-network.css";
import { WorkExperience } from "../../data";
import { motion as m } from "framer-motion";
import useHandleNetworkCreation from "./useHandleNetworkCreation";
import useIsMobile from "../../utils/useMobileScreen";

function TextAndChart({ selectedDetails }: { selectedDetails: WorkExperience }) {
    const caseStudyParagraphs = selectedDetails.caseStudy.split("-BREAK-");
    const graphNetworkState = useState<any>(null);
    const graphContainer = useRef<null | HTMLDivElement>(null);
    const isMobile = useIsMobile(1280);

    useHandleNetworkCreation(graphNetworkState, graphContainer, selectedDetails);

    const animation = {
        whileInView: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: 30 },
        viewport: { once: isMobile ? true : false },
    };

    const screenTransitionDuration = 0.4;

    return (
        <div className="w-full xl:w-1/2 text-xl xl:text-2xl flex flex-col h-auto xl:h-full justify-start " style={{ maxWidth: 1000 }}>
            <m.aside
                {...animation}
                transition={{ bounce: 0, delay: screenTransitionDuration }}
                className="flex-1 flex justify-center items-start flex-col gap-7">
                {caseStudyParagraphs.map((text, idx) => (
                    <p key={idx}>{text}</p>
                ))}
            </m.aside>
            <m.aside
                {...animation}
                transition={{ bounce: 0, delay: screenTransitionDuration + 0.1 }}
                className="flex-1 flex justify-center xl:items-start flex-col">
                <div className="xl:h-96 w-full" style={{ aspectRatio: 1 / 0.5 }} ref={graphContainer} />
            </m.aside>
            <m.aside
                {...animation}
                transition={{ bounce: 0, delay: screenTransitionDuration + 0.2 }}
                className="flex-1 flex justify-center items-start flex-col">
                <h1
                    className="py-5 w-full flex items-center justify-between"
                    style={{ borderStyle: "solid none", borderWidth: 1, borderColor: "717C89" }}>
                    <p>Role</p>
                    <p>{selectedDetails.role}</p>
                </h1>

                <h1
                    className="py-5 w-full flex items-center justify-between"
                    style={{ borderStyle: "none none solid none", borderWidth: 1, borderColor: "717C89" }}>
                    <p>Year</p>
                    <p>
                        {selectedDetails.from} - {selectedDetails.to}
                    </p>
                </h1>
            </m.aside>
        </div>
    );
}
export default TextAndChart;
