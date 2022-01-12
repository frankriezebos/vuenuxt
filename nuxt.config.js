import path from 'path'
import fs from 'fs'

export default {
  server: {
      https: {
          key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
          cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
      }
  },

  // publicPath: '/dist/',
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-nuxt',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    // '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
       config.node = {
            fs: 'empty'
        }
    },

    cssSourceMap: true
  },
}
