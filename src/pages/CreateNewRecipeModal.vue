<template>
  <div class="container">
    <h1 class="title">Create new recipe</h1>
    <b-form ref="form" @submit.prevent="handleOk" @reset.prevent="resetModal">
      <b-form-group label="Recipe's Title: " label-for="title-input">
        <b-form-input
          id="title-input"
          v-model="$v.form.title.$model"
          type="text"
          :state="validateState('title')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.title.required">
          Recipes's title is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.title.alpha">
          Recipce's title can only contain letters
        </b-form-invalid-feedback>
      </b-form-group>

<b-form-group label="Recipe's image URL: " label-for="image-input">
  <b-form-input
    id="image-input"
    v-model="$v.form.image.$model"
    type="url"
    :state="validateState('image')"
  ></b-form-input>
  <b-form-invalid-feedback v-if="!$v.form.image.required">
    Recipe's image URL is required
  </b-form-invalid-feedback>
  <b-form-invalid-feedback v-if="!$v.form.image.url">
    Recipe's image URL should be a valid URL
  </b-form-invalid-feedback>
</b-form-group>

      <b-form-group label="Recipe's Servings: " label-for="servings-input">
        <b-form-input
          id="servings-input"
          v-model="$v.form.servings.$model"
          type="number"
          min="1"
          :state="validateState('servings')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.servings.required">
          Recipe's servings is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.servings.numeric">
          Recipe's servings should be numeric
        </b-form-invalid-feedback>
        <!-- <b-form-invalid-feedback v-if="!$v.form.servings.betweenS">
          Recipe's servings should be 1 serve minimum
        </b-form-invalid-feedback> -->
      </b-form-group>

      <b-form-group label="Recipe's Time: " label-for="readyInMinutes-input">
        <b-form-input
          id="readyInMinutes-input"
          v-model="$v.form.readyInMinutes.$model"
          type="number"
          min="1"
          :state="validateState('readyInMinutes')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.required">
          Recipe's time is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.numeric">
          Recipe's time should be numeric
        </b-form-invalid-feedback>
        <!-- <b-form-invalid-feedback v-if="!$v.form.readyInMinute.betweenRIM">
          Recipe's time should be 1 minute minimum
        </b-form-invalid-feedback> -->
      </b-form-group>

      <b-form-group label="Vegan: " label-for="vegan-input">
        <b-form-checkbox
          switch
          class="mr-n2 mb-n1"
          id="vegan-input"
          v-model="form.vegan"
        >
          <span class="sr-only"></span>
        </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Vegetarian: " label-for="vegetarian-input">
        <b-form-checkbox
          switch
          class="mr-n2 mb-n1"
          id="vegetarian-input"
          v-model="form.vegetarian"
        >
          <span class="sr-only"></span>
        </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Gluten Free: " label-for="gluten_free-input">
        <b-form-checkbox
          switch
          class="mr-n2 mb-n1"
          id="gluten-free-input"
          v-model="form.gluten_free"
        >
          <span class="sr-only"></span>
        </b-form-checkbox>
      </b-form-group>
    </b-form>

    <b-form @submit.stop.prevent="handleOk">
      <label>Ingredients:</label>
      <b-form-group
        v-for="ing in $v.form.ingrediants.$each.$iter"
        :key="ing.key"
      >
        <b-form-input
          :state="validateState('ingrediants')"
          v-model.trim="ing.value.$model"
          type="text"
          required
          placeholder="Ingredient"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!ing.value.required">
          Recipes's ingredient is required
        </b-form-invalid-feedback>
        <!-- <b-form-invalid-feedback v-if="!ing.value.alpha">
          Recipce's ingredient can only contain letters
        </b-form-invalid-feedback> -->
      </b-form-group>

      <b-button-toolbar>
        <b-button-group>
          <b-button
            title="Add Ingrediant"
            variant="outline-primary"
            @click="addIngredient"
          >
            <b-icon icon="plus" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            title="Remove Ingrediant"
            variant="outline-primary"
            @click="removeIngredient"
          >
            <b-icon icon="dash" aria-hidden="true"></b-icon>
          </b-button>
        </b-button-group>
      </b-button-toolbar>
    </b-form>

    <b-form @submit.stop.prevent="handleOk">
      <label>Instructions:</label>
      <b-form-group
        v-for="ins in $v.form.instractions.$each.$iter"
        :key="ins.key"
      >
        <b-form-input
          :state="validateState('instractions')"
          v-model.trim="ins.value.$model"
          type="text"
          required
          placeholder="Instruction"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!ins.value.required">
          Recipes's instruction is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button-toolbar>
        <b-button-group>
          <b-button
            title="Add Instruction"
            variant="outline-primary"
            @click="addInstruction"
          >
            <b-icon icon="plus" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            title="Remove Instruction"
            variant="outline-primary"
            @click="removeInstruction"
          >
            <b-icon icon="dash" aria-hidden="true"></b-icon>
          </b-button>
        </b-button-group>
      </b-button-toolbar>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        @click="handleOk()"
        >create</b-button
      >
    </b-form>
</div>

</template>

<script>
import { BModal } from "bootstrap-vue";
import {
  required,
  alpha,
  numeric,
  url,
  // between,
} from "vuelidate/lib/validators";

