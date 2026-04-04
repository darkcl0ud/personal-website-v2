export default function Header({number, title}: {number: string, title: string}) {
    return (
        <header className="w-full h-20 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-headline my-4 md:my-8">
            <p className="shrink-0 text-base md:text-lg text-primary-100 font-light">{number}//</p>
            <h2 className="min-w-0 text-3xl md:text-5xl font-headline text-white tracking-wider leading-none font-semibold">{title}</h2>
        </header>
    )
}