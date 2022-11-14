import Link from "next/link";
import { useContext, useState } from "react";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import useCopy from "../../../utils/useCopy";
import useIsMobile from "../../../utils/useMobileScreen";

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

    return (
        <div id="contactSection" style={{ minHeight: isMobile ? "auto" : "110vh" }} className="pt-10 xl:pt-28 xl:mt-20" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto", height: isMobile ? "100vh" : "calc(100vh - 112px)" }}
                className="w-full flex flex-col justify-between items-start px-4 xl:px-20 gap-10">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl">
                    <h1>.04</h1>
                    <h1>Contact Me</h1>
                </header>
                <div>
                    <section
                        onMouseEnter={setMouseModeToCopy}
                        onMouseLeave={setMouseModeToDefault}
                        onClick={() => {
                            copyToClipBoard("lucaspennice@gmail.com");
                            setMouseModeToCopied();
                            setCopied(true);
                        }}>
                        <h1 style={{ fontSize: "9vw" }}>LUCASPENNICE@</h1>
                        <h1 style={{ fontSize: "9vw" }}>GMAIL.COM</h1>
                        {isMobile && !copied && <p>↑ Click To Copy</p>}
                        {isMobile && copied && <p style={{ color: "#5FAD41" }}>Copied!</p>}
                    </section>

                    <h1 style={{ fontSize: isMobile ? "max(5vw , 10px)" : 40 }} className="pt-3">
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
                <footer className="w-full flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:gap-0 gap-6 xl:items-center pb-5 xl:pb-0">
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
                </footer>
            </div>
        </div>
    );
};
export default ContactSection;
