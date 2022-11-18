import useIsMobile from "../../../utils/useMobileScreen";
import { motion as m } from "framer-motion";
import { appearOpacity } from "../../../utils/animations";
import { ABOUT_SECTION_DATA } from "../../../data";
import useInRange from "../../../utils/useInRange";

interface Props {
    reference: React.MutableRefObject<any>;
}

const AboutSection = ({ reference }: Props) => {
    const isMobile = useIsMobile(1280);
    const shouldAddMarginBottomTablet = useInRange(1275, 1679);
    const shouldAddMarginBottomComputer = useInRange(1680, 2400);

    return (
        <div id="aboutSection" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto" }}
                className="w-full flex text-2xl flex-col justify-start items-center xl:pb-0 pb-3 px-4 xl:px-20 xl:gap-0 gap-8">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl my-1 xl:my-20 ">
                    <h1>.02</h1>
                    <h1>About</h1>
                </header>
                <aside
                    className={`w-full text-2xl xl:text-4xl xl:h-screen`}
                    style={{ marginBottom: shouldAddMarginBottomTablet ? 600 : shouldAddMarginBottomComputer ? 300 : 0 }}>
                    {ABOUT_SECTION_DATA.textArray.map((paragraph, idx) => {
                        return (
                            <m.h1 key={paragraph} className="mb-14" {...appearOpacity(idx / 10)}>
                                {paragraph}
                            </m.h1>
                        );
                    })}

                    <m.h1 {...appearOpacity(0.3)}>I have professional experience with the following technologies</m.h1>
                    <m.div {...appearOpacity(0.4)} className={`w-full my-12 xl:my-24 flex flex-wrap justify-center items-center gap-7`}>
                        {ABOUT_SECTION_DATA.workExperienceTech.map((tech, idx) => {
                            return (
                                <div key={idx} className="flex-1 flex flex-col justify-start items-center gap-1">
                                    <aside
                                        className="w-16 h-16 xl:w-32 xl:h-32 flex justify-center items-center rounded-md"
                                        style={{ fontSize: isMobile ? 40 : 65, color: "#F0EEEC", backgroundColor: "#12100E" }}>
                                        {tech.icon}
                                    </aside>
                                    <p className="text-base" style={{ height: 36 }}>
                                        {tech.label}
                                    </p>
                                </div>
                            );
                        })}
                    </m.div>
                    <m.h1 {...appearOpacity(0.5)}>I have used the following technologies for personal projects</m.h1>
                    <m.div {...appearOpacity(0.6)} className="w-full flex flex-wrap justify-center items-center gap-7 my-12 xl:my-24">
                        {ABOUT_SECTION_DATA.haveUsedBeforeTech.map((tech, idx) => {
                            return (
                                <div key={idx} className="flex-1 flex flex-col justify-start items-center gap-1">
                                    <aside
                                        className="w-16 h-16 xl:w-32 xl:h-32 flex justify-center items-center rounded-md"
                                        style={{ fontSize: isMobile ? 40 : 65, color: "#F0EEEC", backgroundColor: "#12100E" }}>
                                        {tech.icon}
                                    </aside>
                                    <p className="text-base" style={{ height: 36 }}>
                                        {tech.label}
                                    </p>
                                </div>
                            );
                        })}
                    </m.div>
                </aside>
            </div>
        </div>
    );
};
export default AboutSection;
