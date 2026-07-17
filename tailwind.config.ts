import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        panel: "#151518",
        mist: "#f6f6f7",
        accent: "#db3b6b",
      },
      boxShadow: {
        glow: "0 0 80px rgba(219,59,107,.22)",
      },
    },
  },
  plugins: [],
};

export default config;
