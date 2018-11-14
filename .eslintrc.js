module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    plugins: ['vue', 'html'],
    rules: {
        eqeqeq: [2, 'smart'],
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'no-console': 0,
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
}