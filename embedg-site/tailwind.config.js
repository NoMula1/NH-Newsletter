/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docusaurus.config.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: "#ED4245",
        "red-dark": "#c41e3a",
        "red-light": "#ff5555",
        green: "#57F287",
        yellow: "#FEE75C",
        fuchsia: "#EB459E",
        "dark-1": "#0a0e27",
        "dark-2": "#0f1419",
        "dark-3": "#1a1f2e",
        "dark-4": "#252d3d",
        "dark-5": "#3e4247",
        "dark-6": "#45494f",
        "dark-7": "#71757d",
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
