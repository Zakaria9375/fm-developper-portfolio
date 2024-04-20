/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      dark: "#151515",
      mint: "#4EE1A0",
      night: "#242424",
      grey: "#D9D9D9",
      white: "#FFFFFF",
      myred: "#FF6F5B",
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: { max: "768px" },
        tablet: { min: "768px" },
        justTablet: { min: "768px", max: "992px" },
        desktop: { min: "992px" },
      },
      backgroundImage: {
        "gradient-mobile":
          "linear-gradient(to bottom, #151515 0%, #151515 83.363%, #242424 83.363%, #242424 100%)",
        "gradient-tablet":
          "linear-gradient(to bottom, #151515 0%, #151515 77.379%, #242424 77.379%, #242424 100%)",
        "gradient-desktop":
          "linear-gradient(to bottom, #151515 0%, #151515 82.567%, #242424 82.567%, #242424 100%)",
      },
      content: {
        rings: 'url("assets/images/pattern-rings.svg")',
        error: 'url("assets/images/error.svg")',
        circle: 'url("assets/images/pattern-circle.svg")',
      },
    },
  },
  plugins: [],
};
