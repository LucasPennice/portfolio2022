import React, { createContext, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import Details from "../components/DetailsScreen";
import MobileMenu from "../components/MobileMenu";
import Loading from "../components/LoadingScreen";
import Content from "../components/Content/ContentScreen";
import { WorkExperience } from "../components/Content/Work/WorkSection";

export const selectedDetailsContext = createContext<[WorkExperience | null, (v: WorkExperience) => void] | null>(null);

export default function Home() {
    // const [currentlyViewing, setCurrentlyViewing] = useState<PortfolioMode>(PortfolioMode.Loading);
    const [currentlyViewing, setCurrentlyViewing] = useState<PortfolioMode>(PortfolioMode.Main);
    const [selectedDetails, setSelectedDetails] = useState<WorkExperience | null>(null);

    return (
        <div className="overflow-clip min-h-screen bg-white relative">
            <button
                className="absolute z-30 top-5 right-0"
                onClick={() => {
                    if (currentlyViewing === PortfolioMode.Loading) return setCurrentlyViewing(PortfolioMode.Main);
                    if (currentlyViewing === PortfolioMode.Main) return setCurrentlyViewing(PortfolioMode.MobileMenu);
                    if (currentlyViewing === PortfolioMode.MobileMenu) return setCurrentlyViewing(PortfolioMode.Details);
                    return setCurrentlyViewing(PortfolioMode.Loading);
                }}>
                swap
            </button>
            <Loading layoutState={[currentlyViewing, setCurrentlyViewing]} />
            <MobileMenu layoutState={[currentlyViewing, setCurrentlyViewing]} />
            <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                <Content layoutState={[currentlyViewing, setCurrentlyViewing]} />
                <Details layoutState={[currentlyViewing, setCurrentlyViewing]} />
            </selectedDetailsContext.Provider>
        </div>
    );
}
