import { motion as m } from "framer-motion";
import useIsMobile from "../../../utils/useMobileScreen";
import Laptop from "./Laptop";

function HeroSection() {
    const isMobile = useIsMobile(1280);

    return (
        <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
            <div className={`w-full flex-col justify-center align-center relative`} style={{ height: "100vh" }}>
                <m.section
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col justify-center items-center"
                    style={{ height: isMobile ? "100vh" : "calc(100vh - 80px)" }}>
                    <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                    <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                </m.section>
                <Laptop />
            </div>
        </div>
    );
}
export default HeroSection;
