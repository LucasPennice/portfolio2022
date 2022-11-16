import { OrbitControls, Text } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import { LaptopModel } from "./LaptopModel";

const LaptopScene = () => {
    const laptopRef = useRef<Group | null>(null);
    const textLucasRef = useRef<Mesh | null>(null);
    const textPenniceRef = useRef<Mesh | null>(null);

    useEffect(() => {
        if (!laptopRef.current) return;
        gsap.from(laptopRef.current.position, { z: 8 });
        gsap.to(laptopRef.current.position, { z: 0, duration: 3.5, ease: "power3.out" });
    }, [laptopRef]);

    useEffect(() => {
        if (!textLucasRef.current) return;
        gsap.from(textLucasRef.current.position, { z: -24 });
        gsap.to(textLucasRef.current.position, { z: -4, duration: 3.5, ease: "power3.out" });
    }, [textLucasRef]);
    useEffect(() => {
        if (!textPenniceRef.current) return;
        gsap.from(textPenniceRef.current.position, { z: -24 });
        gsap.to(textPenniceRef.current.position, { z: -4, duration: 3.5, ease: "power3.out" });
    }, [textPenniceRef]);

    return (
        <>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={false}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={-Math.PI / 4 + Math.PI / 2}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 4 + Math.PI / 2}
            />
            <Text
                ref={textLucasRef}
                position={[0, 4, -4]}
                fontSize={4.4}
                lineHeight={1}
                maxWidth={200}
                letterSpacing={0.02}
                textAlign={"center"}
                font="/test.ttf"
                color="black"
                anchorX="center"
                anchorY="middle"
                fillOpacity={1}
                strokeColor="black">
                LUCAS
            </Text>
            <Text
                ref={textPenniceRef}
                position={[0, -2, -4]}
                fontSize={4.4}
                lineHeight={1}
                maxWidth={200}
                letterSpacing={0.02}
                textAlign={"center"}
                font="/test.ttf"
                color="black"
                anchorX="center"
                anchorY="middle"
                fillOpacity={1}
                strokeColor="black">
                PENNICE
            </Text>
            <LaptopModel reference={laptopRef} />
            <directionalLight position={[-4, 2, 3]} args={["#ffffff", 0.4]} />
            <directionalLight position={[4, 2, 3]} args={["#ffffff", 0.4]} />
            <ambientLight args={["#ffffff", 0.4]} />
        </>
    );
};
export default LaptopScene;
