<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <nuxt-link
            class="navbar-brand"
            to="/"
        >Hlavní stránka</nuxt-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div
            class="collapse navbar-collapse"
            id="navbarTogglerDemo02"
        >
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li
                    v-for="(menuItem, index) in getData(menuItems)"
                    :key="index+menuItem.url"
                    :class="menuItem.class"
                    @click="hideMenu"
                >
                    <nuxt-link
                        class="nav-link"
                        :to="menuItem.url"
                    >{{menuItem.title}} </nuxt-link>
                </li>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <li
                    v-for="(menuItem, index) in getData(rightMenuItems)"
                    :key="index+menuItem.url"
                    @click="hideMenu"
                    :class="menuItem.class"
                >
                    <nuxt-link
                        :to="menuItem.url"
                        class="nav-link"
                    >
                        {{menuItem.title}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import * as acl from "~/lib/acl/acl";
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('user', {
            role: state => state.actualUser.role
        }),
        menuItems() {
            return acl.getPagesToLeftMenu(this.$store.state.user.actualUser.role);
        },
        rightMenuItems() {
            return acl.getPagesToRightMenu(this.$store.state.user.actualUser.role);
        }
    },
    methods: {
        getData(items) {
            return items.map(item => {
                return {
                    ...item,
                    class:
                        this.$route.path == item.url
                            ? "nav-item active"
                            : "nav-item"
                };
            });
        },
        hideMenu() {
            document.getElementById("navbarTogglerDemo02").className =
                "navbar-collapse collapse";
        }
    }
};
</script>

