<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :title="title" :isMyRecipes="isMyRecipes" :isMyFamilyRecipes="isMyFamilyRecipes" />
 />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isMyRecipes: {
      type: Boolean,
      default: false
    },
    isMyFamilyRecipes: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    async update(recipes) {
     
        this.recipes = recipes
        // console.log(this.recipes[0]);
      
    },
   
  }
};

</script>

<style scoped>
.title {
  color: #3498db;
  font-size: 18px;
  margin-bottom: 10px;
}

.recipePreview {
  /* border: 1px solid #3498db; */
  padding: 10px;
  margin-bottom: 10px;
}

.recipePreview h4 {
  color: #3498db;
  font-size: 16px;
  margin-bottom: 5px;
}

.recipePreview p {
  color: #555555;
  font-size: 14px;
  margin-bottom: 5px;
}

.recipePreview button {
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.recipePreview button:hover {
  background-color: #2980b9;
}

.recipePreview button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

.recipePreview button:active {
  background-color: #2980b9;
  box-shadow: none;
}

.recipePreview .tags {
  color: #777777;
  font-size: 12px;
}
</style>