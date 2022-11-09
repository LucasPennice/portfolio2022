interface Props {
    reference: React.MutableRefObject<any>;
}

const ForDevsSection = ({ reference }: Props) => {
    return (
        <div id="forDevsSection" style={{ minHeight: "110vh" }} ref={reference}>
            ForDevsSection
        </div>
    );
};
export default ForDevsSection;
