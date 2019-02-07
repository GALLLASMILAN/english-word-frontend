<template>
    <div
        class="container contentBlock-1"
        v-if="wordList.length>0"
    >
        <h1>Seznam existujících slovíček</h1>
        <div class="table-responsive-sm">
            <table class="table table-hover mt-4">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Slovíčko</th>
                        <th scope="col">Jazyk</th>
                        <th scope="col">Překlady</th>
                        <th scope="col">Vyhodnocení</th>
                    </tr>
                </thead>

                <tbody
                    v-for="(word, key) in wordList"
                    :key="key"
                >
                    <tr>
                        <td>
                            <a :href="getUrlName(word.name)">{{word.name}}</a>
                            <span
                                v-if="word.saved > 1"
                                class="badge badge-primary badge-pill"
                            >{{word.saved}}x</span>
                        </td>
                        <td>{{word.language}} 🇬🇧</td>
                        <td>{{word.translates.join(', ')}}</td>
                        <td>
                            <span>{{word.success}} ✅</span>

                            <span>{{word.fail}} ❌</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
export default {
    middleware: ["authenticated"],
    data: function() {
        return {
            wordList: [],
            debug: {}
        };
    },
    async asyncData({ app, store }) {
        return app
            .$api("word")
            .read()
            .then(response => {
                store.dispatch("breadcrumbs/set", getBreadCrumbs("article"));
                return { wordList: response.data };
            })
            .catch(error =>
                app.$flushError("Nepodařilo se připojit k serveru")
            );
    },
    methods: {
        getUrlName: function(name) {
            this.$api("word")
                .read()
                .catch(error => console.log(error.message));
            return `/word/${name}`;
        }
    }
};
</script>
