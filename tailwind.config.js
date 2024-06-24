/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gf_green: "#2E7D32",
        gf_red: "#C62828",
        gf_blue: "#1565C0",
      },
    },
  },
  plugins: [],
};
