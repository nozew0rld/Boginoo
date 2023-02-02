/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
      },
      spacing: {
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        0.1: "10%",
        0.2: "20%",
        0.3: "30%",
        0.4: "40%",
        0.5: "50%",
        0.6: "60%",
        0.7: "70%",
        0.8: "80%",
        0.9: "90%",
      },
      fontFamily: {
        sans: ["Montserrat", "sans"],
        main: ["montserrat"],
        mukta: ["Mukta"],
        mulish: ["Mulish"],
        ubuntu: ["Ubuntu"],
      },
      colors: {
        main: "#02B589",
      },
    },
  },
  plugins: [],
};
