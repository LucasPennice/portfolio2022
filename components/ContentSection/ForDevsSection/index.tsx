import { useContext, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { ResourcesForDevs, SelectedTopic } from "../../../data";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import RecommendationDropdown from "./RecommendationDropdown";
import useIsMobile from "../../../utils/useMobileScreen";
import dynamic from "next/dynamic";
const CanvasAndScene = dynamic(() => import("./CanvasAndScene"), {
    ssr: false,
});

interface Props {
    reference: React.MutableRefObject<any>;
}

const ForDevsSection = ({ reference }: Props) => {
    //Local state
    const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>(SelectedTopic.Books);
    const [selectedResource, setSelectedResource] = useState<number | undefined>(undefined);
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);

    useEffect(() => {
        setSelectedResource(undefined);
    }, [selectedTopic]);

    const topicsArray: SelectedTopic[] = Object.keys(SelectedTopic) as SelectedTopic[];

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToAction = () => {
        if (window.innerWidth < 2130) return updateMouseMode(MouseModes.Scroll);
        return updateMouseMode(MouseModes.Clickeable);
    };

    const isMobile = useIsMobile(1280);

    return (
        <div id="forDevsSection" className="xl:pb-28 pb-6 xl:pt-20 xl:mt-20" style={{ minHeight: isMobile ? "auto" : "110vh" }} ref={reference}>
            <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center xl:px-20 px-4">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl mb-20">
                    <h1>.03</h1>
                    <h1>For Devs</h1>
                </header>
                <m.header
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    className="flex flex-col xl:flex-row xl:overflow-x-scroll hideScrollbar"
                    onMouseEnter={setMouseModeToAction}
                    onMouseLeave={setMouseModeToDefault}
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
                </m.header>
                <div className="w-full flex justify-center items-start mt-12 xl:flex-row flex-col-reverse">
                    <m.section
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        className="w-full xl:w-1/2"
                        key={selectedTopic}>
                        {ResourcesForDevs[selectedTopic].map((resource, idx) => (
                            <RecommendationDropdown
                                key={idx}
                                selectedResourceState={[selectedResource, setSelectedResource]}
                                data={resource}
                                position={[idx, idx === ResourcesForDevs[selectedTopic].length - 1]}
                            />
                        ))}
                    </m.section>
                    <section className="w-full xl:w-1/2 flex justify-center items-center xl:mb-0 mb-12">
                        <m.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            viewport={{ once: true }}
                            className="xl:aspect-square aspect-video "
                            style={{ width: isMobile ? "100%" : "80%" }}>
                            <CanvasAndScene />
                        </m.div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default ForDevsSection;
