<template>
  <div class="container">

    <MyFavRecipes
      title="My Favorite Recipes"
      class="RandomRecipes center"
    />
  </div>
</template>

<script>
import MyFavRecipes from "../components/MyFavRecipes.vue";
export default {
  components: {
      MyFavRecipes,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 2200px;
  margin: 50px auto; /* Adjust the margin value */
  padding: 40px;
  background-color: #f4f7f9;
}

.RandomRecipes {
  margin: 10px 0 10px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
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