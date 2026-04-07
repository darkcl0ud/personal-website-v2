import ContactForm from "../components/ContactForm";
import ContactTitle from "../components/ContactTitle";
import SetMeta from "../components/SetMeta";

export default function Contact() {
    return (
        <>
            <SetMeta title="Liam David Hughes - Contact" description="Contact Liam David Hughes" keywords="Liam David Hughes, contact" image="https://liam.network/favicon.svg" type="article" />
            <div className="flex flex-col">
                <ContactTitle />
                <ContactForm />
            </div>
        </>
    )
}