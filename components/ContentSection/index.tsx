/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import { selectedDetailsContext } from "../../pages";
import useHandleLogoState from "../../utils/useHandleLogoState";
import AboutSection from "./AboutSection";
import ForDevsSection from "./ForDevsSection";
import useContentInView from "../../utils/useContentInView";
import useIsMobile from "../../utils/useMobileScreen";
import dynamic from "next/dynamic";
import { motion as m } from "framer-motion";
import { WorkExperience } from "../../data";
import WorkSection from "./WorkExperience/WorkSection";
import HeroSection from "./HeroSection";
const Header = dynamic(() => import("./WorkExperience/Desktop/Header"), {
    ssr: false,
});
const ContactSection = dynamic(() => import("./ContactSection"), {
    ssr: false,
});

export enum ContentSections {
    hero = "Hero",
    work = "Work",
    forDevs = "For devs",
    contact = "Contact",
    about = "About",
}

function Content({ layoutState, blockCustomCursorState }: { layoutState: LayoutState; blockCustomCursorState: [boolean, () => void] }) {
    //Context
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;
    //Local State
    const [currentMode, setCurrentMode] = layoutState;
    const [showLogo, setShowLogo] = useState(false);
    const [allowContentScroll, setAllowContentScroll] = useState(true);
    //Derivated state
    const isLoadFinished = currentMode !== PortfolioMode.Loading;
    //Refs
    const contentRef = useRef<null | HTMLDivElement>(null);
    //Currently viewing
    const workSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const forDevsSectionRef = useRef(null);

    const smoothScrolling = useRef(null);

    const isSmallScreen = useIsMobile(1430, false);
    const sectionInView = useContentInView(workSectionRef, aboutSectionRef, contactSectionRef, forDevsSectionRef);

    useHandleLogoState(contentRef, setShowLogo);

    function openDetails(workExperience: WorkExperience) {
        setSelectedDetails(workExperience);
        setCurrentMode(PortfolioMode.Details);
    }

    return (
        <m.div
            ref={smoothScrolling}
            className={`absolute w-full h-screen background ${isLoadFinished && "backgroundShrink"}`}
            animate={currentMode === PortfolioMode.Main ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.Main)}
            {...layoutAnimationSettings}>
            <div
                ref={contentRef}
                className={`h-full z-10 shadow-md ${allowContentScroll ? "overflow-y-scroll" : "overflow-y-hidden"} overflow-x-hidden relative`}>
                {!isSmallScreen && <Header showLogo={showLogo} sectionInView={sectionInView} blockCustomCursorState={blockCustomCursorState} />}
                <HeroSection />
                <WorkSection openDetails={openDetails} reference={workSectionRef} />
                <AboutSection reference={aboutSectionRef} />
                <ForDevsSection reference={forDevsSectionRef} />
                <ContactSection blockCustomCursorState={blockCustomCursorState} reference={contactSectionRef} />
            </div>
        </m.div>
    );
}

export default Content;
