const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      scale: {
        flip: "-1",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

