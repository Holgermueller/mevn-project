<template>
  <div id="Login">
    <v-card class="login-card">
      <v-card-title>
        <h1>Login:</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              v-model="email"
              label="Email"
              aria-label="email"
              prepend-icon="mdi-email"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              v-model="password"
              label="Password"
              aria-label="password"
              prepend-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
        </v-form>

        <div>
          <span>Don't have an account?</span>
          <span>
            <v-btn elevation="0" to="/register" text> Register</v-btn>
          </span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn elevation="0" @click.prevent="clearForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn elevation="0" @click.prevent="loginUser">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data: () => ({
    email: "",
    password: "",
    error: "",
    showPassword: false,
  }),

  methods: {
    loginUser() {
      console.log(this.email, this.password);
    },

    clearForm() {
      this.$refs.form.reset();
      this.email = "";
      this.password = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 75%;
  margin: 7% auto;
}
</style>
