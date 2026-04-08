import TechnicalLogs from "../components/TechnicalLogs";
import SetMeta from "../components/SetMeta";
import TechnicalLogsTitle from "../components/TechnicalLogsTitle";


export default function Articles() {

    return (
        <div>
            <SetMeta title="Liam David Hughes - Articles" description="Technical articles with different solutions built in the cloud and on local machines. Topics include cloud architecture, serverless, and more. Platforms such as AWS and Cloudflare are documented." keywords="Liam David Hughes, articles, blogs, technical logs" image="https://liam.network/favicon.svg" type="article" />
            <TechnicalLogsTitle />
            <TechnicalLogs />
        </div>
    )
}