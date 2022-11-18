import Image from "next/image";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedImage {
    actions?: {
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
        onClick?: () => void;
    };
    containerStyles?: { [key: string]: string | number };
    imageProps: {
        styles: { [key: string]: string | number };
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    parallax?: boolean;
    priority?: boolean;
}

function AnimatedImageOnView({ imageProps, actions, parallax, containerStyles, priority }: AnimatedImage) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    if (!parallax)
        return (
            <div ref={ref} style={{ ...containerStyles }} className="overflow-x-hidden overflow-y-hidden relative">
                <AnimatedDivOnView />
                <Image
                    onMouseEnter={(actions && actions.onMouseEnter) ?? undefined}
                    onMouseLeave={(actions && actions.onMouseLeave) ?? undefined}
                    onClick={(actions && actions.onClick) ?? undefined}
                    className={`${isInView && "imageAnimation"}  hover:scale-110`}
                    src={imageProps.src}
                    style={imageProps.styles}
                    alt={imageProps.alt}
                    width={imageProps.width}
                    height={imageProps.height}
                    priority={priority ? true : false}
                />
            </div>
        );

    return (
        <div
            ref={ref}
            style={{ width: imageProps.styles.width ?? "auto", height: imageProps.styles.height ?? "auto", borderRadius: 5 }}
            className="overflow-x-hidden overflow-y-hidden relative">
            <AnimatedDivOnView />
            <Image
                onMouseEnter={(actions && actions.onMouseEnter) ?? undefined}
                onMouseLeave={(actions && actions.onMouseLeave) ?? undefined}
                onClick={(actions && actions.onClick) ?? undefined}
                className={`${isInView && "imageAnimation"}  hover:scale-110`}
                src={imageProps.src}
                style={{ ...imageProps.styles, position: "absolute", top: 0 }}
                alt={imageProps.alt}
                width={imageProps.width}
                height={imageProps.height}
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
            className="absolute left-0 bottom-0 w-full bg-white z-10"></m.div>
    );
}

export default AnimatedImageOnView;
