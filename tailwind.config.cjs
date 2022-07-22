/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 4s infinite alternate both",
      },
      keyframes: {
        cursor: {
          "0%, 40%": { opacity: 1 },
          "60%, 100%": { opacity: 0 },
        },
        type: {
          "0%, 20%": { transform: "translateX(0ch)" },
          "22%, 24%": { transform: "translateX(1ch)" },
          "26%, 28%": { transform: "translateX(2ch)" },
          "30%, 32%": { transform: "translateX(3ch)" },
          "34%, 36%": { transform: "translateX(4ch)" },
          "38%, 40%": { transform: "translateX(5ch)" },
          "42%, 44%": { transform: "translateX(6ch)" },
          "46%, 48%": { transform: "translateX(7ch)" },
          "50%, 52%": { transform: "translateX(8ch)" },
          "54%, 56%": { transform: "translateX(9ch)" },
          "58%, 60%": { transform: "translateX(10ch)" },
          "62%, 64%": { transform: "translateX(11ch)" },
          "66%, 68%": { transform: "translateX(12ch)" },
          "70%, 72%": { transform: "translateX(13ch)" },
          "74%, 76%": { transform: "translateX(14ch)" },
          "78%, 80%": { transform: "translateX(15ch)" },
          "100%": { transform: "translateX(15ch)" },
        },
      },
    },
  },
  plugins: [],
};
