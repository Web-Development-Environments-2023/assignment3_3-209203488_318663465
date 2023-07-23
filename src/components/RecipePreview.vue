<template>
  <router-link
    :to="{
      name: 'recipe',
      params: { recipeId: recipe.id, title: title },
    }"
    class="recipe-preview"
  >
    <div>
      <b-card :img-src="recipe.image" img-alt="Image" img-top>
        <b-card-header
          :header="recipe.title"
          :border-variant="watchedColor"
          :header-border-variant="watchedColor"
          :header-bg-variant="watchedColor"
        >
        </b-card-header>
        <b-card-body class="recipe-body">
          <div v-if="!isMyFamilyRecipes">
            <b-avatar
              variant="transparent"
              icon="clock"
              size="2em"
            ></b-avatar>
            {{ recipe.readyInMinutes }} minutes 
            <br>
            <b-avatar
              variant="transparent"
              icon="hand-thumbs-up"
              size="2em"
            ></b-avatar>
            {{ recipe.aggregateLikes }} likes

            <b-avatar class="eye-icon" v-if="seen " icon="eye" size="2em"></b-avatar>

          </div>
          <!-- <b-avatar v-if="watched" variant="tra"></b-avatar> -->
        </b-card-body>
        <b-card-body class="recipe-body">
          <b-avatar
            v-if="recipe.vegan"
            variant="tranparent"
            :src="require('@/assets/vegan.png')"
            style="width: 2.5em; height: 3.3em"
          >
          </b-avatar>
          <b-avatar
            v-if="recipe.vegetarian"
            variant="tranparent"
            :src="require('@/assets/vegetarian.png')"
            style="width: 4.5em; height: 3em"
          >
          </b-avatar>
          <b-avatar
            v-if="recipe.glutenFree"
            variant="tranparent"
            :src="require('@/assets/gluten_free.png')"
            style="width: 3.8em; height: 3em"
          >
          </b-avatar>
        </b-card-body>
        <b-card-footer v-if="$root.store.username && !isMyRecipes && !isMyFamilyRecipes" class="recipe-footer">
          <div class="favorite-section">
            <b-button @click="addToFavorite" variant="outline-dark" :disabled="favorite">
              <b-icon-star></b-icon-star>
              <span class="feedback-text" :class="{ 'enabled': !favorite, 'disabled': favorite }"></span>
            </b-button>
          </div>

        </b-card-footer>
      </b-card>
    </div>
  </router-link>
</template>

<script>
export default {
  async created() {
    // Check if the user is logged in before performing favorite and seen checks
    if (this.$root.store.username) {
      try {
        // Check if the recipe is in favorites
        await this.checkIfFavorite();

        // Check if the recipe has been seen
        await this.checkIfSeen();
      } catch (error) {
        console.log(error);
      }
    }
  },

  data() {
    return {
      favorite: false,
      seen: false, // Add a new data property to track the seen state

    };
  },
  props: {
    isMyFamilyRecipes: {
      type: Boolean,
      default: false,
    },
    isMyRecipes: {
      type: Boolean,
      default: false,
    },
    recipe: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      // required: true
    },
    title: {
      type: String,
      // required: true
    },
    readyInMinutes: {
      type: Number,
      // required: true
    },
    image: {
      type: String,
      // required: true
    },
    aggregateLikes: {
      type: Number,
      required: false,
      default() {
        return undefined;
      },
    },
  },
  methods: {
    async addToFavorite() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          "https://liorkob.cs.bgu.ac.il/users/favorites",
          {
            recipeId: this.recipe.id,
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
      const recipe = { recipeId: this.recipe.id };
      try {
        const response = await this.axios.get(
          "https://liorkob.cs.bgu.ac.il/users/favorites",
          { withCredentials: true }
        );

        if (response != undefined) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === recipe.recipeId) {
              this.favorite = true;
              // Set showFavoritesButton to false if it's "My Recipe" or "My Family"
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
    // Method to check if the recipe is seen
    async checkIfSeen() {
      const recipe = { recipeId: this.recipe.id };
      try {
        const response = await this.axios.get(
          "https://liorkob.cs.bgu.ac.il/users/seen",
          {
          params: {
              recipeId: recipe.recipeId, // Include the recipeId in the query parameters
            },
           withCredentials: true }
        );

        if (response != undefined) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === recipe.recipeId) {
              this.seen = true;
              break;
            }
          }
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>
<style scoped>
.eye-icon {
  position: absolute;
  top: 10px; /* Adjust this value to control the vertical position */
  left: 10px; /* Adjust this value to control the horizontal position */
}

.recipe-preview {
  text-align: left;
  box-shadow: none;
  border: none;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  margin-bottom: 0.625rem;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  color: #222;
  background: #fff;
  font-size: 1rem;
  border: 1px solid #eee;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, .09);
  transition: all .25s ease;
  height: 150px;
}

.recipe-preview:hover {
  top: -5px; /* Move the recipe a little to the top-left diagonal */
}

.recipe-preview:hover,
.recipe-preview:hover .recipe-footer {
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, .12); /* Add shadow on hover */
  background: #76a7ec; /* Dark blue background on hover */
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.enabled {
  color: green;
}

.disabled {
  color: red;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  flex-grow: 1;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>