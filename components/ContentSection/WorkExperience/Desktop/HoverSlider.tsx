import { motion as m } from "framer-motion";
import { ContentSections } from "../..";
import { SliderProps } from "./Slider";
import { calculateLeftPercentage, calculateWidth } from "./sliderFunctions";

interface HoverSliderProps extends SliderProps {
    hoveringSection: ContentSections;
}

function HoverSlider({ currentContentSection, showLogo, hoveringSection }: HoverSliderProps) {
    return (
        <m.aside
            className="absolute z-0"
            initial={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                width: calculateWidth(currentContentSection),
            }}
            animate={{ left: calculateLeftPercentage(hoveringSection, showLogo), width: calculateWidth(hoveringSection) }}
            exit={{ left: calculateLeftPercentage(currentContentSection, showLogo), width: calculateWidth(currentContentSection) }}
            style={{ height: "52px", pointerEvents: "none" }}
            transition={{ type: "spring", bounce: 0.1, damping: 20, stiffness: 150 }}>
            <m.div
                key={currentContentSection}
                initial={{ filter: "blur(2px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0.1, damping: 20, stiffness: 150 }}
                className="h-full w-full rounded-md "
                style={{
                    backgroundColor: "#57737A",
                    opacity: 0.2,
                }}></m.div>
        </m.aside>
    );
}
export default HoverSlider;
