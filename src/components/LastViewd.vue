<template>
    <div>
        <RecipePreviewList title="Last Viewed Recipes" ref="recipePreviewList"/>
    
    </div>
      </template>
      
      <script>
      import RecipePreviewList from "./RecipePreviewList.vue";
      export default {
        name: "LastViewd",
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
            this.updateLastSeenRecipes()
        // Listen for the `reload` event emitted by the parent component
        this.$parent.$on('reload', this.updateLastSeenRecipes);
      },
      beforeDestroy() {
        // Clean up the event listener when the component is destroyed
        this.$parent.$off('reload', this.updateLastSeenRecipes);
      },
        methods: {
          async updateLastSeenRecipes() {
            try {
              const response = await this.axios.get(
               
                // this.$root.store.server_domain + "/last",
                "http://localhost:3000/last"

              );
              const recipes = [
                response.data[0],
                response.data[1],
                response.data[2],
              ];
              this.recipes = [];
              for (let i = 0; i < recipes.length; i++) {
                     if (recipes[i] !== undefined && recipes[i].id !== undefined) {
                            this.recipes.push(recipes[i]);
  }
}
              console.log(this.recipes);
              this.$refs.recipePreviewList.update(this.recipes);

           
            } catch (error) {
            }}
        }
      };
      
      </script>
      
      <style lang="scss" scoped>
      .container {
        min-height: 400px;
      }
      </style>
      