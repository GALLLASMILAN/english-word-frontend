<template>
    <div class="mb-5">
        <h3 style="font-size: 0.9rem">Související články</h3>

        <ul 
            class="list-group list-group-flush" style="font-size: 0.8rem"
            v-for="(article, index) in relatedArticles" :key="index">
                <a :href="article.url"><li class="list-group-item">{{article.title}}</li></a>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['relatedArticles']
}
</script>

<style scoped>
    h3, h4, p, a { font-size: 0.8rem }
</style>
