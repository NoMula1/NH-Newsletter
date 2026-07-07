/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docusaurus.config.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // NightHawk palette
        "nh-bg": "#0a0a0a",
        "nh-bg-2": "#111111",
        "nh-bg-3": "#1a1a1a",
        "nh-bg-4": "#222222",
        "nh-red": "#E63946",
        "nh-red-dark": "#c1121f",
        "nh-red-glow": "rgba(230,57,70,0.15)",
        "nh-text": "#e8e8e8",
        "nh-text-muted": "#888888",
        "nh-text-dim": "#555555",
        "nh-border": "#2a2a2a",
        "nh-border-bright": "#3a3a3a",
        // Legacy Discord colors kept for docs/blog
        blurple: "#5865F2",
        "blurple-dark": "#4650c7",
        green: "#57F287",
        yellow: "#FEE75C",
        fuchsia: "#EB459E",
        red: "#ED4245",
        "dark-1": "#18191c",
        "dark-2": "#1f2225",
        "dark-3": "#2e3136",
        "dark-4": "#36393e",
        "dark-5": "#3e4247",
        "dark-6": "#45494f",
        "dark-7": "#71757d",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "blink-cursor": "blinkCursor 1s step-end infinite",
        "scan": "scanlines 8s linear infinite",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blinkCursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanlines: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(230,57,70,0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(230,57,70,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
