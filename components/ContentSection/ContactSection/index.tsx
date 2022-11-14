import Link from "next/link";
import { useContext, useState } from "react";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import useCopy from "../../../utils/useCopy";
import useIsMobile from "../../../utils/useMobileScreen";
import { motion as m } from "framer-motion";
import { appearOpacity, appearTextAnimation } from "../../../utils/animations";
import { LETTER_SIZE_AT_10 } from "../../../data";

interface Props {
    reference: React.MutableRefObject<any>;
}

const ContactSection = ({ reference }: Props) => {
    const updateMouseMode = useContext(updateMouseModeContext);
    const copyToClipBoard = useCopy();

    const [copied, setCopied] = useState(false);

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToCopy = () => updateMouseMode(MouseModes.CopyToClipboard);
    const setMouseModeToCopied = () => updateMouseMode(MouseModes.Copied);
    const setMouseModeToClickeable = () => updateMouseMode(MouseModes.Clickeable);

    const isMobile = useIsMobile(1280);
    const isSmall = useIsMobile(680);

    const getFontSize = (isMobile: boolean, isSmall: boolean) => {
        if (!isMobile && !isSmall) return 110;
        if (isMobile && !isSmall) return 70;
        return 36;
    };

    const getHeightForFont = (isMobile: boolean, isSmall: boolean) => {
        if (!isMobile && !isSmall) return 126.5;
        if (isMobile && !isSmall) return 80.5;
        return 41.5;
    };

    const fontSize = getFontSize(isMobile, isSmall);
    const letterHeight = getHeightForFont(isMobile, isSmall);

    return (
        <div id="contactSection" style={{ minHeight: isMobile ? "auto" : "110vh" }} className="pt-10 xl:pt-28 xl:mt-20" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto", height: isMobile ? "100vh" : "calc(100vh - 112px)" }}
                className="w-full flex flex-col justify-between items-start px-4 xl:px-20 gap-10">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl">
                    <h1>.04</h1>
                    <h1>Contact Me</h1>
                </header>
                <div className="w-full">
                    <section
                        className="w-full"
                        onMouseEnter={setMouseModeToCopy}
                        onMouseLeave={setMouseModeToDefault}
                        onClick={() => {
                            copyToClipBoard("lucaspennice@gmail.com");
                            setMouseModeToCopied();
                            setCopied(true);
                        }}>
                        {["LUCASPENNICE@", "GMAIL.COM"].map((word) => {
                            let lastLetterLeftPosition = 0;
                            return (
                                <div
                                    className="relative overflow-x-hidden overflow-y-hidden flex justify-start w-full"
                                    style={{ height: letterHeight }}>
                                    {word.split("").map((letter, idx) => {
                                        const calculateLetterPosition = (fontSize: number) => {
                                            let currentSymbol = "";
                                            if (letter === "@") currentSymbol = "AT";
                                            if (letter === ".") currentSymbol = "DOT";
                                            if (letter !== "@" && letter !== ".") currentSymbol = letter.toUpperCase();
                                            //@ts-ignore
                                            const letterSizeAtFont10: number = LETTER_SIZE_AT_10[currentSymbol];
                                            const letterSizeAtCurrentFont = (letterSizeAtFont10 / 10) * fontSize;
                                            const result = lastLetterLeftPosition;
                                            lastLetterLeftPosition += letterSizeAtCurrentFont;
                                            return result;
                                        };
                                        const calculateLetterDelay = () => {
                                            return idx / 20;
                                        };
                                        return (
                                            <m.h1
                                                className="absolute"
                                                {...appearTextAnimation(calculateLetterDelay(), letterHeight)}
                                                style={{ left: calculateLetterPosition(fontSize), fontSize }}
                                                key={idx}>
                                                {letter.toUpperCase()}
                                            </m.h1>
                                        );
                                    })}
                                </div>
                            );
                        })}

                        {isMobile && !copied && <p>↑ Click To Copy</p>}
                        {isMobile && copied && <p style={{ color: "#5FAD41" }}>Copied!</p>}
                    </section>

                    <m.h1 {...appearOpacity(1)} style={{ fontSize: isMobile ? "max(5vw , 10px)" : 40 }} className="pt-3">
                        <Link href="http://www.linkedin.com/in/lucas-pennice" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" onMouseEnter={setMouseModeToClickeable} onMouseLeave={setMouseModeToDefault}>
                                LinkedIn
                            </a>
                        </Link>
                        ,{" "}
                        <Link href="https://github.com/LucasPennice" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" onMouseEnter={setMouseModeToClickeable} onMouseLeave={setMouseModeToDefault}>
                                GitHub
                            </a>
                        </Link>
                        ,{" "}
                        <Link
                            href="https://docs.google.com/document/d/e/2PACX-1vRu_S7LLF2c33QBm_Aw21__6pLKNl9GLv95IwgdpNcO2zIdTT6mGAzxz3QESO1w3cagji3VDmqRet7y/pub"
                            legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" onMouseEnter={setMouseModeToClickeable} onMouseLeave={setMouseModeToDefault}>
                                CV
                            </a>
                        </Link>
                    </m.h1>
                </div>
                <m.footer
                    {...appearOpacity(1.2)}
                    className="w-full flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:gap-0 gap-6 xl:items-center pb-5 xl:pb-0">
                    <div style={{ fontSize: isMobile ? "max(2vw , 2px)" : 30 }}>
                        <p>BASED IN ROSARIO</p>
                        <p>ARGENTINA</p>
                    </div>
                    <div style={{ fontSize: isMobile ? "max(2vw , 2px)" : 30 }}>
                        <p>DEVELOPED BY</p>
                        <p>LUCAS PENNICE</p>
                    </div>
                    <div style={{ fontSize: isMobile ? "max(2vw , 2px)" : 30 }}>
                        <p>DESIGN INSPIRED BY</p>
                        <p>RICHARD EKWONYE</p>
                    </div>
                </m.footer>
            </div>
        </div>
    );
};
export default ContactSection;
