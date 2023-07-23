<template>
    <div class="container">
  
      <MyRecipes
        title="My Recipes"
        class="RandomRecipes center"
      />
    </div>
  </template>
  
  <script>
  import MyRecipes from "../components/MyRecipes.vue";
  export default {
    components: {
        MyRecipes,
    },
  };
  </script>
  
<style scoped>
.container {
  max-width: 2200px;
  margin: 50px auto; /* Adjust the margin value */
  padding: 40px;
  background-image: url('../assets/r1.jpg');
  height: 100vh; /* Set the height to 100% of the viewport height */
  background-size: cover; /* Make the background image cover the entire container */
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