import Section from "../ui/Section";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";

export default function ResumeDownload() {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center gap-8">
                <p className="text-white font-extralight tracking-widest text-xs animate-pulse">END_OF_LOGS // READY_FOR_TRANSFER</p>
                <a href="/media/resume" download><Button variant="secondary"><span className="flex items-center gap-2"><ArrowDownTrayIcon className="w-4 h-4" /> DOWNLOAD_RESUME</span></Button></a>
            </div>
        </Section>
    )
}