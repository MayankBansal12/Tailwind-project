/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "#6096B4",
        lightBlue: "#93BFCF",
        firstColor: "#BDCDD6",
        secondColor: "#EEE9DA"
      },
    },
  },
  plugins: [],
};
