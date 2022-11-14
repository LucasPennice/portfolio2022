import { LETTER_SIZE_AT_10 } from "../data";

export const appearOpacity = (delay: number) => {
    return {
        viewport: { once: true },
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.4, delay },
    };
};
