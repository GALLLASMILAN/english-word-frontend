export default class Repository {
    url
    constructor(axios, isDev) {
        this.axios = axios;
        this.isDev = isDev;
    }
    read() {
        return this.axios.get(this.url);
    } 
    create(data) {
        return this.axios.post(this.url, data);
    }
    delete(data) {
        if(this.isDev) {
            console.log('/DELETE', this.url);
            console.table(data);
        }
        return this.axios.delete(this.url, {data: data});
    }
    deleteById(id) {
        return this.delete({_id: id});
    } 
    update(data) {
        if(this.isDev) {
            console.log('/UPDATE', this.url);
            console.table(data);
        }
        return this.axios.put(this.url, data);
    }
    updateById(id, data) {
        if(this.isDev) {
            console.log('/UPDATE', `${this.url}/${id}`);
            console.table(data);
        }
        return this.axios.put(`${this.url}/${id}`, data);
    }
}