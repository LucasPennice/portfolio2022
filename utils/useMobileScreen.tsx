import { useEffect, useState } from "react";

const useIsMobile = (breakPoint: number) => {
    const [isUserOnMobile, setIsUserOnMobile] = useState<boolean>(false);

    const checkIfMobileScreen = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > breakPoint) {
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
