import useIsMobile from "../../../utils/useMobileScreen";
import AnimatedImageOnView from "../../AnimatedImageOnView";
import AnimateWordOnView from "../../AnimateWordOnView";

function HeroSection() {
    const isMobile = useIsMobile(1750);
    return (
        <div style={{ maxWidth: 2500, margin: "0 auto", minHeight: "100vh" }} className="w-full flex-col justify-start items-center relative">
            <div className="absolute md:top-8 2xl:top-1/4 left-0">
                <div className={`w-full flex flex-col justify-center items-start relative px-20`}>
                    <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="LUCAS" />
                    <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="PENNICE" />
                    <AnimatedImageOnView
                        imageProps={{
                            alt: "project inmg",
                            width: 1920,
                            height: 1080,
                            src: "/drill-monkey-01_2x3.webp",
                            styles: {
                                width: 192 * 4,
                                height: 108 * 4,
                                borderRadius: 5,
                                transition: ".5s ease-in-out",
                            },
                        }}
                    />
                </div>
            </div>
            <div className={`w-full flex flex-col justify-end items-end relative px-20`} style={{ height: "90vh" }}>
                <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="FULLSTACK" />
                <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="DEVELOPER" />
            </div>
        </div>
    );
}
export default HeroSection;
