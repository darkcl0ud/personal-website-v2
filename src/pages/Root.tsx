import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function RootPage() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}