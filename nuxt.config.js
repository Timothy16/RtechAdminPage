export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  target: 'static',
  head: {
    title: 'rtech_web_admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css'},
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},
      {rel : "stylesheet" , href : "https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"},
      {rel : "stylesheet" , href : "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}
    ],
    script : [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        async: true,
        crossorigin: "anonymous"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugins/maz.js', ssr: false },
    './plugins/axios',
    './plugins/message',
    './plugins/user',
    './plugins/validation',
    {src: 'plugins/notification.js', ssr: false},
    {src: 'plugins/table.js', ssr: false},
    {src: 'plugins/texteditor.js', ssr: false},
  ],

  axios: {
    credentials: true,
    proxy: true,
  },

  proxy: {
    '/api/': { target: process.env.BASE_URL, pathRewrite: {'^/api/': ''} },
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url:  process.env.BASE_URL+'admin/login', method: 'post', propertyName: 'data.token' },
          logout: { url:  process.env.BASE_URL+'admin/logout', method: 'post' },
          user: { url:   process.env.BASE_URL+'admin/profile', method: 'get', propertyName: 'data'}
        },
        user : {
          property: 'data',
        }
      }, 
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: '/login',
    },
    plugins: [
      './plugins/auth.js',
    ]
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
      plugins: [
        [
          'component', { libraryName: 'maz-ui', styleLibraryName: 'css', },
        ],
      ]
    }
  }
}
