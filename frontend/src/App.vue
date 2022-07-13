<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2 class="font-italic">Goal Tracker</h2>
      <v-spacer></v-spacer>

      <v-btn elevation="0" to="/" text>Login</v-btn>
      <h2>|</h2>
      <v-btn elevation="0" to="/register" text>Register</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
