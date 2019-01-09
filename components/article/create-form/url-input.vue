<template>
    <div class="col-xl-5 form-group">
        <label for="">Url článku</label>
        <input
            type="text"
            class="form-control"
            :value="value"
            @input="$emit('edit:url', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: ['value']
};
</script>


