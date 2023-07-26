
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/forpro.webappv2/',
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://forpro.sdrvl.ch',
    }
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


