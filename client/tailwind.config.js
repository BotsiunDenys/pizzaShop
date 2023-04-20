module.exports = {
  content: ["./dist/*.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FEA116",
        blue: "#0F172B",
        hoverMain: "#fdac33",
        opBlue: "rgba(15, 23, 43, 0.8)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      backgroundImage: {
        "hero-pattern": "url('images/hero.jpg')",
        "pizza-rotating": "url('images/pizza-rotate.png')",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "slide-in": "slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      boxShadow: {
        standart: "0 0 40px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(1000px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
