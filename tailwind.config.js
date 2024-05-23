module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
        product: "url('./img/generalproductsimage.jpg')",
        women: "url('./img/smilingwoman.jpg')",
        men: "url('./img/shoppingman.jpg')",
        electronics: "url('./img/gen2.jpg')",
        jewelry: "url('./img/jewerly.jpg')",
      },
    },
  },
  plugins: [],
};
