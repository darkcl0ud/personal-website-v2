import Section from "../ui/Section";
import experience from "../data/experience.json";
import JobSlot from "./JobSlot";
import type { Job } from "./JobSlot";

export default function Jobs() {
    return (
        <Section>
            <ol>
                {experience.map((job: Job, index: number) => (
                    <JobSlot key={job.title} job={job} idx={index} />
                ))}
            </ol>
        </Section>
    )
}