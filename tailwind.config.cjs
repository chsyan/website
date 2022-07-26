/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        type: "type 4s infinite",
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        type: {
          "0%, 10%": { transform: "translateX(0ch)" },
          "12%, 14%": { transform: "translateX(1ch)" },
          "15%, 17%": { transform: "translateX(2ch)" },
          "18%, 20%": { transform: "translateX(3ch)" },
          "21%, 23%": { transform: "translateX(4ch)" },
          "24%, 26%": { transform: "translateX(5ch)" },
          "27%, 29%": { transform: "translateX(6ch)" },
          "30%, 32%": { transform: "translateX(7ch)" },
          "33%, 35%": { transform: "translateX(8ch)" },
          "36%, 38%": { transform: "translateX(9ch)" },
          "39%, 41%": { transform: "translateX(10ch)" },
          "42%, 44%": { transform: "translateX(11ch)" },
          "45%, 47%": { transform: "translateX(12ch)" },
          "48%, 50%": { transform: "translateX(13ch)" },
          "51%, 53%": { transform: "translateX(14ch)" },
          "54%, 80%": { transform: "translateX(15ch)" },
          "81%": { transform: "translateX(14ch)" },
          "82%": { transform: "translateX(13ch)" },
          "83%": { transform: "translateX(12ch)" },
          "84%": { transform: "translateX(11ch)" },
          "85%": { transform: "translateX(10ch)" },
          "86%": { transform: "translateX(9ch)" },
          "87%": { transform: "translateX(8ch)" },
          "89%": { transform: "translateX(7ch)" },
          "90%": { transform: "translateX(6ch)" },
          "91%": { transform: "translateX(5ch)" },
          "92%": { transform: "translateX(4ch)" },
          "93%": { transform: "translateX(3ch)" },
          "94%": { transform: "translateX(2ch)" },
          "95%": { transform: "translateX(1ch)" },
          "96%, 100%": { transform: "translateX(0ch)" },
        },
      },
    },
  },
  plugins: [],
};
