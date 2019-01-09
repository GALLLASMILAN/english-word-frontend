<template>
    <div v-if="articleList">
        <CreateForm :articleList="articleList" />
    </div>
    <div v-else>
        <h1>404: Page Not Found</h1>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
import CreateForm from "../../components/article/create-form/";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
import { mapMutations } from "vuex";
export default {
    middleware: ["authenticated"],
    components: { CreateForm },
    async asyncData({ store, app }) {
        return app
            .$api("article")
            .read()
            .then(response => {
                store.commit("article/ADDRELATEDARTICLELIST", response.data);
                store.dispatch(
                    "breadcrumbs/set",
                    getBreadCrumbs("article/create")
                );
                return {
                    articleList: response.data
                };
            })
            .catch(error =>
                app.$flushError("Nepodařilo se připojit k serveru")
            );
    },
    head() {
        return {
            title: "Přidání nového článku",
        };
    }
};
</script>
