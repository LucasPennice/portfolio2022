/* eslint-disable @typescript-eslint/no-use-before-define */
import { motion as m } from "framer-motion";
import * as React from "react";
import { ContentSections } from "../..";
import { calculateLeftPercentage, calculateWidth } from "./sliderFunctions";

export interface SliderProps {
    currentContentSection: ContentSections;
    showLogo: boolean;
}

function Slider({ currentContentSection, showLogo }: SliderProps) {
    return (
        <m.aside
            className="absolute z-10 pointer-events-none"
            initial={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                opacity: 0,
                y: 30,
                width: calculateWidth(currentContentSection),
            }}
            animate={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                opacity: 1,
                y: 0,
                width: calculateWidth(currentContentSection),
            }}
            style={{ height: "52px" }}
            transition={{ type: "spring", bounce: 0.1, damping: 15 }}>
            <m.div
                key={currentContentSection}
                initial={{ filter: "blur(2px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0.1, damping: 15 }}
                className="h-full w-full bg-black rounded-md safariBlurCompatibility"></m.div>
        </m.aside>
    );
}
export default Slider;
