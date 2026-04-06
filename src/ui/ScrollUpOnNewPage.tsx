import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollUpOnNewPage() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (pathname && hash) return;

        document.body.scrollIntoView({ behavior: "instant", block: "start" });
    }, [pathname, hash]);

    return null;
}