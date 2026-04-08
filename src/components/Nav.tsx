import { CommandLineIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink, useNavigate } from "react-router"
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import logo from "../assets/logo.svg";

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
    const navigate = useNavigate();

    const handleMobileNavOpen = () => {
        setIsMobileNavOpen(true);
    }
    const handleMobileNavClose = () => {
        setIsMobileNavOpen(false);
    }
    return (
        <div className="w-full h-16">
            <nav className="h-16 fixed top-0 left-0 right-0 z-100 bg-neutral-900 border-b-1 border-primary-100/20 px-8 md:px-24">
                <div className="max-w-[1440px] mx-auto h-full flex flex-row justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
                <img src={logo} alt="Logo" className="md:h-12 h-8 hover:cursor-pointer" onClick={() => navigate("/")} />
                <ul className="gap-6 font-body text-sm justify-center hidden lg:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <NavLink to={item.href} className={({ isActive }) => isActive ? "text-primary-100 underline underline-offset-8" : "text-white/40"}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <CommandLineIcon className="w-6 h-6 justify-self-end shrink-0 hidden lg:block" />
                <Bars3Icon onClick={handleMobileNavOpen} className="w-8 h-8 justify-self-end shrink-0 block lg:hidden hover:cursor-pointer" />
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
        <div className="fixed min-h-screen top-0 left-0 right-0 z-100 border-b-2 border-primary-100/10 lg:hidden animate-menu-open">
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
                className="p-8 bg-neutral-900 min-h-screen w-3/4 md:w-1/3">
                <XMarkIcon onClick={handleMobileNavClose} className="w-8 h-8 mb-8 hover:cursor-pointer" />
                <ul className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <NavLink onClick={handleMobileNavClose} end={true} to={item.href} className={({ isActive }) => isActive ? "text-neutral-900 bg-primary-100 px-4 py-2" : "text-white/40"}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <CommandLineIcon className="w-8 h-8 my-4" />
            </motion.div>
        </div>
    )
}