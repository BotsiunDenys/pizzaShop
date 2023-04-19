module.exports = {
  content: ["./dist/*.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FEA116",
        blue: "#0F172B",
        hoverMain: "#fdac33"
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
