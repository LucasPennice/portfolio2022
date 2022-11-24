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
    Hidden = "Hidden",
    RotateMe = "RotateMe",
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
    const [blockCustomCursor, setBlockCustomCursor] = useState(false);
    //Hooks
    const isSmallScreen = useIsMobile(1430, false);
    //Derived state
    const showCustomCursor = !isSmallScreen && !blockCustomCursor;

    const toggleBlockCustomCursor = () => setBlockCustomCursor((prev) => !prev);

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

    useEffect(() => {
        const root = document.querySelector("#__next");

        if (!root) return;

        root.setAttribute("show-custom-cursor", showCustomCursor.toString());
    }, [showCustomCursor]);

    return (
        <updateMouseModeContext.Provider value={updateMouseMode}>
            <div className="overflow-hidden min-h-screen relative text-black dark:text-white" style={{ backgroundColor: "#57737A" }}>
                <Transition currentMode={currentMode} shouldAnimate={selectedDetails.company !== ""} />
                {showCustomCursor && <Cursor mousePosition={mousePosition} mode={mouseMode} />}
                <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                    <Content layoutState={[currentMode, setCurrentMode]} blockCustomCursorState={[blockCustomCursor, toggleBlockCustomCursor]} />
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
