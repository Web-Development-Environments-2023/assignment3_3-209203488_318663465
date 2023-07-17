<template>
  <div class="container">
    <div class="search-query-box">
      <h1 class="title">Search Page</h1>

      <div class="search-query">
        <b-input-group prepend="Search Query:" id="search-input">
          <b-form-input v-model="searchQuery"></b-form-input>
          <b-input-group-append>
            <b-button type="submit" @click="Search" variant="success">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>

      <div class="search-filters">
        <div>
          <span>Amount</span>
          <b-form-select v-model="searchAmount" :options="searchAmountOptions"></b-form-select>
        </div>
        <div>
          <span>Cuisine</span>
          <b-form-select v-model="searchCuisine" :options="searchCuisineOptions"></b-form-select>
        </div>
        <div>
          <span>Diet</span>
          <b-form-select v-model="searchDiet" :options="searchDietOptions"></b-form-select>
        </div>
        <div>
          <span>Intolerances</span>
          <b-form-select v-model="searchIntolerances" :options="searchIntolerancesOptions"></b-form-select>
        </div>
      </div>
    </div>

    <div class="search-results-box">
      <h2 v-if="!searchResult.length" class="description-text">
        <span v-if="!searched">Please search for recipes to show results</span>
        <span v-if="searched">No results were found</span>
      </h2>

      <div v-if="searchResult.length">
        <h2 class="result-title">Search Results</h2>
        <div class="search-result">
          <div class="search-result-item" v-for="r in searchResult" :key="r.id">
            <RecipePreview class="recipePreview" :recipe="r"/>
          </div>
        </div>
      </div>

      <!-- Loading indicator -->
      <div v-if="loading" class="loading-indicator">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview.vue";

export default {
  components: {
    RecipePreview
  },
  name: "search",
  data() {
    return {
        searched: false,
        searchAmountOptions: [
          {value: 5, text: "5"},
          {value: 10, text: "10"},
          {value: 15, text: "15"},
        ],
        searchCuisineOptions: [
          {value: "", text: "Any"},
          {value: "African", text: "African"},
          {value: "American", text: "American"},
          {value: "British", text: "British"},
          {value: "Cajun", text: "Cajun"},
          {value: "Caribbean", text: "Caribbean"},
          {value: "Chinese", text: "Chinese"},
          {value: "Eastern European", text: "Eastern European"},
          {value: "European", text: "European"},
          {value: "French", text: "French"},
          {value: "German", text: "German"},
          {value: "Greek", text: "Greek"},
          {value: "Indian", text: "Indian"},
          {value: "Irish", text: "Irish"},
          {value: "Italian", text: "Italian"},
          {value: "Japanese", text: "Japanese"},
          {value: "Jewish", text: "Jewish"},
          {value: "Korean", text: "Korean"},
          {value: "Latin American", text: "Latin American"},
          {value: "Mediterranean", text: "Mediterranean"},
          {value: "Mexican", text: "Mexican"},
          {value: "Middle Eastern", text: "Middle Eastern"},
          {value: "Nordic", text: "Nordic"},
          {value: "Southern", text: "Southern"},
          {value: "Spanish", text: "Spanish"},
          {value: "Thai", text: "Thai"},
          {value: "Vietnamese", text: "Vietnamese"},
        ],
        searchDietOptions: [
          {value: "", text: "Any"},
          {value: "Gluten Free", text: "Gluten Free"},
          {value: "Ketogenic", text: "Ketogenic"},
          {value: "Vegetarian", text: "Vegetarian"},
          {value: "Lacto-Vegetarian", text: "Lacto-Vegetarian"},
          {value: "Ovo-Vegetarian", text: "Ovo-Vegetarian"},
          {value: "Vegan", text: "Vegan"},
          {value: "Pescetarian", text: "Pescetarian"},
          {value: "Paleo", text: "Paleo"},
          {value: "Primal", text: "Primal"},
          {value: "Low FODMAP", text: "Low FODMAP"},
          {value: "Whole30", text: "Whole30"},
        ],
        searchIntolerancesOptions: [
          {value: "", text: "Any"},
          {value: "Dairy", text: "Dairy"},
          {value: "Egg", text: "Egg"},
          {value: "Gluten", text: "Gluten"},
          {value: "Grain", text: "Grain"},
          {value: "Peanut", text: "Peanut"},
          {value: "Seafood", text: "Seafood"},
          {value: "Sesame", text: "Sesame"},
          {value: "Shellfish", text: "Shellfish"},
          {value: "Soy", text: "Soy"},
          {value: "Sulfite", text: "Sulfite"},
          {value: "Tree Nut", text: "Tree Nut"},
          {value: "Wheat", text: "Wheat"},
        ],
        localFild: {value: 'id', text: 'choose'},

        dropdown_offset: "dropdown-offset",
        //end trying
        searchAmount: 5,
        searchQuery: "",
        searchCuisine: "",
        searchDiet: "",
        searchIntolerances: "",
        recipe: [],
        recipeList_details: [],
        recipe_details: [],
        recipe_details_fixed: [],// the fixed name of recipe query
        searchResult: []
      };
    },
  methods: {
    async Search() {
      try {
        this.loading = true; // Set loading to true

        const response = await this.axios.post("http://localhost:3000/recipes/search", {
          query: this.searchQuery,
          cuisine: this.searchCuisine,
          diet: this.searchDiet,
          intolerances: this.searchIntolerances,
          number: this.searchAmount
        });
        this.searchResult = response.data;
        this.searched = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false; // Set loading back to false
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 2200px;
  margin: 50px auto; /* Adjust the margin value */
  padding: 40px;
  background-color: #ecf5f9; /* Light blue background */
}

.search-query-box {
  margin-bottom: 40px;
}

.search-results-box {
  margin-top: 40px;
}

.title {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
}

.search-query {
  margin-bottom: 20px;
}

.search-filters {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.search-filters > div {
  margin-right: 20px;
  margin-bottom: 10px;
}

.search-filters span {
  font-weight: bold;
  margin-right: 5px;
}

#search-input {
  margin-bottom: 20px;
}

.description-text {
  color: #888888;
  text-align: center;
  margin-top: 40px;
}

.search-result {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.result-title {
  color: #3498db;
  font-size: 20px;
  margin-bottom: 20px;
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

.spinner {
  border: 4px solid #f3f3f3; /* Light gray spinner border */
  border-top: 4px solid #3498db; /* Blue spinner border */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
