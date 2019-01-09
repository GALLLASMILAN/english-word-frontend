const pkg = require('./package');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const isProduction = (process.env.NODE_ENV === 'production');

const env = {
    baseUrl: isProduction
        ? 'https://english-backend-app.herokuapp.com'
        : 'http://localhost:4000',
    flushDuration: 7
};

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
            }, {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min' +
                        '.css',
                integrity: 'sha256-eSi1q2PG6J7g7ib17yAaWMcrr5GrtohYChqibrV7PBE=',
                crossorigin: 'anonymous',
                id: 'stylesheet'
            }
        ],
        script: [
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
                integrity: 'sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=',
                crossorigin: 'anonymous',
                body: true
            }, {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/esm/popper.min.js',
                integrity: 'sha256-T0gPN+ySsI9ixTd/1ciLl2gjdLJLfECKvkQjJn98lOs=',
                crossorigin: 'anonymous',
                body: true
            }, {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.' +
                        'js',
                integrity: 'sha256-VsEqElsCHSGmnmHXGQzvoWjWwoznFSZc6hs7ARLRacQ=',
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
    /* css: [
        'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css', 'quill/dist/quill.core.css'
    ],*/

    /*
  ** Plugins to load before mounting the App
  */
    plugins: ['~/plugins/flush', '~/plugins/api', '~/plugins/wysiwyg'],

    /*
  ** Nuxt.js modules
  */
    modules: [// Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'],
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
            // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
            // for more information about purgecss.
            if (ctx.isProduction) {
                config
                    .plugins
                    .push(new PurgecssPlugin({
                        paths: glob.sync([
                            path.join(__dirname, './pages/**/*.vue'),
                            path.join(__dirname, './layouts/**/*.vue'),
                            path.join(__dirname, './components/**/*.vue')
                        ]),
                        whitelist: ['html', 'body']
                    }));
                // Visualize size of webpack output files with an interactive zoomable treemap.
                config
                    .plugins
                    .push(new BundleAnalyzerPlugin({}));
            }
        },
        extractCSS: true,
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: false, parallel: true, sourceMap: false // set to true if you want JS source maps
                }),
                new OptimizeCssAssetsPlugin({})
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    }
};
