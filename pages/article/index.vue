<template>
    <div
        v-if="articleList"
        class="contentBlock-1"
    >
        <h1 class="heder pb-2">Seznam článků</h1>
        <div
            v-for="(article, index) in articleList"
            :key="index"
        >
            <hr>
            <div class="row">
                <div class="col-xl-3 col-lg-3 center-block">
                    <img
                        class="card-custom-img-top col-md-3 col-lg-11 col-xl-10 col-sm-4 col-xs-4"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtNDU2IDhoLTQzMmMtOC44MzU5MzggMC0xNiA3LjE2NDA2Mi0xNiAxNnYzMmg0NjR2LTMyYzAtOC44MzU5MzgtNy4xNjQwNjItMTYtMTYtMTZ6bTAgMCIgZmlsbD0iIzc4YjllYiIvPjxnIGZpbGw9IiMxYTZmYjAiPjxwYXRoIGQ9Im00NTYgMGgtNDMyYy0xMy4yNTM5MDYgMC0yNCAxMC43NDYwOTQtMjQgMjR2NDMyYzAgMTMuMjUzOTA2IDEwLjc0NjA5NCAyNCAyNCAyNGg0MzJjMTMuMjUzOTA2IDAgMjQtMTAuNzQ2MDk0IDI0LTI0di00MzJjMC0xMy4yNTM5MDYtMTAuNzQ2MDk0LTI0LTI0LTI0em0tNDMyIDE2aDQzMmM0LjQxNzk2OSAwIDggMy41ODIwMzEgOCA4djI0aC00NDh2LTI0YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LTh6bS04IDQ0MHYtMzkyaDQ4djQwMGgtNDBjLTQuNDE3OTY5IDAtOC0zLjU4MjAzMS04LTh6bTQ0MCA4aC0zNzZ2LTQwMGgzODR2MzkyYzAgNC40MTc5NjktMy41ODIwMzEgOC04IDh6bTAgMCIvPjxwYXRoIGQ9Im0zMiAyNGgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im03MiAyNGgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0xMTIgMjRoMTZ2MTZoLTE2em0wIDAiLz48cGF0aCBkPSJtMjQgODBoMzJ2MTZoLTMyem0wIDAiLz48cGF0aCBkPSJtMjQgMTEyaDMydjE2aC0zMnptMCAwIi8+PHBhdGggZD0ibTI0IDE0NGgzMnYxNmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0yNCAxNzZoMzJ2MTZoLTMyem0wIDAiLz48cGF0aCBkPSJtMjQgMjA4aDMydjE2aC0zMnptMCAwIi8+PHBhdGggZD0ibTI0IDI0MGgzMnYxNmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0yNCAyNzJoMzJ2MTZoLTMyem0wIDAiLz48cGF0aCBkPSJtMjQgMzA0aDMydjE2aC0zMnptMCAwIi8+PHBhdGggZD0ibTI0IDMzNmgzMnYxNmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0yNCAzNjhoMzJ2MTZoLTMyem0wIDAiLz48cGF0aCBkPSJtMjQgNDAwaDMydjE2aC0zMnptMCAwIi8+PHBhdGggZD0ibTI0IDQzMmgzMnYxNmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0xMTIgOTZoNDh2MTZoLTQ4em0wIDAiLz48cGF0aCBkPSJtMTY4IDk2aDcydjE2aC03MnptMCAwIi8+PHBhdGggZD0ibTI0OCA5NmgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0yNzIgOTZoOTZ2MTZoLTk2em0wIDAiLz48cGF0aCBkPSJtMzc2IDk2aDU2djE2aC01NnptMCAwIi8+PHBhdGggZD0ibTM4NCAxMzZoNDh2MTZoLTQ4em0wIDAiLz48cGF0aCBkPSJtMzA0IDEzNmg3MnYxNmgtNzJ6bTAgMCIvPjxwYXRoIGQ9Im0yODAgMTM2aDE2djE2aC0xNnptMCAwIi8+PHBhdGggZD0ibTE3NiAxMzZoOTZ2MTZoLTk2em0wIDAiLz48cGF0aCBkPSJtMTEyIDEzNmg1NnYxNmgtNTZ6bTAgMCIvPjxwYXRoIGQ9Im0zODQgMjE2aDQ4djE2aC00OHptMCAwIi8+PHBhdGggZD0ibTMwNCAyMTZoNzJ2MTZoLTcyem0wIDAiLz48cGF0aCBkPSJtMjgwIDIxNmgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0xNzYgMjE2aDk2djE2aC05NnptMCAwIi8+PHBhdGggZD0ibTExMiAyMTZoNTZ2MTZoLTU2em0wIDAiLz48cGF0aCBkPSJtMzg0IDI5Nmg0OHYxNmgtNDh6bTAgMCIvPjxwYXRoIGQ9Im0zMDQgMjk2aDcydjE2aC03MnptMCAwIi8+PHBhdGggZD0ibTI4MCAyOTZoMTZ2MTZoLTE2em0wIDAiLz48cGF0aCBkPSJtMTc2IDI5Nmg5NnYxNmgtOTZ6bTAgMCIvPjxwYXRoIGQ9Im0xMTIgMjk2aDU2djE2aC01NnptMCAwIi8+PHBhdGggZD0ibTM4NCAzNzZoNDh2MTZoLTQ4em0wIDAiLz48cGF0aCBkPSJtMzA0IDM3Nmg3MnYxNmgtNzJ6bTAgMCIvPjxwYXRoIGQ9Im0yODAgMzc2aDE2djE2aC0xNnptMCAwIi8+PHBhdGggZD0ibTE3NiAzNzZoOTZ2MTZoLTk2em0wIDAiLz48cGF0aCBkPSJtMTEyIDM3Nmg1NnYxNmgtNTZ6bTAgMCIvPjxwYXRoIGQ9Im0xMTIgMTc2aDQ4djE2aC00OHptMCAwIi8+PHBhdGggZD0ibTE2OCAxNzZoNzJ2MTZoLTcyem0wIDAiLz48cGF0aCBkPSJtMjQ4IDE3NmgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0yNzIgMTc2aDk2djE2aC05NnptMCAwIi8+PHBhdGggZD0ibTM3NiAxNzZoNTZ2MTZoLTU2em0wIDAiLz48cGF0aCBkPSJtMTEyIDI1Nmg0OHYxNmgtNDh6bTAgMCIvPjxwYXRoIGQ9Im0xNjggMjU2aDcydjE2aC03MnptMCAwIi8+PHBhdGggZD0ibTI0OCAyNTZoMTZ2MTZoLTE2em0wIDAiLz48cGF0aCBkPSJtMjcyIDI1Nmg5NnYxNmgtOTZ6bTAgMCIvPjxwYXRoIGQ9Im0zNzYgMjU2aDU2djE2aC01NnptMCAwIi8+PHBhdGggZD0ibTExMiAzMzZoNDh2MTZoLTQ4em0wIDAiLz48cGF0aCBkPSJtMTY4IDMzNmg3MnYxNmgtNzJ6bTAgMCIvPjxwYXRoIGQ9Im0yNDggMzM2aDE2djE2aC0xNnptMCAwIi8+PHBhdGggZD0ibTI3MiAzMzZoOTZ2MTZoLTk2em0wIDAiLz48cGF0aCBkPSJtMzc2IDMzNmg1NnYxNmgtNTZ6bTAgMCIvPjxwYXRoIGQ9Im0xMTIgNDE2aDQ4djE2aC00OHptMCAwIi8+PHBhdGggZD0ibTE2OCA0MTZoNzJ2MTZoLTcyem0wIDAiLz48cGF0aCBkPSJtMjQ4IDQxNmgxNnYxNmgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0yNzIgNDE2aDk2djE2aC05NnptMCAwIi8+PHBhdGggZD0ibTM3NiA0MTZoNTZ2MTZoLTU2em0wIDAiLz48L2c+PC9zdmc+Cg=="
                        alt="Card image cap"
                        max-width="256px"
                        max-height="256px"
                    />
                </div>
                <div class="col-xl-9 col-lg-9">
                    <h2 class="card-title custom-title mt-3">{{article.title}}</h2>
                    <p
                        class="card-text"
                        v-html="article.perex"
                    ></p>
                    <div class="center-block"><a
                            :href="makeUrl(article.url)"
                            class="btn btn-primary"
                        >Začni studovat</a></div>
                </div>
            </div>
        </div>
    </div>
    <div
        v-else
        class="contentBlock-1"
    >
        <p>Žádné články nejsou k dispozici</p>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
import { mapState } from "vuex";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
import * as acl from "~/lib/acl/acl";
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
            return `${acl.getPageByName("article").url}/${url}`;
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
    },
    head() {
        return {
            title: "Výpis článků"
        };
    }
};
</script>

<style>
@media only screen and (max-width: 570px) {
    .card-custom-img-top {
        width: 35%;
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
        margin: 0 auto;
        padding-top: 1em;
    }
}

@media only screen and (min-width: 570px) {
    .card-custom-img-top {
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
        margin: 0 auto;
        padding-top: 1em;
    }
}

.custom-title {
    text-align: center;
}

.center-block {
    text-align: center;
}

.read-button {
    margin: 0 auto;
}
</style>
