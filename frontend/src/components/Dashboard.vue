<template>
  <div id="Dashboard">
    <v-card class="dash-header-card">
      <v-card-title>
        <h1>Hello, username</h1>
      </v-card-title>
      <v-card-subtitle> Here are your goals: </v-card-subtitle>
    </v-card>

    <GoalCard />
  </div>
</template>

<script>
import GoalCard from "./DashComponents/GoalCard.vue";

export default {
  name: "Dashboard",
  components: {
    GoalCard,
  },

  data: () => ({}),
};
</script>

<style scoped>
.dash-header-card {
  width: 75%;
  margin: 7% auto;
}
</style>
