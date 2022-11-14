export const appearOpacity = (delay: number) => {
    return {
        viewport: { once: true },
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.4, delay },
    };
};

export const appearTextAnimation = (delay: number, deltaY?: number) => {
    return {
        whileInView: { top: 0 },
        initial: {
            top: deltaY ? deltaY : 150,
        },
        transition: { duration: 0.7, delay },
        viewport: { once: true },
    };
};

export const appearTextUnderlineAnimation = (delay: number) => {
    return {
        whileInView: { width: "100%" },
        initial: { width: 0 },
        transition: { duration: 0.7, delay },
        viewport: { once: true },
    };
};
