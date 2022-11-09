import { useEffect, useState } from "react";

function useOnScreen(ref) {
    if (typeof window == "undefined") return false;

    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [ref.current]);

    return isIntersecting;
}

export default useOnScreen;
