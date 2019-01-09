import Repository from '../lib/repository';

export default class ArticleRepository extends Repository {
    url = '/v1/article';
    readByUrl(url) {
        return this.axios.get(`${this.url}/${url}`);
    }
}
