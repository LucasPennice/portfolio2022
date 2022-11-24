import { MutableRefObject, useEffect } from "react";

function useHorizontalScroll(args: { ref: MutableRefObject<HTMLDivElement | null>; onScroll?: () => void; blockScrollAt?: number }) {
    const { ref, blockScrollAt, onScroll } = args;

    useEffect(() => {
        if (!ref.current) return;

        ref.current.addEventListener("wheel", handleScroll);
        //Otherwise tracking is very slow
        ref.current.style.scrollBehavior = "auto";

        return () => {
            ref.current?.removeEventListener("wheel", handleScroll);
        };

        function handleScroll(e: any) {
            if (!ref.current) return;
            if (blockScrollAt && window.innerWidth >= blockScrollAt) return;

            if (onScroll) onScroll();

            //Prevents vertical scrolling
            e.preventDefault();
            //Takes care of horizontal scrolling
            ref.current!.scrollLeft += e.deltaY;
        }
    }, [ref.current]);
}

export default useHorizontalScroll;
