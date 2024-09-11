
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/',
    baseURL: '/forpro.webappv2/',
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  ssr: false,

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://forpro.sdrvl.ch',
    }
  },

  generate: {
    routes: [
      '/lieu/learninglab',
      '/lieu/makerlab',
      '/lieu/grandlab',
    ]
  },

  typescript: {
    shim: true,
    strict: true,
    typeCheck: "build",
  },
  css: [
    "@/assets/___main.scss",
  ],
  modules: [
      "@pinia/nuxt",
  ],
})


