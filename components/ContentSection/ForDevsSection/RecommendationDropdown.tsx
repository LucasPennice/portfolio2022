import { useContext } from "react";
import { RecommendationsForDevs, SelectedTopic } from "../../../data";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import { motion as m } from "framer-motion";
import useIsMobile from "../../../utils/useMobileScreen";

interface RecommendationDropdown {
    selectedResourceState: [number | undefined, (v: number | undefined) => void];
    data: RecommendationsForDevs[SelectedTopic][0];
    position: [number, boolean];
}

function RecommendationDropdown({ data, position, selectedResourceState }: RecommendationDropdown) {
    const [selectedResource, setSelectedResource] = selectedResourceState;
    const [idx, isLastElement] = position;
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Derived State
    const isOpen = selectedResource === idx;

    const isMobile = useIsMobile(1280);
    const isSmallScreen = useIsMobile(680);
    const styles = { borderStyle: getBorderStyles(), borderWidth: 1, borderColor: "black", paddingTop: isMobile ? 20 : 50 };

    const variants = {
        open: {
            height: isMobile ? 213 : 335,
        },
        closed: {
            height: isMobile ? 90 : 135,
            transition: {
                delay: 0.2,
                when: "beforeChildren", //use this instead of delay
                staggerChildren: 0.2, //apply stagger on the parent tag
            },
        },
    };

    const detailsVariants = {
        open: {
            opacity: 1,
            transition: { delay: 0.2 },
        },
        closed: {
            opacity: 0,
        },
    };

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToClickeable = () => updateMouseMode(MouseModes.Clickeable);

    const handleClick = () => {
        if (isOpen) return setSelectedResource(undefined);
        return setSelectedResource(idx);
    };

    return (
        <m.div
            onMouseEnter={setMouseModeToClickeable}
            onMouseLeave={setMouseModeToDefault}
            onClick={handleClick}
            style={styles}
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="px-5 xl:px-20 text-xl xl:text-2xl overflow-y-hidden"
            transition={{ ease: "easeInOut" }}>
            <section className="flex items-center justify-between">
                <p>0{idx}</p>
                <div className="flex-1 pl-6" style={{ fontSize: isSmallScreen ? 12 : 20 }}>
                    <p>{data.text}</p>
                    {data.author && <p>By {data.author}</p>}
                </div>
                <m.p animate={{ rotate: isOpen ? 45 : 0 }}>+</m.p>
            </section>
            <m.section
                variants={detailsVariants}
                key={data.text}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                style={{ height: isMobile ? 150 : 200 }}
                className="flex flex-col justify-center items-start gap-4">
                <p className="text-xl xl:text-2xl">{data.description}</p>
            </m.section>
        </m.div>
    );

    function getBorderStyles() {
        if (idx === 0) return "solid none solid none";
        return "none none solid none";
    }
}
export default RecommendationDropdown;
