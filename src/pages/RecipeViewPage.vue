<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <br>
        <br>
        <br>
        <span v-if="$root.store.username">
          <span v-if="!favorite">
            <b-button @click="addToFavorite" variant="outline-dark">
              <b-icon-star></b-icon-star>
            </b-button>
          </span>
          <span v-else>
            <b-button
              @click="addToFavorite"
              variant="outline-success"
              :disabled="true"
            >
              <b-icon-star></b-icon-star>
            </b-button>
          </span>
        </span>
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
              <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
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
    </div>
  </div>
</template>

<script>
import { BIconStar } from 'bootstrap-vue'

export default {
  components: {
    BIconStar
  },
  data() {
    return {
      recipe: null,
      favorite: false
    };
  },
  async created() {
    try {
      let response;
      if (this.$route.params.title === "My Recipes") {
        response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/myFullDetailes?recipeid=" + this.$route.params.recipeId,
          { withCredentials: true }
        );
      } else if(this.$route.params.title === "My Family Recipes"){
        response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/myFamilyFullDetailes?recipeid=" + this.$route.params.recipeId,
          { withCredentials: true }
        );
        console.log(response.data);

      }
      
      else {
        this.axios.defaults.withCredentials = true;
        response = await this.axios.get(
          "http://localhost:3000/recipes/" + this.$route.params.recipeId,
          {
            params: { id: this.$route.params.recipeId }
          }
        );
        this.axios.defaults.withCredentials = false;
      }
      
      if (response.status !== 200) {
        this.$router.replace("/NotFound");
        return;
      }

      let _recipe;

      if (this.$route.params.title === "My Recipes") {
        console.log("in my rec")
        let {
          title,
          image,
          readyInMinutes,
          vegan,
          vegetarian,
          GFree,
          extendedIngredients,
          instructions,
          numOfDish,
          aggregateLikes
        } = response.data;

        let _instructions = instructions;

        _recipe = {
          title,
          image,
          readyInMinutes,
          vegan,
          vegetarian,
          GFree,
          extendedIngredients,
          _instructions,
          numOfDish,
          aggregateLikes
        };
      } else if (this.$route.params.title === "My Family Recipes") {
        console.log("in my fem")

        let {
          title,
          image,
          Author,
          extendedIngredients,
          instructions,
          Preparation_Time
        } = response.data;

        let _instructions = instructions;

        _recipe = {
          title,
          image,
          Author,
          extendedIngredients,
          _instructions,
          Preparation_Time
        };
      } else {
        console.log("in general")

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
          glutenFree
        } = response.data;

        let _instructions = analyzedInstructions
          .map((fstep) => {
            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
            return fstep.steps;
          })
          .reduce((a, b) => [...a, ...b], []);

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

        this.checkIfFavorite();
      }

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addToFavorite() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipeId: this.$route.params.recipeId,
          }
        );
        this.axios.defaults.withCredentials = false;
        console.log(response.data);
        this.favorite = true;
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    async checkIfFavorite() {
      const recipe = { recipeId: this.$route.params.recipeId };
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favorites",
          { withCredentials: true }
        );

        if (response != undefined) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === recipe.recipeId) {
              this.favorite = true;
              break;
            } else {
              continue;
            }
          }
        }
        if (response == undefined) {
          this.favorite = false;
        }

        console.log(response);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
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
</style>
