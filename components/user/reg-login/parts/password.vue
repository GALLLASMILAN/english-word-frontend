<template>
    <div>
        <label
            for="inputPassword"
            class="sr-only"
        >Password</label>
        <input
            type="password"
            id="inputPassword"
            :value="value"
            @input="$emit('input', $event.target.value)"
            class="form-control form-control-lg"
            placeholder="Heslo"
            required="required"
        >
    </div>
</template>

<script>
export default {
    props: ["value"]
};
</script>
