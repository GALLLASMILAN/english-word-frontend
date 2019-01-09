<template>
    <div class="col-xl-5 form-group">
        <label for="">Související články</label>
        <select
            v-model="choosenValue"
            @change="test($event.target.value)"
            class="form-control"
            id="exampleFormControlSelect1"
            multiple
        >
            <option
                v-for="(article, index) in articleList"
                :key="index"
                :value="article"
            >
                {{ article.title }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: ["value", "articleList"],
    data() {
        return {
            choosenValue: this.value
        };
    },
    
    methods: {
        test: function(value) {
            this.$emit('edit:relatedArticles', this.choosenValue);
        }
    } // $emit('edit:relatedArticles', $event.target.value)
};
</script>

