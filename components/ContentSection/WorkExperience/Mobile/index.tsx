import { WorkExperience } from "../../../../data";

function MobileWork({ openDetails }: { openDetails(workExperience: WorkExperience): void }) {
    return <div className="xl:hidden block">Mobile</div>;
}
export default MobileWork;
