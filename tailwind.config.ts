import type { Config } from "tailwindcss";

const colors = {
  grey: "#9294a0",
  tomato: "#ff6257",
  "dark-slate-grey": "#242742",
  "charcoal-grey": "#36384e",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: colors,
      backgroundColor: colors,
      boxShadowColor: colors,
      borderColor: colors,
    },
  },
  plugins: [],
};
export default config;
