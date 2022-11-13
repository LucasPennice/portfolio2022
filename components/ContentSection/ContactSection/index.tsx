import Link from "next/link";
import { useContext } from "react";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import useCopy from "../../../utils/useCopy";
import useIsMobile from "../../../utils/useMobileScreen";

interface Props {
    reference: React.MutableRefObject<any>;
}

const ContactSection = ({ reference }: Props) => {
    const updateMouseMode = useContext(updateMouseModeContext);
    const copyToClipBoard = useCopy();

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToCopy = () => updateMouseMode(MouseModes.CopyToClipboard);
    const setMouseModeToCopied = () => updateMouseMode(MouseModes.Copied);
    const setMouseModeToClickeable = () => updateMouseMode(MouseModes.Clickeable);

    const isMobile = useIsMobile(1280);

    return (
        <div id="contactSection" style={{ minHeight: isMobile ? "auto" : "110vh" }} className="pt-28" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto", height: isMobile ? 700 : "calc(100vh - 112px)" }}
                className="w-full flex flex-col justify-between items-start pb-20 px-4 xl:px-20">
                <h1 style={{ fontSize: isMobile ? "6vw" : 40 }}>Contact Me</h1>
                <div>
                    <section
                        onMouseEnter={setMouseModeToCopy}
                        onMouseLeave={setMouseModeToDefault}
                        onClick={() => {
                            copyToClipBoard("lucaspennice@gmail.com");
                            setMouseModeToCopied();
                        }}>
                        <h1 style={{ fontSize: "9vw" }}>LUCASPENNICE@</h1>
                        <h1 style={{ fontSize: "9vw" }}>GMAIL.COM</h1>
                    </section>

                    <h1 style={{ fontSize: isMobile ? "6vw" : 40 }} className="pt-3">
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
                    </h1>
                </div>
                <footer className="w-full flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:gap-0 gap-6 xl:items-center">
                    <div style={{ fontSize: isMobile ? "4vw" : 30 }}>
                        <p>BASED IN ROSARIO</p>
                        <p>ARGENTINA</p>
                    </div>
                    <div style={{ fontSize: isMobile ? "4vw" : 30 }}>
                        <p>DEVELOPED BY</p>
                        <p>LUCAS PENNICE</p>
                    </div>
                    <div style={{ fontSize: isMobile ? "4vw" : 30 }}>
                        <p>DESIGN INSPIRED BY</p>
                        <p>RICHARD EKWONYE</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default ContactSection;
