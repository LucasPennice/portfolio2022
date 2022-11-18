import { useEffect, useState } from "react";

const useInRange = (min: number, max: number) => {
    const [isInRange, setIsInRange] = useState<boolean>(false);

    const checkIfScreenSizeInRange = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= min && screenWidth <= max) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        const updateIsMobileScreen = () => {
            setIsInRange(checkIfScreenSizeInRange());
        };
        updateIsMobileScreen();
        window.addEventListener("resize", updateIsMobileScreen);
        return () => window.removeEventListener("resize", updateIsMobileScreen);
    }, []);

    return isInRange;
};

export default useInRange;
