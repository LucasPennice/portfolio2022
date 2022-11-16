import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { LaptopModel } from "./LaptopModel";

const LaptopScene = () => {
    const laptopRef = useRef<Group | null>(null);

    useEffect(() => {
        if (!laptopRef.current) return;
        gsap.from(laptopRef.current.position, { z: 8 });
        gsap.to(laptopRef.current.position, { z: 0, duration: 3.5, ease: "power2.out" });
    }, [laptopRef]);

    return (
        <>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
            <LaptopModel reference={laptopRef} />
            <directionalLight position={[-4, 2, 3]} args={["#ffffff", 0.4]} />
            <directionalLight position={[4, 2, 3]} args={["#ffffff", 0.4]} />
            <ambientLight args={["#ffffff", 0.4]} />
        </>
    );
};
export default LaptopScene;
