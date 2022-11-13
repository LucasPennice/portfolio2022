import useIsMobile from "../../../utils/useMobileScreen";

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
                <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi recusandae quisquam corrupti quis laborum dolores, neque
                    accusantium aliquam quo, reprehenderit impedit rerum culpa provident atque odit dolorum doloremque debitis?
                </h1>
                <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi recusandae quisquam corrupti quis laborum dolores, neque
                    accusantium aliquam quo, reprehenderit impedit rerum culpa provident atque odit dolorum doloremque debitis?
                </h1>
            </div>
        </div>
    );
};
export default AboutSection;
