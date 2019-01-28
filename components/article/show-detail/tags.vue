<template>
    <div
        class="row contentBlock p-3"
    >
        <div class="headline col-12">
            <h3>Tagy</h3>
        </div>

        <ul
            class="list-unstyled list-inline blog-tags"
            v-for="(tag, index) in tags"
            :key="index"
        >
            <a
                href="#"
                class="btn btn-small btn-link"
            > {{tag}}</a>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["tags"]
};
</script>

