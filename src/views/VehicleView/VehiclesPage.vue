<script>
import VehiclesView from "@/views/VehicleView/VehiclesView.vue";

export default {
  name: "VehiclesPage",
  components: {VehiclesView}
}
</script>

<template>
  <v-app>
    <v-main class="pa-10">
      <VehiclesView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>