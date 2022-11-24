import { useEffect } from "react";

function useHandleDarkMode(darkMode: boolean) {
    useEffect(() => {
        const html = document.querySelector("html");
        if (!html) return;

        if (darkMode) return html.classList.add("dark");

        html.classList.remove("dark");
    }, [darkMode]);
}

export default useHandleDarkMode;
