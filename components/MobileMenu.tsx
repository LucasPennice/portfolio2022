import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../utils/layout";

function MobileMenu({ layoutState }: { layoutState: LayoutState }) {
    const [currentMode, setCurrentMode] = layoutState;

    return (
        <m.div
            className="absolute w-screen h-screen bg-white z-0 flex justify-start items-end"
            animate={currentMode === PortfolioMode.MobileMenu ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.MobileMenu)}
            {...layoutAnimationSettings}>
            mobileMenu
            <button onClick={() => setCurrentMode(PortfolioMode.Main)}>close</button>
        </m.div>
    );
}

export default MobileMenu;
