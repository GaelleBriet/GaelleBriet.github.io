// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/eslint', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': {},
      'tailwindcss/nesting': {},
      // eslint-disable-next-line @stylistic/quote-props
      tailwindcss: {},
      // eslint-disable-next-line @stylistic/quote-props
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true, // Active les règles de style (optionnel)
    },
  },
  app: {
    baseURL: '/', // Remplacez par le nom de votre repo si différent
  },
  ssr: false, // Pour une Single Page Application
})
