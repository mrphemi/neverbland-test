/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "sh-blue-primary": "#10141E",
                "sh-blue-secondary": "#161D2F",
                "sh-red": "#FC4747",
            },
            backgroundImage: {
                banner: "linear-gradient(to right, rgba(22, 29, 47,0.5), rgba(22, 29, 47,0.8)), url('/images/banner.jpg')",
            },
        },
    },
    plugins: [],
};
