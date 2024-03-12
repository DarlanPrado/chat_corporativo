// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/': {
      redirect: {
        to: '/login',
      }
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  // '@pinia/nuxt'
})
