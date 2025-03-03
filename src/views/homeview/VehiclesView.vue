<script>
import VehicleCard from "@/components/cards/VehicleCard.vue";
import apiClient from "@/services/apiClient";
import BookModal from "@/components/modals/VehicleModal.vue";

export default {
  name: "VehiclesView",
  components: {BookModal, VehicleCard},
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
  <div class="cards-container">
    <VehicleCard
        v-for="vehicle in data"
        :key="vehicle.id"
        :vehicle="vehicle"
    />
  </div>
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