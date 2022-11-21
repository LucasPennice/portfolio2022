import { HEIGHT_WITHOUT_NAVBAR } from "../../../pages";
import useIsMobile from "../../../utils/useMobileScreen";
import AnimatedImageOnView from "../../AnimatedImageOnView";
import AnimateWordOnView from "../../AnimateWordOnView";

function HeroSection() {
    const isMobile = useIsMobile(700);
    const isSmallScreen = useIsMobile(1400);

    const getFontSize = () => {
        if (isMobile) return 35;
        if (isSmallScreen) return 70;
        return 110;
    };

    return (
        <div style={{ maxWidth: 2500, margin: "0 auto", minHeight: "100vh" }} className="w-full flex flex-col justify-center items-center relative">
            <div
                className={`h-full flex flex-col 
                ${!isMobile && isSmallScreen && "justify-center items-start"}  
                ${isMobile && "justify-center items-start"}
                ${!isSmallScreen && !isMobile && "justify-center absolute top-0 left-0 items-start pl-20"}
                `}
                style={{ height: isSmallScreen ? "auto" : HEIGHT_WITHOUT_NAVBAR, width: isSmallScreen ? "clamp(320px,57vw,800px)" : "auto" }}>
                <AnimateWordOnView fontSize={getFontSize()} wordToAnimate="LUCAS" />
                <AnimateWordOnView fontSize={getFontSize()} wordToAnimate="PENNICE" />
                <AnimatedImageOnView
                    priority
                    containerStyles={{
                        width: `clamp(320px,${19 * 3}vw,500px)`,
                        height: `clamp(135px,${8 * 3}vw,209px)`,
                        marginTop: isSmallScreen ? 32 : 0,
                    }}
                    imageProps={{
                        alt: "project inmg",
                        width: 1920,
                        height: 1080,
                        src: "/drill-monkey-01_2x3.webp",
                        styles: {
                            width: "100%",
                            height: "100%",
                            borderRadius: 5,
                            transition: ".5s ease-in-out",
                        },
                    }}
                />
            </div>
            <div
                className={`flex flex-col items-end
                ${!isMobile && isSmallScreen && "mt-8"}  
                ${isMobile && "justify-center items-start mt-8"}
                ${!isSmallScreen && !isMobile && "absolute right-0 bottom-20 px-20"}`}
                style={{ width: isSmallScreen ? "clamp(320px,57vw,800px)" : "100%" }}>
                <AnimateWordOnView fontSize={getFontSize()} wordToAnimate="FULLSTACK" />
                <AnimateWordOnView fontSize={getFontSize()} wordToAnimate="DEVELOPER" />
            </div>
        </div>
    );
}
export default HeroSection;
