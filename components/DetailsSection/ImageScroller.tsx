import { motion as m, useInView, useSpring } from "framer-motion";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useContext, useRef, useState, useTransition } from "react";
import { MouseModes, updateMouseModeContext } from "../../pages";

function ImageScroller({ imageArr }: { imageArr: string[] }) {
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Local State
    const [hideProgress, setHideProgress] = useState(true);

    const ref = useRef(null);
    const isInView = useInView(ref);
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
                    className="h-16 w-16 absolute bottom-2 z-10 rounded-full overflow-x-hidden overflow-y-hidden"
                    style={{ right: "5%" }}>
                    <path d="M0 50 L100 50" strokeWidth="0" stroke="gray" />
                    <m.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#00C49A"
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
                className="w-full h-full absolute bottom-0 left-0 flex items-center gap-4 overflow-x-scroll overflow-y-hidden hideScrollbar"
                onMouseEnter={() => updateMouseMode(MouseModes.Scroll)}
                onMouseLeave={() => updateMouseMode(MouseModes.Default)}>
                {imageArr.map((e, idx) => {
                    return (
                        <Image
                            className={`opacity-0 ${isInView && "animateFromBottom"}`}
                            src="/drill-monkey-01_2x3.webp"
                            style={{
                                width: "auto",
                                height: "83%",
                                borderRadius: 5,
                                marginLeft: idx === 0 ? "51%" : "10%",
                                marginRight: idx === imageArr.length - 1 ? "5%" : "0%",
                                animationDelay: `${idx / 20 + 0.7}s`,
                            }}
                            alt="Project img"
                            width={1920}
                            height={1080}
                            key={idx}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ImageScroller;
