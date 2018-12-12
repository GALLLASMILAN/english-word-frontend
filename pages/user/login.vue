<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    async asyncData(){
        return {
            title: 'Přihlášení uživatele',
        }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>
