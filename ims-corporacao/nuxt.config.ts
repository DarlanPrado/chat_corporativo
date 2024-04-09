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
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-mongoose','@pinia/nuxt'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: 'models',
    devtools: true,
  },
  components: [{
    path: '~/components'
  }],
  pinia: {
    storesDirs: ['~/stores/**']
  }
})