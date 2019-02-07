<template>
    <div class="bg-white">
        <nav
            aria-label="breadcrumb"
            class="container p-0"
            v-if="total > 0"
        >
            <ul
                class="breadcrumb"
                id="breadcrumbs"
            >
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
            </ul>
        </nav>
    </div>
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
        total() {
            return this.crumbs.length + this.active.length;
        }
    }
};
</script>