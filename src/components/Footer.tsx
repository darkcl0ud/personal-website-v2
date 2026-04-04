export default function Footer() {
    return (
        <footer className="w-full h-20 border-t-1 border-primary-100/20 mt-auto">
            <div className="max-w-[1440px] mx-auto h-full p-4 flex md:flex-row flex-col items-center justify-between font-label text-xs">
            <p className="text-primary-100 font-light tracking-widest">© 2026 Liam Hughes // BUILT_ON_THE_GRID</p>
            <ul className="flex flex-row gap-4 text-tertiary-100 font-light tracking-widest">
                <li>
                    <a href="https://www.linkedin.com/in/darkcl0ud/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.github.com/darkcl0ud" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
            </ul>
            </div>
        </footer>
    )
}