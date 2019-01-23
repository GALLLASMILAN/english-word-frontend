export const state = () => ({
    actualUser: {
        name: 'gali',
        role: 'guest',
        //role: 'guest',
        email: '',
    },
    jwtToken: ''
});

export const mutations = {
    ['SAVE'](state, user) {
        state.actualUser = user;
    },
    ['UPDATETOKEN'](state, jwtToken) {
        state.jwtToken = jwtToken;
    }
};

export const actions = {
    save({commit}, data) {
        commit('SAVE', {
            name: data.user.emial,
            emial: data.user.emial,
            role: data.user.role,
        });
        commit('UPDATETOKEN', data.token);
    },
    clear({commit}) {
        commit('SAVE', {
            name: 'guest',
            emial: '',
            role: 'guest',
        });
        commit('UPDATETOKEN', '');
    }
};