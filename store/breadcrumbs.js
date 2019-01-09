export const state = () => ([]);

export const mutations = {
    ['SET'](state, breadcrumbs) {
        state.push(...breadcrumbs);
    },
};

export const actions = {
    set(store, breadcrumbs) {
        store.commit('SET', breadcrumbs);
    }
};