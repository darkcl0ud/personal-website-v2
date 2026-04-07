import Section from "../ui/Section";
import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import { useFetcher } from "react-router";
import { type ContactFormResponse } from "../http/contact";

export default function ContactForm() {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";
    const data = fetcher.data as ContactFormResponse;

    return (
        <Section>
            <fetcher.Form method="post" className="bg-black p-6 shadow-[0_0_12px_theme(colors.primary.100/50%),0_0_64px_theme(colors.primary.100/25%)] flex flex-col gap-8 font-label max-w-[600px] mx-auto">
                <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="name" className="text-white font-extralight tracking-widest text-xs">USER_IDENTIFIER</label>
                    <input required name="name" type="text" id="name" className="bg-transparent border-0 border-b-1 border-white/30 focus:outline-none focus:border-primary-100 text-white text-sm pb-2" placeholder="NAME" defaultValue={data?.data.name} />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="email" className="text-white font-extralight tracking-widest text-xs">CONTACT_PROTOCOL</label>
                    <input required name="email" type="email" id="email" className="bg-transparent border-0 border-b-1 border-white/30 focus:outline-none focus:border-primary-100 text-white text-sm pb-2" placeholder="EMAIL" defaultValue={data?.data.email} />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="message" className="text-white font-extralight tracking-widest text-xs">MESSAGE_DATA</label>
                    <textarea required name="message" id="message" className="border-1 border-tertiary-100/20 focus:outline-none focus:border-primary-100 text-white text-sm p-4 bg-neutral-500 tracking-wide resize-none h-32" placeholder="[START_TRANSMISSION_CONTENT]" defaultValue={data?.data.message} />
                </div>
                {!data?.success &&
                    <div className="grid grid-cols-1 gap-8 items-center justify-between">
                        <Button disabled={isSubmitting}>{isSubmitting ? "TRANSMITTING..." : data?.errors.length > 0 ? "RETRY_TRANSMISSION" : "EXECUTE_TRANSMISSION"}</Button>
                        <span className="flex flex-row items-center gap-2 justify-center">
                            <LockClosedIcon className="w-4 h-4 text-white" />
                            <p className="text-white font-extralight tracking-widest text-xs">SECURE_TUNNEL_ESTABLISHED</p>
                        </span>
                        {data?.errors.length > 0 && <div>
                            <p className="text-white font-extralight tracking-widest text-sm font-label">ERROR_LOGS:</p>
                            <ul className="flex flex-col gap-2 mt-2 list-['~$'] list-inside bg-neutral-500 p-2">
                                {data?.errors.map((error) => (
                                    <li key={error} className="text-tertiary-100 font-extralight tracking-widest text-sm font-label"> {error}</li>
                                ))}
                            </ul>
                        </div>}
                    </div>
                }
                {data?.success && <span className="flex flex-row items-center gap-2 justify-center"><CheckCircleIcon className="w-4 h-4 text-white" /> <p className="text-white font-extralight tracking-widest text-xs">TRANSMITTED_SUCCESSFULLY</p></span>}
            </fetcher.Form>
        </Section>
    )
}