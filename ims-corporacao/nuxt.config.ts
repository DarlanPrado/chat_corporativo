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
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-mongoose'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: 'models',
    devtools: true,
  },
  // '@pinia/nuxt'
  components: [{
    path: '~/components'
  }]
})