import createPersistedState from 'vuex-persistedstate';

export default({store}) => {
    createPersistedState({
        key: 'english-vuex',
        paths: ['user']
    })(store);
};
