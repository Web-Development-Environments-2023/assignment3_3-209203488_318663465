<template>
  <div id="main"
  >
  <div class="main-container">

  <div class="container" >
    <div class="left-section">
      <Random
        id="randomRecipes"
        title="Explore these recipes"
        class="RandomRecipes center"
        @reload="reloadRecipes"
      />
    </div>

    <div class="right-section">
      <!-- Conditionally render either LastViewd or Login page -->
      <template v-if="$root.store.username">
        <LastViewd
          title="Last Viewed Recipes"
          class="center"
          :reload="reloadRecipes"
          disabled
        >
        </LastViewd>
      </template>
      <template v-else>
        <Login />
         <!-- Include the Login.vue component here -->
      </template>
    </div>
  </div>
</div>

</div>

</template>

<script>
import Random from "../components/Random";
import LastViewd from "../components/LastViewd";
import Login from "../pages/LoginPage"; // Import the Login.vue component

export default {
  methods: {
    reloadRecipes() {
      // Emit the `reload` event
      this.$emit('reload');
    },
    // ...
  },
  components: {
    Random,
    LastViewd,
    Login
},
};
</script>
<style scoped>
.main-container {
  display: flex;
  max-width: 2200px; /* Increase the max-width value */
  background-image: url('../assets/r1.jpg');
  height: 100vh; /* Set the height to 100% of the viewport height */
  background-size: cover; /* Make the background image cover the entire container */


}
.container {
  display: flex;
  max-width: 2200px; /* Increase the max-width value */
  margin: 50px auto 0; /* Add top margin */
  padding: 40px; /* Increase the padding value */
  /* background-color: #f4f7f9; */
  height: 100vh; /* Set the height to 100% of the viewport height */


}

.left-section {
  flex: 1; /* Take up all available space */
  margin-right: 40px; /* Add larger right margin for separation */
}

.right-section {
  flex: 1; /* Take up all available space */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 40px; /* Add larger left margin for separation */
}

.RandomRecipes {
  margin-bottom: 20px; /* Increase the margin value */
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blur {
  filter: blur(2px);
}

/* Customize router-link button */
.router-link-exact-active {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
}

.router-link-exact-active:hover {
  background-color: #2b85c7;
}

.router-link-exact-active:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

.router-link-exact-active:active {
  background-color: #3498db;
  box-shadow: none;
}
</style>