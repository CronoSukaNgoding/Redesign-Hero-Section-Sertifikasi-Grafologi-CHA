import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class', // Wajib ditambahkan agar kita bisa toggle mode terang/gelap
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Warna kustom brand eksekutif kita
                navy: {
                    dark: '#0F172A',     // Slate 900
                    card: '#1E293B',     // Slate 800
                    border: '#334155',   // Slate 700
                },
                brand: {
                    gold: '#F59E0B',     // Amber 500
                    goldHover: '#D97706',// Amber 600
                    blue: '#38BDF8',     // Sky 400
                    purple: '#4A1E78',   // Ungu asli LKP Grafologi
                }
            },
        },
    },
    plugins: [],
};
export default config;