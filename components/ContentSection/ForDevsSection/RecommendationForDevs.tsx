import { useContext } from "react";
import { RecommendationsForDevs, SelectedTopic } from "../../../data";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import { motion as m } from "framer-motion";
import useIsMobile from "../../../utils/useMobileScreen";
import Link from "next/link";

interface RecommendationForDevs {
    data: RecommendationsForDevs[SelectedTopic][0];
    position: [number, boolean];
}

function RecommendationForDevs({ data, position }: RecommendationForDevs) {
    const [idx, isLastElement] = position;
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Derived State

    const isMobile = useIsMobile(1280);
    const isSmallScreen = useIsMobile(680);
    const styles = { borderStyle: getBorderStyles(), borderWidth: 1, borderColor: "black", paddingTop: isMobile ? 20 : 50 };

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToClickeable = () => updateMouseMode(MouseModes.Clickeable);

    return (
        <m.div
            style={styles}
            animate={{ height: isMobile ? 90 : 135 }}
            className="px-5 xl:px-20 text-xl xl:text-2xl overflow-y-hidden"
            transition={{ ease: "easeInOut" }}>
            <section className="flex items-center justify-between">
                <p>0{idx}</p>
                <div className="flex-1 pl-6" style={{ fontSize: isSmallScreen ? 12 : 20 }}>
                    <p>{data.text}</p>
                    {data.author && <p>By {data.author}</p>}
                </div>
                {data.link && (
                    <Link href={data.link} legacyBehavior>
                        <a
                            target="_blank"
                            className="p-3"
                            rel="noopener noreferrer"
                            onMouseEnter={setMouseModeToClickeable}
                            onMouseLeave={setMouseModeToDefault}>
                            Link
                        </a>
                    </Link>
                )}
            </section>
        </m.div>
    );

    function getBorderStyles() {
        if (idx === 0) return "solid none solid none";
        return "none none solid none";
    }
}
export default RecommendationForDevs;
