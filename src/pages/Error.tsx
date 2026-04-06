import Button from "../ui/Button";
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function ErrorPage() {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    }

    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 w-full px-8 md:px-16">
                <h3 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-wider text-center">4<span className="text-tertiary-100">04</span></h3>
                <p className="md:text-lg text-white tracking-wider text-center">This is not the page you are looking for</p>
                <Button onClick={handleGoHome}><span className="flex items-center gap-2"><HomeIcon className="w-4 h-4" /> Go Home</span></Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 w-full px-8 md:px-16">
            <h3 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-wider text-center">An error occurred</h3>
            <p className="md:text-lg text-white tracking-wider text-center">{error instanceof Error ? error.message : "Unknown error"}</p>
            <Button onClick={handleGoHome}><span className="flex items-center gap-2"><HomeIcon className="w-4 h-4" /> Go Home</span></Button>
        </div>
    )    
}