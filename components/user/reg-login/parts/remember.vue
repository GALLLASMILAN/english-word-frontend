<template>
    <div>
        <label>
            <input
                type="checkbox"
                v-model="chekcboxValue"
                @input="$emit('input', !chekcboxValue)"
            > Zapamatuj si mě
        </label>
    </div>
</template>

<script>
export default {
    props: ["value"],
    data() {
        return {
            chekcboxValue: false
        }
    },
    created() {
        this.chekcboxValue = this.value;
    }
};
</script>
