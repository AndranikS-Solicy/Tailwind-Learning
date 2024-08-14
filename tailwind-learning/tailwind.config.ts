import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1390px",
        container: "1440px",
        "2xl": "1546px",
        "3xl": "1690px",
        "4xl": "1920px",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        weakBlack: "#141414",
        cream: "#EBE8E3",
        blackBg: "#221F1D",
        blackTx: "#1B1309",
        error: "#D80027",
        gradientOne: "rgba(36, 31, 24, 0.56)",
        gradientTwo: "rgba(33, 28, 21, 1)",
        serviceB: "rgba(255, 255, 255, 0.22)",
        strongGrey: "#EBE8E336",
        grey: "#6A6A6A",
        weakGrey: "#8E8E8E",
        whiteGrey: "#F7F7F7",
        warmGray: "#7B746C",
        blue: "#0044cc",
        beige: "#EBE8E36B",
        whiteThemeText: "rgba(31, 31, 31, 1)",
        lightPeach: "rgba(249, 240, 232, 1)",
        nomad: "#BAB4AA",
        cararra: "rgba(226, 225, 222, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
