interface Props {
    reference: React.MutableRefObject<any>;
}

const AboutSection = ({ reference }: Props) => {
    return (
        <div id="aboutSection" style={{ minHeight: "110vh" }} ref={reference}>
            AboutSection
        </div>
    );
};
export default AboutSection;
