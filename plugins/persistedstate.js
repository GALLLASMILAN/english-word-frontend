/*import createPersistedState from 'vuex-persistedstate';

export default({store}) => {
    createPersistedState({
        key: 'english-vuex',
        paths: ['user']
    })(store);
};*/

// package cookie is for server cookie reading
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export default({store, req}) => {
    createPersistedState({
        key: 'english-vuex',
        paths: ['user'],
        storage: {
            getItem: (key) => process.client
                ? Cookies.getJSON(key)
                : cookie.parse(req.headers.cookie || '')[key],
            setItem: (key, value) => Cookies.set(key, value, {
                expires: 365,
                // secure: !isDev
            }),
            removeItem: (key) => Cookies.remove(key)
        }
    })(store);
};