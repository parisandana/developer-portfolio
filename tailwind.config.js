/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        faceBook: "#3b5998",
        linkedin: "#0e76a8",
        github: "#333",
        gitlab: "#fca326",
        google: "#ea4335",
        twitter: "#1da1f2",
        medium: "#000",
        stackoverflow: "#f48024",
        instagram: "#c13584",
        kaggle: "#20beff",
        stellar_blue: "#9fb5ce",
      },
      fontFamily: {
        agustina: ["Agustina Regular"],
        montserrat: ["Montserrat"],
      },
      animation: {
        wave: "wave 1800ms infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(-10deg)",
          },
          "20%": {
            transform: "rotate(12deg)",
          },
          "30%": {
            transform: "rotate(-10deg)",
          },
          "40%": {
            transform: "rotate(9deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
