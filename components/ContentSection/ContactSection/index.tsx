import { useContext } from "react";
import { MouseModes, updateMouseModeContext } from "../../../pages";
import useCopy from "../../../utils/useCopy";

interface Props {
    reference: React.MutableRefObject<any>;
}

const ContactSection = ({ reference }: Props) => {
    const updateMouseMode = useContext(updateMouseModeContext);
    const copyToClipBoard = useCopy();

    const setMouseModeToDefault = () => updateMouseMode(MouseModes.Default);
    const setMouseModeToCopy = () => updateMouseMode(MouseModes.CopyToClipboard);

    return (
        <div id="contactSection" style={{ minHeight: "100vh" }} className="pt-28" ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto", height: "calc(100vh - 112px)" }}
                className="w-full flex flex-col justify-between items-start pb-20 px-20">
                <h1 style={{ fontSize: 40 }}>Contact Me</h1>
                <div>
                    <section
                        onMouseEnter={setMouseModeToCopy}
                        onMouseLeave={setMouseModeToDefault}
                        onClick={copyToClipBoard("lucaspennice@gmail.com")}>
                        <h1 style={{ fontSize: 200 }}>LUCASPENNICE@</h1>
                        <h1 style={{ fontSize: 200 }}>GMAIL.COM</h1>
                    </section>

                    <h1 style={{ fontSize: 40 }}>LinkedIn, GitHub, CV</h1>
                </div>
                <footer className="w-full flex justify-between items-center">
                    <div style={{ fontSize: 30 }}>
                        <p>BASED IN ROSARIO</p>
                        <p>ARGENTINA</p>
                    </div>
                    <div style={{ fontSize: 30 }}>
                        <p>DEVELOPED BY</p>
                        <p>LUCAS PENNICE</p>
                    </div>
                    <div style={{ fontSize: 30 }}>
                        <p>DESIGN INSPIRED BY</p>
                        <p>RICHARD EKWONYE</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default ContactSection;
