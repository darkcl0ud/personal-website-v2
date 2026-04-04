import { CommandLineIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router"
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Experience",
        href: "/experience"
    },
    {
        label: "Articles",
        href: "/articles"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]

export default function Nav() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileNavOpen = () => {
        setIsMobileNavOpen(true);
    }
    const handleMobileNavClose = () => {
        setIsMobileNavOpen(false);
    }
    return (
        <div className="w-full h-20">
            <nav className="h-20 fixed top-0 left-0 right-0 z-100 bg-neutral-900 border-b-2 border-primary-100/10">
                <div className="max-w-[1440px] mx-auto h-full flex flex-row justify-between md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 p-4">
                <h1 className="text-xl font-headline justify-self-start min-w-0 font-bold">{"LDH::WEB::STATIC"}</h1>
                <ul className="gap-6 font-body text-sm justify-center hidden md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <NavLink to={item.href} className={({ isActive }) => isActive ? "text-primary-100 underline underline-offset-8" : "text-white/40"}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <CommandLineIcon className="w-6 h-6 justify-self-end shrink-0 hidden md:block" />
                <Bars3Icon onClick={handleMobileNavOpen} className="w-8 h-8 justify-self-end shrink-0 block md:hidden" />
                <AnimatePresence>
                    {isMobileNavOpen && <MobileNav handleMobileNavClose={handleMobileNavClose} />}
                </AnimatePresence>
            </div>
            </nav>
        </div>

    )
}

function MobileNav({ handleMobileNavClose }: { handleMobileNavClose: () => void }) {
    return (
        <div className="fixed min-h-screen top-0 left-0 right-0 z-100 border-b-2 border-primary-100/10 md:hidden animate-menu-open">
            <motion.div
                onClick={handleMobileNavClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-full absolute top-0 left-0 right-0 -z-10 bg-neutral-900/30">
            </motion.div>
            <motion.div
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                exit={{ x: -600 }}
                transition={{ duration: 0.7 }}
                className="p-8 bg-neutral-900 min-h-screen w-3/4">
                <XMarkIcon onClick={handleMobileNavClose} className="w-8 h-8 mb-8" />
                <ul className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <NavLink to={item.href} className={({ isActive }) => isActive ? "text-primary-100 underline underline-offset-8" : "text-white/40"}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <CommandLineIcon className="w-8 h-8 my-4" />
            </motion.div>
        </div>
    )
}