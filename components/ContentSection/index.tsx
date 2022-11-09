/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion as m, PanInfo, useInView } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import Header from "./Header";
import WorkSection, { WorkExperience } from "./WorkExperience/WorkSection";
import { selectedDetailsContext } from "../../pages";
import useHandleLogoState from "../../utils/useHandleLogoState";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ForDevsSection from "./ForDevsSection";
import useContentInView from "../../utils/useContentInView";
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

    const sectionInView = useContentInView(workSectionRef, aboutSectionRef, contactSectionRef, forDevsSectionRef);
    useEffect(() => {
        console.log(sectionInView);
    }, [sectionInView]);
    useHandleLogoState(contentRef, setShowLogo);

    function openDetails(workExperience: WorkExperience) {
        setSelectedDetails(workExperience);
        setCurrentMode(PortfolioMode.Details);
    }

    return (
        <m.div
            ref={contentRef}
            className={`absolute w-full h-screen z-10 shadow-md overflow-y-scroll overflow-x-clip background ${isLoadFinished && "backgroundShrink"}`}
            animate={currentMode === PortfolioMode.Main ? "active" : "inactive"}
            variants={calculateVariants(currentMode, PortfolioMode.Main)}
            {...layoutAnimationSettings}>
            <Header showLogo={showLogo} sectionInView={sectionInView} />

            <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
                <div className={`w-full flex-col justify-center align-center relative ${isLoadFinished && "heroGrow"}`} style={{ height: "100vh" }}>
                    <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                    <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                    <Laptop />
                </div>
            </div>
            <WorkSection openDetails={openDetails} reference={workSectionRef} />
            <AboutSection reference={aboutSectionRef} />
            <ForDevsSection reference={forDevsSectionRef} />
            <ContactSection reference={contactSectionRef} />
            <OpenMobileMenu openMenu={() => setCurrentMode(PortfolioMode.MobileMenu)} closeMenu={() => setCurrentMode(PortfolioMode.Main)} />
        </m.div>
    );
}

function OpenMobileMenu({ openMenu, closeMenu }: { openMenu: () => void; closeMenu: () => void }) {
    const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const { x, y } = info.offset;
        const { x: Vx, y: Vy } = info.velocity;
        const speed = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));

        if (x > 100 && y < -100 && speed > 700) return openMenu();
        if (x < -100 && y > 100 && speed > 700) return closeMenu();
    };
    return (
        <m.div
            drag
            dragSnapToOrigin
            dragConstraints={{ right: 0, top: 0, left: 0, bottom: 0 }}
            whileDrag={{ scale: 0.6, boxShadow: "none" }}
            className="sticky w-14 h-14 rounded-full m-3 justify-center items-center shadow-2xl shadow-gray-600 bg-white flex xl:hidden"
            dragMomentum={false}
            style={{ top: "100%" }}
            onDrag={handleDrag}>
            drag
        </m.div>
    );
}

function Laptop() {
    return (
        <section className="absolute w-full h-full top-0 left-0 flex justify-center items-center" style={{ opacity: 0.3 }}>
            <div className="laptopContainer">LAPTOP</div>
        </section>
    );
}

export default Content;
