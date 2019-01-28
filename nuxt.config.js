const pkg = require('./package');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = (process.env.NODE_ENV === 'production');

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
            /*routes.splice(0, routes.length);
            routes.push({
                name: 'acricle',
                path: '/clanky',
                component: resolve(__dirname, 'pages/article/index.vue')
            });*/
            /*routes = [
                {
                    name: 'article',
                    path: '/clanky',
                    component: resolve(__dirname, 'pages/article/index.vue'),
                    chunkName: 'pages/article/index'
                }, {
                    name: 'word',
                    path: '/word',
                    component: resolve(__dirname, 'pages/word/index.vue'),
                    chunkName: 'pages/word/index'
                }, {
                    name: 'article-create',
                    path: '/article/create',
                    component: resolve(__dirname, 'pages/article/create.vue'),
                    chunkName: 'pages/article/create'
                }, {
                    name: 'article-mockArticle',
                    path: '/article/mockArticle',
                    component: resolve(__dirname, 'pages/article/mockArticle.js'),
                    chunkName: 'pages/article/mockArticle'
                }, {
                    name: 'user-login',
                    path: '/user/login',
                    component: resolve(__dirname, 'pages/user/login.vue'),
                    chunkName: 'pages/user/login'
                }, {
                    name: 'user-logout',
                    path: '/user/logout',
                    component: resolve(__dirname, 'pages/user/logout.vue'),
                    chunkName: 'pages/user/logout'
                }, {
                    name: 'user-registration',
                    path: '/user/registration',
                    component: resolve(__dirname, 'pages/user/registration.vue'),
                    chunkName: 'pages/user/registration'
                }, {
                    name: 'word-create',
                    path: '/word/create',
                    component: resolve(__dirname, 'pages/word/create.vue'),
                    chunkName: 'pages/word/create'
                }, {
                    name: 'word-test',
                    path: '/word/test',
                    component: resolve(__dirname, 'pages/word/test.vue'),
                    chunkName: 'pages/word/test'
                }, {
                    name: 'article-url',
                    path: '/article/:url',
                    component: resolve(__dirname, 'pages/article/_url.vue'),
                    chunkName: 'pages/article/_url'
                }, {
                    name: 'word-name',
                    path: '/word/:name',
                    component: resolve(__dirname, 'pages/word/_name.vue'),
                    chunkName: 'pages/word/_name'
                }, {
                    name: 'index',
                    path: '/',
                    component: resolve(__dirname, 'pages/index.vue'),
                    chunkName: 'pages/index'
                }
            ];*/
        }
    },

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
    plugins: [
        '~/plugins/flush',
        '~/plugins/api', {
            src: '~/plugins/ckeditor',
            ssr: false
        },
        '~/plugins/persistedstate'
    ],

    /*
  ** Nuxt.js modules
  */
    modules: [],
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
