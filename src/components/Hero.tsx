import background from "../assets/map.png";
import Button from "../ui/Button";
import HeroCursor from "../ui/HeroCursor";
import { useNavigate } from "react-router";
import IPBox from "./IPBox";
import SystemStatus from "../ui/SystemStatus";

export default function Hero() {
    const navigate = useNavigate();
    const handleReviewBackground = () => {
        navigate("/experience");
    }
    const handleContactMe = () => {
        navigate("/contact");
    }
    return (
        <section className="flex items-center justify-center bg-cover bg-center relative bg-neutral-900/70 p-8 md:p-24 overflow-hidden">
            <img fetchPriority="high" src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover -z-10 blur-xs" />
            <div className="relative z-10 flex flex-col items-start justify-center w-full h-full gap-6 md:gap-4 max-w-[1440px] mx-auto">
                <SystemStatus />
                <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-headline font-bold text-white md:w-4/5 leading-none">I build and architect in the cloud<HeroCursor /></h1>
                <p className="text-tertiary-100 font-light tracking-widest md:w-1/2 md:leading-6 leading-4 text-sm md:text-base">Senior Cloud Architect | Specialized in serverless architectures and cloud native applications. Background in military and national security.</p>
                <div className="flex gap-4 md:flex-row flex-col">
                    <Button onClick={handleReviewBackground}>{"REVIEW BACKGROUND_"}</Button>
                    <Button variant="outline" onClick={handleContactMe}>CONTACT ME</Button>
                </div>
                <IPBox />
            </div>
        </section>
    )
}