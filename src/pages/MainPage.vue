<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <Random id="randomRecipes" title="Explore this recipes" class="RandomRecipes center"   @reload="this.reloadRecipes()"/>
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    <!-- {{ !$root.store.username }}
    <LastViewd
      title="Last Viewed Recipes"
      :class="{
        //RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
        :reload="this.reloadRecipes()"
      disabled
    >
    </LastViewd> -->
    <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>
  </div>
</template>

<script>
import Random from "../components/Random";
import LastViewd from "../components/LastViewd";
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
    // LastViewd
},
};
</script>

<style scoped>
.container {
  max-width: 2200px; /* Increase the max-width value */
  margin: 50px auto 0; /* Add top margin */
  padding: 40px; /* Increase the padding value */
  background-color: #f4f7f9;
}

.title {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
}

.RandomRecipes {
  margin: 20px 0; /* Increase the margin value */
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  background-color: #3498db;
  padding: 40px; /* Increase the padding value */
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