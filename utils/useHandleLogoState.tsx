import { MutableRefObject, useEffect } from "react";

interface Props {
    contentRef: MutableRefObject<any>;
    setShowLogo: (v: boolean) => void;
}

function useHandleLogoState(contentRef: MutableRefObject<any>, setShowLogo: (v: boolean) => void) {
    useEffect(() => {
        if (!contentRef) return;

        contentRef.current.addEventListener("scroll", handleScroll);

        return () => {
            contentRef.current?.removeEventListener("scroll", handleScroll);
        };

        function handleScroll(e: any) {
            const distanceToTop: number = e.target.scrollTop;
            if (distanceToTop > 100) return setShowLogo(true);
            return setShowLogo(false);
        }
    }, []);
}

export default useHandleLogoState;
