/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#42a4ff",
          dark: "#005cb3",
          light: "#add8ff",
        },
        secundary: {
          DEFAULT: "#ff42cd",
          light: "#ffade9",
          dark: "#b30083",
        },
      },
    },
  },
  plugins: [],
}
