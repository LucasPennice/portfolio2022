import React, { createContext, useState } from "react";
import { PortfolioMode } from "../utils/layout";
import Details from "../components/DetailsSection";
import MobileMenu from "../components/MobileMenu";
import Loading from "../components/LoadingSection";
import Content from "../components/ContentSection";
import { WorkExperience } from "../components/ContentSection/WorkExperience/WorkSection";

export const selectedDetailsContext = createContext<[WorkExperience | null, (v: WorkExperience) => void] | null>(null);

export default function Home() {
    // const [currentMode, setCurrentMode] = useState<PortfolioMode>(PortfolioMode.Loading);
    const [currentMode, setCurrentMode] = useState<PortfolioMode>(PortfolioMode.Main);
    const [selectedDetails, setSelectedDetails] = useState<WorkExperience | null>(null);

    return (
        <div className="overflow-clip min-h-screen bg-white relative">
            <Loading layoutState={[currentMode, setCurrentMode]} />
            <MobileMenu layoutState={[currentMode, setCurrentMode]} />
            <selectedDetailsContext.Provider value={[selectedDetails, setSelectedDetails]}>
                <Content layoutState={[currentMode, setCurrentMode]} />
                <Details layoutState={[currentMode, setCurrentMode]} />
            </selectedDetailsContext.Provider>
        </div>
    );
}
