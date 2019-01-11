<template>
    <div v-if="articleList">
        <div
            v-for="(article, index) in articleList"
            :key="index"
            class="row p-3"
        >
            <div class="col-md-7 offset-md-1">
                <a :href="makeUrl(article.url)">
                    {{article.title}}
                </a>
            </div>
            <div class="col-md-3">
                <button
                    :data-id="article.id"
                    v-on:click="deleteArticle(article)"
                    v-if="isAdmin()"
                    class="btn btn-danger"
                >
                    smazat
                </button>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Žádné články nejsou k dispozici</p>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
import { mapState } from "vuex";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
export default {
    async asyncData({ app, store }) {
        return app
            .$api("article")
            .read()
            .then(response => {
                store.dispatch("breadcrumbs/set", getBreadCrumbs("article"));
                return {
                    articleList: response.data,
                    debug: false
                };
            })
            .catch(error => app.$flushError(error.message));
    },
    computed: mapState({
        actualUser: state => state.user.actualUser
    }),
    methods: {
        makeUrl: function(url) {
            return `article/${url}`;
        },
        deleteArticle: async function(article) {
            var result = confirm("Opravdu chcete článek smazat?");
            if (result) {
                this.$api("article")
                .delete({
                    token: this.actualUser.token,
                    articleId: article._id
                })
                .then(response => {
                    this.$flush("článek byl śpěšně smazán");
                })
                .catch(error => {
                    this.$flushError(error.message);
                });
            }
            
        },
        isAdmin() {
            return this.actualUser.role == "admin";
        }
    }
};
</script>

