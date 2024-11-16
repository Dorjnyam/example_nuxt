// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    app: {
      head: {
        title: 'Try'
      }
    }
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  vite: {
      vue: {
        customElement: true
      },
      vueJsx: {
        mergeProps: true
      }
    },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt"]
})