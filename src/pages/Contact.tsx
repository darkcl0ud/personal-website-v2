import Section from "../ui/Section";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <Section>
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2"><ArrowUpIcon className="w-3 h-3 text-primary-100 animate-pulse" /> <p className="text-tertiary-100 font-light font-label tracking-wide text-xs">UPLINK: ESTABLISHED // CON_STATE: STABLE</p></span>
                    <h1 className="text-2xl md:text-5xl lg:text-7xl font-headline font-bold text-white">INITIALIZE_<span className="text-primary-100">CONNECTION</span></h1>
                </div>
            </Section>
            <Section>
                <form className="bg-black p-6 shadow-[0_0_12px_theme(colors.primary.100/50%),0_0_32px_theme(colors.primary.100/25%)] flex flex-col gap-8 font-label">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="name" className="text-white font-extralight tracking-widest text-xs">USER_IDENTIFIER</label>
                            <input type="text" id="name" className="bg-transparent border-0 border-b-1 border-white/30 focus:outline-none focus:border-primary-100 text-white text-sm pb-2" placeholder="NAME" />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="email" className="text-white font-extralight tracking-widest text-xs">CONTACT_PROTOCOL</label>
                            <input type="email" id="email" className="bg-transparent border-0 border-b-1 border-white/30 focus:outline-none focus:border-primary-100 text-white text-sm pb-2" placeholder="EMAIL" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <label htmlFor="message" className="text-white font-extralight tracking-widest text-xs">MESSAGE_DATA</label>
                        <textarea id="message" className="border-1 border-tertiary-100/20 focus:outline-none focus:border-primary-100 text-white text-sm p-4 bg-neutral-500 tracking-wide resize-none h-32" placeholder="[START_TRANSMISSION_CONTENT]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-center justify-between">
                        <span className="flex flex-row items-center gap-2">
                            <LockClosedIcon className="w-4 h-4 text-white" />
                            <p className="text-white font-extralight tracking-widest text-xs">SECURE_TUNNEL_ESTABLISHED</p>
                        </span>
                        <Button>EXECUTE_TRANSMISSION</Button>
                    </div>
                </form>
            </Section>
        </div>
    )
}