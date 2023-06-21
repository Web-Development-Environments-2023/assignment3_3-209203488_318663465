<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;
      console.log(this.$route.params.title);

      try {
        if (this.$route.params.title == "My Recipes") {
          response = await this.axios.get(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain +
              "/recipes/myFullDetailes?recipeid=" +
              this.$route.params.recipeId,
            { withCredentials: true }
          );
        } else {
          this.axios.defaults.withCredentials = true ;

response = await this.axios.get(
  // "https://test-for-3-2.herokuapp.com/recipes/info",
  "http://localhost:3000/recipes/" +this.$route.params.recipeId,
  // this.$root.store.server_domain + "/recipes/info",

  {
    params: { id: this.$route.params.recipeId }
  }
);
this.axios.defaults.withCredentials = false;

}

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let _recipe;

      if (this.$route.params.title == "My Recipes") {
        console.log(response.data);

        let {
            title,
            imagedata,
            readyInMinutes,
            vegan,
            vegetarian,
            GFree,
            extendedIngredients,
            instructions,
            numOfDish
          } = response.data;

        let _instructions = instructions;

        _recipe = {
          title,
        imagedata,
        readyInMinutes,
        vegan,
        vegetarian,
        GFree,
        extendedIngredients,
        _instructions,
        numOfDish
        };

      } else {
        console.log(response.data);

        let {
          analyzedInstructions,
          instructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          servings,
          vegan,
          vegetarian,
          glutenFree,
        } = response.data;

        console.log(analyzedInstructions);

        let _instructions = analyzedInstructions
          .map((fstep) => {
            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
            return fstep.steps;
          })
          .reduce((a, b) => [...a, ...b], []);

        console.log(_instructions);

        _recipe = {
          instructions,
          _instructions,
          analyzedInstructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          servings,
          vegan,
          vegetarian,
          glutenFree,
        };
      }

      this.recipe = _recipe;
      // this.checkIfFavorite();
    } catch (error) {
      console.log(error);
    }
  },};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
