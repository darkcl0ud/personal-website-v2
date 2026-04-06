import ExperienceTitle from "../components/ExperienceTitle";
import Jobs from "../components/Jobs";
import Certifications from "../components/Certifications";
import ResumeDownload from "../components/ResumeDownload";
import Section from "../ui/Section";

export default function Experience() {
    return (
        <div className="bg-[radial-gradient(circle,_theme(colors.tertiary.100/35%)_1px,_transparent_1px)] bg-[size:40px_40px] h-full lg:pt-12 flex flex-col md:gap-8">
            <ExperienceTitle />
            <Jobs />
            <Certifications />
            <ResumeDownload />
            <Section>
                <p className="font-extralight tracking-widest text-xs font-label text-center text-tertiary-100/30">
                    01100011 01101100 01101111 01110101 01100100
                </p>
            </Section>
        </div>
    )
}