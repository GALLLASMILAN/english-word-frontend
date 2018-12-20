import Repository from '../lib/repository';

export default class ArticleRepository extends Repository {
    url = '/v1/word';

    choose(lng = 'en') {
        return this.getOne('choose', lng);
    }
    
    getOne(name, lng) {
        return this.axios.get(`${this.url}/${name}/${lng}`);
    }

    translate(data) {
        return this.axios.put(`${this.url}/translate`, data);
    }
}
