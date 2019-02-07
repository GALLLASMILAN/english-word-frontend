<template>
    <div>
        <Menu />
        <BreadCrumbs />
        <AlertList />
        <div class="container mt-5">
            <nuxt :foobar="123" />
        </div>
    </div>
</template>

<script>
import Menu from "../components/common/menu";
import AlertList from "../components/common/alertList";
import BreadCrumbs from "../components/common/breadcrumbs";
export default {
    components: { Menu, AlertList, BreadCrumbs },
    head() {
        return {
            title: "Angličtina snadno a rychle"
        };
    }
};
</script>
