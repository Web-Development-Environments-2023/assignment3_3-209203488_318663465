<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="recipe-image" />
        <div class="favorite-section" v-if="$root.store.username && !isMyRecipes && !isMyFamilyRecipes">
          <b-button @click="addToFavorite" variant="outline-dark" :disabled="favorite">
            <b-icon-star></b-icon-star>
            <span class="feedback-text" :class="{ 'enabled': !favorite, 'disabled': favorite }">
              {{ favorite ? 'Added to Favorites' : 'Add to Favorites' }}
            </span>
          </b-button>
        </div>
      </div>
      <div class="recipe-body">
        <div class="recipe-details">
          <div class="detail-row">
            <div class="detail-label">Ready in:</div>
            <div class="detail-value">{{ recipe.readyInMinutes }} minutes</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Likes:</div>
            <div class="detail-value">{{ recipe.aggregateLikes }} likes</div>
          </div>
        </div>
        <div class="section-heading">Ingredients:</div>
        <ul class="ingredient-list">
          <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
            {{ r.original }}
          </li>
        </ul>
        <div class="section-heading">Instructions:</div>
        <ol class="instruction-list">
          <li v-for="s in recipe._instructions" :key="s.number">
            {{ s.step }}
          </li>
        </ol>
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
      favorite: false,
      isMyRecipes: false,
      isMyFamilyRecipes: false
    };
  },
  async created() {


    try {
      let response;
      if (this.$route.params.title === "My Recipes") {
        this.isMyRecipes = true;
        console.log(this.$route.params.recipeId);
        this.axios.defaults.withCredentials = true;

        response = await this.axios.get("https://liorkob.cs.bgu.ac.il/recipes/myFullDetailes?recipeid=" + this.$route.params.recipeId,

        );        this.axios.defaults.withCredentials = false;

      } else if(this.$route.params.title === "My Family Recipes"){
        this.isMyFamilyRecipes = true;
        response = await this.axios.get(
          "https://liorkob.cs.bgu.ac.il/recipes/myFamilyFullDetailes?recipeid=" + this.$route.params.recipeId,
          { withCredentials: true }
        );
        console.log(response.data);

      }
      
      else {
        this.axios.defaults.withCredentials = true;
        response = await this.axios.get(
          "https://liorkob.cs.bgu.ac.il/recipes/" + this.$route.params.recipeId,
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

      if (this.isMyRecipes) {
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
      } else if (this.isMyFamilyRecipes) {
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
    // checkLoggedIn() {
    //   if ($root.store.username.id="loggedInUser"){
    //       return true;}
    //   else{
    //     return false
    //   }
    // },

    async addToFavorite() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          "https://liorkob.cs.bgu.ac.il/users/favorites",
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
          "https://liorkob.cs.bgu.ac.il/users/favorites",
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
.container {
  /* Your existing styles for .container */

  /* Add background image here with the correct relative path */
  background-image: url('../assets/r1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%; /* Add this line to set the container height to 100% */
  
}

.recipe-header {
  text-align: center;
  margin-bottom: 20px;
}

.recipe-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.recipe-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.favorite-section {
  margin-top: 10px;
  text-align: center;
}

.feedback-text {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #888;
}

.enabled {
  color: green;
}

.disabled {
  color: red;
}

.recipe-body {
  margin-top: 30px;
}

.recipe-details {
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  margin-bottom: 10px;
}

.detail-label {
  flex: 0 0 120px;
  font-weight: bold;
  color: #333;
}

.detail-value {
  flex: 1;
  color: #555;
}

.section-heading {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.ingredient-list,
.instruction-list {
  padding-left: 20px;
  margin-bottom: 20px;
}

.ingredient-item {
  color: #555;
}

.instruction-list li {
  margin-bottom: 10px;
}

.instruction-step {
  color: #555;
}

</style>