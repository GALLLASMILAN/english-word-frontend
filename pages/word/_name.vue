<template>
    <div v-if="word">
        <wordForm
            :word="word"
            :buttonName="buttonName"
            :methodName="methodName"
            :deleteButton="true"
            @send:word="updateWord($event)"
        />
    </div>
    <div v-else>
        <h1>404: Page Not Found</h1>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
import wordForm from "~/components/wordForm";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
export default {
    components: { wordForm },
    data: () => ({ origWord: false, debug: false }),
    async asyncData({ params, store, app }) {
        return app
            .$api("word")
            .getOne(params.name, "en")
            .then(response => {
                store.dispatch(
                    "breadcrumbs/set",
                    getBreadCrumbs("word/detail", params.name)
                );
                return {
                    word: response.data,
                    buttonName: "Aktualizovat",
                    methodName: "word/editWord"
                };
            })
            .catch(error =>
                app.$flushError("Nepodařilo se připojit k serveru")
            );
    },
    methods: {
        updateWord(event) {
            const updatedWord = {
                ...this.word,
                name: event.name,
                language: event.language,
                translates: event.translates
            };
            delete updatedWord._id;
            this.$api("word")
                .updateById(this.word._id, updatedWord)
                .then(response => this.$flush("Slovíčko bylo aktuálizováno"))
                .catch(error =>
                    this.$flushError("Nepodařilo se upravit vybrané slovíčko")
                );
        }
    }
};
</script>

