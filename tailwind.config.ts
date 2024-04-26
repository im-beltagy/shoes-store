import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: "var(--brand-font)",
        special: "var(--special-font)",
      },
      padding: { "section-sm": "2rem", "section-md": "6rem" },
      gap: { "section-sm": "2rem", "section-md": "6rem" },
      colors: {
        accent: { main: "#4c66af", dark: "#35477B" },
        primary: "#333333",
        natural: "#474747",
        divider: "#47474740",
        beige: { dark: "#dacece", light: "#f4f4f4" },
      },
    },
  },
  plugins: [],
};
export default config;
