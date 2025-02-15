/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        cwhite: "#d2d7dd",
        midRedLight: "#FC8181",
        midRedDark: "#E53E3E",
        midYellowLight: "#F6E05E",
        midYellowDark: "#D69E2E",
        midPurpleLight: "#9F7AEA",
        midPurpleDark: "#6B46C1",
        midBlueLight: "#63B3ED",
        midBlueDark: "#3182CE",
        midGreenLight: "#48BB78",
        midGreenDark: "#2F855A",
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(193, 193, 193) transparent",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px" ,
          },
          "&::-webkit-scrollbar:hover": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(193, 193, 193)",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "dark", "hover"]);
    },
    require('daisyui'),
  ],
}