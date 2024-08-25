import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        rainbow:
          "linear-gradient(109deg, rgba(54,123,239,1) 0%, rgba(255,111,99,1) 40%, rgba(196,233,0,1) 80%, rgba(0,197,114,1) 100%)",
      },
      fontFamily: {
        bangers: ["var(--font-bangers)"],
      },
    },
  },
  plugins: [forms],
};
export default config;
