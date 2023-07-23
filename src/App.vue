
<template>
  <div id="app"
  >
    <!-- <NavigationBar :logout="Logout"></NavigationBar> -->

    <!-- https://bootstrap-vue.org/docs/components/navbar#color-schemes -->
    <!-- <link rel="stylesheet" href='/static/back.css'><link/> -->
    <b-navbar>
      <b-navbar-brand>
        <img :src="require('@/assets/logo3.png')" alt="Logo" width="160" height="120" />
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link :to="{ name: 'main' }">Main</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'search' }">Search</router-link>
        </b-nav-item>
         <b-nav-item href="#">
          <router-link :to="{ name: 'about' }">
          About
          </router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-if="$root.store.username" id="loggedInUser">
        <b-nav-item v-b-modal.add-recipe-modal>
          Create New Recipe
        </b-nav-item>
        <CreateNewRecipeModal />


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
import CreateNewRecipeModal from "./pages/CreateNewRecipeModal";

export default {
  name: "App",
  components: { CreateNewRecipeModal },
  methods: {
    async Logout() {
      try {
        

        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          "https://liorkob.cs.bgu.ac.il/Logout"
        );
        this.axios.defaults.withCredentials = false;

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


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #b3d1f3;
  color: #ffffff;
}

.navbar-brand {
  /* Adjust the font size and margin to position the logo properly */
  font-size: 32px;
  font-weight: bold;
  margin-right: 40px; /* Increase the margin to create space between the logo and text */
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-link {
  /* Adjust the font size and margin to improve the appearance of navigation items */
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
  /* Your existing styles for .navbar-dropdown */
}

.navbar-dropdown-toggle {
  /* Your existing styles for .navbar-dropdown-toggle */
}

.navbar-dropdown-menu {
  /* Your existing styles for .navbar-dropdown-menu */
}

.navbar-dropdown-item {
  /* Adjust the font size for dropdown items */
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
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
  /* Adjust the font size for the username */
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
</style>
