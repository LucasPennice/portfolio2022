import { motion as m } from "framer-motion";
import { MouseModes } from "../pages";

function Cursor({ mousePosition, mode }: { mousePosition: { x: number; y: number }; mode: MouseModes }) {
    function getStylesOfMode(mode: MouseModes) {
        const getPosition = (dimention: number) => {
            return {
                x: mousePosition.x - dimention / 2,
                y: mousePosition.y - dimention / 2,
            };
        };

        if (mode === MouseModes.ClickForDetails || mode === MouseModes.CopyToClipboard) {
            return { ...getPosition(96), height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "rgb(49, 133, 252)" };
        }
        if (mode === MouseModes.Hidden) {
            return { ...getPosition(96), opacity: 0, backgroundColor: "rgb(49, 133, 252)" };
        }
        if (mode === MouseModes.Copied) {
            return { ...getPosition(96), height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "rgb(95, 173, 65)" };
        }
        if (mode === MouseModes.Scroll) {
            return { ...getPosition(96), height: "96px", width: "96px", mixBlendMode: "normal", backgroundColor: "rgb(49, 133, 252)" };
        }
        if (mode === MouseModes.Clickeable) {
            return { ...getPosition(45), height: "45px", width: "45px", mixBlendMode: "normal", backgroundColor: "rgb(49, 133, 252)" };
        }

        return { ...getPosition(32), height: "32px", width: "32px", mixBlendMode: "difference", backgroundColor: "rgb(255, 255, 255)" };
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
            {mode === MouseModes.CopyToClipboard && (
                <div className="h-full w-full flex flex-col justify-center items-center text-white" style={{ fontSize: 12, fontWeight: "bold" }}>
                    <p>Copy</p>
                    <p>To</p>
                    <p>Clipboard</p>
                </div>
            )}
            {mode === MouseModes.Copied && (
                <div className="h-full w-full flex flex-col justify-center items-center text-white" style={{ fontSize: 12, fontWeight: "bold" }}>
                    <p>Copied</p>
                </div>
            )}
        </m.div>
    );
}
export default Cursor;