export default {
  name: "newR",
  data() {
    return {
      form: {
        title: undefined,
        image: undefined,
        servings: undefined,
        readyInMinutes: undefined,
        vegan: false,
        vegetarian: false,
        gluten_free: false,
        ingrediants: [{ key: 1, value: undefined }],
        instractions: [{ key: 1, value: undefined }],
        popularity: 0,
        submitError: undefined,
      },
      ingrediantsCounter: 1,
      instructionsCounter: 1,
    };
  },

  comments: {
    BModal,
  },

  validations: {
    form: {
      title: {
        required,
        alpha,
      },
      image: {
        required,
        url,
      },
      servings: {
        required,
        numeric,
        // betweenS: between(1, 1000)
      },
      readyInMinutes: {
        required,
        numeric,
        // betweenRIM: between(1, 1400)
      },
      ingrediants: {
        $each: {
          value: {
            required,
            // alpha,
          },
        },
      },
      instractions: {
        $each: {
          value: {
            required,
            // alpha,
          },
        },
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },

    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity();
    //   this.nameState = valid;
    //   return valid;
    // },

    resetModal() {
      this.form = {
        title: undefined,
        image: undefined,
        servings: undefined,
        readyInMinutes: undefined,
        vegan: false,
        vegetarian: false,
        gluten_free: false,
        ingrediants: [{ key: 1, value: undefined }],
        instractions: [{ key: 1, value: undefined }],
        popularity: 0,
        submitError: undefined,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },



    handleOk() {

      // Trigger submit handler
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.createNewRecipe();
    },

    async createNewRecipe() {
      try {

        const ingrediants = [];
        for (let i = 0; i < this.ingrediantsCounter; i++) {
          ingrediants.push({
            ingredients_id: (i + 1).toString(),
            ingredients_name: this.form.ingrediants[i].value
          });
              }

          // Resulting JSON format

  const ingrediantsJson = JSON.stringify(ingrediants)
  // .replace(/"/g, '\\"')  // Escape double quotes
  // .replace(/'/g, '\\"'); // Escape single quotes (optional)

// const ingrediantsJson = `"[${json}]"`;




          const instractions = [];

for (let i = 0; i < this.instructionsCounter; i++) {
  instractions.push({
    instruction_id: (i + 1).toString(),
    instruction_data: this.form.instractions[i].value
  });
}
// Resulting JSON format
const instractionsJson = JSON.stringify(instractions)
  // .replace(/"/g, '\\"')  // Escape double quotes
  // .replace(/'/g, '\\"'); // Escape single quotes (optional)

// const instractionsJson = `"[${json2}]"`;

let _vegan = 0;

if(this.form.vegan==true){
  
  _vegan = 1;
}
console.log(_vegan)

let _vegetarian = 0;
if(this.form.vegetarian==true){
  _vegetarian = 1;
}

console.log(_vegetarian)

let _gluten_free = 0;
if(this.form.gluten_free==true){
  _gluten_free = 1;
}
console.log(_gluten_free)
console.log(this.form.servings)
console.log(this.form.readyInMinutes)
console.log(this.form.popularity)



        // this.form.ingrediants = _ingredients;
        // this.form.instractions = _instructions;
        this.axios.defaults.withCredentials = true ;

        const response = await this.axios.post(
        "http://localhost:3000/recipes/new",
          {
            title: this.form.title,
            image: this.form.image,
            readyInMinutes: this.form.readyInMinutes,
            aggregateLikes: this.form.popularity,
            vagan: _vegan,
            vegetarian: _vegetarian,
            glutenFree: _gluten_free,
            extendedIngredients: ingrediantsJson,
            instructions: instractionsJson,
            servings: this.form.servings,
          },
        );
        this.axios.defaults.withCredentials = false ;


        if (response.status == 200) {
          this.$root.toast(
            "Created New Recipe",
            "New recipe added successfully",
            "success"
          );
          this.resetModal();
        }
        
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    addIngredient() {
      this.ingrediantsCounter += 1;

      this.form.ingrediants.push({
        key: this.ingrediantsCounter,
        value: undefined,
      });
    },

    addInstruction() {
      this.instructionsCounter += 1;

      this.form.instractions.push({
        key: this.instructionsCounter,
        value: undefined,
      });
    },

    removeIngredient() {
      if (this.ingrediantsCounter > 1) {
        this.ingrediantsCounter -= 1;
        this.form.ingrediants.pop();
      }
    },

    removeInstruction() {
      if (this.instructionsCounter > 1) {
        this.instructionsCounter -= 1;
        this.form.instractions.pop();
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f7f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.b-form-group {
  margin-bottom: 20px;
}

.b-form-label {
  font-weight: bold;
  color: #333;
}

.b-form-input {
  border-color: #ddd;
  border-radius: 4px;
  padding: 10px;
}

.b-form-invalid-feedback {
  color: #dc3545;
}

.b-form-checkbox .form-check-label {
  color: #333;
}

.b-button-toolbar {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.b-button-group {
  display: flex;
}

.b-button-group .btn {
  padding: 5px 10px;
}

.b-button-toolbar .btn {
  font-size: 14px;
}

.b-button-group .btn svg {
  width: 20px;
  height: 20px;
}

.b-button-toolbar .btn:not(:last-child) {
  margin-right: 5px;
}

.b-button-toolbar .btn:last-child {
  margin-left: 5px;
}

.b-button-toolbar .btn-title {
  margin-left: 5px;
}

.b-button-toolbar .btn svg {
  fill: #007bff;
}

.b-button-toolbar .btn[disabled] svg {
  fill: #ccc;
}

.b-button-toolbar .btn[disabled] .btn-title {
  color: #ccc;
}
.b-form-checkbox .custom-control-label::before {
  width: 18px;
  height: 18px;
}

.b-form-checkbox .custom-control-label::after {
  width: 10px;
  height: 10px;
  top: 4px;
  left: 4px;
}
</style>