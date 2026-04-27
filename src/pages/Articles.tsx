import TechnicalLogs from "../components/TechnicalLogs";
import SetMeta from "../components/SetMeta";
import TechnicalLogsTitle from "../components/TechnicalLogsTitle";


export default function Articles() {

    return (
        <div>
            <SetMeta title="Liam David Hughes - Articles" description="Technical articles with different solutions built locally and in the cloud. Topics include Cloudflare, AWS, serverless, Docker, cybersecurity and others." keywords="Liam David Hughes, articles, blogs, technical logs" image="https://liam.network/favicon.svg" type="article" />
            <TechnicalLogsTitle />
            <TechnicalLogs />
        </div>
    )
}