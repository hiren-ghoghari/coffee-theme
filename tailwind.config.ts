import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D1600",
        secondary: "#282A3A",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "playfair-display": ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
