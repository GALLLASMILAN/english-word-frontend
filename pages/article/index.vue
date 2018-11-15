<template>
    <div>
        <p v-show="debug">
            {{debug}}
        </p>
        <ul class="list-group list-group-flush" v-for="(article, index) in articleList" :key="index">
            <a :href="makeUrl(article.url)">
                <li class="list-group-item">{{article.title}}</li>
            </a>
        </ul>
    </div>
</template>

<script>
import axios from '~/plugins/axios';
export default {
    async asyncData() {
        try {
            const articleListResponse = await axios('/v1/article');
            return {
                articleList: articleListResponse.data,
                debug: false
            }
        } catch (error) {
            return {
                debug: error.message
            }
        }
    }, 
    methods: {
        makeUrl: function(url) {
            return `article/${url}`;
        }
    }
}
</script>

