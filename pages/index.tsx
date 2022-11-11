import React, { createContext, useEffect, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import Loading from "../components/LoadingSection";
import { WorkExperience } from "../components/ContentSection/WorkExperience/WorkSection";
import useIsMobile from "../utils/useMobileScreen";
import Content from "../components/ContentSection";
import Details from "../components/DetailsSection";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("../components/Cursor"), {
    ssr: false,
});
const MobileMenu = dynamic(() => import("../components/MobileMenu"), {
    ssr: false,
});

export enum MouseModes {
    Default = "Default",
    ClickForDetails = "ClickForDetails",
    Clickeable = "Clickeable",
}
const defaultSelectedDetails = { company: "", from: "", role: "", to: "" };

export const selectedDetailsContext = createContext<[WorkExperience, (v: WorkExperience) => void]>([defaultSelectedDetails, () => {}]);
export const updateMouseModeContext = createContext<(v: MouseModes) => void>(() => {});

export default function Home() {
    // const [currentMode, setCurrentMode] = useState<PortfolioMode>(PortfolioMode.Loading);
    const [currentMode, setCurrentMode] = useState<PortfolioMode>(PortfolioMode.Main);
    const [selectedDetails, setSelectedDetails] = useState<WorkExperience>(defaultSelectedDetails);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseMode, setMouseMode] = useState<MouseModes>(MouseModes.Default);

    const isMobile = useIsMobile(1280);

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
                {!isMobile && <Cursor mousePosition={mousePosition} mode={mouseMode} />}
                {/* <Loading layoutState={[currentMode, setCurrentMode]} /> */}
                {isMobile && <MobileMenu layoutState={[currentMode, setCurrentMode]} />}
                <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                    <Content layoutState={[currentMode, setCurrentMode]} />
                    <Details layoutState={[currentMode, setCurrentMode]} />
                </selectedDetailsContext.Provider>
            </div>
        </updateMouseModeContext.Provider>
    );
}
