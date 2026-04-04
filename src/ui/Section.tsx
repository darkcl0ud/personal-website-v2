export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="m-8 md:m-12">
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    )
}