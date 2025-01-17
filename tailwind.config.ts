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
        bgBlue: "#225df5",
        customLightBlue: "#225df5",
        customYellow: "#F2D732",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(270deg, #0b2873 0%, #225df5 46.25%, #0d2d7f 99.2%)",
      },
    },
  },
  plugins: [],
};
export default config;
