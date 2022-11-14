import { motion as m } from "framer-motion";
import { LETTER_SIZE_AT_10 } from "../data";

//By allowed I mean that I know the letter height for the font size
export type AllowedFonts = 110 | 70 | 36;

interface Props {
    wordToAnimate: string;
    fontSize: AllowedFonts;
    underline?: boolean;
}

function AnimateWordOnView({ fontSize, wordToAnimate, underline }: Props) {
    //It's an object because we need to modify the variable and JS doesn't allow pass by reference
    let lastLetterLeftPosition = { value: 0 };
    let letterHeight = getHeightForFont(fontSize);
    const lettersArray = wordToAnimate.split("");

    return (
        <div
            className="relative overflow-x-hidden overflow-y-hidden flex justify-start w-full"
            style={{ height: letterHeight, width: calculateWordWidth() }}>
            {lettersArray.map((letter, idx) => {
                return (
                    <m.h1
                        className="absolute"
                        whileInView={{ top: 0 }}
                        transition={{ duration: 0.7, delay: idx / 20 }}
                        viewport={{ once: true }}
                        style={{ top: letterHeight, left: calculateLetterPosition(letter), fontSize }}
                        key={idx}>
                        {letter.toUpperCase()}
                    </m.h1>
                );
            })}
            {underline && <Underline delay={lettersArray.length / 20} />}
        </div>
    );

    function calculateWordWidth() {
        let result = 0;
        lettersArray.forEach((letter) => {
            result += getSymbolWidthForCurrentFontSize(letter);
        });
        return result;
    }

    function getHeightForFont(fontSize: AllowedFonts) {
        if (fontSize === 110) return 126.5;
        if (fontSize === 70) return 80.5;
        return 41.5;
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
