import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function CanvasAndScene() {
    return (
        <Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1 }}>
            <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} />
            <Environment preset="city" />
            <ambientLight />
            <Suspense fallback={null}>
                <mesh scale={3.5}>
                    <boxGeometry />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
                {/* <IPhoneModel /> */}
                {/* <BookshelfModel /> */}
                {/* <HeadphonesModel /> */}
                {/* <ReactModel /> */}
            </Suspense>
        </Canvas>
    );
}

export default CanvasAndScene;
