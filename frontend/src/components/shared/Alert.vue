<template>
  <div id="alert">
    <v-alert type="error" dark dismissable tile @input="onClose">
      {{ text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["text"],
  data() {
    return {
      alert: true,
    };
  },
  methods: {
    onclose() {
      this.emit("dismissed");
    },
  },
};
</script>
