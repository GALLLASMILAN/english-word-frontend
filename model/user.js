import Repository from '../lib/repository';

export default class ArticleRepository extends Repository {
    url = '/v1/user';
    sigin(user) {
        if(this.isDev) {
            console.log('/POST', `${this.url}/signin`);
            console.table(user);
        }
        return this.axios.post(`${this.url}/signin`, user);
    }
    sigup(user) {
        if(this.isDev) {
            console.log('/POST', `${this.url}/signup`);
            console.table(user);
        }
        return this.axios.post(`${this.url}/signup`, user);
    }
}
