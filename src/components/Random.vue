<template>
<div>
    <RecipePreviewList title="Explore this recipes" ref="recipePreviewList" />

</div>
  </template>
  
  <script>
  import RecipePreviewList from "./RecipePreviewList.vue";
  export default {
    name: "Random",
    components: {
      RecipePreviewList
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
        this.updateRecipes();
    // Listen for the `reload` event emitted by the parent component
    this.$parent.$on('reload', this.updateRecipes);
  },
  beforeDestroy() {
    // Clean up the event listener when the component is destroyed
    this.$parent.$off('reload', this.updateRecipes);
  },
    methods: {
        
      async updateRecipes() {
        try {
          this.axios.defaults.withCredentials = true;
  
          const response = await this.axios.get(
            // this.$root.store.server_domain + "/",
            "https://liorkob.cs.bgu.ac.il/rand"
            // this.$root.store.server_domain + "/",
  
          );
          this.axios.defaults.withCredentials = false;
  
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          this.$refs.recipePreviewList.update(recipes);
        } catch (error) {
          console.log(error);
        }
        
      }
    }
  };
  
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }
  </style>
  