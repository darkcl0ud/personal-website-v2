import { StopIcon } from "@heroicons/react/24/solid";
import Section from "../ui/Section";

export default function ExperienceTitle() {
    return (
        <Section>
            <div className="flex flex-col gap-2 border-l-4 border-primary-100 pl-4">
                <span className="flex items-center gap-2"><StopIcon className="w-3 h-3 text-primary-100 animate-pulse" /> <p className="text-tertiary-100 font-light tracking-wide text-xs">SYSTEM_STABLE // LOG_VER: 2026.04.06</p></span>
                <h1 className="text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl font-headline font-bold text-white tracking-wider leading-none">PROFESSIONAL</h1>
                <h1 className="text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl font-headline font-bold text-primary-100 tracking-wider leading-none">LOGS</h1>
            </div>
        </Section>
    )
}