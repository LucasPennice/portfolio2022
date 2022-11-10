/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useRef, useState } from "react";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import WorkSection, { WorkExperience } from "./WorkExperience/WorkSection";
import { selectedDetailsContext } from "../../pages";
import useHandleLogoState from "../../utils/useHandleLogoState";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ForDevsSection from "./ForDevsSection";
import useContentInView from "../../utils/useContentInView";
import useIsMobile from "../../utils/useMobileScreen";
import Laptop from "./Laptop";
import dynamic from "next/dynamic";
import { motion as m } from "framer-motion";
const Header = dynamic(() => import("./Header"), {
    ssr: false,
});
const OpenMobileMenu = dynamic(() => import("./OpenMobileMenu"), {
    ssr: false,
});
export enum ContentSections {
    hero = "Hero",
    work = "Work",
    forDevs = "For devs",
    contact = "Contact",
    about = "About",
}
function Content({ layoutState }: { layoutState: LayoutState }) {
    //Context
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;
    //Local State
    const [currentMode, setCurrentMode] = layoutState;
    const [showLogo, setShowLogo] = useState(false);
    //Derivated state
    const isLoadFinished = currentMode !== PortfolioMode.Loading;
    //Refs
    const contentRef = useRef<null | HTMLDivElement>(null);
    //Currently viewing
    const workSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const forDevsSectionRef = useRef(null);

    const isMobile = useIsMobile(1280);
    const sectionInView = useContentInView(workSectionRef, aboutSectionRef, contactSectionRef, forDevsSectionRef);

    useHandleLogoState(contentRef, setShowLogo);

    function openDetails(workExperience: WorkExperience) {
        setSelectedDetails(workExperience);
        setCurrentMode(PortfolioMode.Details);
    }

    return (
        <m.div
            ref={contentRef}
            className={`absolute w-full h-screen background ${isLoadFinished && "backgroundShrink"}`}
            animate={currentMode === PortfolioMode.Main ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.Main)}
            {...layoutAnimationSettings}>
            <m.div />
            <div className="h-full z-10 shadow-md overflow-y-scroll overflow-x-clip relative">
                {!isMobile && <Header showLogo={showLogo} sectionInView={sectionInView} />}

                <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
                    <div
                        className={`w-full flex-col justify-center align-center relative ${isLoadFinished && "heroGrow"}`}
                        style={{ height: "100vh" }}>
                        <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                        <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                        <Laptop />
                    </div>
                </div>
                <WorkSection openDetails={openDetails} reference={workSectionRef} />
                <AboutSection reference={aboutSectionRef} />
                <ForDevsSection reference={forDevsSectionRef} />
                <ContactSection reference={contactSectionRef} />
                {isMobile && (
                    <OpenMobileMenu openMenu={() => setCurrentMode(PortfolioMode.MobileMenu)} closeMenu={() => setCurrentMode(PortfolioMode.Main)} />
                )}
            </div>
        </m.div>
    );
}

export default Content;
