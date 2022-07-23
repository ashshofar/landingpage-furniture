/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../utils/img/MaskGroup.svg')",
      },
      colors: {
        black: "#333333",
        gray: "#666666",
        primary: "#054C73",
        lightBlue: "#DFE9F4",
        lightBlue2: "#F2F5FF",
        green: "#09513B",
        darkGray: "#D7D6D6",
      },
    },
  },
  plugins: [],
};
