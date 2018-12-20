import axios from 'axios';
import factory from '../model/factory';

export default function api({isDev}, inject) {
    const api = (model) => factory(axios.create({baseURL: `${process.env.baseUrl}`}), model, isDev);

    inject('api', api);
}
