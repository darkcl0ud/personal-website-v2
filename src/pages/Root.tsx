import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollUpOnNewPage } from "../ui/ScrollUpOnNewPage";

export default function RootPage() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Nav />
            <Outlet />
            <Footer />
            <ScrollUpOnNewPage />
        </div>
    )
}