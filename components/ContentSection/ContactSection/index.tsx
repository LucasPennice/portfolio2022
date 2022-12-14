import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import useIsMobile from "../../../utils/useMobileScreen";
import { motion as m } from "framer-motion";
import { appearOpacity } from "../../../utils/animations";
import AnimateWordOnView, { AllowedFonts } from "../../AnimateWordOnView";

interface Props {
    reference: React.MutableRefObject<any>;
    blockCustomCursorState: [boolean, () => void];
}

const ContactSection = ({ reference, blockCustomCursorState }: Props) => {
    //Context
    const updateMouseMode = useContext(updateMouseModeContext);
    //Hooks
    const isMobile = useIsMobile(1280);
    //Local state
    const [copied, setCopied] = useState(false);
    const [fontSize, setFontSize] = useState<AllowedFonts>(110);
    //Props
    const [blockCustomCursor, toggleBlockCustomCursor] = blockCustomCursorState;

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToCopy = () => updateMouseMode(MouseModes.CopyToClipboard);
    const setMouseModeToCopied = () => updateMouseMode(MouseModes.Copied);
    const setMouseModeToClickeable = () => updateMouseMode(MouseModes.Clickeable);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        function handleResize() {
            const windowSize: number | undefined = window.innerWidth;
            if (!windowSize) return;
            if (windowSize >= 0 && windowSize <= 680) return setFontSize(36);
            if (windowSize > 680 && windowSize <= 1280) return setFontSize(70);
            return setFontSize(110);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{ minHeight: "101vh" }} className="pt-10" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto", height: isMobile ? "100vh" : "calc(100vh - 112px)" }}
                className="w-full flex flex-col justify-between items-start px-4 xl:px-20 gap-10">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl">
                    <h1>.04</h1>
                    <h1>Contact Me</h1>
                </header>
                <div className="w-full">
                    <section
                        className="w-full cursor-pointer"
                        onMouseEnter={setMouseModeToCopy}
                        onMouseLeave={setMouseModeToDefault}
                        onClick={() => {
                            navigator.clipboard.writeText("lucaspennice@gmail.com");
                            setMouseModeToCopied();
                            setCopied(true);
                        }}>
                        <AnimateWordOnView fontSize={fontSize} wordToAnimate="LUCASPENNICE@" />
                        <AnimateWordOnView fontSize={fontSize} wordToAnimate="GMAIL.COM" />
                        <m.div {...appearOpacity(1)}>
                            {(isMobile || blockCustomCursor) && !copied && <p>??? Click To Copy</p>}
                            {(isMobile || blockCustomCursor) && copied && <p style={{ color: "#5FAD41" }}>Copied!</p>}
                        </m.div>
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
                    {...appearOpacity(1.1)}
                    id="contactSection"
                    className="w-full flex flex-row justify-between items-start xl:gap-0 gap-6 xl:items-center pb-5 xl:pb-0">
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
                        <p>GIL HUYBRECHT</p>
                    </div>
                </m.footer>
            </div>
        </div>
    );
};
export default ContactSection;
