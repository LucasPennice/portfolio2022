import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ContentSections } from "../components/ContentSection";

type Ref = React.RefObject<Element>;
const useContentInView = (workSectionRef: Ref, aboutSectionRef: Ref, forDevsSectionRef: Ref, contactSectionRef: Ref) => {
    const workSectionInView = useInView(workSectionRef);
    const aboutSectionInView = useInView(aboutSectionRef);
    const forDevsSectionInView = useInView(forDevsSectionRef);
    const contactSectionInView = useInView(contactSectionRef);

    const isFirstCall = useRef(true);
    const [result, setResult] = useState<ContentSections>();

    useEffect(() => {
        const isSectionInViewArray = [workSectionInView, aboutSectionInView, forDevsSectionInView, contactSectionInView];
        const sectionNames: ContentSections[] = [ContentSections.work, ContentSections.about, ContentSections.forDevs, ContentSections.contact];

        const numberOfSectionsInView = getNumberOfSectionsInView(isSectionInViewArray);

        if (numberOfSectionsInView !== 1) return;

        const indexOfSectionInView = isSectionInViewArray.findIndex((element) => element === true);
        const sectionInView = sectionNames[indexOfSectionInView];
        setResult(sectionInView);
        isFirstCall.current = false;
    }, [workSectionInView, aboutSectionInView, forDevsSectionInView, contactSectionInView]);

    return result;
};

function getNumberOfSectionsInView(sectionInView: boolean[]) {
    return sectionInView.reduce((prevValue, currentValue) => {
        if (currentValue) {
            return (prevValue += 1);
        }
        return prevValue;
    }, 0);
}

export default useContentInView;
