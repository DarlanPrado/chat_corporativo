// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': {
      redirect: {
        to: '/login',
      }
    }
  },
  runtimeConfig: {
    mongotoken: ''
  },
  modules: ['@nuxt/ui', "@nuxt/image"],
  // '@pinia/nuxt'
})