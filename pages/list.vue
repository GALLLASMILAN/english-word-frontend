<template>
    <div
        class="container"
        v-if="wordList.length>0"
    >
        <h1>Seznam existujících slovíček</h1>
        <table class="table table-sm table-striped">
            <thead class="thead-dark">
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
</template>

<script>
import axios from "~/plugins/axios";

export default {
    middleware: ["authenticated"],
    data: function() {
        return {
            wordList: [],
            debug: {}
        };
    },
    async asyncData({ app }) {
        return app
            .$api("word")
            .read()
            .then(response => ({ wordList: response.data }))
            .catch(error =>
                app.$flushError("Nepodařilo se připojit k serveru")
            );
    },
    methods: {
        getUrlName: function(name) {
            this.$api("word")
                .read()
                .catch(error => console.log(error.message));
            return `/edit/${name}`;
        }
    }
};
</script>

<style>
</style>

