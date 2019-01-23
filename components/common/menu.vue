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
export default {
    data: function() {
        const data = [
            {
                title: "Vytvoření slovíčka",
                url: "/word/create",
                role: ["admin", "user"]
            },
            {
                title: "Testování",
                url: "/word/test",
                role: ["admin", "user"]
            },
            {
                title: "Seznam slovíček",
                url: "/word",
                role: ["admin", "user"]
            },
            {
                title: "Články",
                url: "/article",
                role: ["admin", "user", "guest"]
            },
            {
                title: "Nový článek",
                url: "/article/create",
                role: ["admin", "user"]
            }
        ];

        const rightMenuItems = [
            {
                title: "Registrace",
                url: "/user/registration",
                role: ["admin", "guest"]
            },
            {
                title: "Přihlásit se",
                url: "/user/login",
                role: ["admin", "guest"]
            },
            {
                title: "Odhlásit se",
                url: "/user/logout",
                role: ["user"]
            },
        ];

        return {
            menuItems: data,
            rightMenuItems
        };
    },
    methods: {
        getData(items) {
            return items
                .filter(
                    menuItem =>
                        menuItem.role.indexOf(
                            this.$store.state.user.actualUser.role
                        ) != -1
                )
                .map(item => {
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
        },
    }
};
</script>

