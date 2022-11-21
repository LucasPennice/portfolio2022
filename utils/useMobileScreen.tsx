import { useEffect, useState } from "react";

const useIsMobile = (breakPoint: number, retina?: boolean) => {
    const [isUserOnMobile, setIsUserOnMobile] = useState<boolean>(false);

    const checkIfMobileScreen = () => {
        const dpiIndex = window.devicePixelRatio;
        const screenWidth = window.innerWidth;
        const adjustedScreenWidth = retina ? dpiIndex * screenWidth : screenWidth;
        if (adjustedScreenWidth > breakPoint) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        const updateIsMobileScreen = () => {
            setIsUserOnMobile(checkIfMobileScreen());
        };
        updateIsMobileScreen();
        window.addEventListener("resize", updateIsMobileScreen);
        return () => window.removeEventListener("resize", updateIsMobileScreen);
    }, []);

    return isUserOnMobile;
};

export default useIsMobile;
