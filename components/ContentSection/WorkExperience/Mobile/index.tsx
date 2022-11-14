import { Carousel } from "react-responsive-carousel";
import { WorkExperience } from "../../../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

function MobileWork({ openDetails, workExperienceArr }: { openDetails(workExperience: WorkExperience): void; workExperienceArr: WorkExperience[] }) {
    return (
        <div className="xl:hidden block">
            <Carousel showArrows={false} showThumbs={false}>
                {workExperienceArr.map((workExperience, idx) => {
                    return (
                        <div key={idx} className="flex flex-col justify-start items-start gap-2 pb-6">
                            <Image
                                src="/drill-monkey-01_2x3.webp"
                                style={{ width: "100%", height: "auto", borderRadius: 5 }}
                                alt="Project img"
                                width={1920}
                                height={1080}
                            />
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
