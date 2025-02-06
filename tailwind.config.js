/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#eb8fc8",
        backgroundColor: "#FDE9",
      },
      animation: {
        slowspin: "spin 10s linear infinite",
        scrolling: "scrollingText  5s linear infinite",
      },
      keyframes: {
         scrollingText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        },
      screens: {
        'xs': '480px',  // Extra pequeno (mobile pequeno)
        'sm': '640px',  // Pequeno (smartphones normais)
        'md': '768px',  // Médio (tablets)
        'lg': '1024px', // Grande (notebooks)
        'xl': '1280px', // Extra grande (monitores grandes)
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Exemplo com a fonte Poppins
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
