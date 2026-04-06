import ExperienceTitle from "../components/ExperienceTitle";
import Jobs from "../components/Jobs";
import Certifications from "../components/Certifications";

export default function Experience() {
    return (
        <div className="bg-[radial-gradient(circle,_theme(colors.tertiary.100/35%)_1px,_transparent_1px)] bg-[size:40px_40px] h-full lg:pt-12 flex flex-col md:gap-8">
            <ExperienceTitle />
            <Jobs />
            <Certifications />
        </div>
    )
}