export const state = () => ([]);

export const mutations = {
    ['SET'](state, breadcrumbs) {
        state.push(...breadcrumbs);
    },
    ['CLEAN'](state) {
        state.splice(0, state.length);
    }
};

export const actions = {
    set(store, breadcrumbs) {
        store.commit('CLEAN');
        store.commit('SET', breadcrumbs);
    }
};