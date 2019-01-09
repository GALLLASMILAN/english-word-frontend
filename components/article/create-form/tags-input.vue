<template>
    <div class="col-xl-5 form-group offset-xl-1">
        <label for="">tagy (oddělte čárkou)</label>
        <input
            type="text"
            class="form-control"
            :value="value"
            @input="$emit('edit:tags', $event.target.value.split(',').map(tag => tag.trim()))"
        >
    </div>
</template>

<script>
export default {
    props: ['value']
};
</script>
