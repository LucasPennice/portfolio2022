import Image from "next/image";
import useIsMobile from "../../../utils/useMobileScreen";
import { motion as m } from "framer-motion";
import { appearOpacity } from "../../../utils/animations";

interface Props {
    reference: React.MutableRefObject<any>;
}

const AboutSection = ({ reference }: Props) => {
    const isMobile = useIsMobile(1280);

    return (
        <div id="aboutSection" style={{ minHeight: isMobile ? "auto" : "110vh" }} ref={reference}>
            <div
                style={{ maxWidth: 2500, margin: "0 auto" }}
                className="w-full flex text-2xl flex-col justify-start items-center xl:pb-0 pb-32 px-4 xl:px-20 xl:gap-0 gap-8">
                <header className="w-full flex justify-between items-center xl:text-3xl text-2xl my-20">
                    <h1>.02</h1>
                    <h1>About</h1>
                </header>
                <section className="flex flex-col-reverse xl:flex-row justify-between items-center gap-7">
                    <aside className="w-full xl:w-1/2 text-xl xl:text-3xl xl:h-screen">
                        <m.h1 className="mb-14" {...appearOpacity(0)}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi recusandae quisquam corrupti quis laborum
                            dolores, neque accusantium aliquam quo, reprehenderit impedit rerum culpa provident atque odit dolorum doloremque debitis?
                        </m.h1>
                        <m.h1 className="mb-14" {...appearOpacity(0.2)}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi recusandae quisquam corrupti quis laborum
                            dolores, neque accusantium aliquam quo, reprehenderit impedit rerum culpa provident atque odit dolorum doloremque debitis?
                        </m.h1>
                        <m.h1 {...appearOpacity(0.4)}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi recusandae quisquam corrupti quis laborum
                            dolores, neque accusantium aliquam quo, reprehenderit impedit rerum culpa provident atque odit dolorum doloremque debitis?
                        </m.h1>
                    </aside>
                    <div className="w-full xl:w-1/2 overflow-x-hidden overflow-y-hidden rounded-sm">
                        <Image
                            className="scale-125 hover:scale-110"
                            src="/drill-monkey-01_2x3.webp"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 5,
                                transition: ".5s ease-in-out",
                            }}
                            alt="Project img"
                            width={1920}
                            height={1080}
                        />
                    </div>

                    <aside></aside>
                </section>
            </div>
        </div>
    );
};
export default AboutSection;
