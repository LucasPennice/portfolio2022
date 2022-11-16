import { motion as m } from "framer-motion";
import { Suspense } from "react";
import LaptopScene from "./LaptopScene";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function Laptop() {
    function getCameraDistance() {
        if (window.innerHeight < 1300) return 10.5;
        return 10;
    }
    return (
        <section className="absolute w-full h-full -top-7 left-0 ">
            <Canvas dpr={2} camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, getCameraDistance()] }}>
                <Suspense fallback={Loading()}>
                    <LaptopScene />
                </Suspense>
            </Canvas>
        </section>
    );
}
export default Laptop;

function Loading() {
    return (
        <Html>
            <div>LOADING</div>
        </Html>
    );
}
