export const state = () => ([]);

export const mutations = {
    ['INFO'](state, message) {
        state.push({type: 'info', data: message, lastUpdate: new Date()});
    },
    ['ERROR'](state, message) {
        state.push({type: 'danger', data: message, lastUpdate: new Date()});
    },
    ['WARRNING'](state, message) {
        state.push({type: 'warning', data: message, lastUpdate: new Date()});
    }
};