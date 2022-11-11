import { motion as m, useSpring } from "framer-motion";
import { useScroll } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { MouseModes, updateMouseModeContext } from "../../pages";

function ImageScroller({ imageArr }: { imageArr: string[] }) {
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Local State
    const [hideProgress, setHideProgress] = useState(true);

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    return (
        <>
            {!hideProgress && (
                <m.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    xmlns="http//www.w3.org/2000/svg"
                    width="130"
                    viewBox="0 0 100 100"
                    className="h-16 w-16 absolute bottom-3 z-10 rounded-full overflow-x-hidden overflow-y-hidden"
                    style={{ right: "5%" }}>
                    <path d="M0 50 L100 50" strokeWidth="0" stroke="gray" />
                    <m.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="black"
                        strokeLinecap="round"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="180 360"
                        pathLength={scrollXProgress}
                    />
                </m.svg>
            )}
            <div
                ref={ref}
                onScroll={() => setHideProgress(false)}
                className="w-full h-full absolute bottom-0 left-0 flex items-center gap-4 overflow-x-scroll hideScrollbar"
                onMouseEnter={() => updateMouseMode(MouseModes.Scroll)}
                onMouseLeave={() => updateMouseMode(MouseModes.Default)}>
                {imageArr.map((e, idx) => {
                    return (
                        <div
                            key={idx}
                            className="h-5/6 aspect-video bg-black rounded-md"
                            style={{ marginLeft: idx === 0 ? "50%" : "10%", marginRight: idx === imageArr.length - 1 ? "5%" : "0%" }}></div>
                    );
                })}
            </div>
        </>
    );
}

export default ImageScroller;
