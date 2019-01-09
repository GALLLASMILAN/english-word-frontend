const defaultCrumb = {
    name: 'Hlavní stránka',
    url: '/',
    active: false
};

export const pages = [
    {
        key: 'article',
        crumbs: [
            {
                name: 'Seznam článků',
                active: true
            }
        ]
    }, {
        key: 'article/detail',
        crumbs: [
            {
                name: 'Seznam článků',
                url: '/article',
                active: false
            }
        ]
    }, {
        key: 'article/create',
        crumbs: [
            {
                name: 'Seznam článků',
                url: '/article',
                active: false
            }, {
                name: 'Vytvoření nového článku',
                active: true
            }
        ]
    }, {
        key: 'word',
        crumbs: [
            {
                name: 'Seznam slovíček',
                active: true
            }
        ]
    }, {
        key: 'word/detail',
        crumbs: [
            {
                name: 'Seznam slovíček',
                url: '/word',
                active: false
            }
        ]
    }, {
        key: 'word/test',
        crumbs: [
            {
                name: 'Seznam slovíček',
                url: '/word',
                active: false
            }, {
                name: 'Testování',
                active: true
            }
        ]
    }, {
        key: 'word/create',
        crumbs: [
            {
                name: 'Seznam slovíček',
                url: '/word',
                active: false
            }, {
                name: 'Vytvoření nového slovíčka',
                active: true
            }
        ]
    }
];

function makeActiveCrumb(name) {
    return [
        {
            name: name,
            active: false
        }
    ];
}

export default function getBreadCrumbs(pageFilter, items = []) {
    items = (typeof items === 'string')
        ? makeActiveCrumb(items)
        : items;
    const page = pages.find(page => page.key === pageFilter);
    const crumbs = (page && 'crumbs' in page)
        ? page.crumbs
        : [];
    return [
        defaultCrumb, ...crumbs,
        ...items
    ];
}