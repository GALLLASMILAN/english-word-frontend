<template>
    <div>
        <label
            for="inputEmail"
            class="sr-only"
        >Email address</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">@</div>
            </div>
            <input
                type="email"
                id="inputEmail"
                :value="value"
                @input="$emit('input', $event.target.value)"
                class="form-control form-control-lg"
                placeholder="Emailová adresa"
                required="required"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
};
</script>