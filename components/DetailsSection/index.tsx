import React, { useContext, useState } from "react";
import { motion as m } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import { selectedDetailsContext } from "../../pages";
function Details({ layoutState }: { layoutState: LayoutState }) {
    const [currentMode, setCurrentMode] = layoutState;
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;

    if (!selectedDetails) return <></>;

    return (
        <m.div
            className="absolute bg-yellow-50 w-screen h-screen"
            animate={currentMode === PortfolioMode.Details ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.Details)}
            {...layoutAnimationSettings}>
            {selectedDetails.company}
            <button
                onClick={() => {
                    setCurrentMode(PortfolioMode.Main);
                }}>
                goback
            </button>
        </m.div>
    );
}
export default Details;
