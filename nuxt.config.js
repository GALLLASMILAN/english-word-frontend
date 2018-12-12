const pkg = require('./package');

const isProduction = (process.env.NODE_ENV === 'production');

const env = {
    baseUrl: isProduction ? 'https://english-backend-app.herokuapp.com' : 'http://localhost',
};
if (!isProduction) {
    env.basePort = 4000;
}

module.exports = {
    mode: 'universal',

    env: env,

    /*
  ** Headers of the page
  */
    head: {
        title: pkg.name,
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },

    /*
  ** Customize the progress-bar color
  */
    loading: {
        color: '#fff'
    },

    /*
  ** Global CSS
  */
    css: [
        'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css', 'quill/dist/quill.core.css'
    ],

    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        {
            src: '~plugins/nuxt-quill-plugin.js',
            ssr: false
        }
    ],

    /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt'
    ],
    /*
  ** Axios module configuration
  */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
  ** Build configuration
  */
    build: {
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config
                    .module
                    .rules
                    .push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/});
            }
        }
    }
};
