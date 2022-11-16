import React, { createContext, useEffect, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import useIsMobile from "../utils/useMobileScreen";
import Content from "../components/ContentSection";
import Details from "../components/DetailsSection";
import dynamic from "next/dynamic";
import { WorkExperience } from "../data";
import { motion as m } from "framer-motion";
import AnimateWordOnView from "../components/AnimateWordOnView";
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
    Scroll = "Scroll",
    CopyToClipboard = "CopyToClipboard",
    Copied = "Copied",
}
const defaultSelectedDetails: WorkExperience = {
    company: "",
    from: "",
    role: "",
    to: "",
    coverImage: "",
    detailImages: [],
    projectLink: false,
    techStack: [],
    caseStudy: "",
};

export const selectedDetailsContext = createContext<[WorkExperience, (v: WorkExperience) => void]>([
    defaultSelectedDetails,
    (defaultSelectedDetails) => {},
]);
export const updateMouseModeContext = createContext<(v: MouseModes) => void>(() => {});

export default function Home() {
    const [loading, setLoading] = useState(true);
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

    const finishLoading = () => setLoading(false);
    const updateMouseMode = (v: MouseModes) => setMouseMode(v);

    return (
        <updateMouseModeContext.Provider value={updateMouseMode}>
            <div className="overflow-hidden min-h-screen relative" style={{ backgroundColor: "#57737A" }}>
                {/* {loading && <LoadingScreen loadingSeconds={4} finishLoading={finishLoading} />} */}
                {!isMobile && <Cursor mousePosition={mousePosition} mode={mouseMode} />}
                {isMobile && <MobileMenu layoutState={[currentMode, setCurrentMode]} />}
                <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                    <Content layoutState={[currentMode, setCurrentMode]} />
                    <Details layoutState={[currentMode, setCurrentMode]} />
                </selectedDetailsContext.Provider>
            </div>
        </updateMouseModeContext.Provider>
    );
}

function LoadingScreen({ loadingSeconds, finishLoading }: { loadingSeconds: number; finishLoading: () => void }) {
    const [loadingStage, setLoadingStage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoadingStage(1);
        }, 1000);
        setTimeout(() => {
            setLoadingStage(2);
        }, 2000);
        setTimeout(() => {
            setLoadingStage(3);
        }, 3000);
        setTimeout(() => {
            finishLoading();
        }, 4200);
    }, []);

    return (
        <m.div
            initial={{ height: "100vh" }}
            animate={{ height: 0 }}
            transition={{ delay: loadingSeconds, duration: 0.2 }}
            className="w-screen h-screen absolute left-0 bottom-0 bg-black z-50">
            <div className="w-full h-full flex justify-center items-center text-white">
                {loadingStage === 0 && <AnimateWordOnView fontSize={70} wordToAnimate={"uno"} />}
                {loadingStage === 1 && <AnimateWordOnView fontSize={70} wordToAnimate={"do"} />}
                {loadingStage === 2 && <AnimateWordOnView fontSize={70} wordToAnimate={"tre"} />}
                {loadingStage === 3 && <AnimateWordOnView fontSize={70} wordToAnimate={"cuatro"} />}
            </div>
        </m.div>
    );
}
