export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="my-8 md:my-12 px-8 md:px-24">
            <div className="max-w-[1440px] mx-auto">
                {children}
            </div>
        </section>
    )
}