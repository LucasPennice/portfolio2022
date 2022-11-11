import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import { MouseModes, selectedDetailsContext, updateMouseModeContext } from "../../pages";
import ImageScroller from "./ImageScroller";
import dynamic from "next/dynamic";
const TextAndChart = dynamic(() => import("./TextAndChart"), {
    ssr: false,
});

function Details({ layoutState }: { layoutState: LayoutState }) {
    //Context
    const updateMouseMode = React.useContext(updateMouseModeContext);
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;
    // Local State
    const [currentMode, setCurrentMode] = layoutState;

    const setMouseModeTo = (mode: MouseModes) => () => updateMouseMode(mode);
    const goBackToContent = () => setCurrentMode(PortfolioMode.Main);

    return (
        <m.div
            className="absolute w-screen h-screen bg-white"
            animate={currentMode === PortfolioMode.Details ? "active" : "inactive"}
            initial="inactive"
            variants={calculateVariants(currentMode, PortfolioMode.Details)}
            {...layoutAnimationSettings}>
            <header className="flex items-center justify-between p-10 text-3xl">
                <p>Case Study</p>
                {selectedDetails.projectLink && <p>Live</p>}
                <p>{selectedDetails.company}</p>
                <p onMouseEnter={setMouseModeTo(MouseModes.Clickeable)} onMouseLeave={setMouseModeTo(MouseModes.Default)} onClick={goBackToContent}>
                    Close
                </p>
            </header>
            <div className="w-full px-10 flex justify-start items-center relative" style={{ height: "calc(100vh - 115px)" }}>
                <TextAndChart selectedDetails={selectedDetails} />
                <ImageScroller imageArr={selectedDetails.detailImages} />
            </div>
        </m.div>
    );
}

export default Details;
