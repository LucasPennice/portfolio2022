import { PanInfo, motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { clamp } from "three/src/math/MathUtils";
import { WorkExperience } from "../data";
import AnimatedImageOnView from "./AnimatedImageOnView";
import AnimateWordOnView from "./AnimateWordOnView";

function Carousel({ workExperienceArr, onClick }: { workExperienceArr: WorkExperience[]; onClick: (v: WorkExperience) => void }) {
    const [selectedContentIdx, setSelectedContentIdx] = useState(0);
    const [blockDragFn, setBlockDragFn] = useState(false);

    const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (blockDragFn) return;
        setBlockDragFn(true);
        const { x } = info.offset;
        if (x <= -4)
            return setSelectedContentIdx((prev) => {
                if (prev + 1 === workExperienceArr.length) return prev;
                return prev + 1;
            });
        if (x >= 4)
            return setSelectedContentIdx((prev) => {
                if (prev - 1 === -1) return prev;
                return prev - 1;
            });
    };

    return (
        <div className="xl:hidden w-full flex flex-col justify-start items-center" style={{ margin: "0 auto", aspectRatio: 2000 / 1500 }}>
            <div className="relative w-full" style={{ aspectRatio: 2000 / 1560 }}>
                {workExperienceArr.map((workExperience, idx) => {
                    const isActive = idx === selectedContentIdx;
                    return (
                        <AnimatePresence key={workExperience.company}>
                            {isActive && (
                                <m.div
                                    drag="x"
                                    onDragStart={() => setBlockDragFn(false)}
                                    dragSnapToOrigin
                                    whileDrag={{ scale: 0.6, boxShadow: "none" }}
                                    dragMomentum={false}
                                    onDrag={handleDrag}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    onClick={() => onClick(workExperience)}
                                    transition={{ duration: 0.4, easings: "cubic-bezier(0.83, 0, 0.17, 1)" }}
                                    className="w-full h-full absolute left-0 top-0">
                                    <AnimatedImageOnView
                                        containerClass="shadow-lg dark:shadow-none shadow-grayShadow"
                                        containerStyles={{
                                            borderRadius: 5,
                                            aspectRatio: 2000 / 1000,
                                            width: `100%`,
                                        }}
                                        imageProps={{
                                            priority: true,
                                            src: workExperience.mobileCoverImage.src,
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: 5,
                                                pointerEvents: "none",
                                            },
                                            alt: "Project img",
                                            width: workExperience.mobileCoverImage.resolution.w,
                                            height: workExperience.mobileCoverImage.resolution.h,
                                        }}
                                    />
                                    <AnimateWordOnView
                                        fontSize={32}
                                        wordToAnimate={workExperience.company}
                                        animateEveryTime
                                        delayInSeconds={0.5}
                                        underline
                                        underlineHeight={2}
                                        style={{ marginTop: 10 }}
                                    />
                                    <AnimateWordOnView
                                        fontSize={22}
                                        wordToAnimate={workExperience.role}
                                        animateEveryTime
                                        delayInSeconds={0.7}
                                        style={{ marginTop: 10, marginBottom: 10 }}
                                    />
                                    <AnimateWordOnView fontSize={12} delayInSeconds={0.4} wordToAnimate="Click for details" animateEveryTime />
                                </m.div>
                            )}
                        </AnimatePresence>
                    );
                })}
            </div>
            <Indicator
                selectedContentIdx={selectedContentIdx}
                workExperienceLength={workExperienceArr.length}
                selectClickedIdx={(v: number) => setSelectedContentIdx(v)}
            />
            <h1 className="w-full text-right opacity-40 mt-3">Swipe image or click the indicator</h1>
        </div>
    );
}
function Indicator({
    workExperienceLength,
    selectedContentIdx,
    selectClickedIdx,
}: {
    workExperienceLength: number;
    selectedContentIdx: number;
    selectClickedIdx: (v: number) => void;
}) {
    const tempArr = Array.from({ length: workExperienceLength }, (v, i) => i);

    const GAP_SIZE_IN_PIXELS = 96;

    const selectorWidth = `calc(${100 / workExperienceLength}% - ${((workExperienceLength - 1) / 2) * GAP_SIZE_IN_PIXELS}px)`;
    return (
        <div className="w-full h-6 flex justify-between items-center relative rounded-md gap-24">
            {tempArr.map((garbageValue, idx) => {
                return (
                    <div
                        className="flex-1 h-full flex justify-center items-center rounded-md shadow-lg dark:shadow-none shadow-grayShadow dark:bg-headerBgLight"
                        key={idx}
                        onClick={() => {
                            selectClickedIdx(idx);
                        }}
                    />
                );
            })}
            <m.aside
                initial={{ left: 0 }}
                animate={{ left: `calc(${(100 / workExperienceLength) * selectedContentIdx}% + ${(GAP_SIZE_IN_PIXELS * selectedContentIdx) / 2}px)` }}
                className="h-full absolute rounded-md pointer-events-none bg-black dark:bg-white"
                transition={{ duration: 0.5, easings: "cubic-bezier(0.83, 0, 0.17, 1)" }}
                style={{ width: selectorWidth }}></m.aside>
        </div>
    );
}
export default Carousel;
