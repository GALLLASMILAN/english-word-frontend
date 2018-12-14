import axios from '~/plugins/axios';

export const actions = {
    editWord(store, data){
        axios.put('/v1/word/translate', data).then(response => {
            console.log(response);
            const wordName = data.name || '';
            store.commit('logs/INFO', `Slovíčko ${wordName} bylo upraveno`);
        }).catch(error => {
            store.commit('logs/ERROR', (error.message));
        });
    }
};