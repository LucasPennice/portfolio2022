import { Carousel } from "react-responsive-carousel";
import { WorkExperience } from "../../../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function MobileWork({ openDetails, workExperienceArr }: { openDetails(workExperience: WorkExperience): void; workExperienceArr: WorkExperience[] }) {
    return (
        <div className="xl:hidden block">
            <Carousel>
                {workExperienceArr.map((workExperience, idx) => {
                    return (
                        <div key={idx} className="flex flex-col justify-start items-start gap-2 px-4 pb-6">
                            <div className="w-full aspect-video rounded-md" style={{ backgroundColor: "gray" }} />
                            <h1 style={{ fontSize: 42 }}>{workExperience.company}</h1>
                            <h1 style={{ fontSize: 24 }}>{workExperience.role}</h1>
                            <p onClick={() => openDetails(workExperience)} className="pr-8 py-5">
                                More details
                            </p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
export default MobileWork;
