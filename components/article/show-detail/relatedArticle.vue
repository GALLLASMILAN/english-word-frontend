<template>
    <div
        class="row contentBlock p-3"
    >
        <h3 class="col-12">Související články</h3>

        <div class="col-12">
            <ul
                class="list-unstyled list-inline blog-tags"
                v-for="(article, index) in relatedArticles"
                :key="index"
            >
                <a :href="article.url">
                    <li class="">{{article.title}}</li>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["relatedArticles"]
};
</script>

<style scoped>
</style>
