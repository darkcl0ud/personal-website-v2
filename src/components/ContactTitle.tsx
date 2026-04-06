import Section from "../ui/Section";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ContactTitle() {
    return (
        <Section>
            <div className="flex flex-col gap-4">
                <span className="flex items-center gap-2"><ArrowUpIcon className="w-3 h-3 text-primary-100 animate-pulse" /> <p className="text-tertiary-100 font-light font-label tracking-wide text-xs">UPLINK: ESTABLISHED // CON_STATE: STABLE</p></span>
                <h1 className="text-2xl md:text-5xl xl:text-7xl font-headline font-bold text-white">INITIALIZE_<span className="text-primary-100">CONNECTION</span></h1>
            </div>
        </Section>
    )
}