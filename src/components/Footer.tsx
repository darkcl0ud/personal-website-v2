export default function Footer() {
    return (
        <footer className="w-full min-h-16 border-t-1 border-primary-100/20 mt-auto">
            <div className="max-w-[1440px] mx-auto h-full p-4 flex md:flex-row flex-col-reverse items-center justify-between font-label text-xs sm:gap-4 gap-6">
                <p className="text-primary-100 font-light tracking-widest text-center md:text-left">© 2026 Liam Hughes // BUILT_ON_THE_GRID</p>
                <ul className="flex flex-col sm:flex-row sm:gap-4 gap-6 text-tertiary-100 font-light tracking-widest text-center">
                    <li>
                        <a href="mailto:hi@liam.network" target="_blank" rel="noopener noreferrer">Email</a>
                    </li>
                    <li>
                        <a href="https://www.github.com/darkcl0ud" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.credly.com/users/liam-hughes" target="_blank" rel="noopener noreferrer">Credly</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/darkcl0ud/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}