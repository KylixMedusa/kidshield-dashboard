const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#f8e4ed", // Very light shade of primary color
              100: "#f0bdd0", // Lighter shade
              200: "#e895b2", // Light shade
              300: "#df6d94", // Medium-light shade
              400: "#d84c7b", // Bright shade
              500: "#d02b61", // Standard primary color, slightly darker than your base
              600: "#dc2b6b", // Base primary color
              700: "#c8245f", // Dark shade
              800: "#b41d53", // Darker shade
              900: "#a11547", // Very dark shade
              DEFAULT: "#dc2b6b", // Default primary color used if no other shade is specified
              foreground: "#FFFFFF", // Text color for use on primary color backgrounds
            },
          },
        },
      },
    }),
  ],
};
