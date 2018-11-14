<template>
    <div>
        <div class="headline">
            <h3 style="font-size: 0.9rem">Tagy</h3>
        </div>

        <ul 
            class="list-unstyled list-inline blog-tags" v-for="(tag, index) in tags" :key="index">
            <a style="font-size: 0.8rem" href="#" class="btn btn-small btn-link"> {{tag}}</a>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['tags']
}
</script>

