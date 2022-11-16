import dynamic from "next/dynamic";
import { Suspense } from "react";
import useIsMobile from "../../../utils/useMobileScreen";
import AnimateWordOnView from "../../AnimateWordOnView";
const Laptop = dynamic(() => import("./Laptop"), { ssr: false });

function HeroSection() {
    const isMobile = useIsMobile(500);
    return (
        <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
            <div className={`w-full flex flex-col justify-center items-center relative`} style={{ height: "100vh" }}>
                <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="LUCAS" />
                <AnimateWordOnView fontSize={isMobile ? 70 : 110} wordToAnimate="PENNICE" />
                {/* <Suspense fallback={Loading()}>
                    <Laptop />
                </Suspense> */}
            </div>
        </div>
    );
}
export default HeroSection;

function Loading() {
    return <div className="h-full w-full flex justify-center items-center">LOADING</div>;
}
