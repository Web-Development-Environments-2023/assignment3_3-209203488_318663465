<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <!-- <div class="container-fluid"> -->
        <a class="navbar-brand" href="#">L&T Recipes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'main' }" class="nav-link">Main</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
            </li>
            <b-nav-item-dropdown type="dark" variant="light" text="Personal">
          <b-dropdown-item href="#" id="favorites">
            <router-link :to="{ name: 'myfavoriterecipes' }">
              My Favorite Recipes
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item id="myRecipes">
            <router-link :to="{ name: 'myrecipes' }">My Recipes</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'myfamilyrecipes' }">My Family Recipes</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <span class="navbar-text" v-if="!$root.store.username">
                Guest:
              </span>
            </li>
            <li class="nav-item" v-if="!$root.store.username">
              <a class="nav-link" href="#">
                <router-link :to="{ name: 'register' }">Register</router-link>
              </a>
            </li>
            <li class="nav-item" v-if="!$root.store.username">
              <a class="nav-link" href="#">
                <router-link :to="{ name: 'login' }">Login</router-link>
              </a>
            </li>
            
            <li class="nav-item" v-if="$root.store.username">
              <span class="navbar-text">
                {{ $root.store.username }}:
              </span>
            </li>
            <li class="nav-item" v-if="$root.store.username">
              <a class="nav-link" href="#">
                <button @click="Logout" class="btn btn-link">Logout</button>
              </a>
            </li>
          </ul>
        </div>
      <!-- </div> -->
    </nav>
    <router-view />
  </div>
</template>



<script>

export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
