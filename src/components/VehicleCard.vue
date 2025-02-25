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
    <h3 class="card-model">{{ vehicle.model }}</h3>
    <p class="card-color"><strong>Color:</strong> {{ vehicle.color  }}</p>
    <p class="card-engine"><strong>Year:</strong> {{ vehicle.engine }}</p>

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
  display: flex;
  flex-direction: row;
  align-items: center;
}


.card-model {
  font-size: 1.5em;
  font-weight: bold;
}

.card-color, .card-engine {
  font-size: 1.1em;
  margin-left: 5px;
}

.card-author strong, .card-year strong {
  font-weight: bold;
}

</style>