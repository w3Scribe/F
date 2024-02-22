import type { Config } from "tailwindcss";

const colors = {
  tomato: {
    100: "#ffe0dd",
    200: "#ffc0bc",
    300: "#ffa19a",
    400: "#ff8179",
    500: "#ff6257",
    600: "#cc4e46",
    700: "#993b34",
    800: "#662723",
    900: "#331411",
  },

  slateGrey: {
    100: "#d3d4d9",
    200: "#a7a9b3",
    300: "#7c7d8e",
    400: "#505268",
    500: "#242742",
    600: "#1d1f35",
    700: "#161728",
    800: "#0e101a",
    900: "#07080d",
  },

  charcoalGrey: {
    100: "#d7d7dc",
    200: "#afafb8",
    300: "#868895",
    400: "#5e6071",
    500: "#36384e",
    600: "#2b2d3e",
    700: "#20222f",
    800: "#16161f",
    900: "#0b0b10",
  },

  grey: {
    100: "#e9eaec",
    200: "#d3d4d9",
    300: "#bebfc6",
    400: "#a8a9b3",
    500: "#9294a0",
    600: "#757680",
    700: "#585960",
    800: "#3a3b40",
    900: "#1d1e20",
  },
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
