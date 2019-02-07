// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';

// router custom hack
const routerData = require('./lib/acl/data.js');

const env = {
    baseUrl: isProduction
        ? 'https://english-backend-app.herokuapp.com'
        : 'http://localhost:4000',
    FLUSH_DURATION: 7000
};
module.exports = {
    mode: 'universal',

    env: env,

    router: {
        extendRoutes(routes, resolve) {
            routes.splice(0, routes.length);
            routerData.map(page => {
                routes.push({
                    name: page.name,
                    path: page.url,
                    component: resolve(__dirname, page.component)
                });
            });
        }
    },

    /*
     ** Headers of the page
     */
    head: {
        title: 'Aplikace na výuku Angličtiny',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Aplikace na výuku angličtiny'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min' +
                    '.css',
                integrity:
                    'sha256-eSi1q2PG6J7g7ib17yAaWMcrr5GrtohYChqibrV7PBE=',
                crossorigin: 'anonymous',
                id: 'stylesheet'
            }
        ],
        script: [
            {
                type: 'text/javascript',
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
                integrity:
                    'sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=',
                crossorigin: 'anonymous',
                body: true
            },
            {
                type: 'text/javascript',
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/esm/popper.min.js',
                integrity:
                    'sha256-T0gPN+ySsI9ixTd/1ciLl2gjdLJLfECKvkQjJn98lOs=',
                crossorigin: 'anonymous',
                body: true
            },
            {
                type: 'text/javascript',
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.' +
                    'js',
                integrity:
                    'sha256-VsEqElsCHSGmnmHXGQzvoWjWwoznFSZc6hs7ARLRacQ=',
                crossorigin: 'anonymous',
                body: true
            }
        ],
        bodyAttrs: {
            lang: 'cs'
        },
        htmlAttrs: {
            lang: 'cs'
        }
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
    css: ['@/assets/css/main.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/flush',
        '~/plugins/api',
        {
            src: '~/plugins/ckeditor',
            ssr: false
        },
        '~/plugins/persistedstate'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-imagemin',
            {
                optipng: { optimizationLevel: 5 },
                gifsicle: { optimizationLevel: 2 }
            }
        ]
    ],
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }

            // Visualize size of webpack output files with an interactive zoomable treemap.
            //config.plugins.push(new BundleAnalyzerPlugin({}));
        }
    }
};
