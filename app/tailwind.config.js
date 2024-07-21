/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Components/**/*.{js,vue,ts}",
    "./Views/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/index.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      extend: {
        aspectRatio: {
          auto: 'auto',
          square: '1 / 1',
          video: '16 / 9'
        }
      }
    },
  },
  plugins: [],
}

