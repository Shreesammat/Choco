/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "#e7e5e4",
        label: "",
        accent: "",
        background: "white",
        cgreen: "#58cc02",
        cblack: "#131f24",
        cblue: "#47b8ee",
        cred: "#ff4b4b",
        cyellow: "#ffd900",
        cpurple: "#ce82ff",
        cwhite: "#d2d7dd"
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}