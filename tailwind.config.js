/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(232, 159, 113, 1)",

        gray1: "rgba(58, 58, 58, 1)",
        gray2: "rgba(97, 97, 97, 1)",
        gray3: "rgba(137, 137, 137, 1)",
        gray4: "rgba(176, 176, 176, 1)",

        bg_rect1: "rgba(252, 248, 243, 1)",
        bg_rect2: "rgba(249, 241, 231, 1)",

        red_accent: "rgba(233, 113, 113, 1)",
        green_accent: "rgba(46, 193, 172, 1)",

        lightbg: "rgba(244, 245, 247, 1)",
      },

      fontSize: {
        base: "16px",
        secondary: "24px",
        middle: "20px",
        section_h2: "40px",
      },
    },
  },
  plugins: [],
};
