import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { ResourcesForDevs, SelectedTopic } from "../../../data";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import RecommendationForDevs from "./RecommendationForDevs";
import useIsMobile from "../../../utils/useMobileScreen";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { IPhoneModel } from "./models/IPhoneModel";
import { HeadphonesModel } from "./models/HeadphonesModel";
import { BookshelfModel } from "./models/BookshelfModel";
import { ReactModel } from "./models/ReactModel";
import useHorizontalScroll from "../../../utils/useHorizontalScroll";

interface Props {
    reference: React.MutableRefObject<any>;
}

const ForDevsSection = ({ reference }: Props) => {
    //Local state
    const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>(SelectedTopic.Books);
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Refs
    const ref = useRef<HTMLDivElement | null>(null);

    const topicsArray: SelectedTopic[] = Object.keys(SelectedTopic) as SelectedTopic[];

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseToRotateMe = () => updateMouseMode(MouseModes.RotateMe);
    const setMouseModeToAction = () => {
        if (window.innerWidth < 2130) return updateMouseMode(MouseModes.Scroll);
        return updateMouseMode(MouseModes.Clickeable);
    };

    useHorizontalScroll({ ref, blockScrollAt: 2130 ,breakpoint:1280});

    const isMobile = useIsMobile(1280);

    const handleOnMouseEnter = () => {
        setMouseModeToAction();
        if (window.innerWidth >= 2130) return;
    };

    const handleOnMouseLeave = () => {
        setMouseModeToDefault();
        if (window.innerWidth >= 2130) return;
    };

    return (
        <div id="forDevsSection" className="xl:pb-28 pb-6 xl:pt-20 xl:mt-20" style={{ minHeight: isMobile ? "auto" : "110vh" }} ref={reference}>
            <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center xl:px-20 px-4">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl mb-20">
                    <h1>.03</h1>
                    <h1>For Devs</h1>
                </header>
                <h1 className="mb-5 text-lg xl:text-3xl opacity-60">A small collection of resources that have helped me</h1>
                <m.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, easings: "cubic-bezier(0.075, 0.82, 0.165, 1)" }}>
                    <header
                        ref={ref}
                        className="flex flex-col xl:flex-row xl:overflow-x-scroll hideScrollbar cursor-pointer"
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                        style={{ fontSize: isMobile ? "15vw" : 150, fontWeight: "bold" }}>
                        {topicsArray.map((topic, idx) => {
                            const active = selectedTopic === topic;
                            return (
                                <h1
                                    key={idx}
                                    className={`${active ? "opacity-100" : "opacity-20"} transition-all`}
                                    onClick={() => setSelectedTopic(topic)}>
                                    {topic}
                                </h1>
                            );
                        })}
                    </header>
                </m.div>
                <h1 className="text-right m-0 opacity-70">Click to change section</h1>
                <div className="w-full flex justify-center items-start mt-12 xl:flex-row flex-col-reverse">
                    <m.section
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, easings: "cubic-bezier(0.075, 0.82, 0.165, 1)" }}
                        className="w-full xl:w-1/2"
                        key={selectedTopic}>
                        {ResourcesForDevs[selectedTopic].map((resource, idx) => (
                            <RecommendationForDevs key={idx} data={resource} position={[idx, idx === ResourcesForDevs[selectedTopic].length - 1]} />
                        ))}
                    </m.section>
                    <section className="w-full xl:w-1/2 flex justify-center items-center xl:mb-0 mb-12">
                        <div
                            className="xl:aspect-square aspect-video cursor-grab"
                            style={{ width: isMobile ? "100%" : "80%" }}
                            onMouseEnter={setMouseToRotateMe}
                            onMouseLeave={setMouseModeToDefault}>
                            <Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1 }}>
                                <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} />
                                <Environment preset="city" />
                                <ambientLight />
                                <Suspense fallback={null}>
                                    {selectedTopic === SelectedTopic.Talks && <HeadphonesModel />}
                                    {selectedTopic === SelectedTopic.Books && <BookshelfModel />}
                                    {selectedTopic === SelectedTopic.Channels && <IPhoneModel />}
                                    {selectedTopic === SelectedTopic.Courses && <ReactModel />}
                                </Suspense>
                            </Canvas>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default ForDevsSection;
