// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    }
  },
})