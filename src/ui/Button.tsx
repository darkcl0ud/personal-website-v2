export default function Button({children, variant="primary", onClick, disabled}: {children: React.ReactNode, variant?: "primary" | "secondary" | "outline", onClick?: any, disabled?: boolean}) {
    
    let buttonClass: string = ""

    switch (variant) {
        case "outline":
            buttonClass = "bg-transparent text-tertiary-100 border-tertiary-100 border-[0.5px] hover:bg-tertiary-100/10";
            break;
        case "secondary":
            buttonClass = "bg-white text-neutral-900 hover:bg-white/80";
            break;
        default:
            buttonClass = "bg-primary-100 text-neutral-900/60 hover:bg-primary-100/80 disabled:bg-primary-100/60 disabled:text-neutral-900/60";
            break;
    }

    return (
        <button onClick={onClick} disabled={disabled} className={`${buttonClass} text-sm hover:cursor-pointer px-6 py-4 font-label`}>
            {children}
        </button>
    )
}