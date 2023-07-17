<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id, title: title }, }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li v-if="recipe.readyInMinutes !== undefined">{{ recipe.readyInMinutes }} minutes</li>
        <li v-if="recipe.aggregateLikes !== undefined">{{ recipe.aggregateLikes }} likes</li>
      </ul>
    </div>
  </router-link>
</template>
<script>
export default {
  mounted() {
  //   console.log("imaggggggeeeeeeeeeeeeeeeeeee")

  //   this.axios.get(this.recipe.image).then((i) => {
  //     console.log("imaggggggeeeeeeeeeeeeeeeeeee")

  //     console.log(this.recipe.image)
  //     this.image_load = true;
  //   });
  },
  data() {
    return {
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
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
      }
    }
  }
};
</script>
<style scoped>
.recipe-preview {
  text-align: left;
  box-shadow: none;
  border: none;
  transition: box-shadow ease .15s;
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
  background: #f4f7f9; /* Light blue background */
  font-size: 1rem;
  border: 1px solid #eee;
  box-shadow: 1px 1px 6px 0 rgba(0,0,0,.09);
  transition: all .25s ease;
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