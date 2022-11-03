/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion as m, MotionValue, PanInfo, useDragControls, useScroll, useTransform } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import Header from "./Header";
import Work, { WorkExperience } from "./Work/WorkSection";
import { selectedDetailsContext } from "../../pages";

function Content({ layoutState }: { layoutState: LayoutState }) {
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;
    const [currentlyViewing, setCurrentlyViewing] = layoutState;
    const [showLogo, setShowLogo] = useState(false);
    //Derivated state
    const isLoadFinished = currentlyViewing !== PortfolioMode.Loading;

    const contentRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        contentRef.current.addEventListener("scroll", handleScroll);

        return () => {
            contentRef.current?.removeEventListener("scroll", handleScroll);
        };

        function handleScroll(e: any) {
            const distanceToTop: number = e.target.scrollTop;
            if (distanceToTop > 100) return setShowLogo(true);
            return setShowLogo(false);
        }
    }, []);

    function openDetails(workExperience: WorkExperience) {
        setSelectedDetails(workExperience);
        setCurrentlyViewing(PortfolioMode.Details);
    }

    return (
        <m.div
            ref={contentRef}
            className={`absolute w-full h-screen z-10 shadow-md overflow-y-scroll overflow-x-clip background ${isLoadFinished && "backgroundShrink"}`}
            animate={currentlyViewing === PortfolioMode.Main ? "active" : "inactive"}
            variants={calculateVariants(currentlyViewing, PortfolioMode.Main)}
            {...layoutAnimationSettings}>
            <Header showLogo={showLogo} />

            <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
                <div className={`w-full flex-col justify-center align-center relative ${isLoadFinished && "heroGrow"}`} style={{ height: "100vh" }}>
                    <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                    <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                    <Laptop />
                </div>
            </div>
            <Work openDetails={openDetails} />
            <OpenMobileMenu
                openMenu={() => setCurrentlyViewing(PortfolioMode.MobileMenu)}
                closeMenu={() => setCurrentlyViewing(PortfolioMode.Main)}
            />
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
