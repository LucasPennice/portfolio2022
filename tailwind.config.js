/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            black: "black",
            white: "white",
            grayShadow: "#e6e6e6",
            headerBgDark: "#1c1c1c5a",
            headerBgLight: "#F0EEEC5A",
            red: "red",
        },
        extend: {},
    },
    plugins: [],
};
