<template>
    <div class="tt">
        <h1 class="col-xl-6 offset-xl-3">Efektivní výuka cizích jazyků</h1>
        <div class="col-xl-6 offset-xl-3 mt-4 bigger">
            <p>Naučte se cizý jazyk snadno a rychle za pomocí naší učebnice gramatiky</p>
            <p> Využijte modul testování slovíček který vám použe testovat slovíčka, která vám nejdou. </p>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "home-page"
        }
    }
};
</script>

<style scoped>
.tt {
    background: rgba(223, 215, 215, 0.8);
    padding: 4em;
}
</style>

<style>
@media only screen and (min-width: 992px) {
    .bigger {
        font-size: 110%;
    }
}
body.home-page {
    background-image: url("/img/pozadi2.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>


