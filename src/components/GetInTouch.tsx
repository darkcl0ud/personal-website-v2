import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { useNavigate } from "react-router";

export default function GetInTouch() {
    const navigate = useNavigate();
    const handleReviewLogs = () => {
        navigate("/experience");
    }
    const handleDirectMessage = () => {
        navigate("/contact");
    }
    return <Section>
        <div className="relative flex flex-col gap-8 items-center justify-center md:py-32 py-16">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-100/25 to-transparent"
                aria-hidden
            />
            <p className="text-primary-100 font-label font-extralight tracking-widest text-center text-xs md:text-base">INITIALIZE CONNECTION</p>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white md:w-4/6 text-center">Ready to optimise your cloud footprint?</h3>
            <span className="flex gap-4 flex-col md:flex-row">
                <Button variant="secondary" onClick={handleReviewLogs}>{"REVIEW_LOGS"}</Button>
                <Button variant="outline" onClick={handleDirectMessage}><span className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4" /> DIRECT_MESSAGE</span></Button>
            </span>
            <p className="text-tertiary-100 font-extralight font-label tracking-widest text-center text-xs md:text-base">AWAITING SYSTEM PROMPT...</p>
        </div>
    </Section>
}