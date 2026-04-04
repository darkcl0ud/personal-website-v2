import { ShieldCheckIcon, CloudIcon, CubeTransparentIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import Section from "../ui/Section";
import Header from "../ui/Header";

const coreSkills = [
    {
        title: "Security",
        description: "Architect solutions with a security by design approach. Ensuring robust and hardened systems are implemented.",
        icon: <ShieldCheckIcon className="w-8 h-8 text-primary-100" />
    },
    {
        title: "Cloud First",
        description: "Design solutions that are optimized for the cloud, using cloud native technologies and architectures.",
        icon: <CloudIcon className="w-8 h-8 text-primary-100" />
    },
    {
        title: "Serverless",
        description: "Taking proactive serverless first approaches where appropriate to reduce costs and improve scalability.",
        icon: <CubeTransparentIcon className="w-8 h-8 text-primary-100" />
    },
    {
        title: "Global Reach",
        description: "Design solutions that are optimized for global reach and scalability. Ensuring that solutions are designed to handle high traffic and scale with the business. ",
        icon: <GlobeAmericasIcon className="w-8 h-8 text-primary-100" />
    },
]

export default function CoreSkills() {
    return <Section>
        <Header number="01" title="Core Skills" />
        <div className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,24rem),24rem))] justify-center">
            {coreSkills.map((skill) => (
                <div key={skill.title} className="bg-neutral-500 p-8 outline outline-white/5 min-h-80 flex flex-col gap-8">
                    {skill.icon}
                    <h2 className="text-2xl font-headline text-white tracking-wide">{skill.title}</h2>
                    <p className="text-tertiary-100 font-light tracking-widest">{skill.description}</p>
                </div>
            ))}
        </div>
    </Section>
}