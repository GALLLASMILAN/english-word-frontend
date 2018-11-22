export default function getArticle() {
    var regexLi = /<li>/gi;
    var regexUl = /<ul>/gi;
    return {
        body: this.content
            .replace(regexUl, '<ul class="list-group list-group-flush">')
            .replace(regexLi, '<li class="list-group-item">'),
        title: this.title,
        url: this.url,
        tags: this.tags.split(',').map(tag => tag.trim()),
        relatedArticles: (this.relatedArticle) ? this.relatedArticle.map(article => {
            return {
                title: article.title, 
                url: article.url
            };
        }) : []
    };
}