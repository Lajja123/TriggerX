import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fontFamily: {
          one: "var(--Actay-Regular)",
          two: "var(--ActayWide-Bold)",
          three: "var(--ActayCondensed-Thin)",
        },
        screens: {
          xs: "20rem", // 320px
          sm: "24rem", // 384px
          md: "28rem", // 448px
          lg: "32rem", // 512px
          xl: "36rem", // 576px
          "2xl": "42rem", // 672px
          "3xl": "48rem", // 768px
          "4xl": "56rem", // 896px
          "5xl": "64rem", // 1024px
          "6xl": "72rem", // 1152px
          "7xl": "80rem", // 1280px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
