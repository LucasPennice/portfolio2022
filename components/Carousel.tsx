import { PanInfo, motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
        <div className="xl:hidden w-full flex flex-col justify-center items-center" style={{ maxWidth: 600, margin: "0 auto" }}>
            <div className="relative w-full" style={{ minHeight: "100vh" }}>
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
                                        imageProps={{
                                            priority: true,
                                            src: workExperience.coverImage.src,
                                            style: {
                                                width: "auto",
                                                height: "calc(100% - 150px)",
                                                maxHeight: "80vh",
                                                borderRadius: 5,
                                                pointerEvents: "none",
                                            },
                                            alt: "Project img",
                                            width: workExperience.coverImage.resolution.w,
                                            height: workExperience.coverImage.resolution.h,
                                        }}
                                    />
                                    <AnimateWordOnView
                                        fontSize={32}
                                        wordToAnimate={workExperience.company}
                                        animateEveryTime
                                        delayInSeconds={0.5}
                                        style={{ marginTop: 10 }}
                                    />
                                    <AnimateWordOnView
                                        fontSize={24}
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

    const selectorWidth = `${100 / workExperienceLength}%`;

    return (
        <div className="w-full h-6 flex justify-center items-center relative rounded-md" style={{ border: "1px solid #12100E1A" }}>
            {tempArr.map((garbageValue, idx) => {
                return (
                    <div
                        className="flex-1 h-full flex justify-center items-center"
                        key={idx}
                        onClick={() => {
                            selectClickedIdx(idx);
                        }}></div>
                );
            })}
            <m.aside
                initial={{ left: 0 }}
                animate={{ left: `${parseFloat(selectorWidth) * selectedContentIdx}%` }}
                className="h-full absolute rounded-md pointer-events-none"
                transition={{ duration: 0.4, easings: "cubic-bezier(0.83, 0, 0.17, 1)" }}
                style={{ width: selectorWidth, backgroundColor: "#12100E" }}></m.aside>
        </div>
    );
}
export default Carousel;
