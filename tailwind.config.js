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
      },
      fontFamily: {
        agustina: ["Agustina Regular"],
      },
    },
  },
  plugins: [],
};
