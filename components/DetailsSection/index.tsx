import React, { useContext, useEffect } from "react";
import { motion as m } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../../utils/layout";
import { MouseModes, selectedDetailsContext, updateMouseModeContext } from "../../pages";
import ImageScroller from "./ImageScroller";
import dynamic from "next/dynamic";
import useIsMobile from "../../utils/useMobileScreen";
import Image from "next/image";
import YouTube from "react-youtube";
const TextAndIcons = dynamic(() => import("./TextAndIcons"), {
    ssr: false,
});

function Details({ layoutState }: { layoutState: LayoutState }) {
    //Context
    const updateMouseMode = React.useContext(updateMouseModeContext);
    const selectedDetailsState = useContext(selectedDetailsContext);
    const [selectedDetails, setSelectedDetails] = selectedDetailsState!;
    // Local State
    const [currentMode, setCurrentMode] = layoutState;
    const isMobile = useIsMobile(1280);

    const setMouseModeTo = (mode: MouseModes) => () => updateMouseMode(mode);
    const goBackToContent = () => setCurrentMode(PortfolioMode.Main);

    useEffect(() => {
        window.addEventListener("keydown", ifEscGoBackToContent);

        return () => {
            window.removeEventListener("keydown", ifEscGoBackToContent);
        };

        function ifEscGoBackToContent(e: any) {
            if (currentMode !== PortfolioMode.Details) return;
            if (e.key === "Escape") return goBackToContent();
        }
    }, [currentMode]);

    return (
        <m.div
            className="absolute w-screen h-screen bg-white dark:bg-black"
            animate={currentMode === PortfolioMode.Details ? "active" : "inactive"}
            initial="inactive"
            variants={calculateVariants(currentMode, PortfolioMode.Details)}
            {...layoutAnimationSettings}>
            {!isMobile && <DesktopHeader />}
            {isMobile && <MobileHeader />}
            <div
                className="w-full px-4 xl:px-10 flex xl:flex-row flex-col  justify-start items-center relative xl:overflow-x-hidden xl:overflow-y-hidden overflow-y-scroll"
                style={{ height: "calc(100vh - 115px)" }}>
                <TextAndIcons selectedDetails={selectedDetails} />
                {!isMobile && <ImageScroller youtubeDemoVideoId={selectedDetails.youtubeDemoVideoId} imageArr={selectedDetails.detailImages} />}
                {isMobile && (
                    <div className="py-10 w-full">
                        {selectedDetails.youtubeDemoVideoId && (
                            <div style={{ width: "100%", aspectRatio: 16 / 9, marginBottom: 20 }}>
                                <YouTube
                                    videoId={selectedDetails.youtubeDemoVideoId}
                                    opts={{ height: "100%", width: "100%", playerVars: { autoplay: 0 } }}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        )}
                        {selectedDetails.detailImages.map((img, idx) => (
                            <Image
                                key={idx}
                                placeholder="blur"
                                src={img.src}
                                style={{ width: "100%", height: "auto", borderRadius: 5, marginBottom: 20 }}
                                className="shadow-gray shadow-md"
                                alt="Project img"
                                width={img.resolution.w}
                                height={img.resolution.h}
                            />
                        ))}
                    </div>
                )}
            </div>
        </m.div>
    );

    function DesktopHeader() {
        return (
            <header className="flex items-center justify-between p-10 text-3xl">
                <p>Case Study</p>
                {selectedDetails.projectLink && <p>Live</p>}
                <p>{selectedDetails.company}</p>
                <p onMouseEnter={setMouseModeTo(MouseModes.Clickeable)} onMouseLeave={setMouseModeTo(MouseModes.Default)} onClick={goBackToContent}>
                    Close
                </p>
            </header>
        );
    }

    function MobileHeader() {
        return (
            <header>
                <section className="flex justify-between items-center text-xl p-4">
                    <p>Case Study</p>
                    <p
                        onMouseEnter={setMouseModeTo(MouseModes.Clickeable)}
                        onMouseLeave={setMouseModeTo(MouseModes.Default)}
                        onClick={goBackToContent}>
                        Close
                    </p>
                </section>
                <section className="flex justify-between items-center text-3xl p-4 py-6">
                    <p>{selectedDetails.company}</p>
                    {selectedDetails.projectLink && <p>Live</p>}
                </section>
            </header>
        );
    }
}

export default Details;
