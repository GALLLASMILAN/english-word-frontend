export const state = () => ([]);

export const mutations = {
    ['LOG'](state, log) {
        state.push(log);
    },
    ['DELETE'](state, data) {
        console.log(data);
        const log = state.find(log => log.data = data.data);
        const index = state.indexOf(log);
        state.splice(index, 1);
    }
};

export const actions = {
    log(store, data) {
        const log = {type: data.type, data: data.message, lastUpdate: new Date()};
        store.commit('LOG', log);
        // setTimeout(() => store.commit('DELETE', log), 4000);
    }
};