import Image, { ImageProps } from "next/image";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedImage {
    actions?: {
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
        onClick?: () => void;
    };
    containerStyles?: { [key: string]: string | number };
    containerClass?: string;
    imageProps: ImageProps;
    parallax?: boolean;
}

function AnimatedImageOnView({ imageProps, actions, parallax, containerStyles, containerClass }: AnimatedImage) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} style={{ ...containerStyles }} className={`overflow-x-hidden overflow-y-hidden relative ${containerClass}`}>
            <AnimatedDivOnView />
            <Image
                onMouseEnter={(actions && actions.onMouseEnter) ?? undefined}
                onMouseLeave={(actions && actions.onMouseLeave) ?? undefined}
                className={`${isInView && "imageAnimation"}  hover:scale-110`}
                onClick={(actions && actions.onClick) ?? undefined}
                {...imageProps}
            />
        </div>
    );
}

export function AnimatedDivOnView() {
    return (
        <m.div
            whileInView={{ height: 0 }}
            initial={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, easings: "cubic-bezier(0.83, 0, 0.17, 1)", delay: 0.6 }}
            className="absolute left-0 bottom-0 w-full bg-white dark:bg-black z-10"></m.div>
    );
}

export default AnimatedImageOnView;
