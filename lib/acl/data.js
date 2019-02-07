const data = [
    {
        name: 'index',
        url: '/',
        component: 'pages/index.vue',
        title: '',
        role: ['admin', 'user', 'guest'],
        menu: 'none'
    }, {
        name: 'word-create',
        url: '/vytvoreni-slovicka',
        component: 'pages/word/create.vue',
        title: 'Vytvoření slovíčka',
        role: ['admin', 'user'],
        menu: 'left'
    }, {
        name: 'word-test',
        url: '/testovani-slovicka',
        component: 'pages/word/test.vue',
        title: 'Testování',
        role: ['admin', 'user'],
        menu: 'left'
    }, {
        name: 'word',
        url: '/seznam-slovicek',
        component: 'pages/word/index.vue',
        title: 'Seznam slovíček',
        role: ['admin', 'user'],
        menu: 'left'
    }, {
        name: 'article',
        url: '/clanky',
        component: 'pages/article/index.vue',
        title: 'Články',
        role: ['admin', 'user', 'guest'],
        menu: 'left'
    }, {
        name: 'article-create',
        url: '/vytvoreni-clanku',
        component: 'pages/article/create.vue',
        title: 'Nový článek',
        role: ['admin', 'user'],
        menu: 'left'
    }, {
        name: 'user-registration',
        url: '/registrace',
        component: 'pages/user/registration.vue',
        title: 'Registrace',
        role: ['admin', 'guest'],
        menu: 'right'
    }, {
        name: 'user-login',
        url: '/prihlaseni',
        component: 'pages/user/login.vue',
        title: 'Přihlásit se',
        role: ['admin', 'guest'],
        menu: 'right'
    }, {
        name: 'user-logout',
        url: '/odhlaseni',
        component: 'pages/user/logout.vue',
        title: 'Odhlásit se',
        role: ['admin', 'user'],
        menu: 'right'
    },
    // dynamic
    {
        name: 'article-url',
        url: '/clanky/:url',
        component: 'pages/article/_url.vue',
        role: ['admin', 'user', 'guest'],
        title: 'Detail Článku',
        menu: 'none'
    }, {
        name: 'word-name',
        url: '/word/:name',
        component: 'pages/word/_name.vue',
        role: ['admin'],
        title: 'Úprava slovíčka',
        menu: 'none'
    }

];

module.exports = data;