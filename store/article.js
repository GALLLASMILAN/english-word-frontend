import axios from '~/plugins/axios';

const defaultArticle = {
    relatedArticles: [],
    body: '<p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>',
    url: '',
    title: '',
    tags: []
};
const regexUl = /<ul>/gi;
const regexLi = /<li>/gi;

export const state = () => ({actualArticle: defaultArticle, list: [], relatedArticleList: []});

export const mutations = {
    ['EDITARTICLE'](state, data) {
        state.actualArticle = {
            ...state.actualArticle,
            ...data
        };
    },
    ['SETARTICLE'](state, data) {
        state.actualArticle = {
            ...data
        };
    },
    ['ADDRELATEDARTICLELIST'](state, data) {
        state.relatedArticleList = data;
    },
    ['RESETARTICLE'](state) {
        state.actualArticle = defaultArticle;
    }
};

export const getters = {
    parsedArticle: (state) => {
        return {
            ...state.actualArticle,
            body: state
                .actualArticle
                .body
                .replace(regexUl, '<ul class="list-group list-group-flush">')
                .replace(regexLi, '<li class="list-group-item">')
        };
    }
};

export const actions = {
    saveArticle({getters, commit}) {
        axios.post('/v1/article/', {
            article: getters.parsedArticle
        }).then(response => {
            if (response.data.status !== 'new') {
                commit('logs/ERROR', 'Nepodařilo se vytvořit članek, článek již existuje', { root: true });
            } else {
                commit('logs/INFO', 'Článek byl úspěšně vytvořen', { root: true });
                commit('RESETARTICLE');
            }
        }).catch(() => {
            commit('logs/ERROR', 'Nepodařilo se vytvořit članek. Zkuste to prosím později', { root: true });
        });
    }
};