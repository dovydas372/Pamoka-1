/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        nice: "purple",
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["naujas-sriftas"],
      },
    },
  },
  plugins: [],
};
