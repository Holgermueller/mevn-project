<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2 class="font-italic">Goal Tracker</h2>
      <v-spacer></v-spacer>

      <v-btn elevation="0" text>Login</v-btn>
      <h2>|</h2>
      <v-btn elevation="0" text>Register</v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
