
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

  // ssr: true,

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NODE_ENV === 'development'
        ? 'https://forpro.sdrvl.ch'
        : 'https://forpro.sdrvl.ch',
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


