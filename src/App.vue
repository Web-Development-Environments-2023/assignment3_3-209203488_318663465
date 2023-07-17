
<template>
  <div id="app"


  >
    <!-- <NavigationBar :logout="Logout"></NavigationBar> -->

    <!-- https://bootstrap-vue.org/docs/components/navbar#color-schemes -->
    <!-- <link rel="stylesheet" href='/static/back.css'><link/> -->
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link :to="{ name: 'main' }">Main</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'search' }">Search</router-link>
        </b-nav-item>
         <!-- <b-nav-item href="#">
          <router-link :to="{ name: 'about' }">
          About
          </router-link>
        </b-nav-item> -->
      </b-navbar-nav>

      <b-navbar-nav v-if="$root.store.username" id="loggedInUser">
        <b-nav-item>
          <router-link :to="{ name: 'createNewRecipeModal' }">Create New Recipe</router-link>
        </b-nav-item>

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
            <router-link :to="{ name: 'MyFamily' }">My Family Recipes</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item>
            Hello {{ $root.store.username }}
        </b-nav-item>
        <b-nav-item @click="Logout">
            Logout
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-else>
        <b-nav-item>
            Hello Guest            
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'register' }">Register</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{ name: 'login' }">Login</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>


<script>

export default {
  name: "App",
  methods: {
    async Logout() {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/Logout"
        );
        this.$root.store.logout();
        if (response.message == "logout succeeded") {
          this.$root.toast("Logout", "User logged out successfully", "success");
          this.$router.push("/").catch(() => {
            this.$forceUpdate();
          });
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
  },
};
</script>



<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f7f9;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #b3d1f3;
  color: #ffffff;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-link {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #2c3e50;
  font-weight: bold;
}

.navbar-dropdown {
  position: relative;
}

.navbar-dropdown-toggle {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.navbar-dropdown-toggle:hover {
  color: #2c3e50;
}

.navbar-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: none;
}

.navbar-dropdown:hover .navbar-dropdown-menu {
  display: block;
}

.navbar-dropdown-item {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.navbar-dropdown-item:hover {
  background-color: #f2f2f2;
}

.navbar-user {
  display: flex;
  align-items: center;
}

.navbar-username {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
</style>