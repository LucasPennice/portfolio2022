/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            black: "#12100E",
            white: "#F0EEEC",
            grayShadow: "#b4b4b4",
            headerBgDark: "#1c1c1c5a",
            headerBgLight: "#F0EEEC5A",
            red: "red",
        },
        extend: {},
    },
    plugins: [],
};
