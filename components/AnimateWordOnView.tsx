import { motion as m } from "framer-motion";
import { LETTER_SIZE_AT_10 } from "../data";

//By allowed I mean that I know the letter height for the font size
export type AllowedFonts = 110 | 70 | 36;

interface Props {
    wordToAnimate: string;
    fontSize: number;
    underline?: boolean;
    delayInSeconds?: number;
    animateEveryTime?: true;
    style?: { [key: string]: string | number };
}

function AnimateWordOnView({ fontSize, wordToAnimate, underline, delayInSeconds, animateEveryTime, style }: Props) {
    //It's an object because we need to modify the variable and JS doesn't allow pass by reference
    let lastLetterLeftPosition = { value: 0 };
    let letterHeight = getHeightForFont(fontSize);
    const lettersArray = wordToAnimate.split("");

    const delay = delayInSeconds ?? 0;

    return (
        <div
            className="relative overflow-x-hidden overflow-y-hidden flex justify-start w-full"
            style={{ height: letterHeight, width: calculateWordWidth(), ...style }}>
            {lettersArray.map((letter, idx) => {
                return (
                    <m.h1
                        className="absolute"
                        whileInView={{ top: 0 }}
                        transition={{ duration: 0.7, delay: delay + idx / 20, easings: "cubic-bezier(0.83, 0, 0.17, 1)" }}
                        viewport={{ once: true }}
                        style={{ top: letterHeight, left: calculateLetterPosition(letter), fontSize }}
                        key={idx}>
                        {letter.toUpperCase()}
                    </m.h1>
                );
            })}
            {underline && <Underline delay={delay + lettersArray.length / 20} />}
        </div>
    );

    function calculateWordWidth() {
        let result = 0;
        lettersArray.forEach((letter) => {
            result += getSymbolWidthForCurrentFontSize(letter);
        });
        return result;
    }

    function getHeightForFont(fontSize: number) {
        return (fontSize * 140) / 110;
    }

    function calculateLetterPosition(letter: string) {
        const letterSizeAtCurrentFont = getSymbolWidthForCurrentFontSize(letter);
        const result = lastLetterLeftPosition.value;
        lastLetterLeftPosition.value += letterSizeAtCurrentFont;
        return result;
    }

    function getSymbolWidthForCurrentFontSize(symbol: string) {
        let currentSymbol = "";
        if (symbol === "@") currentSymbol = "AT";
        if (symbol === ".") currentSymbol = "DOT";
        if (symbol === " ") currentSymbol = "SPACE";
        if (symbol !== "@" && symbol !== "." && symbol !== " ") currentSymbol = symbol.toUpperCase();
        //@ts-ignore
        const letterSizeAtFont10: number = LETTER_SIZE_AT_10[currentSymbol];
        const letterSizeAtCurrentFont = (letterSizeAtFont10 / 10) * fontSize;
        return letterSizeAtCurrentFont;
    }
}

const appearTextUnderlineAnimation = (delay: number) => {
    return {
        whileInView: { width: "100%" },
        initial: { width: 0 },
        transition: { duration: 0.7, delay },
        viewport: { once: true },
    };
};

function Underline({ delay }: { delay: number }) {
    return <m.div {...appearTextUnderlineAnimation(delay)} style={{ height: 7 }} className="w-full absolute bottom-0 left-0 bg-black"></m.div>;
}
export default AnimateWordOnView;
