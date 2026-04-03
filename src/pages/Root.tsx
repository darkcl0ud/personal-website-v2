import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function RootPage() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}