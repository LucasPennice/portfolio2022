import { LETTER_SIZE_AT_10 } from "../data";

export const appearOpacity = (delay: number) => {
    return {
        viewport: { once: true },
        initial: {
            y: 50,
            scale: 0.97,
            opacity: 0,
        },
        whileInView: { y: 0, scale: 1, opacity: 1 },
        transition: { duration: 0.4, delay, easings: "cubic-bezier(0.83, 0, 0.17, 1)" },
    };
};
