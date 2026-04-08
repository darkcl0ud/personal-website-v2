import Hero from "../components/Hero";
import CoreSkills from "../components/CoreSkills";
import TechnicalLogsHomePreview from "../components/TechnicalLogsHomePreview";
import GetInTouch from "../components/GetInTouch";
import SetMeta from "../components/SetMeta";

export default function Home() {
    return (
        <>
            <SetMeta title="Liam David Hughes" description="Senior Cloud Architect | Specialized in serverless architectures and cloud native applications. Background in military and national security." keywords="Liam David Hughes, website, portfolio" image="https://liam.network/favicon.svg" type="article" />
            <Hero />
            <CoreSkills />
            <TechnicalLogsHomePreview />
            <GetInTouch />
        </>
    )
}