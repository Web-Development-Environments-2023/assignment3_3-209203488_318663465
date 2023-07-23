<template>
    <div>
        <RecipePreviewList title="My Favorite Recipes" ref="recipePreviewList" />
    
    </div>
      </template>
      
      <script>
      import RecipePreviewList from "./RecipePreviewList.vue";
      export default {
        name: "My Fav",
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
                this.axios.defaults.withCredentials = true ;

                // console.log( this.$root.store.username.id)
      
              const response = await this.axios.get(
                // this.$root.store.server_domain + "/",
                "https://liorkob.cs.bgu.ac.il/users/favorites",
                // this.$root.store.server_domain + "/",
      
              );
      
              console.log(response.data);
              const recipes = response.data;
              this.recipes = [];
              this.recipes.push(...recipes);
              this.$refs.recipePreviewList.update(recipes);

              this.axios.defaults.withCredentials = false ;

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
      