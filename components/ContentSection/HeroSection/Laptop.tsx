import LaptopScene from "./LaptopScene";
import { Canvas } from "@react-three/fiber";
import useIsMobile from "../../../utils/useMobileScreen";

function Laptop() {
    function getCameraDistance() {
        if (window.innerHeight < 1300) return 10.5;
        return 10;
    }
    return (
        <Canvas dpr={2} camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, getCameraDistance()] }}>
            <LaptopScene />
        </Canvas>
    );
}
export default Laptop;
