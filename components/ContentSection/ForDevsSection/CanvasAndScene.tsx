import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function CanvasAndScene() {
    return (
        <>
            <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} />
            <Environment preset="city" />
            <ambientLight />
            {/* <Suspense fallback={null}> */}
            <mesh scale={3.5}>
                <boxGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
            {/* <IPhoneModel /> */}
            {/* <BookshelfModel /> */}
            {/* <HeadphonesModel /> */}
            {/* <ReactModel /> */}
            {/* </Suspense> */}
        </>
    );
}

export default CanvasAndScene;
