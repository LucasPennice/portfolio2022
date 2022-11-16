import { motion as m } from "framer-motion";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Laptop = dynamic(() => import("./Laptop"), { ssr: false });

function HeroSection() {
    const isMobile = useIsMobile(1280);

    return (
        <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
            <Suspense fallback={Loading()}>
                <div className={`w-full flex-col justify-center align-center relative`} style={{ height: "100vh" }}>
                    <m.section
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="flex flex-col justify-center items-center"
                        style={{ height: isMobile ? "100vh" : "calc(100vh - 80px)" }}>
                        <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                        <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                    </m.section>
                    <Laptop />
                </div>
            </Suspense>
        </div>
    );
}
export default HeroSection;

function Loading() {
    return <div>LOADING</div>;
}
