import { useRef, useState } from "react";
import { WorkExperience } from "../ContentSection/WorkExperience/WorkSection";
import "vis-network/styles/vis-network.css";
import useHandleNetworkCreation from "./useHandleNetworkCreation";

function TextAndChart({ selectedDetails }: { selectedDetails: WorkExperience }) {
    const caseStudyParagraphs = selectedDetails.caseStudy.split("-BREAK-");
    const graphNetworkState = useState<any>(null);
    const graphContainer = useRef<null | HTMLDivElement>(null);

    useHandleNetworkCreation(graphNetworkState, graphContainer, selectedDetails);

    return (
        <div className="w-1/2 text-2xl flex flex-col gap-8" style={{ maxWidth: 1000 }}>
            {caseStudyParagraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
            ))}

            <h1>
                <mark>Role</mark> {selectedDetails.role}
            </h1>

            <h1>
                <mark>Year</mark> {selectedDetails.from} - {selectedDetails.to}
            </h1>

            <div className="h-96 w-full" ref={graphContainer}></div>
        </div>
    );
}
export default TextAndChart;
