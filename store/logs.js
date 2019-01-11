export const state = () => ([]);

export const mutations = {
    ['LOG'](state, log) {
        state.push(log);
    },
    ['DELETE'](state, log) {
        const index = state.indexOf(log);
        state.splice(index, 1);
    }
};

export const actions = {
    log(store, data) {
        const log = {type: data.type, data: data.message, lastUpdate: new Date()};
        store.commit('LOG', log);
    },
    delete(store, log){
        store.commit('DELETE', log);
    } 
};