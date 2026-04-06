import ContactForm from "../components/ContactForm";
import ContactTitle from "../components/ContactTitle";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <ContactTitle />
            <ContactForm />
        </div>
    )
}