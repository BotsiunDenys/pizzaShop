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
        "about-1": "url(images/about-1.jpg)",
        "about-2": "url(images/about-2.jpg)",
        "about-3": "url(images/about-3.jpg)",
        "about-4": "url(images/about-4.jpg)",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "slide-in": "slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      boxShadow: {
        standart: "0 0 40px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        dancing: "Dancing Script",
      },
    },
  },
  plugins: [],
};
