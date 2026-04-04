import Header from "./Header";

export default function Section({ children, number, title }: { children: React.ReactNode, number: string, title: string }) {
    return (
        <section className="m-8 md:m-24">
            <div className="max-w-7xl mx-auto">
                <Header number={number} title={title} />
                {children}
            </div>
        </section>
    )
}