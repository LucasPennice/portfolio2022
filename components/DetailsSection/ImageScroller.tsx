import { motion as m, useInView } from "framer-motion";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { ImageType } from "../../data";
import YouTube from "react-youtube";
import { MouseModes, updateMouseModeContext } from "../../pages";
import useHorizontalScroll from "../../utils/useHorizontalScroll";

function ImageScroller({ imageArr, youtubeDemoVideoId }: { imageArr: ImageType[]; youtubeDemoVideoId: string | undefined }) {
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    const setMouseHidden = () => updateMouseMode(MouseModes.Hidden);
    const setMouseScroll = () => updateMouseMode(MouseModes.Scroll);
    const setMouseDefault = () => updateMouseMode(MouseModes.Default);
    //Local State
    const [hideProgress, setHideProgress] = useState(true);

    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref);
    const { scrollXProgress } = useScroll({ container: ref });

    const youtubePlayerOptions = {
        height: "100%",
        width: "100%",
        playerVars: { autoplay: 0 },
    };

    useHorizontalScroll({ ref, onScroll: () => setHideProgress(false) });

    useEffect(() => {
        setHideProgress(true);
        if (!ref.current) return;
        ref.current.scrollLeft = 0;
    }, [isInView]);

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
                        stroke="rgb(79, 178, 134)"
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
                className="w-full h-full absolute bottom-0 left-0 flex items-center gap-4 overflow-x-scroll overflow-y-hidden hideScrollbar"
                onMouseEnter={setMouseScroll}
                onMouseLeave={setMouseDefault}>
                {youtubeDemoVideoId && (
                    <div
                        onMouseEnter={setMouseHidden}
                        onMouseLeave={setMouseScroll}
                        className={`opacity-0 ${isInView && "animateFromBottom"}`}
                        style={{ height: "83%", aspectRatio: 16 / 9, marginLeft: "51%", animationDelay: `0.7s` }}>
                        <YouTube videoId={youtubeDemoVideoId} opts={youtubePlayerOptions} style={{ height: "100%", width: "100%" }} />
                    </div>
                )}
                {imageArr.map((e, idx) => {
                    return (
                        <Image
                            className={`opacity-0 ${isInView && "animateFromBottom"} shadow-md shadow-gray`}
                            src={e.src}
                            placeholder="blur"
                            style={{
                                width: "auto",
                                height: "83%",
                                aspectRatio: 2560 / 1358,
                                borderRadius: 5,
                                marginLeft: idx === 0 && !youtubeDemoVideoId ? "51%" : "10%",
                                marginRight: idx === imageArr.length - 1 ? "5%" : "0%",
                                animationDelay: `${idx / 20 + 0.7}s`,
                            }}
                            alt="Project img"
                            width={e.resolution.w}
                            height={e.resolution.h}
                            key={idx}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ImageScroller;
