import { motion as m } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import Loading from "../components/LoadingSection";
import { WorkExperience } from "../components/ContentSection/WorkExperience/WorkSection";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("../components/MobileMenu"), { ssr: false });
const Details = dynamic(() => import("../components/DetailsSection"), { ssr: false });
const Content = dynamic(() => import("../components/ContentSection"), { ssr: false });

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
            <div className="overflow-clip min-h-screen relative" style={{ backgroundColor: "#57737A" }}>
                <Cursor mousePosition={mousePosition} mode={mouseMode} />
                <Loading layoutState={[currentMode, setCurrentMode]} />
                <MobileMenu layoutState={[currentMode, setCurrentMode]} />
                <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                    <Content layoutState={[currentMode, setCurrentMode]} />
                    <Details layoutState={[currentMode, setCurrentMode]} />
                </selectedDetailsContext.Provider>
            </div>
        </updateMouseModeContext.Provider>
    );
}

function Cursor({ mousePosition, mode }: { mousePosition: { x: number; y: number }; mode: MouseModes }) {
    function getStylesOfMode(mode: MouseModes) {
        const position = {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        };

        if (mode === MouseModes.ClickForDetails) {
            return { ...position, height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "#E01A4F" };
        }
        if (mode === MouseModes.Clickeable) {
            return { ...position, height: "45px", width: "45px", mixBlendMode: "normal", backgroundColor: "#E01A4F" };
        }

        return { ...position, height: "32px", width: "32px", mixBlendMode: "difference", backgroundColor: "white" };
    }

    return (
        <m.div
            style={{
                borderRadius: "50%",
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 999,
            }}
            className="hidden xl:block cursor"
            //@ts-ignore
            animate={getStylesOfMode(mode)}
            transition={{ type: "spring", damping: 30, stiffness: 550, bounce: 0.1 }}>
            {mode === MouseModes.ClickForDetails && (
                <div className="h-full w-full flex flex-col justify-center items-center text-white" style={{ fontSize: 12, fontWeight: "bold" }}>
                    <p>Click</p>
                    <p>For</p>
                    <p>Details</p>
                </div>
            )}
        </m.div>
    );
}
