interface Props {
    reference: React.MutableRefObject<any>;
}

const AboutSection = ({ reference }: Props) => {
    return (
        <div id="aboutSection" style={{ minHeight: "100vh" }} ref={reference}>
            <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
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
