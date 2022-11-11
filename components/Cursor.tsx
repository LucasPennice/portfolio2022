import { motion as m } from "framer-motion";
import { MouseModes } from "../pages";

function Cursor({ mousePosition, mode }: { mousePosition: { x: number; y: number }; mode: MouseModes }) {
    function getStylesOfMode(mode: MouseModes) {
        const position = {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        };

        if (mode === MouseModes.ClickForDetails) {
            return { ...position, height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "#E01A4F" };
        }
        if (mode === MouseModes.Scroll) {
            return { ...position, height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "#E01A4F" };
        }
        if (mode === MouseModes.Clickeable) {
            return { ...position, height: "45px", width: "45px", mixBlendMode: "normal", backgroundColor: "#E01A4F" };
        }

        return { ...position, height: "32px", width: "32px", mixBlendMode: "difference", backgroundColor: "white" };
    }

    return (
        <m.div
            style={{
                borderRadius: "50%",
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 999,
            }}
            className="hidden xl:block cursor"
            //@ts-ignore
            animate={getStylesOfMode(mode)}
            transition={{ type: "spring", damping: 30, stiffness: 550, bounce: 0.1 }}>
            {mode === MouseModes.ClickForDetails && (
                <div className="h-full w-full flex flex-col justify-center items-center text-white" style={{ fontSize: 12, fontWeight: "bold" }}>
                    <p>Click</p>
                    <p>For</p>
                    <p>Details</p>
                </div>
            )}
            {mode === MouseModes.Scroll && (
                <div className="h-full w-full flex flex-col justify-center items-center text-white" style={{ fontSize: 12, fontWeight: "bold" }}>
                    <p>Scroll</p>
                    <p className="text-3xl">↔</p>
                </div>
            )}
        </m.div>
    );
}
export default Cursor;
