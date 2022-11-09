import React from "react";
import { motion as m } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";

function Loading({ layoutState }: { layoutState: LayoutState }) {
    const [currentMode, setCurrentMode] = layoutState;
    return (
        <m.div
            className="absolute bg-black w-screen h-screen z-20"
            animate={currentMode === PortfolioMode.Loading ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.Loading)}
            {...layoutAnimationSettings}></m.div>
    );
}
export default Loading;
