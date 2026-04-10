import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollUpOnNewPage } from "../ui/ScrollUpOnNewPage";
import {useNavigation} from "react-router";
import Loading from "./Loading";

export default function RootPage() {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Nav />
            <Outlet />
            <Footer />
            <ScrollUpOnNewPage />
        </div>
    )
}