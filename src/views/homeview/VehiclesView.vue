<script>

import apiClient from "@/services/apiClient";
import BookModal from "@/components/modals/VehicleModal.vue";

export default {
  name: "VehiclesView",
  components: {BookModal},
  data() {
    return {
      showVehicleModal: false,
      data: [],
    }
  },
  methods: {
    fetchVehicles() {
      apiClient.get('/Vehicle')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.data = response.data.data.vehicles;
            } else {
              this.errorMessage = "Login Failed!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    },
  },
  mounted() {
    this.fetchVehicles();
  },
}
</script>

<template>
  <div class="header-container">
    <h1>Vehicle List</h1>
    <button class="add-button" @click="showVehicleModal = true">Add Vehicle</button>
  </div>
  <v-table density="compact" fixed-header>
    <thead>
    <tr>
      <th class="text-left">
        Vehicle ID
      </th>
      <th class="text-left">
        Model
      </th>
      <th class="text-left">
        Color
      </th>
      <th class="text-left">
        Engine
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="vehicle in data"
        :key="vehicle.id"
        :vehicle="vehicle">
      <td>{{ vehicle.vehicle_id }}</td>
      <td>{{ vehicle.model }}</td>
      <td>{{ vehicle.color }}</td>
      <td>{{ vehicle.engine }}</td>
    </tr>
    </tbody>
  </v-table>
  <BookModal v-if="showVehicleModal" @close="showVehicleModal = false" />
</template>

<style scoped>

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  justify-content: space-between;
}

.add-button {
  background-color: #4ebf04;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.cards-container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>