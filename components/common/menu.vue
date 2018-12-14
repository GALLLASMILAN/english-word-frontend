<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a
      class="navbar-brand"
      href="#"
    >Hlavní stránka</a>
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
          v-for="(menuItem, index) in getData()"
          :key="index"
          :class="menuItem.class"
        >
          <a
            class="nav-link"
            :href="menuItem.url"
          >{{menuItem.title}} </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        >
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    const data = [
      {
        title: "Vytvoření slovíčka",
        url: "/",
        role: ["admin", "user"]
      },
      {
        title: "Testování",
        url: "/test",
        role: ["admin", "user"]
      },
      {
        title: "Seznam slovíček",
        url: "/list",
        role: ["admin", "user"]
      },
      {
        title: "články",
        url: "/article",
        role: ["admin", "user", "guest"]
      },
      {
        title: "nový článek",
        url: "/article/create",
        role: ["admin", "user"]
      },
      {
        title: "Příhlášení",
        url: "/user/login",
        role: ["guest"]
      }
    ];

    return {
      menuItems: data
    };
  },
  methods: {
    getData() {
      return this.menuItems
        .filter(
          menuItem =>
            menuItem.role.indexOf(this.$store.state.user.actualUser.role) != -1
        )
        .map(item => {
          return {
            ...item,
            class: this.$route.path == item.url ? "nav-item active" : "nav-item"
          };
        });
    }
  }
};
</script>

