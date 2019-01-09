<template>
    <div class="col-xl-5 form-group offset-xl-1">
        <label for="">Název článku</label>
        <input
            type="text"
            class="form-control"
            :value="value"
            v-on:input="$emit('edit:title', $event.target.value)"
        >
    </div>
    
</template>

<script>
export default {
    props: ['value'] // article.title
};
</script>