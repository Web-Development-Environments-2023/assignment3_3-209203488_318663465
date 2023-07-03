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

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
