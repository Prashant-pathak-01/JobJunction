// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColorA: "#1660e0",
        primaryColorB: "#86B6F6",
        primaryColorC: "#bd2a3d",
        secondaryColorA: "#B4D4FF",
        secondaryColorB: "#EEF5FF",
        secondaryColorC: "#cc2929",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
