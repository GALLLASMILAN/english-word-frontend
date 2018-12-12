import axios from '~/plugins/axios';

export const actions = {
    editWord(store, data){
        axios.put('/v1/word/translate', data);
    }
};