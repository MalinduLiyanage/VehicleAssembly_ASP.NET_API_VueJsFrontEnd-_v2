<script>
export default {
  name: "VehicleCard",
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <h3>Model : {{ vehicle.model }}</h3>
    <p><strong>ID:</strong> {{ vehicle.vehicle_id  }}</p>
    <p><strong>Color:</strong> {{ vehicle.color  }}</p>
    <p><strong>Year:</strong> {{ vehicle.engine }}</p>

  </div>
</template>

<style scoped>
.card {
  max-width: 100vw;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>