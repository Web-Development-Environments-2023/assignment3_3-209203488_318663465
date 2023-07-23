<template>
  <div class="container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username should contain characters only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
      Password is required
    </b-form-invalid-feedback>
    <b-form-text v-else-if="$v.form.password.$error">
      Your password should be <strong>strong</strong>. <br />
      For that, your password should be at least 5 characters long and contain at least 1 number and 1 special character.
    </b-form-text>
    <b-form-invalid-feedback v-else-if="!$v.form.password.length">
      Password length should be between 5-10 characters long
    </b-form-invalid-feedback>
    <b-form-invalid-feedback v-else-if="!$v.form.password.alphaNumSpecial">
      Password should contain at least 1 number and 1 special character
    </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
          Password confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >
          The confirmed password is not equal to the original password
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
  id="input-group-email"
  label-cols-sm="3"
  label="Email:"
  label-for="email"
>
  <b-form-input
    id="email"
    type="email"
    v-model="$v.form.email.$model"
    :state="validateState('email')"
  ></b-form-input>
  <b-form-invalid-feedback v-if="!$v.form.email.required">
    Email is required
  </b-form-invalid-feedback>
  <b-form-invalid-feedback v-else-if="!$v.form.email.email">
    Invalid email format
  </b-form-invalid-feedback>
</b-form-group>

<b-form-group
  id="input-group-firstname"
  label-cols-sm="3"
  label="First Name:"
  label-for="firstname"
>
  <b-form-input
    id="firstname"
    type="text"
    v-model="$v.form.firstname.$model"
    :state="validateState('firstname')"
  ></b-form-input>
  <b-form-invalid-feedback v-if="!$v.form.firstname.required">
    First name is required
  </b-form-invalid-feedback>
</b-form-group>

<b-form-group
  id="input-group-lastname"
  label-cols-sm="3"
  label="Last Name:"
  label-for="lastname"
>
  <b-form-input
    id="lastname"
    type="text"
    v-model="$v.form.lastname.$model"
    :state="validateState('lastname')"
  ></b-form-input>
  <b-form-invalid-feedback v-if="!$v.form.lastname.required">
    Last name is required
  </b-form-invalid-feedback>
</b-form-group>


      <b-button type="reset" variant="danger" @click="onReset()">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Register</b-button
      >
      <div class="mt-2">
        You have an account already?
        <router-link to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";
const alphaNumSpecial = value => /^[A-Za-z\d\W]*\d[A-Za-z\d\W]*\W[A-Za-z\d\W]*$/.test(value);

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        alphaNumSpecial 
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email: {
    required,
    email
  },
  firstname: {
    required,
    alpha,
    
  },
  lastname: {
    required,
    alpha,
  }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        this.axios.defaults.withCredentials = true ;

        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          "https://liorkob.cs.bgu.ac.il/Register",

          {
            username: this.form.username,
            password: this.form.password,
            firstname:  this.form.firstname,
            lastname:  this.form.lastname,
            country: this.form.country,
            email: this.form.email
          }
        );
        this.axios.defaults.withCredentials = false ;

        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 880px;
  margin: 50px auto; /* Adjust the margin value */
  padding: 40px;
  background-color: #f4f7f9; /* Light blue background */
}

.title {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
}

.register-button {
  width: 100%;
  padding: 12px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #2980b9;
}

.mt-2 {
  margin-top: 10px;
}

a {
  color: #3498db;
}
</style>
