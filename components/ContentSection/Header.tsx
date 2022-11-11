/* eslint-disable @typescript-eslint/no-use-before-define */
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { ContentSections } from ".";

interface HeaderAnchorProps {
    sectionName: ContentSections;
    link: string;
}

interface Props {
    showLogo: boolean;
    sectionInView: ContentSections | undefined;
}

const Header = ({ showLogo, sectionInView }: Props) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const [hoveringAnchor, setHoveringAnchor] = React.useState<ContentSections>();

    React.useEffect(() => {
        if (isHovering) return;
        setHoveringAnchor(undefined);
    }, [isHovering]);

    const updateHoveringAnchor = (value: ContentSections) => setHoveringAnchor(value);

    return (
        <div
            className="w-full h-20 z-30 hidden xl:block top-0 sticky backdrop-blur-sm"
            style={{ backgroundColor: "#F0EEEC5A" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <div className="h-full w-full justify-center items-center gap-36 m-auto flex relative z-0" style={{ maxWidth: 1200 }}>
                {sectionInView && <Slider currentContentSection={sectionInView} showLogo={showLogo} />}
                <AnimatePresence>
                    {sectionInView && isHovering && hoveringAnchor && (
                        <HoverSlider hoveringSection={hoveringAnchor} currentContentSection={sectionInView} showLogo={showLogo} />
                    )}
                </AnimatePresence>
                <HeaderAnchor link="#workSection" sectionName={ContentSections.work} />
                <HeaderAnchor link="#aboutSection" sectionName={ContentSections.about} />
                <div>
                    <AnimatePresence>
                        {showLogo && (
                            <m.div
                                className="text-center"
                                exit={{ width: 0, scale: 0 }}
                                initial={{ width: 0, scale: 0 }}
                                animate={{ width: 100, scale: 1 }}>
                                <h2>LUCAS</h2>
                                <h2>PENNICE</h2>
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>
                <HeaderAnchor link="#forDevsSection" sectionName={ContentSections.forDevs} />
                <HeaderAnchor link="#contactSection" sectionName={ContentSections.contact} />
            </div>
        </div>
    );
    function HeaderAnchor({ sectionName, link }: HeaderAnchorProps) {
        const isActive = sectionName === sectionInView;
        return (
            <Link href={link} className="z-20" onMouseEnter={() => updateHoveringAnchor(sectionName)}>
                <h1 className={`text-2xl cursor-pointer px-4 py-3 rounded-md z-10 ${isActive && "text-white"}`}>{sectionName}</h1>
            </Link>
        );
    }
};

interface SliderProps {
    currentContentSection: ContentSections;
    showLogo: boolean;
}

function Slider({ currentContentSection, showLogo }: SliderProps) {
    return (
        <m.aside
            className="absolute z-10"
            initial={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                opacity: 0,
                y: 30,
                width: calculateWidth(currentContentSection),
            }}
            animate={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                opacity: 1,
                y: 0,
                width: calculateWidth(currentContentSection),
            }}
            style={{ height: "52px" }}
            transition={{ type: "spring", bounce: 0.1, damping: 15 }}>
            <m.div
                key={currentContentSection}
                initial={{ filter: "blur(2px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0.1, damping: 15 }}
                className="h-full w-full bg-black rounded-md safariBlurCompatibility"></m.div>
        </m.aside>
    );
}

interface HoverSliderProps extends SliderProps {
    hoveringSection: ContentSections;
}

function HoverSlider({ currentContentSection, showLogo, hoveringSection }: HoverSliderProps) {
    return (
        <m.aside
            className="absolute z-0"
            initial={{
                left: calculateLeftPercentage(currentContentSection, showLogo),
                width: calculateWidth(currentContentSection),
            }}
            animate={{ left: calculateLeftPercentage(hoveringSection, showLogo), width: calculateWidth(hoveringSection) }}
            exit={{ left: calculateLeftPercentage(currentContentSection, showLogo), width: calculateWidth(currentContentSection) }}
            style={{ height: "52px" }}
            transition={{ type: "spring", bounce: 0.1, damping: 20, stiffness: 150 }}>
            <m.div
                key={currentContentSection}
                initial={{ filter: "blur(2px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ type: "spring", bounce: 0.1, damping: 20, stiffness: 150 }}
                className="h-full w-full rounded-md safariBlurCompatibility"
                style={{
                    backgroundColor: "#57737A",
                    opacity: 0.2,
                }}></m.div>
        </m.aside>
    );
}

function calculateLeftPercentage(currentContentSection: ContentSections, showLogo: boolean) {
    let leftPercentage = 0;
    if (currentContentSection === ContentSections.work) {
        leftPercentage = 8.5;
    }
    if (currentContentSection === ContentSections.about) {
        leftPercentage = 27.8;
    }
    if (currentContentSection === ContentSections.forDevs) {
        leftPercentage = 59.6;
    }
    if (currentContentSection === ContentSections.contact) {
        leftPercentage = 82;
    }
    const operation = leftPercentage > 50 ? "+" : "-";

    return showLogo ? `calc(${leftPercentage}% ${operation} 50px)` : `${leftPercentage}%`;
}

function calculateWidth(currentContentSection: ContentSections) {
    if (currentContentSection === ContentSections.work) {
        return "88px";
    }
    if (currentContentSection === ContentSections.about) {
        return "95px";
    }
    if (currentContentSection === ContentSections.forDevs) {
        return "126px";
    }
    return "116px";
}

export default Header;
