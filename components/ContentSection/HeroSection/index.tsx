import dynamic from "next/dynamic";
import { Suspense } from "react";
const Laptop = dynamic(() => import("./Laptop"), { ssr: false });

function HeroSection() {
    return (
        <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
            <div className={`w-full flex-col justify-center align-center relative`} style={{ height: "100vh" }}>
                <Suspense fallback={Loading()}>
                    <Laptop />
                </Suspense>
            </div>
        </div>
    );
}
export default HeroSection;

function Loading() {
    return <div className="h-full w-full flex justify-center items-center">LOADING</div>;
}
