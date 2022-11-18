/* eslint-disable @typescript-eslint/no-use-before-define */
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { ContentSections } from "../..";
import AnimateWordOnView from "../../../AnimateWordOnView";
import HoverSlider from "./HoverSlider";
import Slider from "./Slider";

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
                                className="flex flex-col justify-center items-center"
                                exit={{ width: 0, scale: 0 }}
                                initial={{ width: 0, scale: 0 }}
                                animate={{ width: 100, scale: 1 }}>
                                <AnimateWordOnView fontSize={20} wordToAnimate="LUCAS" />
                                <AnimateWordOnView fontSize={20} wordToAnimate="PENNICE" />
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

export default Header;
