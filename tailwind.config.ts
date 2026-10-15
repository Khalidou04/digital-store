import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#0b0f2a", 900: "#10163a", 800: "#1b2252", 700: "#2a336e" },
        brand: {
          50: "#f3f0ff",
          100: "#e8e2ff",
          200: "#d3c8ff",
          500: "#7c5cff",
          600: "#6a45f0",
          700: "#5833d6",
        },
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
