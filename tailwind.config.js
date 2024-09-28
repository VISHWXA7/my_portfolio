const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [addVariablesForColors, addCustomBackgroundPatterns],
};

function addCustomBackgroundPatterns({ matchUtilities, theme }) {
  matchUtilities({
    "bg-grid": (value) => ({
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
           <path d="M0 .5H31.5V32"/>
        </svg>`
      )}")`,
    }),
    "bg-grid-small": (value) => ({
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}">
           <path d="M0 .5H31.5V32"/>
        </svg>`
      )}")`,
    }),
    "bg-dot": (value) => ({
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
           <circle fill="${value}" cx="10" cy="10" r="1.63"/>
        </svg>`
      )}")`,
    }),
  }, {
    values: flattenColorPalette(theme("backgroundColor")),
    type: "color",
  });
}

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
