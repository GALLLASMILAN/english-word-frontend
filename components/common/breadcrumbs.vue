<template>
    <nav aria-label="breadcrumb" v-if="total > 0">
        <ol class="breadcrumb">
            <li
                v-for="(crumb, index) in crumbs"
                :key="index+crumb.name"
                class="breadcrumb-item"
            >
                <a :href="crumb.url">
                    {{crumb.name}}
                </a>
            </li>
            <li
                v-for="(activeCrumb, index) in active"
                :key="index+activeCrumb.name"
                class="breadcrumb-item active"
                aria-current="page"
            >
                {{activeCrumb.name}}
            </li>
        </ol>
    </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            crumbs: state =>
                state.breadcrumbs.filter(crumb => crumb.active == 0) || [],
            active: state =>
                state.breadcrumbs.filter(crumb => crumb.active == 1) || []
        }),
        total(){
            return this.crumbs.length+this.active.length;
        } 
    }
};
</script>

