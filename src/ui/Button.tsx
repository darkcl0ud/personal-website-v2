export default function Button({children, outline=false, onClick}: {children: React.ReactNode, outline?: boolean, onClick?: () => void}) {
    return (
        <button onClick={onClick} className={`${outline ? "bg-transparent text-tertiary-100 border-tertiary-100 border-[0.5px] hover:bg-tertiary-100/10" : "bg-primary-100 text-neutral-900/60 hover:bg-primary-100/80"} text-sm hover:cursor-pointer px-6 py-4 font-label`}>
            {children}
        </button>
    )
}