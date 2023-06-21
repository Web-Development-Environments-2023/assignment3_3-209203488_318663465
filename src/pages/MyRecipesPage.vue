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