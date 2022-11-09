interface Props {
    reference: React.MutableRefObject<any>;
}

const ContactSection = ({ reference }: Props) => {
    return (
        <div id="contactSection" style={{ minHeight: "110vh" }} ref={reference}>
            ContactSection
        </div>
    );
};
export default ContactSection;
