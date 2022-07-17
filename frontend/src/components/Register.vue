<template>
  <div id="Register">
    <v-card class="register-card">
      <v-card-title>
        <h1>Register here:</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              v-model="username"
              label="Username"
              aria-label="username"
              prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-flex>

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

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              v-model="confirmPassword"
              label="Confirm password"
              aria-label="confirmPassword"
              prepend-icon="mdi-lock"
              :type="showConfirmPassword ? 'text' : 'password'"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showConfirmPassword = !showConfirmPassword"
            ></v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn elevation="0">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn elevation="0">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",

  data: () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    error: "",
  }),

  methods: {
    registerUser() {},

    clearForm() {
      this.$refs.form.reset();
      this.email = "";
      this.password = "";
      this.error = "";
      this.username = "";
      this.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.register-card {
  width: 75%;
  margin: 7% auto;
}
</style>
