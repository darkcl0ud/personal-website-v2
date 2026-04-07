import Section from "../ui/Section";
import certifications from "../data/certifications.json";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Certifications() {
    return (
        <Section>
            <div className="flex md:flex-row flex-col gap-4 items-start md:items-center gap-2">
                <h2 className="text-2xl lg:text-4xl font-bold font-headline text-white tracking-wide">CERTIFICATION_MANIFEST</h2>
                <span className="bg-tertiary-100/25 w-full h-[1px] hidden md:inline-block" />
                <p className="text-tertiary-100 font-extralight tracking-widest text-xs">SECURE_VERIFIED</p>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,24rem),1fr))] mt-16 gap-8 items-center justify-center">
                {certifications.map((certification) => (
                    <li key={certification.code} className="group bg-neutral-500/60 p-8 outline outline-white/5 h-[16rem] flex flex-col gap-4 hover:cursor-pointer relative">
                        <span className="flex flex-row justify-between items-center">
                            <p className="text-tertiary-100 font-extralight tracking-widest text-xs">ID: {certification.code}</p>
                            <CheckBadgeIcon className="w-8 h-8 text-tertiary-100/30 group-hover:text-tertiary-100 transition-colors duration-300" />
                        </span>
                        <h4 className="text-lg md:text-xl font-headline font-bold text-white tracking-wide">{certification.title}</h4>
                        <p className="text-tertiary-100 font-extralight tracking-widest text-xs">ISSUED: {certification.issued}</p>
                        {certification.expires && <p className="text-tertiary-100 font-extralight tracking-widest text-xs">EXPIRES: {certification.expires}</p>}
                        {
                            certification.expires && new Date(certification.expires) < new Date() && (
                                <span className="absolute bottom-0 right-0 bg-primary-100/50 text-neutral-900 font-extralight tracking-widest text-xs px-2 py-1">EXPIRED</span>
                            )
                        }
                    </li>
                ))}
            </ul>
        </Section>
    )
}