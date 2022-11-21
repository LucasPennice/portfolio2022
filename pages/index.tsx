import React, { createContext, useEffect, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import useIsMobile from "../utils/useMobileScreen";
import Content from "../components/ContentSection";
import Details from "../components/DetailsSection";
import dynamic from "next/dynamic";
import { WorkExperience } from "../data";
import { motion as m } from "framer-motion";
const Cursor = dynamic(() => import("../components/Cursor"), {
    ssr: false,
});

export enum MouseModes {
    Default = "Default",
    ClickForDetails = "ClickForDetails",
    Clickeable = "Clickeable",
    Scroll = "Scroll",
    CopyToClipboard = "CopyToClipboard",
    Copied = "Copied",
}
const defaultSelectedDetails: WorkExperience = {
    company: "",
    from: "",
    role: "",
    to: "",
    coverImage: { resolution: { h: 0, w: 0 }, src: "" },
    detailImages: [],
    projectLink: false,
    techStack: [],
    caseStudy: "",
};

export const HEIGHT_WITHOUT_NAVBAR = "calc(100vh - 80px)";

export const selectedDetailsContext = createContext<[WorkExperience, (v: WorkExperience) => void]>([
    defaultSelectedDetails,
    (defaultSelectedDetails) => {},
]);
export const updateMouseModeContext = createContext<(v: MouseModes) => void>(() => {});

export default function Home() {
    const [currentMode, setCurrentMode] = useState<PortfolioMode>(PortfolioMode.Main);
    const [selectedDetails, setSelectedDetails] = useState<WorkExperience>(defaultSelectedDetails);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseMode, setMouseMode] = useState<MouseModes>(MouseModes.Default);

    const isSmallScreen = useIsMobile(1680, true);

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const updateMouseMode = (v: MouseModes) => setMouseMode(v);

    return (
        <updateMouseModeContext.Provider value={updateMouseMode}>
            <div className="overflow-hidden min-h-screen relative" style={{ backgroundColor: "#57737A" }}>
                <Transition currentMode={currentMode} shouldAnimate={selectedDetails.company !== ""} />
                {!isSmallScreen && <Cursor mousePosition={mousePosition} mode={mouseMode} />}
                <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                    <Content layoutState={[currentMode, setCurrentMode]} />
                    <Details layoutState={[currentMode, setCurrentMode]} />
                </selectedDetailsContext.Provider>
            </div>
        </updateMouseModeContext.Provider>
    );
}

function Transition({ currentMode, shouldAnimate }: { currentMode: PortfolioMode; shouldAnimate: boolean }) {
    return (
        <m.div
            initial={shouldAnimate ? { height: "100%", top: "-100%", scale: 1 } : false}
            animate={{
                scale: 0,
                top: ["-100%", "0%", "0%", "100%"],
            }}
            transition={{ times: [0, 0.25, 0.75, 1], duration: 1, easings: "cubic-bezier(0.83, 0, 0.17, 1)", scale: { delay: 1, duration: 0.01 } }}
            key={currentMode}
            className="absolute z-50 w-full h-full bg-black"></m.div>
    );
}
