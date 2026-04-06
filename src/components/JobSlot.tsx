export type Job = {
    title: string;
    company: string;
    from: string;
    to: string;
    experience: string[];
    skills: string[];
}

export default function JobSlot({ job, idx }: { job: Job, idx: number }) {
    return (
        <li className={`${idx % 2 === 0 ? "bg-neutral-500 p-6 md:p-12 flex flex-col gap-12" : "bg-neutral-900 p-6 md:p-12 flex flex-col gap-12"}`}>
            <div className="flex md:flex-row flex-col justify-between gap-2">
                <div className="flex flex-col gap-2">
                    <p className="text-xs text-tertiary-100 font-extralight tracking-widest">{job.to === "Present" ? "[ CURRENT_ENGAGEMENT ]" : ` [ HISTORICAL_DATA_${idx} ] `}</p>
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-headline text-white tracking-wide font-bold">{job.title.toUpperCase()}</h2>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-headline text-tertiary-100 tracking-wide font-bold">{job.company.toUpperCase()}</h3>
                </div>
                <p className="text-white font-bold md:font-extrabold font-label tracking-widest text-sm md:text-lg">{job.from.toUpperCase()} - {job.to.toUpperCase()}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white font-extralight tracking-widest text-sm">
                {job.experience.map((experience) => (
                    <li key={experience} className="flex flex-col gap-2 hover:text-white"><span className="bg-primary-100/50 max-w-24 h-[2px]"/><p>{experience}</p></li>
                ))}
            </ul>
            <ul className="flex flex-row flex-wrap gap-2 justify-center">
                {job.skills.map((skill) => (    
                    <li key={skill} className={`${idx % 2 === 0 ? "bg-neutral-900" : "bg-neutral-500"} p-2 rounded-md text-white font-extralight tracking-widest text-xs md:text-sm`}>{skill}</li>
                ))}
            </ul>
        </li>
    )
}