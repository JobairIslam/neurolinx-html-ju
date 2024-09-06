/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/custom.js", "!./node_modules/**/*"],
  theme: {
    container: {
      screens: {
        "2xl": "1290px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "32x": "32px",
        "40x": "40px",
        "64x": "64px",
      },
      colors: {
        "b-900": "#030012",
        "b-800": "#100E1B",
        "b-700": "#181627",
        "b-600": "#221F33",
        "b-500": "#2C293D",
        "b-400": "#363347",
        "b-300": "#3F3C53",
        "b-200": "#48455F",
        "b-100": "#514D6A",
        "b-50": "#5A5676",
        "w-900": "#EEEBFF",
        "w-800": "#DEDAFB",
        "w-700": "#D2CDF4",
        "w-600": "#C8C3EA",
        "w-500": "#C3C0D8",
        "w-400": "#B8B4CF",
        "w-300": "#ADA9C6",
        "w-200": "#A3A0BA",
        "w-100": "#9B98AE",
        "w-50": "#9896A2",
        "border-r": " rgb(34, 31, 51);",
        primary: "#7361E5",
        "tropical-indigo": "#9A8DEC",
      },
      backgroundImage: () => ({
        "term-of-services": "url('../img/bg/term-of-services-bg.svg')",
        "privacy-policy": "url('../img/bg/privacy-policy-bg.svg')",
        "body-gd":
          "linear-gradient(to bottom, #19162B 0%, #0E0A25 50%, #1A162B 100%)",
        "gd-primary": "linear-gradient(to bottom, #C3C0D8 0%, #9A8DEC 100%);",
        "gd-secondary": "linear-gradient(to bottom, #9A8DEC 0%, #7361E5 100%)",
        "gd-tertiary":
          "linear-gradient(330.61deg, rgba(238, 235, 255, 0.04) -7.38%, rgba(238, 235, 255, 0.02) -7.37%, rgba(238, 235, 255, 0.0718553) 91.81%, rgba(238, 235, 255, 0.08) 107.38%)", // w-900 -> w-900
        "gd-cv":
          " linear-gradient(90deg, rgba(0, 0, 0, 0) 4.04%, #000000 50%, rgba(0, 0, 0, 0) 95.96%)",
      }),
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
